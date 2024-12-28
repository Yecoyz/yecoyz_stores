fx_version 'cerulean'
game 'gta5' 

ui_page "nui_source/reload.html" -- DEV ONLY

files {
    "nui_source/*.html" -- DEV ONLY
}

client_script "cl/*.lua"

shared_script "config.lua"

server_script "sv/*.lua"