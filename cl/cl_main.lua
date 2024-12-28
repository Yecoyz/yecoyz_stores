ESX = exports["es_extended"]:getSharedObject()
local toggleStore = false

local function getItems(storeIdx)
    local items = {}
    local storeItems = Config.Stores[storeIdx].items
    
    for i = 1, #storeItems do
        for j = 1, #Config.Items do
          items[i] = Config.Items[i]
          items[i].index = j
        end
    end

    return items
end

RegisterNuiCallback("Eventhandler", function(data, cb)
    if (data.event == "payment") then
        local items = data.data.items 
        local paymethod = data.data.method

        print("Items", json.encode(items), " Paymethod", paymethod)

        HandlePurchase(items, paymethod)
        return cb({ success = true, message = "Payment received" })
    elseif (data.event == "closeui") then
        SendNUIMessage({
            type = "toggleStores",
            show = false
        })
        SetNuiFocus(false, false)
    else
        return cb({ success = false, message = "Internal server error" })
    end
end)

function HandlePurchase(items, paymethod)
    ESX.TriggerServerCallback("yecoyz_stores:HandlePurchase", function(callback) 
        if (callback) then
            SendNUIMessage({
                type = "toggleStores",
                show = false
            }) 
            SetNuiFocus(false, false)
        else
            ESX.ShowNotification("Köpet gick inte igenom.")
        end
    end, items, paymethod)
end

local Sleep = 100

CreateThread(function()
    for k, v in pairs(Config.Stores) do
        local blip = AddBlipForCoord(v.coords.x, v.coords.y, v.coords.z)

        SetBlipSprite(blip, v.blip.sprite)
        SetBlipDisplay(blip, 4)
        SetBlipScale(blip, v.blip.scale)
        SetBlipColour(blip, v.blip.color)
        BeginTextCommandSetBlipName("STRING")
        AddTextComponentString(v.blip.name)
        EndTextCommandSetBlipName(blip)
    end

    while (true) do
        for k, v in pairs(Config.Stores) do
            local ply = PlayerPedId()
            local plypos = GetEntityCoords(ply)
            local dist = #(plypos - v.coords)

            if (dist <= 2.0) then
                Sleep = 0
                DrawMarker(27, v.coords.x, v.coords.y, v.coords.z - 0.95, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 255, 0, 0, 150, false, true, 2, false, nil, nil, false)
                
                if (IsControlJustPressed(1, 38)) then
                    local storeItems = getItems(k)

                    SendNUIMessage({
                        type = "toggleStores",
                        show = true,
                        action = "loadItems",
                        items = storeItems
                    })

                    SetNuiFocus(true, true)
                end
            end
        end
        Wait(Sleep)
    end
end)