import "react-cmdk/dist/cmdk.css";
import CommandPalette, {
    filterItems,
    getItemIndex,
    useHandleOpenCommandPalette,
} from "react-cmdk";
import { useState, useEffect } from "react";

export default function Spotlight() {
    const [page, setPage] = useState("root");
    const [open, setOpen] = useState(true);
    const [search, setSearch] = useState("");
    useHandleOpenCommandPalette(setOpen);

    const filteredItems = filterItems(
        [
            {
                heading: "Home",
                id: "home",
                items: [
                    {
                        id: "home",
                        children: "Home",
                        icon: "HomeIcon",
                        href: "#",
                    },
                    {
                        id: "settings",
                        children: "Settings",
                        icon: "CogIcon",
                        href: "#",
                    },
                    {
                        id: "projects",
                        children: "Projects",
                        // icon: "CollectionIcon",
                        closeOnSelect: true,
                        onClick: () => {
                            setPage("projects");
                        },
                    },
                ],
            },
            {
                heading: "Other",
                id: "advanced",
                items: [
                    {
                        id: "developer-settings",
                        children: "Developer settings",
                        // icon: "CodeIcon",
                        href: "#",
                    },
                    {
                        id: "privacy-policy",
                        children: "Privacy policy",
                        // icon: "SupportIcon",
                        href: "#",
                    },
                    {
                        id: "log-out",
                        children: "Log out",
                        // icon: "LogoutIcon",
                        onClick: () => {
                            alert("Logging out...");
                        },
                    },
                ],
            },
        ],
        search
    );

    useEffect(() => {
        console.log(75, search);
    }, [search]);

    useEffect(() => {
        console.log(79, page);
    }, [page]);

    return (
        <CommandPalette
            onChangeSearch={setSearch}
            onChangeOpen={setOpen}
            search={search}
            isOpen={open}
            page={page}
        >
            <CommandPalette.Page id="root">
                {filteredItems.length ? (
                    filteredItems.map((list) => (
                        <CommandPalette.List
                            key={list.id}
                            heading={list.heading}
                        >
                            {list.items.map(({ id, ...rest }) => (
                                <CommandPalette.ListItem
                                    key={id}
                                    index={getItemIndex(filteredItems, id)}
                                    {...rest}
                                />
                            ))}
                        </CommandPalette.List>
                    ))
                ) : (
                    <CommandPalette.FreeSearchAction />
                )}
            </CommandPalette.Page>

            <CommandPalette.Page id="projects">
                {/* <CommandPalette.ListItem key={"id"} index={0}>
          first project
        </CommandPalette.ListItem> */}
            </CommandPalette.Page>
        </CommandPalette>
    );
}
