type Details = {
    createAt: Date;
    updateAt: Date;
}

type Page = {
    title: string;
    likes: number;
    accounts: string[];
    status: string;
    details?: Details;
}