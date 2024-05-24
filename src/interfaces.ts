export interface IAnswer {
    answer: string,
    isTrue: boolean
}

export interface IQuestion {
    questionLabel: string,
    questionType: string
    points: number,
    answers: IAnswer[]
}

export interface IQuiz {
    quizLabel: string
    questions: IQuestion[]
}