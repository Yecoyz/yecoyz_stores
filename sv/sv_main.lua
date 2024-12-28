ESX = exports["es_extended"]:getSharedObject()

ESX.RegisterServerCallback("yecoyz_stores:HandlePurchase", function(src, cb, items, paymethod)
    local xPlayer = ESX.GetPlayerFromId(src)
    local totcost = 0
    for i = 1, #items do
        local itemConfig = Config.Items[items[i].id]
        if (itemConfig) then
        local cost = items[i].amount * itemConfig.price
        totcost = cost + totcost 
        end
    end

    local balance = xPlayer.getAccount(paymethod).money

    if (balance >= totcost) then
        xPlayer.removeAccountMoney(paymethod, totcost)
        for i = 1, #items do
            xPlayer.addInventoryItem(items[i].name, items[i].amount)
        end

        cb(true)
    else 
       cb(false)
    end
end)
