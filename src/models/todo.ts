class Todo{
    id: number;
    text: string;

    constructor(text: string,id?: number){
        this.id = id??Math.random();
        this.text = text.trim();
    }
}

export default Todo;