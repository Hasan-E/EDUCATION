import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";




const TodoList = () => {
const {yapilacaklar}= useSelector((state)=>state.todoReducer);

  return (
    <div>
    {/* diziyi bastırmak için todoItem a git */}
    <div>
{yapilacaklar.map((a)=>(
  <TodoItem key={a.id} a={a}/>
))}
    </div>
    </div>
  );
};

export default TodoList;
