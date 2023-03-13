
export type helpToolType = {
    label: string,
    used: boolean
}

export const helpTools: helpToolType[] = [
    { label: "50:50", used: false, },
    { label: "Call", used: false, },
    { label: "Audience", used: false, },
]

export type optionType = {
    order: 1 | 2 | 3 | 4,
    text: string,
    isCorrect: boolean
}

export type questionType = {
    id: string,
    question: string,
    options: optionType[],
    difficulty: "easy" | "medium" | "hard",
}

export const questionsPool: questionType[] = [
    {
        id: "1",
        question: "When was Zain Sudan founded?",
        options: [
            { order: 1, text: "1995", isCorrect: false },
            { order: 2, text: "1998", isCorrect: false },
            { order: 3, text: "2005", isCorrect: true },
            { order: 4, text: "2010", isCorrect: false },
        ],
        difficulty: "medium",
    },
    {
        id: "2",
        question: "What is the parent company of Zain Sudan?",
        options: [
            { order: 1, text: "Vodafone", isCorrect: false },
            { order: 2, text: "Etisalat", isCorrect: false },
            { order: 3, text: "Orange", isCorrect: false },
            { order: 4, text: "Zain Group", isCorrect: true },
        ],
        difficulty: "easy",
    },
    {
        id: "3",
        question: "How many subscribers does Zain Sudan have as of 2021?",
        options: [
            { order: 1, text: "4 million", isCorrect: false },
            { order: 2, text: "8 million", isCorrect: false },
            { order: 3, text: "12 million", isCorrect: false },
            { order: 4, text: "16 million", isCorrect: true },
        ],
        difficulty: "hard",
    },
    {
        id: "4",
        question: "What is the national currency of Sudan?",
        options: [
            { order: 1, text: "Dollar", isCorrect: false },
            { order: 2, text: "Euro", isCorrect: false },
            { order: 3, text: "Pound", isCorrect: true },
            { order: 4, text: "Yen", isCorrect: false },
        ],
        difficulty: "easy",
    },
    {
        id: "5",
        question: "What is the official language of Sudan?",
        options: [
            { order: 1, text: "Arabic", isCorrect: true },
            { order: 2, text: "English", isCorrect: false },
            { order: 3, text: "French", isCorrect: false },
            { order: 4, text: "German", isCorrect: false },
        ],
        difficulty: "medium",
    },
    {
        id: "6",
        question: "What is the largest city in Sudan?",
        options: [
            { order: 1, text: "Khartoum", isCorrect: true },
            { order: 2, text: "Omdurman", isCorrect: false },
            { order: 3, text: "Kassala", isCorrect: false },
            { order: 4, text: "Port Sudan", isCorrect: false },
        ],
        difficulty: "easy",
    },
]
export type levelType = {
    order: number,
    prize: number,
    status: 'not-reached' | 'current' | 'passed',
    difficulty: "easy" | "medium" | "hard",
    questionId?: string
}

export const initialLevels: levelType[] = [
    { order: 1, prize: 8000, status: "not-reached", difficulty: 'easy', questionId:'1' },
    { order: 2, prize: 12000, status: "not-reached", difficulty: 'easy', questionId:'2' },
    { order: 3, prize: 16000, status: "not-reached", difficulty: 'easy', questionId:'3' },
    { order: 4, prize: 20000, status: "not-reached", difficulty: 'easy', questionId:'4' },
    { order: 5, prize: 32000, status: "not-reached", difficulty: 'easy', questionId:'5' },
    { order: 6, prize: 40000, status: "not-reached", difficulty: 'easy', questionId:'6' },
    { order: 7, prize: 55000, status: "not-reached", difficulty: 'easy', questionId:'5' },
    { order: 8, prize: 64000, status: "not-reached", difficulty: 'easy', questionId:'4' },
    { order: 9, prize: 80000, status: "not-reached", difficulty: 'easy', questionId:'3' },
    { order: 10, prize: 100000, status: "not-reached", difficulty: 'easy', questionId:'2' },
    { order: 11, prize: 128000, status: "not-reached", difficulty: 'easy', questionId:'1' },
    { order: 12, prize: 180000, status: "not-reached", difficulty: 'easy', questionId:'2' },
    { order: 13, prize: 256000, status: "not-reached", difficulty: 'easy', questionId:'3' },
    { order: 14, prize: 384000, status: "not-reached", difficulty: 'easy', questionId:'4' },
    { order: 15, prize: 512000, status: "not-reached", difficulty: 'easy', questionId:'5' },
]