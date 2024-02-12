// import { useEffect } from 'react';
// import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function About() {
    // const location = useLocation();
    // console.log(location); // для того чтобы в компоненте узнать на какой ссылке мы находимся

    //  для id-шек
    const { who } = useParams();

    //  по сути переадресация
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (params.id === '999') navigate('/');
    // }, [params, navigate]);
    

    if(who === 'me') return <>About me</>;
    if(who === 'gamma') return <>Gamma Intelligence</>;

    return <>About Component</>;
}

export default About;