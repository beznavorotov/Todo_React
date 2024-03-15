const TodoInput = ({ todo, setTodo, addTodo}) => {
    return (
        <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Стоворити нову todo"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <button className="add-button" onClick={addTodo}>
          Додати
        </button>
      </div>
    );
};

export default TodoInput;