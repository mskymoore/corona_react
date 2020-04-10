import React from 'react';
import Card from '@material-ui/core/Card';
import Fade from '@material-ui/core/Fade';
import Container from '@material-ui/core/Container'

export default class PlotContainer extends React.Component {
    render() {
        const plots = ['c_cases_plot', 'c_perc_growth_plot', 'c_growth_plot',
                       'd_cases_plot', 'd_perc_growth_plot', 'd_growth_plot',
                       'r_cases_plot', 'r_perc_growth_plot', 'r_growth_plot']
        return (
            <div>
                <Container >
                    {plots.map(plot =>
                            <Fade in={true} timeout={2500}>
                                <Card style={{ width: '100%', backgroundColor: 'DimGrey', margin: '11px 10px 11px 0px'}}>
                                    <Container>
                                        <Fade in={true} timeout={2500}>
                                            <div id={plot} style={{ margin: '15px 0px 15px'}}>
                                            </div>
                                        </Fade>
                                    </Container>
                                </Card >
                            </Fade>
                        )}
                </Container>
            </div>
        )
    }

}