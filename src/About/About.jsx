import { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';


function About() {
    const location = useLocation();
    console.log(location); // для того чтобы в компоненте узнать на какой ссылке мы находимся

    //  для id-шек
    const params = useParams();
    // console.log(params);

    //  по сути переадресация
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id === '999') navigate('/');
    }, [params, navigate]);
    

    return (
        <>About Component</>
    );
}

export default About;