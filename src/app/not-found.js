import { Button } from "@mui/material";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const NotFound = () => {
    return (
        <div className='bg-primary-800 h-auto min-h-screen w-full flex flex-col justify-center items-center font-barlow gap-6 text-center'>
            <h1 className="text-[16vw] leading-none font-medium">404</h1>
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-4xl tracking-wide">There is <strong>NOTHING</strong> Here..</h2>
                <p className="text-xl text-slate-400 tracking-wide">{"...maybe the page you're looking for is not found or never existed."}</p>
            </div>
            <Button variant="contained" color="success" size="large" href="/" className="rounded-xl flex justify-center items-center gap-2 font-bold">Go To Home <TrendingFlatIcon fontSize="large" /></Button>
        </div>
    );
};

export default NotFound;