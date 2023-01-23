import { Route, Routes } from 'react-router-dom';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/sign-in/authentication.component';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/auth" element={<Authentication />} />
                <Route path="/checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
