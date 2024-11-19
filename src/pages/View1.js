import React,{ useState, useEffect} from 'react';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import ViewForm1 from '../components/ViewForm1';
import { useNavigate } from 'react-router-dom';

function View1({ userName, role, emplId, emplName, profilePhoto, desg, mob, comp, approver, costCenter }) {
    const navigate = useNavigate();

    console.log('MSIL Self Page', userName);
    console.log('role', role);

    // const [emplId, setEmplId] = useState();
    // const [emplName, setEmplName] = useState();


    useEffect(() => {
        const checkNavigate = async () => {
            if (role === 'ADMIN') {
              //  navigate('/masterScreen');
            } else if (role === 'SUPERVISOR') {
               // navigate('/mbook');
            }
            else if (role === 'USER') {
            }
            else if (role === 'Error') {
             //   navigate('/login');
            }
        };

        checkNavigate();
    }, [userName, role, navigate]);

    if (!userName || !role) {
        return <Preloader />;
    }



    return (<>
        <Navbar
            mbooking="book"
            emplId={emplId}
            emplName={emplName}
            profilePhoto={profilePhoto}
        />


        <ViewForm1
            emplId={emplId}
            emplName={emplName}
            desg={desg}
            mob={mob}
            comp={comp}
            approver={approver}
            costCenter={costCenter}
        />
    </>
    );
}

export default View1;
