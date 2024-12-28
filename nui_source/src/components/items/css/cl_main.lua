local toggleStore = false

RegisterCommand("store", function()
    toggleStore = not toggleStore
    SetNuiFocus(toggleStore, toggleStore)
end, false)


RegisterNuiCallback("Eventhandler", function(data, cb)
    local price
    local items 
    local paymethod
    if (data.event == "payment") then
        items = data.data.items 
        price = data.data.total 
        paymethod = data.data.method
        print("Price", price, " items", items, " Paymethod", paymethod)

        return cb({ success = true, message = "Payment received" })
    else
        return cb({ success = false, message = "Internal server error" })
    end
end)