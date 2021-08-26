export  interface Verb {
    id: number;
    infinitive: string;
    pastSimple: string;
    active: boolean;
    checked: boolean;
}


export interface VerbsState {
    cards: Verb[];
    score: number;
}



export const content = [
    {id: 0 , infinitive: "leave", pastSimple: "left" , active: true , checked: false },
    {id: 1 , infinitive: "go", pastSimple: "vent" , active: true , checked: false},
    {id: 2 , infinitive: "take", pastSimple: "took" , active: true , checked: false},
    {id: 3 , infinitive: "see", pastSimple: "saw" , active: true , checked: false},
]

export interface NavItem {
    id: number;
    title: string;
    path : string;
}

export const navigation: NavItem[] = [
    { id: 1, title: "Главная", path : '/' },
    { id: 2, title: "Обо мне", path : '/about' },
    { id: 3, title: "Живопись", path : '/painting' },
    { id: 4, title: "Графика", path : '/graphics' },
    { id: 5, title: "Цифровая живопись", path : '/digital-painting' },
    { id: 6, title: "Контакты", path : '/contacts' },
]
