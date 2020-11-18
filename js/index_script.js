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

// script file for responsive3.html
// js.react
// babel > jsx

/* spining up your dev machine - from the project root directory in comandline
    - run babel 
        npx babel --watch js --out-dir . --presets react-app/prod
    - run browsersync
        browser-sync start  --server --files * --index pages/responsive3.html
    

/* Things TODO
    - add a back button
    - add sort by 
        position type
        primary position

    - add filter by
        position type
        primary position

    - at the player level it would be nice to be able to drill down into a stat group and see how they compare to 
        division
        league
        overall

        for that stat group

    - look into using these premade react components https://material-ui.com/components/badges/

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
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this)); //states to move through the levels of drill down
    //searchYear
    //selectTeam
    //selectPlayer
    //viewPlayerStats

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
    key: "getPlayers",
    value: function getPlayers(teamID) {
      var _this3 = this;

      var rosterYear = document.getElementById('RosterYear').value;
      fetch("https://lookup-service-prod.mlb.com/json/named.roster_team_alltime.bam?start_season=%27".concat(rosterYear - 1, "%27&end_season=%27").concat(rosterYear, "%27&team_id=%27").concat(teamID, "%27")).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this3.setState({
          drillDown: 'selectPlayer',
          data: data.roster_team_alltime.queryResults.row
        });
      })["catch"](function (err) {
        return console.log('Error: ' + err);
      });
    }
  }, {
    key: "getPlayer",
    value: function getPlayer(playerID) {
      var _this4 = this;

      var rosterYear = document.getElementById('RosterYear').value; //Sample PlayerID --> Madison Bumgarner: 518516
      //Define all of the URLS
      //player info          http://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code=%27mlb%27&player_id=%27493316%27

      var playerInfoAPI = "https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code=%27mlb%27&player_id=%27".concat(playerID, "%27");
      /*
          name_nick
          primary_stat_type
          status
      */
      //season hitting http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id=%27mlb%27&game_type=%27R%27&season=%272017%27&player_id=%27493316%27

      var seasonHittingAPI = "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id=%27mlb%27&game_type=%27R%27&season=%27".concat(rosterYear, "%27&player_id=%27").concat(playerID, "%27"); //season pitching 

      var seasonPitchingAPI = "https://lookup-service-prod.mlb.com/json/named.sport_pitching_tm.bam?league_list_id=%27mlb%27&game_type=%27R%27&season=%27".concat(rosterYear, "%27&player_id=%27").concat(playerID, "%27"); //Sample PlayerID --> Madison Bumgarner: 518516

      /*
          
         g  - Games
         gs - Games Started
         qs -  Quality Starts
         bqs - Blown Quality Starts
         ip - Innings Pitched
          
          Total Batters
         so - Strike Outs
         bb - Base on Balls 
         np - Total Pitches
         hb - hit batters
          h   - Hits
         db  - Doubles
          Tripples
         hr   - Home Runs
         gs   - Grand Slams
         r    - Runs
         er   - Earned Runs
         gidp - GIDP (ground into douple play)
            bb9 - BB/9
          k9 - k/9 strikes ber inning 
          kbb - strike to walk ratio
          rs9 - rs/9
          h9  - H/9
          hr9 - HR/9
      */
      //career hitting 'http://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id=%27mlb%27&game_type=%27R%27&player_id=%'+playerID+'%27'

      var careerHittingAPI = "https://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id=%27mlb%27&game_type=%27R%27&player_id=%27".concat(playerID, "%27"); //career pitching  http://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id='mlb'&game_type='R'&player_id='592789'

      var careerPitchingAPI = "https://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id=%27mlb%27&game_type=%27R%27&player_id=%27".concat(playerID, "%27"); //projected hitting https://appac.github.io/mlb-data-api-docs/#stats-data-projected-hitting-stats-get

      var projectedHittingAPI = "https://lookup-service-prod.mlb.com/json/named.proj_pecota_batting.bam?season=%27".concat(rosterYear, "%27&player_id=%27").concat(playerID, "%27"); //projected pitching https://appac.github.io/mlb-data-api-docs/#stats-data-projected-pitching-stats-get

      var projectedPitchingAPI = "https://lookup-service-prod.mlb.com/json/named.proj_pecota_pitching.bam?season=%27".concat(rosterYear, "%27&player_id=%27").concat(playerID, "%27"); //initialize and array as a collection of all of the urls

      var urls = [playerInfoAPI, seasonHittingAPI, seasonPitchingAPI, careerHittingAPI, careerPitchingAPI, projectedHittingAPI, projectedPitchingAPI]; //iterate over the array to fetch all of the URLs

      var requests = urls.map(function (url) {
        return fetch(url);
      }); //use promises.all to wait for a response from all of the fetch promises

      Promise.all(requests).then(function (responses) {
        return Promise.all(responses.map(function (response) {
          return response.json();
        }));
      }).then(function (data) {
        console.log(data);

        _this4.setState({
          drillDown: 'playerStats',
          data: data[0].player_info.queryResults.row,
          seasonHittingData: data[1].sport_hitting_tm.queryResults.row,
          seasonPitchingData: data[2].sport_pitching_tm.queryResults.row,
          careerHittingData: data[3].sport_career_hitting.queryResults.row,
          careerPitchingData: data[4].sport_career_pitching.queryResults.row,
          projHittingData: data[5].proj_pecota_batting.queryResults.row,
          projPitchingData: data[6].proj_pecota_pitching.queryResults.row
        });
      })["catch"](function (error) {
        return console.log("error: ".concat(error));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

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
                  return _this5.handleTeamClick(mlb_org_id);
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
                return _this5.handlePlayerClick(player_id);
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
            /* 7/13/20 ready to add the props in to display the data, just look it over to get the syntax right for eeach datapoint.         */
            //                      games={seasonPitchingData['g']}
            //                      gamesStarted={seasonPitchingData['gs']}
            //                      qualityStarts={seasonPitchingData['qs']}
            //                      blownQualityStarts={seasonPitchingData['bqs']}
            //                      inningsPitched={seasonPitchingData['ip']}

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
    var _this6;

    _classCallCheck(this, Ribbon);

    _this6 = _super2.call(this, props);

    _defineProperty(_assertThisInitialized(_this6), "handleSubmit", function (event) {
      console.log('A value was submitted: ' + _this6.state.value);
      event.preventDefault();
    });

    _this6.state = {
      value: ''
    };
    _this6.handleChange = _this6.handleChange.bind(_assertThisInitialized(_this6));
    _this6.handleSubmit = _this6.handleSubmit.bind(_assertThisInitialized(_this6));
    return _this6;
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

var PlayerCards = /*#__PURE__*/function (_React$Component4) {
  _inherits(PlayerCards, _React$Component4);

  var _super4 = _createSuper(PlayerCards);

  function PlayerCards(props) {
    _classCallCheck(this, PlayerCards);

    return _super4.call(this, props);
  }

  _createClass(PlayerCards, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "card",
        onClick: this.props.onClick
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-5"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      }, this.props.playerName)), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, this.props.posDes.toLowerCase(), " ")), /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, this.props.primPos)), /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, "#", this.props.jerseyNumber))), /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-10"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      })))));
    }
  }]);

  return PlayerCards;
}(React.Component);

var PlayerStats = /*#__PURE__*/function (_React$Component5) {
  _inherits(PlayerStats, _React$Component5);

  var _super5 = _createSuper(PlayerStats);

  function PlayerStats(props) {
    _classCallCheck(this, PlayerStats);

    return _super5.call(this, props);
  }

  _createClass(PlayerStats, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        className: "card bg-dark",
        onClick: this.props.onClick
      }, /*#__PURE__*/React.createElement("div", {
        className: "card-body bg-light team-card"
      }, /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      }, this.props.name))), /*#__PURE__*/React.createElement("div", {
        className: "row cust-card-text-small"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, "age:")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      }, this.props.age)), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, "height:")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      }, this.props.ft, "' ", this.props["in"], "\""))), /*#__PURE__*/React.createElement("div", {
        className: "row cust-card-text-small"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, "weight:")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      }, this.props.weight, " lbs")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, "jersey:")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text"
      }, "#", this.props.jerseyNumber))), /*#__PURE__*/React.createElement("div", {
        className: "row align-items-start"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }, "Games")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }, this.props.games)), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }, "GamesStarted")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }, this.props.gamesStarted))), /*#__PURE__*/React.createElement("div", {
        className: "row align-items-start"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }, "QualityStarts")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }, this.props.qualityStarts)), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }, "BlownQualityStarts")), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }, this.props.blownQualityStarts, "         "))), /*#__PURE__*/React.createElement("div", {
        className: "row align-items-start"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body  cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "row align-items-start"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body  cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "row align-items-start"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body  cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "row align-items-start"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-6"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body  cust-card-text-small"
      })), /*#__PURE__*/React.createElement("div", {
        className: "col-3"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-small"
      }))), /*#__PURE__*/React.createElement("div", {
        className: "row"
      }, /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      }, this.props.games)), /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body"
      }, this.props.gamesStarted)), /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, this.props.qualityStarts)), /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, this.props.blownQualityStarts)), /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      }, this.props.inningsPitched)), /*#__PURE__*/React.createElement("div", {
        className: "col-2"
      }, /*#__PURE__*/React.createElement("p", {
        className: "card-text text-body cust-card-text-right"
      })))));
    }
  }]);

  return PlayerStats;
}(React.Component);

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
