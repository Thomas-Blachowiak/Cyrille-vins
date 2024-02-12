import home from '../images/vin-1.png';

function Home() {
    return <div id="presentation" class="main-content border-top p-3">
    <div className="row justify-content-center align-items-center">
        <div className="col-md-6 p-5 moi">
            <img className="p-5 img-fluid bottle-presentation" src={home} alt="..."/>
        </div>
        <div className="col-lg-5 col-12 text-center">
            <h1>Cyrille Vins</h1>
            <h2>Vins, Champagnes et Spiritueux</h2>
        </div>
    </div>
</div>;
}

export default Home;