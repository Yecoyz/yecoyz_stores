Config = {}

Config.Stores = {
    {
        coords = vec3(25.6636, -1345.2216, 29.4970),
        items = {"bread", "weapon_pistol"},
        blip = {
            sprite = 52, 
            scale = 0.8, 
            color = 3,
            name = "ICA"
        }
    },
    {
        coords = vec3(-707.3250, -914.2916, 19.2156),
        items = {"bread"},
        blip = {
            sprite = 52, 
            scale = 0.8, 
            color = 3,
            name = "ICA"
        }
    }
}

Config.Items = {
    {
        label = "Marabou mjölkchoklad",
        name = "weapon_pistol",
        price = 100,
        image = "https://res.cloudinary.com/coopsverige/image/upload/e_sharpen,f_auto,fl_clip,fl_progressive,q_90,c_lpad,g_center,h_440,w_660/v1727173218/cloud/388555.jpg"
    },
    {
        label = "Bread",
        name = "bread",
        price = 250,
        image = "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/16:9/w_4000,h_2250,c_limit/milk-bread.jpg"
    },
}