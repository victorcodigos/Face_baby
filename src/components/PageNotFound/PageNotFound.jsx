import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';
import "./PageNotFound.scss"

const App = () => (

    <div className="div-main-404">
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary"> <Link to="/"> Back Home </Link> </Button>}
        />
    </div>
);
export default App