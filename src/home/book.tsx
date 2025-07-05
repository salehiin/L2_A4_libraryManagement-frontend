import {useAppSelector} from "../redux/hooks"

export default function Book(){

    const {quantity} = useAppSelector((state) => state.books);

    console.log(quantity)

    return <div>Book</div>
}