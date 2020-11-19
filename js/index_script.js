"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// script file for index.html
// js.react
// babel/jsx for react

/* spining up your dev machine - from the project root directory in comandline
    - run babel 
        npx babel --watch js --out-dir . --presets react-app/prod
        This is actially different atm - i liked the old way better 
        right now run npm build 
    - run browsersync
        browser-sync start  --server --files * --index pages/responsive3.html
*/
//typically new react apps have a single app component at the very top
var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _super.call(this, props);
    _this.state = {
      drillDown: 'searchYear',
      data: [],
      //player data
      seasonHittingData: [],
      seasonPitchingData: [],
      careerHittingData: [],
      careerPitchingData: [],
      projHittingData: [],
      projPitchingData: []
    };
    _this.handleTeamClick = _this.handleTeamClick.bind(_assertThisInitialized(_this));
    _this.handlePlayerClick = _this.handlePlayerClick.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "handleTeamClick",
    value: function handleTeamClick(teamID) {
      this.getPlayers(teamID);
    }
  }, {
    key: "handlePlayerClick",
    value: function handlePlayerClick(playerID) {
      this.getPlayer(playerID);
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      this.getTeams();
      event.preventDefault();
    } //TODO change these urls to const variables for clearing code

  }, {
    key: "getTeams",
    value: function getTeams() {
      var _this2 = this;

      var rosterYear = document.getElementById('RosterYear').value;
      fetch("https://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code=%27mlb%27&all_star_sw=%27N%27&sort_order=name_asc&season=%27".concat(rosterYear, "%27")).then(function (prom) {
        return prom.json();
      }).then(function (data) {
        _this2.setState({
          drillDown: 'selectTeam',
          data: data.team_all_season.queryResults.row
        });
      })["catch"](function (err) {
        return console.log('Error: ' + err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var drillDown = this.state.drillDown;
      var data = this.state.data;
      var seasonPitchingData = this.state.seasonPitchingData;
      var ribbon;
      var dataDisplay = []; //ribbon here is a React Component

      ribbon = /*#__PURE__*/React.createElement(Ribbon //Search bar props
      , {
        onSubmit: this.handleSubmit // parentDivClassName='form-group'
        ,
        labelFor: "MLB Roster Year",
        label: "MLB Year",
        searchBartype: "number",
        searchBarClassName: "form-control",
        searchBarID: "RosterYear" //placeholder=
        ,
        defaultValue: "2018" //Submit Button props
        ,
        buttonClassName: "btn btn-primary mb-2"
      });

      switch (drillDown) {
        //TODO here you need to reference teamCard as a component
        case 'searchYear':
          //TODO depricate this later
          dataDisplay.push( /*#__PURE__*/React.createElement("div", null));
          break;

        case 'selectTeam':
          dataDisplay = data.map(function (teamData) {
            //add other parameters from the JSON here!
            var name_display_full = teamData.name_display_full,
                mlb_org_brief = teamData.mlb_org_brief,
                venue_name = teamData.venue_name,
                division_abbrev = teamData.division_abbrev,
                mlb_org_id = teamData.mlb_org_id;
            return (
              /*#__PURE__*/
              //and then here!
              React.createElement(TeamCards, {
                name: mlb_org_brief,
                teamName: name_display_full,
                venueName: venue_name,
                league: division_abbrev,
                onClick: function onClick() {
                  return _this3.handleTeamClick(mlb_org_id);
                }
              })
            );
          });
          break;

        case 'selectPlayer':
          dataDisplay = data.map(function (playerData) {
            var name_first_last = playerData.name_first_last,
                _throws = playerData["throws"],
                bats = playerData.bats,
                height_feet = playerData.height_feet,
                height_inches = playerData.height_inches,
                player_id = playerData.player_id,
                position_desig = playerData.position_desig,
                primary_position = playerData.primary_position,
                birth_date = playerData.birth_date,
                jersey_number = playerData.jersey_number;
            return /*#__PURE__*/React.createElement(PlayerCards, {
              playerName: name_first_last,
              posDes: position_desig,
              primPos: primary_position,
              bats: bats,
              "throws": _throws,
              jerseyNumber: jersey_number,
              onClick: function onClick() {
                return _this3.handlePlayerClick(player_id);
              }
            });
          });
          break;

        case 'playerStats':
          var inches = data['height_in'];
          dataDisplay = /*#__PURE__*/React.createElement(PlayerStats, {
            name: data['name_display_first_last'],
            age: data['age'],
            ft: data['height_feet'],
            "in": inches,
            weight: data['weight'],
            jerseyNumber: data['jersey_number']
          });
          break;
      }

      return /*#__PURE__*/React.createElement("div", null, ribbon, dataDisplay);
    }
  }]);

  return App;
}(React.Component);

var Ribbon = /*#__PURE__*/function (_React$Component2) {
  _inherits(Ribbon, _React$Component2);

  var _super2 = _createSuper(Ribbon);

  function Ribbon(props) {
    var _this4;

    _classCallCheck(this, Ribbon);

    _this4 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this4), "handleSubmit", function (event) {
      console.log('A value was submitted: ' + _this4.state.value);
      event.preventDefault();
    });

    _this4.state = {
      value: ''
    };
    _this4.handleChange = _this4.handleChange.bind(_assertThisInitialized(_this4));
    _this4.handleSubmit = _this4.handleSubmit.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(Ribbon, [{
    key: "handleChange",
    value: function handleChange(event) {
      console.log('change handled');
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: this.props.onSubmit,
        id: "ribbon"
      }, /*#__PURE__*/React.createElement("div", {
        id: "ribbonContainer"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: this.props.labelFor
      }, " ", this.props.label, " ")), /*#__PURE__*/React.createElement("div", {
        className: "form-row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-group col-10"
      }, /*#__PURE__*/React.createElement(SearchBar //Ribbon states and props
      //  value= {this.state.value} //cannot havea value propand a default value prop specified.(ie controlled vs uncontrolled input)
      , {
        onChange: this.handleChange //calling function props
        ,
        searchBartype: this.props.searchBartype,
        searchBarClassName: this.props.searchBarClassName,
        id: this.props.searchBarID,
        placeholder: this.props.placeholder,
        defaultValue: this.props.defaultValue
      })), /*#__PURE__*/React.createElement("div", {
        className: "form-group col-2"
      }, /*#__PURE__*/React.createElement(SubmitButton, {
        className: this.props.buttonClassName
      })))));
    }
  }]);

  return Ribbon;
}(React.Component);

var TeamCards = /*#__PURE__*/function (_React$Component3) {
  _inherits(TeamCards, _React$Component3);

  var _super3 = _createSuper(TeamCards);

  function TeamCards(props) {
    _classCallCheck(this, TeamCards);

    return _super3.call(this, props);
  }

  _createClass(TeamCards, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "card mb-1 team-card",
        onClick: this.props.onClick
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-4"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body name"
      }, this.props.name)), /*#__PURE__*/React.createElement("div", {
        className: "col-8"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-body cust-card-text-right"
      }, this.props.teamName))), /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-9"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      }, this.props.venueName)), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, this.props.league)))));
    }
  }]);

  return TeamCards;
}(React.Component);
/*
class PlayerCards extends React.Component{
    constructor(props){
        super(props);     
    }

    render() {
        return(
            <div className="card" onClick={this.props.onClick}>    
                <div className="card-body">    
                    <div className="row">
                        <div className="col-5">
                            <p className="card-text text-body">{this.props.playerName}</p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-right">{this.props.posDes.toLowerCase()} </p>
                        </div>
                        <div className="col-2">
                            <p className="card-text text-body cust-card-text-right">{this.props.primPos}</p>
                        </div>
                        <div className="col-2">
                            <p className="card-text text-body cust-card-text-right">#{this.props.jerseyNumber}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <p className="card-text text-body">{}</p>
                        </div>
                        <div className="col-2">
                            <p className="card-text text-body cust-card-text-right">{}</p>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
class PlayerStats extends React.Component{
    constructor(props){
        super(props);     
    }
    render() {
        return(
            <div className="card bg-dark" onClick={this.props.onClick}>    
                <div className="card-body bg-light team-card">    
                    <div className="row">
                        <div className="col">
                            <p className="card-text text-body">{this.props.name}</p>
                        </div>
                    </div>
                    <div className="row cust-card-text-small">
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-right">age:</p>
                        </div>                        
                        <div className="col-3">
                            <p className="card-text text-body">{this.props.age}</p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-right">height:</p>
                        </div>                         
                        <div className="col-3">
                            <p className="card-text text-body">{this.props.ft}' {this.props.in}"</p>
                        </div>
                    </div>
                    <div className="row cust-card-text-small">
                    <div className="col-3">
                            <p className="card-text text-body cust-card-text-right">weight:</p>
                        </div>                     
                        <div className="col-3">
                            <p className="card-text text-body">{this.props.weight} lbs</p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-right">jersey:</p>
                        </div>                         
                        <div className="col-3">
                            <p className="card-text">#{this.props.jerseyNumber}</p>
                        </div>
                    </div>
                    <div className="row align-items-start">
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small">Games</p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small">{this.props.games}</p>
                        </div>                        
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small">GamesStarted</p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small">{this.props.gamesStarted}</p>
                        </div>                           
                    </div>
                    <div className="row align-items-start">
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small">QualityStarts</p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small">{this.props.qualityStarts}</p>
                        </div>                           
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small">BlownQualityStarts</p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small">{this.props.blownQualityStarts}         </p>
                        </div>                           
                    </div>
                    <div className="row align-items-start">
                        <div className="col-6">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>                           
                        <div className="col-6">
                            <p className="card-text text-body  cust-card-text-small"></p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>                           
                    </div>
                    <div className="row align-items-start">
                        <div className="col-6">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>                           
                        <div className="col-6">
                            <p className="card-text text-body  cust-card-text-small"></p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>                           
                    </div>
                    <div className="row align-items-start">
                        <div className="col-6">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>                           
                        <div className="col-6">
                            <p className="card-text text-body  cust-card-text-small"></p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>                           
                    </div>
                    <div className="row align-items-start">
                        <div className="col-6">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>                           
                        <div className="col-6">
                            <p className="card-text text-body  cust-card-text-small"></p>
                        </div>
                        <div className="col-3">
                            <p className="card-text text-body cust-card-text-small"></p>
                        </div>                           
                    </div>                                                            

                    <div className="row">
                        <div className="col-2">
                            <p className="card-text text-body">{this.props.games}</p>
                        </div>
                        <div className="col-2">
                            <p className="card-text text-body">{this.props.gamesStarted}</p>
                        </div>
                        <div className="col-2">
                            <p className="card-text text-body cust-card-text-right">{this.props.qualityStarts}</p>
                        </div>
                        <div className="col-2">
                            <p className="card-text text-body cust-card-text-right">{this.props.blownQualityStarts}</p>
                        </div>
                        <div className="col-2">
                            <p className="card-text text-body cust-card-text-right">{this.props.inningsPitched}</p>
                        </div>
                        <div className="col-2">
                            <p className="card-text text-body cust-card-text-right">{}</p>
                        </div>
                    </div>
                </div>
            </div>  
        );
    }
}
*/


function SearchBar(props) {
  return /*#__PURE__*/React.createElement("input", {
    type: props.searchBartype //"number"
    // name={props.name}
    ,
    value: props.value,
    onChange: props.onChange,
    className: props.searchBarClassName //"form-control" 
    ,
    id: props.id //"RosterYear" 
    ,
    placeholder: props.placeholder //"Enter a Year" 
    ,
    defaultValue: props.defaultValue //"2020"
    ,
    "aria-describedby": props.discribedBy
  });
}

function SubmitButton(props) {
  return (
    /*#__PURE__*/
    //TODO - pass these down from ribbon and from app
    //<input type="submit" value="Submit" />
    React.createElement("button", {
      type: "submit",
      className: "btn btn-primary mb-2",
      id: "btnOK" //value='OK'

    }, "OK")
  );
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));
