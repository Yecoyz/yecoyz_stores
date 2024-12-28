fx_version 'cerulean'
game 'gta5' 

-- ui_page "nui_source/reload.html" -- DEV ONLY
ui_page "nui/dist/index.html"

files {
    -- "nui_source/*.html" -- DEV ONLY
    "nui/dist/*.html",
    "nui/dist/assets/*.css",
    "nui/dist/assets/*.js"
}

client_script "cl/*.lua"

shared_script "config.lua"

server_script "sv/*.lua"