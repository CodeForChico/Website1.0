import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container p-1">
        <div className="text-center">
            <div className = "h-10 d-flex">
                <div className="w-100 h-100 card">
                    <div className="card-body">
                        <h3 className="card-title">Code for Pico </h3>
                    </div>
                </div>
            </div>
            <div class = "h-50 p-flex">
                <div className="card overflow-auto" >
                    <div className="card-body">
                        <p>We are looking for volunteers who want to contribute Code for Chico in the areas of design, development, product management and administration.</p>
                        <p>If you are just learning, or experienced, we need your help to build good things together.</p>
                    </div>
                </div>
            </div>
            <div className = "h-75 p-flex">
                <div className="h-50 card">
                    <h5 className="card-title">Become a Volunteer</h5>
                    <div className="card-body">
                        <p>If you are just learning, or experienced, we need your help to build good things together.</p>
                        <button type="button" class="w-50 btn border">Volunteer</button>
                    </div>

                </div>
                <div className="h-50 card">
                    <h5 className="card-title">Become a Comunity Partner</h5>
                    <div className="card-body"> 
                        <p>We work with Community Organizations and Local Governments to fix local services, and utilize open data to increase community awareness.</p>
                        <button type="button" class="w-50 btn border">Join Us</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
