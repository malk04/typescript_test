// Интерфейс действия пользователя
export interface IUserAction {
    username: string;
    action: string;
    action_created_at: string;
    [key: string]: any; // Это позволяет индексировать объект любым строковым ключом
}
