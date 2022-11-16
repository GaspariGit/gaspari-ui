interface ListItem {
    id?: string | number;
    href?: string;
    label: string;
    children: Array<ListItem>;
}
export default ListItem;
