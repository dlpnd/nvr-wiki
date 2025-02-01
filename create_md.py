import toml, sys

HEADING = [" ", "# ", "## ", "### ", "#### "]
DEFAULT = ">Default: "
LINE_BREAK = "\n"
NEW_LINE = LINE_BREAK * 2
SEPARATOR = "---"
UNDERLINE = SEPARATOR + NEW_LINE

MAIN = "_Main"
MAIN_SAVE_LOCATION = f"./docs/{MAIN[1:]}"

SHADERS = "_Shaders"
SHADERS_SAVE_LOCATION = f"./docs/{SHADERS[1:]}/"


def save_file(filename: str, content: str, mode = "w") -> None:
    with open(f"{filename}.md", mode) as file:
        file.write(content)


def get_str(value: bool | int | float | str | toml.decoder.CommentValue) -> str:
    if isinstance(value, (bool, toml.decoder.CommentValue)):
        return str(value).lower()
    elif isinstance(value, (int, float)):
        return str(value)
    elif isinstance(value, str):
        return f"'{value}'"

def write_main_settings(main_config: dict[dict[str, dict[str, str]], dict[str, dict[str, toml.decoder.CommentValue]]]) -> None:
    with open("dx.md", "r") as file:
        dx_md = file.read()

    main_settings_text = ""
    main_settings_text += f"{SEPARATOR}{LINE_BREAK}sidebar_position: 5{LINE_BREAK}{UNDERLINE}"
    main_settings_text += f"{HEADING[1]}Main Settings{NEW_LINE}"

    for menu_items, section_config in main_config.items():
        main_settings_text += f"{HEADING[2]}{menu_items}{NEW_LINE}"
        main_settings_text += UNDERLINE

        individual_menu = section_config.items()
        for sub_menu, sub_menu_values in individual_menu:
            if menu_items == "Menu" and sub_menu == "Keys":
                main_settings_text += f"{dx_md}{NEW_LINE}"
            main_settings_text += f"{HEADING[3]}{sub_menu}{NEW_LINE}"

            ini_config = sub_menu_values.items()
            for key, value in ini_config:
                main_settings_text += f"{HEADING[4]}{key}{NEW_LINE}"
                if isinstance(value, toml.decoder.CommentValue):
                    main_settings_text += f"{value.comment[3:]}{NEW_LINE}"
                    main_settings_text += f"{DEFAULT}{get_str(value.val)}{NEW_LINE}{UNDERLINE}"
                else:
                    main_settings_text += f"{DEFAULT}{get_str(value)}{NEW_LINE}{UNDERLINE}"

    save_file(MAIN_SAVE_LOCATION, main_settings_text[:-1])

def write_shader_settings(shader_config: dict[dict[str, dict[str, str]], dict[str, dict[str, toml.decoder.CommentValue]]]) -> None:
    for menu_items, section_config in shader_config.items():

        shader_text = ""
        shader_text += f"{HEADING[1]}{menu_items}{NEW_LINE}"
        shader_text += UNDERLINE

        individual_menu = section_config.items()
        for sub_menu, sub_menu_values in individual_menu:
            shader_text += f"{HEADING[2]}{sub_menu}{NEW_LINE}"

            ini_config = sub_menu_values.items()
            for key, value in ini_config:
                shader_text += f"{HEADING[3]}{key}{NEW_LINE}"
                if isinstance(value, toml.decoder.CommentValue):
                    shader_text += f"{value.comment[3:]}{NEW_LINE}"
                    shader_text += f"{DEFAULT}{get_str(value.val)}{NEW_LINE}{UNDERLINE}"
                else:
                    shader_text += f"{DEFAULT}{get_str(value)}{NEW_LINE}{UNDERLINE}"
            
        save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}", shader_text[:-1])

def main() -> int:
    nvr_config_toml = toml.load("NewVegasReloaded.dll.defaults.toml", decoder=toml.TomlPreserveCommentDecoder())
    write_main_settings(nvr_config_toml[MAIN])
    write_shader_settings(nvr_config_toml[SHADERS])
    return 0

if __name__ == '__main__':
    sys.exit(main())
