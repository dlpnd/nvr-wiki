import toml
from typing import Any

HEADING = [" ", "# ", "## ", "### ", "#### "]
DEFAULT = ">Default: "
LINE_BREAK = "\n"
NEW_LINE = LINE_BREAK * 2
SEPARATOR = "---"
UNDERLINE = SEPARATOR + NEW_LINE

MAIN_HEADER = f"{SEPARATOR}{LINE_BREAK}sidebar_position: 5{LINE_BREAK}{UNDERLINE}"
MAIN_SUB_HEADER = f"{HEADING[1]}Main Settings{NEW_LINE}"
MAIN = "_Main"
MAIN_SAVE_LOCATION = f"./docs/{MAIN[1:]}"

SHADERS = "_Shaders"
SHADERS_SAVE_LOCATION = f"./docs/{SHADERS[1:]}/"


def save_file(filename: str, content: str, mode: str) -> None:
    with open(f"{filename}.md", mode) as file:
        file.write(content)


def get_str(value: Any) -> str | None:
    if isinstance(value, (bool, toml.decoder.CommentValue)):
        return str(value).lower()
    elif isinstance(value, (int, float)):
        return str(value)
    elif isinstance(value, str):
        return f"'{value}'"


with open("dx.md", "r") as file:
    dx_md = file.read()


def write_main_settings(main_config: dict[str, Any]) -> None:
    save_file(MAIN_SAVE_LOCATION, "", "w")
    save_file(MAIN_SAVE_LOCATION, MAIN_HEADER, "a")
    save_file(MAIN_SAVE_LOCATION, MAIN_SUB_HEADER, "a")

    for menu_items, section_config in main_config.items():
        save_file(MAIN_SAVE_LOCATION,
                  f"{HEADING[2]}{menu_items}{NEW_LINE}", "a")
        save_file(MAIN_SAVE_LOCATION, UNDERLINE, "a")

        individual_menu = section_config.items()
        for sub_menu, sub_menu_values in individual_menu:
            if menu_items == "Menu" and sub_menu == "Keys":
                save_file(MAIN_SAVE_LOCATION, f"{dx_md}{NEW_LINE}", "a")
            save_file(MAIN_SAVE_LOCATION,
                      f"{HEADING[3]}{sub_menu}{NEW_LINE}", "a")

            ini_config = sub_menu_values.items()
            for key, value in ini_config:
                save_file(MAIN_SAVE_LOCATION,
                          f"{HEADING[4]}{key}{NEW_LINE}", "a")
                if hasattr(value, "val"):
                    save_file(MAIN_SAVE_LOCATION,
                              f"{value.comment[3:]}{NEW_LINE}", "a")
                    save_file(
                        MAIN_SAVE_LOCATION, f"{DEFAULT}{get_str(value.val)}{NEW_LINE}{UNDERLINE}", "a")
                else:
                    save_file(
                        MAIN_SAVE_LOCATION, f"{DEFAULT}{get_str(value)}{NEW_LINE}{UNDERLINE}", "a")


def write_shader_settings(shader_config: dict[str, Any]) -> None:
    for menu_items, section_config in shader_config.items():
        save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}", "", "w")
        save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}",
                  f"{HEADING[1]}{menu_items}{NEW_LINE}", "a")
        save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}", UNDERLINE, "a")

        individual_menu = section_config.items()
        for sub_menu, sub_menu_values in individual_menu:
            save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}",
                      f"{HEADING[2]}{sub_menu}{NEW_LINE}", "a")

            ini_config = sub_menu_values.items()
            for key, value in ini_config:
                save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}",
                          f"{HEADING[3]}{key}{NEW_LINE}", "a")
                if hasattr(value, "val"):
                    save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}",
                              f"{value.comment[3:]}{NEW_LINE}", "a")
                    save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}",
                              f"{DEFAULT}{get_str(value.val)}{NEW_LINE}{UNDERLINE}", "a")
                else:
                    save_file(f"{SHADERS_SAVE_LOCATION}{menu_items}",
                              f"{DEFAULT}{get_str(value)}{NEW_LINE}{UNDERLINE}", "a")


nvr_config_toml = toml.load(
    "NewVegasReloaded.dll.defaults.toml", decoder=toml.TomlPreserveCommentDecoder())
write_main_settings(nvr_config_toml[MAIN])
write_shader_settings(nvr_config_toml[SHADERS])
