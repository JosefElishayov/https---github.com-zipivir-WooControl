import React from 'react'
import { svgBurger, svgControl, svgSettings, svgShow, svgStore } from './svgs'
import { dataMenuTop } from './data/dataMenu';
export default function Menu() {
  return (
    <div className="menu5">
    <div className="menu6">
        <div className="desktop-7">
            <div className="sidebar">
                <div className="content4">
                    <div className="menu7">
                        <div className="items">
                            {dataMenuTop.map((item) => (
                                <>
                                    {item.name !== 'Orders' ?
                                        <div className="left">
                                            {item.svg}
                                            <div className="table-title">{item.name}</div>
                                        </div> :
                                        <div className="line3">
                                            <div className="left3">
                                                {item.svg}
                                                <div className="table-title">{item.name}</div>
                                            </div>
                                            <div className="counter14">
                                                <div className="badge">2</div>
                                            </div>
                                        </div>
                                    }

                                </>
                            ))}
                        </div>
                    </div>
                    <div className="line-parent">
                        <div className="line">
                            <div className="left">
                                {svgStore}
                                <div className="table-title">Show Store</div>
                            </div>
                        </div>
                        <div className="line">
                            <div className="left">
                                {svgControl}
                                <a style={{ color: "black", textDecoration: "none" }} href='/wp-admin/' className="table-title">
                                    WordPress control panel
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="menu8">
                        <div className="head1">
                            <div className="table-title">sites</div>

                        </div>
                        <div className="items1">
                            <div className="line">
                                <div className="left">
                                    {svgShow}
                                    <div className="table-title">Store website</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="goals">
                        {svgSettings}
                        <div className="table-title">Settings</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}
