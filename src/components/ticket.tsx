import { useSelector } from 'react-redux';

const Ticket = () => {
    const { avatar, fullName, email, github } = useSelector((state: any) => state.ticket);

    return (
        <div>
            <div>
                <img src={avatar} />
                <br />
                NAME IS {fullName} , EMAIL IS {email} , GIHUB IS {github}</div>
        </div>
    );
}

export default Ticket;
