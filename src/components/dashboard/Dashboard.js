import React from "react";
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dasboard__main">
            <div className="dashboard__content_1">
                <div className="grid__init__card">
                    <div className="card__1">
                        <div className="top__info">
                            <h4>Current Month Revanue</h4>
                            <i className="bi bi-bar-chart-line-fill wt"></i>
                        </div>
                        <div className="center__info">
                            <h1 className="card__info__h1">
                                $ 12, 456
                            </h1>
                            <p>
                                <i class="bi bi-plus-circle"></i>
                                5% more heugher than last month
                            </p>
                        </div>
                    </div>

                    <div className="card__1">
                        <div className="top__info c2">
                            <h4>Today's Visits</h4>
                            <i className="bi bi-eye-fill wt fd"></i>
                        </div>
                        <div className="center__info">
                            <h1 className="card__info__h1">
                                1,456,023
                            </h1>
                            <p>
                                <i class="bi bi-plus-circle"></i>
                                5% more heugher than last month
                            </p>
                        </div>
                    </div>

                    <div className="card__1">
                        <div className="top__info ">
                            <h4>Today's Feedbacks</h4>
                            <i className="bi bi-arrow-left-right wt gg"></i>
                        </div>
                        <div className="center__info ">
                            <h1 className="card__info__h1">
                                2,300
                            </h1>
                            <p>
                                <i class="bi bi-dash-circle"></i>
                                3% lower than last month
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dashboard__content_2">
                <div className="card__c2">
                    <p>
                        Current <br /> Weather
                    </p>
                    <i class="bi bi-cloud-sun-fill"></i>
                    <h1>
                        21°
                    </h1>
                    <i class="bi bi-three-dots d2"></i>
                </div>
                <div className="card__c2">
                    <p>
                        Health <br />  Care
                    </p>
                    <i class="bi bi-heart-fill re"></i>
                    <h1 className="heart__i">
                        68
                    </h1>
                    <i class="bi bi-three-dots d1"></i>
                </div>
            </div>

            <div className="dashboard__content_3">
                <div className="card__c3">
                    <i class="bi bi-house-door"></i>
                    <h1>
                        User Panel
                    </h1>
                </div>

                <div className="card__c3 f1">
                    <i class="bi bi-cloud-upload  "></i>
                    <h1>
                        Cloud Storage
                    </h1>
                </div>

                <div className="card__c3 f2">
                    <i class="bi bi-arrow-down "></i>
                    <h1>
                        Updates
                    </h1>
                </div>

                <div className="card__c3 f3">
                    <i class="bi bi-eye"></i>
                    <h1>
                        Web Visits
                    </h1>
                </div>
            </div>

            <div className="dashboard__content_4"></div>
            <div className="dashboard__content_5"></div>
        </div>
    )
}

export default Dashboard;