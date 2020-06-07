type Option = {
    itemTitle: string,
    itemIcon: string,
    modal: string,
}

export const options: Option[] = [
    {
        itemTitle: 'Заголовок',
        itemIcon: 'title',
        modal: 'title',
    },
    {
        itemTitle: 'Описание',
        itemIcon: 'dashboard',
        modal: 'description',
    },
    {
        itemTitle: 'Компетенции',
        itemIcon: 'toc',
        modal: 'skills',
    },
    {
        itemTitle: 'Изображение',
        itemIcon: 'image',
        modal: 'image'
    }
];