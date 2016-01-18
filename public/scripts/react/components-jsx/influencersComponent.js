/**
 * Created by appusubbu on 1/17/16.
 */

var SingleInfluencer = React.createClass({
    handleClick:function() {
        var id=this.props.inf.id;
        var status = $("#btn-"+id).attr("data-available");
        this.props.handleFollow(id,status);
    },
    render: function () {
        return(
            <div className="business-card">
                <div className="media">
                    <div className="media-left">
                        <img className="media-object img-circle profile-img" src={this.props.inf.picture}/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading name">{this.props.inf.firstName+" "+this.props.inf.lastName}</div>
                        <div className="bio">{this.props.inf.bio}</div>
                        <div className="followers">{this.props.inf.followersCount+" followers"}</div>
                    </div>
                    <div className="media-right">
                        <button className="btn btn-primary btn-lg" id={"btn-"+this.props.inf.id} data-available="enable" onClick={this.handleClick}>Follow</button>
                    </div>
                </div>
            </div>
            )

    }
});



var InfluencersList = React.createClass({
    render: function () {
        var handleFollow=this.props.handleFollow;
        var eachInf = this.props.influencers.map(function (influencer, index) {
            return (
                <SingleInfluencer key={index} inf={influencer} handleFollow={handleFollow}></SingleInfluencer>
            )
        });
        return (
            <div className="col-sm-5 col-xs-12 followers-panel no-side-padding">
                <div className="col-sm-12 col-xs-12">
                    <h4>FOLLOW INFLUENCERS</h4>
                    {eachInf}
                </div>
            </div>
        )
    }
});

var InfluencersComponent = React.createClass({
    getInitialState: function () {
        return {infList: []};
    },
    handleFollow: function(id,status){
        console.log("Inside the Influencers component: "+id+" status: "+status);
        var userId=this.state.userId;
        var inputData = {
            userId:userId,
            influencerId:id
            };
        if(status=="enable"){
            var method="POST";
        }else{
            var method="DELETE";
        }
        $.ajax({
            url: "/follows",
            type: method,
            cache: false,
            data:inputData,
            success: function (data, textStatus, jqXHR) {
                console.log("Influencers list: " + data);
                if(status=="enable"){
                    $('#btn-'+id).attr('data-available','disable').addClass("active").text("Following");
                }else{
                    $('#btn-'+id).attr('data-available','enable').removeClass("active").text("Follow");
                }
            }.bind(this),
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("--- ERROR: jqXHR: " + jqXHR + " / textStatus: " + textStatus + " / errorThrown: " + errorThrown);
            }.bind(this)
        });
    },
    getInfluencersList: function () {
        $.ajax({
            url: '/getInfluencers',
            type: "GET",
            cache: false,
            success: function (data, textStatus, jqXHR) {
                console.log("Influencers list: " + data);
                this.setState({infList: data});
            }.bind(this),
            error: function (jqXHR, textStatus, errorThrown) {
                console.error("--- ERROR: jqXHR: " + jqXHR + " / textStatus: " + textStatus + " / errorThrown: " + errorThrown);
            }.bind(this)
        });
    },
    componentDidMount: function () {
        //Hard coding the user id who logged in
        this.setState({userId:"00000"})
        this.getInfluencersList();
    },
    render: function () {
        return (
            <div className="col-sm-12 col-xs-12">
                <h2>{this.props.name + " Influencers List"}</h2>
                <InfluencersList handleFollow={this.handleFollow} influencers={(this.state!=null && this.state.infList!=null)?this.state.infList:[]}/>
            </div>
        );
    }
});


ReactDOM.render(
    <InfluencersComponent name="Edcast"/>,
    document.getElementById('list-container')
);