// Import your CSS files or use the CDN links directly within your component
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'; // Assuming the URL is correct
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './HomePage.css';
import AgeTofu from './Home Page Images/AgeTofu.png';
import GyuDon from './Home Page Images/GyuDon.png';
import PorkBun from './Home Page Images/PorkBun.png';
import RibeyeDonburi from './Home Page Images/RibeyeDonburi.png';
import SeafoodRamen from './Home Page Images/SeafoodRamen.png';
import ShoyuRamen from './Home Page Images/ShoyuRamen.png';
import SpicyMisoRamen from './Home Page Images/SpicyMisoRamen.png';
import TakoFry from './Home Page Images/TakoFry.png';
import Takoyaki from './Home Page Images/Takoyaki.png';
import TanTanRamen from './Home Page Images/TanTanRamen.png';
import TempuraDonburi from './Home Page Images/TempuraDonburi.png';
import TonkotsuRamen from './Home Page Images/TonkotsuRamen.png';
import Topping1 from './Home Page Images/Topping1.png';
import Topping2 from './Home Page Images/Topping2.png';
import Topping3 from './Home Page Images/Topping3.png';
import Topping4 from './Home Page Images/Topping4.png';
import Topping5 from './Home Page Images/Topping5.png';
import Topping6 from './Home Page Images/Topping6.png';
import Topping7 from './Home Page Images/Topping7.png';
import Topping8 from './Home Page Images/Topping8.png';
import Topping9 from './Home Page Images/Topping9.png';
import Topping10 from './Home Page Images/Topping10.png';

export const HomePage = () => {
    return (
        <div>
            <div class="banner container-fluid text-center d-flex justify-content-center align-items-center flex-column pt-5">
			
                <div class="row col-12 pt-5">
                    <h1>Welcome to Tento Ramen</h1>
                    <p>Delivering Japanese ramen and Rice bowl.</p>
                </div>
                
                <div class="button order col-xl-2 col-5">
                    <a href="/cart" class="btn rounded-pill btn-lg" style={{ color: '#9a4444', backgroundColor: '#DE8F5F' }}>ORDER NOW</a>
                </div>
                    
            </div>
        
            <div class="third container-fluid">
                
                <div class="fav-title row text-center pt-5 pb-4" style={{color: '#9a4444'}}>
                    <h1 style={{fontSize: '40px'}}>FAVORITE DISH</h1>
                </div>
            
                <div class="row text-center row-gap-3">
                
                    <div class="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                    
                        <div class="card d-flex justify-content-center align-items-center" style={{ height: '500px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={PorkBun} class="card-img-top" alt="Pork Bun" style={{ height: 'auto', width: '290px', position: 'relative', top: '-40px' }} />
                            <div class="bun-card-body" style={{ width: '90%', position: 'relative', top: '-35px' }}>
                                <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{ height: '50px', backgroundColor: '#9a4444', fontSize: '27px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6' }}>Pork Bun</h5>
                                <p class="bun-text card-text" style={{ fontSize: '15px', fontFamily: 'Titillium Web, sans-serif', color: '#9a4444', position: 'relative' }}>Chased pork with romaine heart.</p>
                            </div>
                        </div>
                    
                    </div>
                
                    <div class="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                        <div class="card d-flex justify-content-center align-items-center p-5" style={{ height: '500px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={SpicyMisoRamen} class="card-img-top" alt="Spicy Miso Ramen" style={{ height: 'auto', width: '330px', position: 'absolute', top: '80px' }} />
                            <div class="miso-card-body" style={{ width: '90%', position: 'absolute', top: '330px' }}>
                                <h5 class="miso card-title border rounded-pill d-flex justify-content-center align-items-center border-0">Spicy Miso Ramen</h5>
                                <p class="miso-text card-text">Spicy pork boil with miso, topped with ground pork, fish cake, bean sprouts, corn, egg, chasu pork, bamboo shoots and scallion spicy.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4 col-12 d-flex justify-content-center align-items-center">
                        <div class="card d-flex justify-content-center align-items-center p-3" style={{ height: '500px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={TonkotsuRamen} class="card-img-top" alt="Tonkotsu Ramen" style={{ height: 'auto', width: '350px', paddingTop: '10px' }} />
                            <div class="tonkotsu card-body">
                                <h5 class="tonkotsu-title card-title border rounded-pill d-flex justify-content-center align-items-center border-0">Tonkotsu Ramen</h5>
                                <p class="tonkotsu-text card-text">Classic pork, broth, topped with fish cake, egg, chasu pork, bamboo shoots, red ginger and scallion.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            
            </div>
        
        
            <div class="container-fluid">
                
                <div class="menu row text-center pt-5 pb-2">
                    <h1 style={{fontSize: '40px', fontFamily: 'Righteous, sans-serif', color: '#9a4444' }}>MENU</h1>
                </div>
            
                <div class="line"></div>
                
                <div class="appetizer row text-center pt-3 pb-4"> 
                    <h1 style={{fontSize: '30px', fontFamily: 'Righteous, sans-serif', color: '#9a4444' }}>APPETIZER</h1>
                </div>
                
                
            
                <div class="row text-center d-flex justify-content-center">
                    
                    <div class="col-1 d-flex justify-content-start align-items-center">
                        <div class="btn-group" role="group" aria-label="First group">
                            <button type="button" class="btn rounded-pill border-0" style={{ height: '50px', width: '50px', backgroundColor: '#DE8F5F', color: '#F4DFB6' }}><i class="fa fa-chevron-left fa-xl" style={{paddingTop: '.4rem'}}></i></button>
                        </div>
                    </div>
                
                    <div class="col-lg-3 col-md-5 col-10 d-flex justify-content-center align-items-center">
                        <div class="card d-flex justify-content-center align-items-center p-3" style={{ height: '400px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={AgeTofu} class="card-img-top" alt="Age Tofu" style={{ position: 'relative', top: '50px', height: 'auto', width: '250px' }} />
                            <div class="card-body" style={{ position: 'relative', top: '75px', width: '110%' }}>
                                <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '25px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6' }}>Age Tofu</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-5 d-flex justify-content-center align-items-center d-md-flex d-none">
                        <div class="card d-flex justify-content-center align-items-center p-3" style={{ height: '400px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={Takoyaki} class="card-img-top" alt="Takoyaki" style={{ position: 'relative', top: '50px', height: 'auto', width: '250px' }} />
                            <div class="card-body" style={{position: 'relative', top: '58px', width: '110%' }}>
                                <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '25px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6' }}>Takoyaki</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-0 d-flex justify-content-center align-items-center d-lg-flex d-none">
                        <div class="card d-flex justify-content-center align-items-center p-3" style={{ height: '400px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={TakoFry} class="card-img-top" alt="Tako Fry" style={{height: 'auto', width: '260px'}} />
                            <div class="card-body" style={{position: 'relative', top: '-20px', width: '110%' }}>
                                <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '25px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6' }}>Tako Fry</h5>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-1 d-flex justify-content-end align-items-center">
                        <div class="btn-group" role="group" aria-label="First group">
                            <button type="button" class="btn rounded-pill border-0" style={{height: '50px', width: '50px', backgroundColor: '#DE8F5F', color: '#F4DFB6' }}><i class="fa fa-chevron-right fa-xl" style={{paddingTop: '.4rem'}}></i></button>
                        </div>
                    </div>
                    
                </div>
            </div>
        
        
            <div class="five container-fluid">
            
                <div class="LS pt-5">
                    <div class="line"></div>
                </div>
                
                <div class="donburi-title text-center d-flex flex-row justify-content-center align-items-center pt-2 pb-4">
                    <h1 style={{fontSize: '30px', fontFamily: 'Righteous, sans-serif', color: '#9a4444'}}>DONBURI</h1>
                    <p class="pt-2 ps-2" style={{fontSize: '20px', fontFamily: 'Titillium Web, sans-serif', color: '#9a4444' }}>(RICE BOWL)</p>
                </div>
            
                <div class="row text-center d-flex justify-content-center">
                
                    <div class="col-1 d-flex justify-content-start align-items-center">
                        <div class="btn-group" role="group" aria-label="First group">
                            <button type="button" class="btn rounded-pill border-0" style={{height: '50px', width: '50px', backgroundColor: '#DE8F5F', color: '#F4DFB6' }}><i class="fa fa-chevron-left fa-xl" style={{paddingTop: '.4rem'}}></i></button>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-md-5 col-10 d-flex justify-content-center align-items-center">
                        <div class="card d-flex justify-content-center align-items-center p-3" style={{height: '400px', width: '450px', bordeRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={RibeyeDonburi} class="card-img-top" alt="Ribeye Donburi" style={{position: 'relative', top: '-10px', height: 'auto', width: '280px' }} />
                            <div class="card-body" style={{position: 'relative', top: '-15px', width: '110%' }}>
                                <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '25px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6' }}>Ribeye Donburi</h5>
                            </div>
                        </div>
                    </div>
                
                    <div class="col-lg-3 col-md-5 d-flex justify-content-center align-items-center d-md-flex d-none">
                        <div class="card d-flex justify-content-center align-items-center p-3" style={{height: '400px', width: '450px', bordeRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={TempuraDonburi} class="card-img-top" alt="Tempura Donburi" style={{position: 'relative', top: '-10px', height: 'auto', width: '280px' }} />
                            <div class="card-body" style={{position: 'relative', top: '-15px', width: '110%' }}>
                                <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '22px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6' }}>Tempura Donburi</h5>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-3 col-0 d-flex justify-content-center align-items-center d-lg-flex d-none">
                        <div class="card d-flex justify-content-center align-items-center p-3" style={{height: '400px', width: '450px', bordeRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                            <img src={GyuDon} class="card-img-top" alt="Gyu Don" style={{position: 'relative', top: '-60px', height: 'auto', width: '270px' }} /> 
                            <div class="card-body" style={{position: 'relative', top: '-75px', width: '110%' }}>
                                <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '25px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6' }}>Gyu Don</h5>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-1 d-flex justify-content-end align-items-center">
                        <div class="btn-group" role="group" aria-label="First group">
                            <button type="button" class="btn rounded-pill border-0" style={{height: '50px', width: '50px', backgroundColor: '#DE8F5F', color: '#F4DFB6' }}><i class="fa fa-chevron-right fa-xl" style={{paddingTop: '.4rem;'}}></i></button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        
        
        <div class="six container-fluid">
        
            <div class="LS pt-5">
                <div class="line"></div>
            </div>
            
            <div class="donburi-title text-center d-flex flex-row justify-content-center align-items-center pt-2 pb-4">
                <h1 style={{fontSize: '30px', fontFamily: 'Righteous, sans-serif', color: '#9a4444' }}>RAMEN</h1>
            </div>
            
            <div class="row text-center d-flex justify-content-center">
                
                <div class="col-1 d-flex justify-content-start align-items-center">
                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn rounded-pill border-0" style={{height: '50px', width: '50px', backgroundColor: '#DE8F5F', color: '#F4DFB6' }}><i class="fa fa-chevron-left fa-xl" style={{paddingTop: '.4rem' }}></i></button>
                    </div>
                </div>
            
                <div class="col-lg-3 col-md-5 col-10 d-flex justify-content-center align-items-center">
                    <div class="card d-flex justify-content-center align-items-center p-3" style={{height: '400px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                        <img src={ShoyuRamen} class="card-img-top" alt="Shoyu Ramen" style={{position: 'relative', top: '20px', height: 'auto', width: '250px'}} />
                        <div class="card-body" style={{position: 'relative', top: '50px', width: '110%'}}>
                            <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '25px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6'}}>Shoyu Ramen</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-5 d-flex justify-content-center align-items-center d-md-flex d-none">
                    <div class="card d-flex justify-content-center align-items-center p-3" style={{height: '400px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                        <img src={SeafoodRamen} class="card-img-top" alt="Seafood Ramen" style={{position: 'relative', top: '10px', height: 'auto', width: '280px'}} />
                        <div class="card-body" style={{position: 'relative', top: '23px', width: '110%'}}>
                            <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '24px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6'}}>Seafood Ramen</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-0 d-flex justify-content-center align-items-center d-lg-flex d-none">
                    <div class="card d-flex justify-content-center align-items-center p-3" style={{height: '400px', width: '450px', borderRadius: '30px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none' }}>
                        <img src={TanTanRamen} class="card-img-top" alt="Tan Tan Ramen" style={{position: 'relative', top: '-5px', height: 'auto', width: '290px'}} />
                        <div class="card-body" style={{position: 'relative', top: '-20px', width: '110%'}}>
                            <h5 class="card-title border rounded-pill d-flex justify-content-center align-items-center border-0" style={{height: '50px', backgroundColor: '#9a4444', fontSize: '24px', fontFamily: 'Righteous, sans-serif', color: '#F4DFB6'}}>Tan Tan Ramen</h5>
                        </div>
                    </div>
                </div>
            
                <div class="col-1 d-flex justify-content-end align-items-center">
                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn rounded-pill border-0" style={{height: '50px', width: '50px', backgroundColor: '#DE8F5F', color: '#F4DFB6'}}>
                            <i class="fa fa-chevron-right fa-xl" style={{paddingTop: '.4rem'}}></i>
                        </button>
                    </div>
                </div>
                
            </div>
    
        </div>
        
        
        <div class="seven container-fluid">
        
            <div class="LS pt-5">
                <div class="line"></div>
            </div>
            
            <div class="donburi-title text-center d-flex flex-row justify-content-center align-items-center pt-2 pb-4">
                <h1 style={{fontSize: '30px', fontFamily: 'Righteous, sans-serif', color: '#9a4444'}}>TOPPING</h1>
            </div>
        
            <div class="row text-center d-flex justify-content-center align-items-center">
            
                <div class="col-md-1 col-2">
                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn rounded-pill border-0" style={{height: '50px', width: '50px', backgroundColor: '#DE8F5F', color: '#F4DFB6', position: 'sticky'}}><i class="fa fa-chevron-left fa-xl" style={{paddingTop: '.4rem'}}></i></button>
                    </div>
                </div>
                
                <div class="col-md-1 col-2">
                    <div class="card d-flex justify-content-center align-items-center" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping1} class="card-img-top pe-2" alt="Topping1" style={{height: '50px', width: 'auto'}} />
                    </div>
                </div>
                <div class="col-md-1 col-2">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping2} class="card-img-top pt-2" alt="Topping2" />
                    </div>
                </div>
                <div class="col-md-1 col-2">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping3} class="card-img-top pt-2 ps-1" alt="Topping3" style={{height: 'auto', width: '80px'}} />
                    </div>
                </div>
                <div class="col-md-1 col-2">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping4} class="card-img-top pt-2 ps-2" alt="Topping4" style={{height: 'auto', width: '70px'}} />
                    </div>
                </div>
                <div class="col-md-1 d-md-block d-none">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping5} class="card-img-top" alt="Topping5" />
                    </div>
                </div>
                <div class="col-md-1 d-md-block d-none">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping6} class="card-img-top" alt="Topping6" />
                    </div>
                </div>
                <div class="col-md-1 d-md-block d-none">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping7} class="card-img-top" alt="Topping7" />
                    </div>
                </div>
                <div class="col-md-1 d-md-block d-none">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping8} class="card-img-top" alt="Topping8" style={{paddingTop: '8px', width: '90%'}} />
                    </div>
                </div>
                <div class="col-md-1 d-lg-block d-none">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping9} class="card-img-top" alt="Topping9" style={{paddingTop: '10px'}} />
                    </div>
                </div>
                <div class="col-md-1 d-lg-block d-none">
                    <div class="card" style={{height: '80px', width: '80px', borderRadius: '100px', backgroundColor: 'rgba(222, 143, 95, 0.2)', border: 'none'}}>
                        <img src={Topping10} class="card-img-top" alt="Topping10" />
                    </div>
                </div>
            
                <div class="col-md-1 col-2">
                    <div class="btn-group" role="group" aria-label="First group">
                        <button type="button" class="btn rounded-pill border-0" style={{height: '50px', width: '50px', backgroundColor: '#DE8F5F', color: '#F4DFB6', position: 'sticky'}}><i class="fa fa-chevron-right fa-xl" style={{paddingTop: '.4rem'}}></i></button>
                    </div>
                </div>
            
            </div>
        
        </div>
        </div>
    );
}