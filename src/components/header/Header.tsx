import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import machineImage from '../../assets/maquina.png';
import locationImage from '../../assets/GPS.png';
import RPM from '../../assets/rpm.png';
import Duration from '../../assets/duracao.png';
import V from '../../assets/voltas.png';

const Item = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(2),
}));

export default function AnalysisData() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography marginTop={5} ml={5} variant="h5" gutterBottom>
                        Análise de Dados
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid ml={15} container spacing={2}>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <img
                                    src={machineImage}
                                    alt="Máquina"
                                    width={20}
                                    height={20}
                                />
                                <Typography
                                    paddingTop={1}
                                    paddingLeft={1}
                                    variant="body2"
                                    gutterBottom
                                >
                                    Máquina 1023
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <img
                                    src={locationImage}
                                    alt="Localização"
                                    width={20}
                                    height={20}
                                />
                                <Typography
                                    paddingTop={1}
                                    paddingLeft={1}
                                    variant="body2"
                                    gutterBottom
                                >
                                    Ponto 20192
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <img src={RPM} alt="RPM" width={20} height={20} />
                                <Typography
                                    paddingTop={1}
                                    paddingLeft={1}
                                    variant="body2"
                                    gutterBottom
                                >
                                    200
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <img
                                    src={Duration}
                                    alt="Duração"
                                    width={20}
                                    height={20}
                                />
                                <Typography
                                    paddingTop={1}
                                    paddingLeft={1}
                                    variant="body2"
                                    gutterBottom
                                >
                                    16g
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={3} md={2}>
                            <Item>
                                <img src={V} alt="Voltas" width={20} height={20} />
                                <Typography
                                    paddingTop={1}
                                    paddingLeft={1}
                                    variant="body2"
                                    gutterBottom
                                >
                                    20 min
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
