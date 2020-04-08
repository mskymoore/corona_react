import React from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container'

export default class PlotContainer extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='c_cases_plot'>
                            </div>
                        </Container>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='c_perc_growth_plot'>
                            </div>
                        </Container>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='c_growth_plot'>
                            </div>
                        </Container>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='d_cases_plot'>
                            </div>
                        </Container>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='d_perc_growth_plot'>
                            </div>
                        </Container>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='d_growth_plot'>
                            </div>
                        </Container>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='r_cases_plot'>
                            </div>
                        </Container>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='r_perc_growth_plot'>
                            </div>
                        </Container>
                    </Card>
                    <Card style={{ width: '100%' }}>
                        <Container>
                            <div id='r_growth_plot'>
                            </div>
                        </Container>
                    </Card>
                </Container>
            </div>
        )
    }

}