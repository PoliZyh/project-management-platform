import './index.less'
import BreadcrumbCard from '../../../components/BreadcrumbCard'


const Main = (props) => {
    return (
        <div className="main-box">
            <BreadcrumbCard></BreadcrumbCard>
            <div className="route-container">
               {props.children}
            </div>
        </div>
    )
}


export default Main