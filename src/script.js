import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory, hashHistory} from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import MoleculeInformation from './components/MoleculeInformation.jsx';
import MoleculeDisplay from './components/MoleculeDisplay.jsx';
import MoleculeSurfaceDescription from './components/MoleculeSurfaceDescription.jsx';

const molecules = [
    {
        molecule: [ // TODO should probably be called "contitution" or something like that
            {value: "Na", sub: 1},
            {value: "H", sub: 1}
        ],
        name: "NaH",
        numberOfAtoms: "2",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: 'Dissociation energies and potential energy functions for the ground X1sigma+ and "avoided-crossing" A1sigma+ states of NaH',
                surfaceDescription: "Analytic PES determined from experimental data, incorporating the correct theoretically predicted long-range behaviour.",
                DOI: "10.1063/1.4906086",
                references: {one: "15WaSeLe", two: "J. Chem. Phys. 142, 044305 (2015)"},
                year: "2015",
                email: "leroy@uwaterloo.cq",
                supplementaryDescription: "A complete listing of the experimental data used in the analysis and the [calc.-obs.] difference associated with the final recommended model; listings of the first 68 'band constants' for all vibrational levels of X- and A-state NaH and NaD supported by the recommended PESs for this system; a listing of a complete parameters set determined for this system, together with a band-by-band summary of the RMS discrepancies for all of the data used in the analysis; sample data files for use in performing bound-state/Franck-Condon calculations using Program LEVEL; and, a Fortran subroutine for generating the recommended potential energy and effective centrifugal potential functions for the X and A states of NaH and NaD.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-142-028504",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {}
    },

    {
        molecule: [
            {value: "S", sub: 1},
            {value: "O", sub: 2}
        ],
        name: "SO2",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Highly accurate potential energy surface, dipole moment surface, rovibrational energy levels, and infrared line list for 32S16O2 up to 8000 cm−1",
                surfaceDescription: "Ab initio PES, Ames-1, refined with selected HITRAN data.",
                DOI: "10.1063/1.4868327",
                references: {one: "14HuScLe", two: "J. Chem. Phys. 140, 114311 (2014)"},
                year: "2014",
                email: "Xinchuan.Huang-1@nasa.gov or Timothy.J.Lee@nasa.gov or David.W.Schwenke@nasa.gov",
                supplementaryDescription: "A Fortran subroutine to calculate the PES, 'Ames-1'; and, the Ames-296K line list and comparison with HITRAN data and recent experiments.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-140-059411",
                predictedEnergyLevels: "Yes, rovibrational (J=0-80)"
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "Highly accurate potential energy surface, dipole moment surface, rovibrational energy levels, and infrared line list for 32S16O2 up to 8000 cm−1",
                surfaceDescription: "Ab initio CCSD(T)/aug-cc-pV(Q+d)Z DMS without refinement.",
                DOI: "10.1063/1.4868327",
                references: {one: "14HuScLe", two: "J. Chem. Phys. 140, 114311 (2014)"},
                year: "2014",
                email: "Xinchuan.Huang-1@nasa.gov or Timothy.J.Lee@nasa.gov or David.W.Schwenke@nasa.gov",
                supplementaryDescription: "A Fortran subroutine to calculate the DMS, 'DMS-N1'; and, the Ames-296K line list and comparison with HITRAN data and recent experiments.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-140-059411",
                predictedEnergyLevels: "Yes, rovibrational (J=0-80)"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "C", sub: 1},
            {value: "O", sub: 2}
        ],
        name: "CO2",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "An isotopic-independent highly accurate potential energy surface for CO2 isotopologues and an initial 12C16O2 infrared line list",
                surfaceDescription: "Isotopic-independent PES, 'Ames-1', determined by refinement of ab initio PES, 'Ames-0', with selected, experimentally determined rovibrational energy levels. The authors start with the CCSD(T) method, use extrapolation to the one-particle basis set limit, and include corrections for scalar relativity and higher-order electron correlation (for the latter, using the ACPF method).",
                DOI: "10.1063/1.3697540",
                references: {one: "12HuScTa", two: "J. Chem. Phys. 136, 124311 (2012)"},
                year: "2012",
                email: "Xinchuan.Huang-1@nasa.gov (xinchuan@gmail.com) or David.W.Schwenke@nasa.gov or Timothy.J.Lee@nasa.gov",
                supplementaryDescription: "List of references for the experimental data used in this work; Fortran 90 codes of Ames-1 PES with testing program included; and, Ames-296K IR linelist for 12C16O2, with cutoff 1E-30 cm/molecule based on Ames-1 PES and the DMS, J=0-125 calculations.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-136-028213",
                predictedEnergyLevels: "Yes, rovibrational (J=0-125) - 'Ames-296K' IR line list"
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "An isotopic-independent highly accurate potential energy surface for CO2 isotopologues and an initial 12C16O2 infrared line list",
                surfaceDescription: "Ab initio DMS.",
                DOI: "10.1063/1.3697540",
                references: {one: "12HuScTa", two: "J. Chem. Phys. 136, 124311 (2012)"},
                year: "2012",
                email: "Xinchuan.Huang-1@nasa.gov (xinchuan@gmail.com) or David.W.Schwenke@nasa.gov or Timothy.J.Lee@nasa.gov",
                supplementaryDescription: "List of references for the experimental data used in this work; Fortran 90 codes of the DMS (purely CCSD(T)/aug-cc-pVQZ based) with testing program included; and, Ames-296K IR linelist for 12C16O2, with cutoff 1E-30 cm/molecule based on Ames-1 PES and the DMS, J=0-125 calculations.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-136-028213",
                predictedEnergyLevels: "Yes, rovibrational (J=0-125) - 'Ames-296K' IR line list"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "H", sub: 2},
            {value: "O", sub: 1},
        ],
        name: "H20",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Spectroscopically determined potential energy surface of H162OH216O up to 25 000 cm−1",
                surfaceDescription: "A PES is constructed by fitting to observed vibration-rotation energy levels of the system using the exact kinetic energy operator nuclear motion program DVR3D.",
                DOI: "10.1063/1.1532001",
                references: {one: "03ShPoZo", two: "J. Chem. Phys. 118, 2124 (2003)"},
                year: "2003",
                email: "j.tennyson@ucl.ac.uk",
                supplementaryDescription: "Fortran programs giving the PES for two different fits ('A' and 'B'); H16O levels regarded as suspicious; and, reassigned transitions.",
                supplementaryLink: "http://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-118-006305/ ",
                predictedEnergyLevels: "No"
            },
                {
                    paperTitle: "The determination of an accurate isotope dependent potential energy surface for water from extensive ab initio calculations and experimental data",
                    surfaceDescription: "Ab initio isotope dependent PES, computed at 771 points using the 5Z basis set. For the points below 40000 cm-1, the core contribution was also determined using the CQZ basis.",
                    DOI: "10.1063/1.473987",
                    references: {one: "97PaScxx", two: "J. Chem. Phys. 106, 4618 (1997)"},
                    year: "1997",
                    email: "partridge@pegasus.arc.nasa.gov",
                    supplementaryDescription: "Fortran programs to evaluate the PES; V5Z ab initio data; the data displayed in Figure 8 of the manuscript; and, computed energy levels.",
                    supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA-106-4618",
                    predictedEnergyLevels: "NA"
                },
                {
                    paperTitle: "CVRQD ab initio ground-state adiabatic potential energy surfaces for the water molecule",
                    surfaceDescription: 'Ab initio adiabatic PESs of the ground electronic state of the water molecule, called "CVRQD", are extended. The CVRQD PESs are obtained from extrapolation to the complete basis set of nearly full configuration interaction valence-only electronic structure computations, augmented by core, relativistic, quantum electrodynamics, and diagonal Born-Oppenheimer corrections.',
                    DOI: "10.1063/1.2378766",
                    references: {one: "06BaShZo", two: "J. Chem. Phys. 125, 204307 (2006)"},
                    year: "2006",
                    email: "csaszar@ chem.elte.hu",
                    supplementaryDescription: "Fortran routines for the CVRQD PESs for the water isotopologues to be used with the program suite DVR3D.",
                    supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-125-303643",
                    predictedEnergyLevels: "NA"
                },
                {
                    paperTitle: "Water line lists close to experimental accuracy using a spectroscopically determined potential energy surface for H2O16H2O16, H2O17H2O17, and H2O18",
                    surfaceDescription: "Semitheoretical PES obtained by morphing an ab initio potential using experimental energy levels.",
                    DOI: "10.1063/1.2927903",
                    references: {one: "08ShZoOv", two: "J. Chem. Phys. 128, 224306 (2008)"},
                    year: "2008",
                    email: "j.tennyson@ucl.ac.uk",
                    supplementaryDescription: "Fortran programs containing the fitted PESs for the 16O, 17O, and 18O isotopologues.",
                    supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-128-046821",
                    predictedEnergyLevels: "NA"
                }
            ],
        },

        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "The determination of an accurate isotope dependent potential energy surface for water from extensive ab initio calculations and experimental data",
                surfaceDescription: "Ab initio isotope dependent DMS, computed at 771 points using the 5Z basis set. For the points below 40000 cm-1, the core contribution was also determined using the CQZ basis.",
                DOI: "10.1063/1.473987",
                references: {one: "97PaScxx", two: "J. Chem. Phys. 106, 4618 (1997)"},
                year: "1997",
                email: "partridge@pegasus.arc.nasa.gov",
                supplementaryDescription: "Fortran programs to evaluate the DMS; V5Z ab initio data; the data displayed in Figure 8 of the manuscript; and, computed energy levels.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA-106-4618",
                predictedEnergyLevels: "NA"
            },
                {
                    paperTitle: "A new ab initio ground-state dipole moment surface for the water molecule",
                    surfaceDescription: "Valence only DMS computed at the internally contracted multireference configuration interaction level using the aug-cc-pV6Z basis set.",
                    DOI: "10.1063/1.2817606",
                    references: {one: "08LoToTe", two: "J. Chem. Phys. 128, 044304 (2008)"},
                    year: "2008",
                    email: "j.tennyson@ucl.ac.uk",
                    supplementaryDescription: "A Fortran program of the CVR DMS; the computer au-cc-pV6Z MRCI dipoles; and, the relativistic and core correction dipoles.",
                    supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-127-307747",
                    predictedEnergyLevels: "No"
                },
                {
                    paperTitle: "A global, high accuracy ab initio dipole moment surface for the electronic ground state of the water molecule",
                    surfaceDescription: "A highly accurate, global DMS, 'LTP2011', is calculated using ab initio methods. It is based on all-electron, internally contracted multireference configuration interaction, including size-extensivity corrections in the aug-cc-pCV6Z basis set. Three more DMSs were produced and are made available, mainly for testing purposes: LTP2011P - as LTP2011 but based on Pople-corrected dipoles; LTP2011NR - as LTP2011 but does not include the relativistic corrections; and, LTP2011S - as LTP2011 but includes fewer fitting parameters.",
                    DOI: "10.1063/1.3604934",
                    references: {one: "11LoTePo", two: "J. Chem. Phys. 135, 034113 (2011)"},
                    year: "2011",
                    email: "j.tennyson@ucl.ac.uk",
                    supplementaryDescription: "A Fortran 95 routine containing the LTP2011, LTP2011S, LTP2011NR, and LTP20112011P DMSs and the ab initio data on which they are based.",
                    supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-135-042125",
                    predictedEnergyLevels: "No"
                },
                {
                    paperTitle: "Convergence testing of the analytic representation of an ab initio dipole moment function for water: Improved fitting yields improved intensities",
                    surfaceDescription: "Calculations made using an analytic representation of an ab initio DMS.",
                    DOI: "10.1063/1.1311392",
                    references: {one: "00ScPaxx", two: "J. Chem. Phys. 113, 6592 (2000)"},
                    year: "2000",
                    email: "schwenke@pegasus.arc.nasa.gov",
                    supplementaryDescription: "A Fortran subroutine to evaluate the DMS, and four tables of intensity ratios (theory/experiment) for various methods and data.",
                    supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-113-304040",
                    predictedEnergyLevels: "NA"
                }]
        }
    },
    {
        molecule: [
            {value: "H", sub: 3},
        ],
        name: "H3",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "A refined H3 potential energy surface",
                surfaceDescription: "Refined PES, 'BKMP2', based on 8701 ab initio energies.",
                DOI: "10.1063/1.471430",
                references: {one: "96BoKeMa", two: "J. Chem. Phys. 104, 7139 (1996)"},
                year: "1996",
                email: "boothroy@zeus.maths.monash.edu.au or pgmartin@cita.utoronto.ca",
                supplementaryDescription: "Fortran routines for the BKMP2 H3 surface; a Fortran test program to check that the surface is being evaluated correctly on your computer, and a text file containing the correct output from the test program; all the energies used to fit the BKMP2 H3 surface (it contains 5 files of ground-state ab initio energies, and 2 files of non-ab-initio energies that were generated to constrain the surface at short and long range); and, all the ab initio H3 energies computed by the authors (it contains 5 files of ab initio energies, including some excited state energies).",
                supplementaryLink: "http://www.cita.utoronto.ca/~pgmartin/h3pes/index.html",
                predictedEnergyLevels: "No, only ab initio energies"
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "H", sub: 1},
            {value: "D", sub: 1},
            {value: "O", sub: 1},

        ],
        name: "HDO",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Potential energy surface of HDO up to 25000cm−1",
                surfaceDescription: "Spectroscopically determined PES, HDO_07, constructed by adjusting ab initio PES by fitting to experimental data up to 25000 cm-1 and with J≤8.",
                DOI: "10.1063/1.2806165",
                references: {one: "08YuVoTo", two: "J. Chem. Phys. 128, 044312 (2008)"},
                year: "2008",
                email: "j.tennyson@ucl.ac.uk",
                supplementaryDescription: "HDO_07 PES as a Fortran subroutine, and a file containing all assigned J=0 levels.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-127-031744",
                predictedEnergyLevels: "No"
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "H", sub: 2},
            {value: "S", sub: 1},
        ],
        name: "H2S",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "ExoMol molecular line lists – XVI. The rotation–vibration spectrum of hot H2S",
                surfaceDescription: "Empirically-adjusted PES, based on an ab initio PES constructed using the CCSD(T)/aug-cc-pV(Q+d)Z level of theory.",
                DOI: "10.1093/mnras/stw1133",
                references: {one: "16AzTeYu", two: "Mon. Not. R. Astron. Soc., 460(4), pp.4063-4074."},
                year: "2016",
                email: "j.tennyson@ucl.ac.uk",
                supplementaryDescription: "Fortran subroutine with the empirical H2S PESs, 'PES-Y0125', and the partition function of H2S used in the refinements including the corresponding residuals. ",
                supplementaryLink: "http://mnras.oxfordjournals.org/content/suppl/2016/06/03/stw1133.DC1",
                predictedEnergyLevels: "Yes. 'AYT2' line list: a comprehensive list of 114 million 1H2 32S vibration-rotation transitions. AYT2 gives complete coverage up to 11000 cm-1 for temperatures up to 2000 K."
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "The dipole moment surface for hydrogen sulfide H2S",
                surfaceDescription: "A systematic ab initio study of the DMSs of H2S at various levels of theory - the recommended DMS, 'ALYT2', is based on the CCSD(T)/aug-cc-pV(6þd)Z level of theory supplemented by a core-correlation/relativistic corrective surface obtained at the CCSD[T]/aug-cc-pCV5Z-DK level.",
                DOI: "10.1016/j.jqsrt.2015.03.029",
                references: {
                    one: "15AzLoYu",
                    two: "Journal of Quantitative Spectroscopy & Radiative Transfer 161 (2015) 41–49"
                },
                year: "2015",
                email: "NA",
                supplementaryDescription: "A Fortran program which implements the recommended DMS, 'ALYT2'; a spreadsheet comparing line intensities predicted by the different DMSs tested; and, a full list of lines in HITRAN which are identified as problematic.",
                supplementaryLink: "http://www.sciencedirect.com/science/article/pii/S0022407315001314",
                predictedEnergyLevels: "NA"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "H-CO (X", sup: 2},
            {value: "A')", sub: "1"},
        ],
        name: "H-CO(X2A')",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Three-Dimensional Ab Initio Potential Energy Surface for H–CO (X(tilda)2 A')",
                surfaceDescription: "Ab initio potential for the H−CO (X(tilda)2 A') complex in which the CO bond length is varied and the long-range interactions between H and CO are accurately represented. It was computed using the spin-unrestricted open-shell single and double excitation coupled cluster method with perturbative triples [RHFUCCSD(T)]. Three doubly augmented correlation-consistent basis sets were utilized to extrapolate the correlation energy to the complete basis set limit. More than 4400 data points were calculated and used for an analytic fit of the potential: long-range terms with inverse power dependence on the H−CO distance R were fit to the data points for large R, the reproducing kernel Hilbert space (RKHS) method was applied to the data at smaller distances.",
                DOI: "10.1021/jp402470b",
                references: {one: "13SovaGr", two: "J. Phys. Chem. A, 2013, 117 (32), pp 7571–7579"},
                year: "2013",
                email: "gerritg@theochem.ru.nl ",
                supplementaryDescription: "Fortran routines for H-CO and CO potentials; output of the Fortran program, test; database with 4401 geometries and ab initio interaction energies; and, input of MOLPRO run to get ab initio interaction energy for one geometry.",
                supplementaryLink: "http://pubs.acs.org/doi/suppl/10.1021/jp402470b",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "He-", sub: "1"},
            {value: "O", sub: "2"},
        ],
        name: "He-O2",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Three-dimensional ab initio potential energy surface for He–O2",
                surfaceDescription: "An interaction potential with vibrational coordinate dependence is presented for the He–O2 (X3sigmag-) van der Waals complex. The interaction is calculated with the partially spin-restricted open-shell single and double excitation coupled cluster method with perturbative triples [RCCSD(T)] in the supermolecule approach, with correction for the basis set superposition error. The augmented correlation consistent polarized triple zeta (aug-cc-pVTZ) basis set is used with an additional set of bond orbitals. The single reference configuration method breaks down at an O–O separation of r ≈ 3.5 a0. No points with r > 3.1 a0 are used in the construction of the potential surface. A high quality 120 parameter fit to 754 ab initio points is presented. Special attention is given to the extraction of the long range coefficients.",
                DOI: "10.1063/1.1321311",
                references: {one: "00GrStxx", two: "J. Chem. Phys. 113, 9562 (2000)"},
                year: "2000",
                email: "gerritg@theochem.kun.nl",
                supplementaryDescription: "Fortran 77 routines to evaluate the fit of the 3D He-O2 interaction potential; the O2 potential described in J. F. Babb  and A. Dalgarno, Phys. Rev. A, vol 51, p. 3021 (1995); the database of ab initio points; example output of the program; the MOLPRO job used for the ab initio calculations.",
                supplementaryLink: "http://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-113-308045/",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "H", sub: "3"},
            {value: "", sup: "+"}
        ],
        name: "H3+",
        numberOfAtoms: "3",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "The H3+ rovibrational spectrum revisited with a global electronic potential energy surface",
                surfaceDescription: "Global PES, invariant under all permutations of the nuclei, that includes the long range electrostatic interactions analytically.",
                DOI: "10.1063/1.2973629",
                references: {one: "08VeLeAg", two: "J. Chem. Phys. 129, 084307 (2008)"},
                year: "2008",
                email: "miguel.paniagua@uam.es or alfredo.aguado@uam.es or bruno.lepetit@irsamc.ups-tlse.fr",
                supplementaryDescription: "Fortran 77 code for the ground state PES.",
                supplementaryLink: "http://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-129-612834/",
                predictedEnergyLevels: "Rovibrational spectrum available as part of paper."
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "H", sub: "2"},
            {value: "CO", sub: "1"},
        ],
        name: "H2CO",
        numberOfAtoms: "4",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "A new “spectroscopic” potential energy surface for formaldehyde in its ground electronic state",
                surfaceDescription: "Spectroscopic PES for ground electronic state, obtained by refining an ab initio PES in a least-squares fitting to experimental spectroscopic data. The ab initio PES was calculated using CCSD(T)/aug-cc-pVQZ method.",
                DOI: "10.1063/1.3599927",
                references: {one: "11YaYuJe", two: "J. Chem. Phys. 134, 244307 (2011)"},
                year: "2011",
                email: "thiel@mpi-muelheim.mpg.de",
                supplementaryDescription: "Programs (one for ab initio and one for refined potentials); potential energy values of grids; and, experimental and predicted energies.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-134-050123",
                predictedEnergyLevels: "Yes, rovibrational"
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "H", sub: "2"},
            {value: "CS", sub: "1"},
        ],
        name: "H2CS",
        numberOfAtoms: "4",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "High-level ab initio potential energy surfaces and vibrational energies of H2CS",
                surfaceDescription: "6D ab initio PESs generated using CCSD(T)-F12b in conjunction with F12-optimised correlation consistent basis sets (cc-pVTZ-F12 and cc-pVQZ-F12).",
                DOI: "10.1063/1.3624570",
                references: {one: "11YaYuRi", two: "J. Chem. Phys. 135, 074302 (2011)"},
                year: "2011",
                email: "thiel@mpi-muelheim.mpg.de",
                supplementaryDescription: "Fortran 90 routine for calculating the ab initio potential energy values in combination with the given input files; a sample input file containing the VQZ-F12* parameters and grid points; output containing the VQZ-F12* potential energy values of the grid; a sample input file containing the VQZ-F12*HL parameters and grid points; and, output produced containing the VQZ-F12*HL potential energy values of the grid.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-135-010131",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "Theoretical rotation-vibration spectrum of thioformaldehyde",
                surfaceDescription: "Ab initio DMS at CCSD(T) level with aug-cc-pVQZ (aug-cc-pV(Q+d)Z on sulphur) basis set.",
                DOI: "10.1063/1.4832322",
                references: {one: "13YaPoTh", two: "J. Chem. Phys. 139, 204308 (2013)"},
                year: "2013",
                email: "NA",
                supplementaryDescription: "Numerical results for thioformaldehyde: ASCII files containing the calculated rovibrational energies, transition frequencies, and intensities up to J=30; and, dipole moment parameters in ASCII format along with Fortran code to compute the dipole moment surface.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-139-013345",
                predictedEnergyLevels: "Yes, rovibrational"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "H", sub: "4"},
        ],
        name: "H4",
        numberOfAtoms: "4",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "An accurate analytic H4 potential energy surface",
                surfaceDescription: "Analytical PES fitted to 48180 ab initio energies (and to an additional 13367 points generated at larger separations).",
                DOI: "10.1063/1.1405008",
                references: {one: "02BoMaKe", two: "J. Chem. Phys. 116, 666 (2002)"},
                year: "2002",
                email: "NA",
                supplementaryDescription: "Fortran routines for the BMKP H4 surface; a Fortran test program to check that the surface is being evaluated correctly on your computer; all the energies used to fit the BMKP H4 surface (it contains 5 files of ground-state ab initio energies, and 5 files of non-ab-initio energies that were generated to constrain the surface at short and long range); and, all the ab initio H4 energies computed by the authors (it contains 7 files of ab initio energies, including excited state energies).",
                supplementaryLink: "http://www.cita.utoronto.ca/~pgmartin/h4pes/index.html",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "HSOH", sub: "1"},
        ],
        name: "HSOH",
        numberOfAtoms: "4",

        potentialEnergySurface: {
            array: [{
                exists: true,
                paperTitle: "An ab initio calculation of the vibrational energies and transition moments of HSOH",
                surfaceDescription: "Ab initio PES for the electronic ground state of HSOH, calculated by the CCSD(T) method with the aug-cc-pV(Q+d)Z basis set. The energy range covered extends up to 20000 cm-1 above equilibrium.",
                DOI: "10.1016/j.jms.2009.06.010",
                references: {one: "09YuYaTh", two: "Journal of Molecular Spectroscopy 257 (2009) 57–65"},
                year: "2009",
                email: "NA",
                supplementaryDescription: "The ab initio energy values and the parameter values obtained from the fits of the potential energy function, together with Fortran routines for evaluating the corresponding potential energy values at arbitrary geometries; term values; and, transition moments.",
                supplementaryLink: "http://www.sciencedirect.com/science/article/pii/S0022285209001507",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "An ab initio calculation of the vibrational energies and transition moments of HSOH",
                surfaceDescription: "Ab initio DMS for the electronic ground state of HSOH, calculated by the CCSD(T) method with the aug-cc-pV(Q+d)Z basis set. The energy range covered extends up to 20000 cm-1 above equilibrium.",
                DOI: "10.1016/j.jms.2009.06.010",
                references: {one: "09YuYaTh", two: "Journal of Molecular Spectroscopy 257 (2009) 57–65"},
                year: "2009",
                email: "NA",
                supplementaryDescription: "The optimized parameters and a Fortran routine for calculating the dipole moment values; term values; and, transition moments.",
                supplementaryLink: "http://www.sciencedirect.com/science/article/pii/S0022285209001507",
                predictedEnergyLevels: "NA"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "N", sub: "1"},
            {value: "H", sub: "3"},
        ],
        name: "NH3",
        numberOfAtoms: "4",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Potential-energy surface for the electronic ground state of NH3 up to 20000cm−1 above equilibrium",
                surfaceDescription: "6D ab initio PES for electronic ground state of NH3, generated using CCSD(T) and aug-cc-pVTZ basis. A spectroscopic PES is determined by a slight empirical adjustment of the ab initio potential to the experimental vibrational term values.",
                DOI: "10.1063/1.2047572",
                references: {one: "05YuZhLi", two: "J. Chem. Phys. 123, 134308 (2005)"},
                year: "2005",
                email: "thiel@mpi-muelheim.mpg.de ",
                supplementaryDescription: "Potential energy parameters and symmetry relations; a Fortran 90 routine for calculating potential energy values from the given parameters; and, example input files.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-123-004536",
                predictedEnergyLevels: "NA"
            },
                {
                    paperTitle: "Towards efficient refinement of molecular potential energy surfaces: Ammonia as a case study",
                    surfaceDescription: "Spectroscopic PES, 'NH3-Y2010', for which the refinement is represented as a perturbation to the initial PES, which is diagonalised in a basis of eigenfunctions of the unperturbed Hamiltonian. NH3-Y2010 is constructed using literature values for observed spectroscopic data for J≤8 and covering the energy range below 10300 cm-1.  ",
                    DOI: "10.1016/j.jms.2011.04.005",
                    references: {one: "11YuBaTe", two: "Journal of Molecular Spectroscopy 268 (2011) 123–129"},
                    year: "2011",
                    email: "j.tennyson@ucl.ac.uk or s.yurchenko@ucl.ac.uk or r.barber@ucl.ac.uk or thiel@mpi-muelheim.mpg.de or jensen@uni-wuppertal.de",
                    supplementaryDescription: "Fortran 90 routine for calculating PE values in combination with an input file containing the potential parameters; and, a set of experimental energies selected for the refinements, along with the corresponding calculated term values and the Obs.-Calc. deviations.",
                    supplementaryLink: "http://www.sciencedirect.com/science/article/pii/S0022285211000932",
                    predictedEnergyLevels: "NA"
                }

            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "C", sub: "1"},
            {value: "H", sub: "3"},
        ],
        name: "CH3",
        numberOfAtoms: "4",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Ro-vibrational averaging of the isotropic hyperfine coupling constant for the methyl radical",
                surfaceDescription: "Ab initio PES for the electronic ground state of CH3, calculated at the CCSD(T)-F12 level with the correlation consistent basis set cc-pVQZ-F12.",
                DOI: "10.1063/1.4938253",
                references: {one: "15AdYaYu", two: "J. Chem. Phys. 143, 244306 (2015)"},
                year: "2015",
                email: "s.yurchenko@ucl.ac.uk",
                supplementaryDescription: "Fortran 90 routine for calculating PESs of CH3; vibrational energy values up to 8000 cm-1  for CH3 and its isotopologues.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-143-057548",
                predictedEnergyLevels: "Yes. Vibrational energy values up to 8000 cm-1  for CH3 and its isotopologues."
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "Sb", sub: "1"},
            {value: "H", sub: "3"},
        ],
        name: "SbH3",
        numberOfAtoms: "4",

        potentialEnergySurface: {},
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "A theoretical-spectroscopy, ab-initio-based study of the electronic ground state of 121SbH3",
                surfaceDescription: "Ab initio DMS obtained using the CCSD(T) method in conjunction with the pseudopotential ECP46MWB and the SDB-aug-cc-pVTZ basis to describe the Sb atom and the aug-cc-pVTZ basis set to describe the hydrogen atoms.",
                DOI: "10.1016/j.jqsrt.2010.03.008",
                references: {
                    one: "10YuCaYa",
                    two: "Journal of Quantitative Spectroscopy & Radiative Transfer 111 (2010) 2279–2290"
                },
                year: "2010",
                email: "s.yurchenko@ucl.ac.uk",
                supplementaryDescription: "A Fortran 90 routine for calculating the DMS; vibrational transition moments; vibrational intensities; and, a line list for 121SbH3.",
                supplementaryLink: "http://www.sciencedirect.com/science/article/pii/S0022407310000944",
                predictedEnergyLevels: "NA"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "S", sub: "1"},
            {value: "O", sub: "3"},
        ],
        name: "SO3",
        numberOfAtoms: "4",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "An ab initio variationally computed room-temperature line list for 32S16O3",
                surfaceDescription: "Ab initio PES computed at the CCSD(T)-F12b level of theory with appropriate triple-zeta basis sets.",
                DOI: "10.1039/C3CP50303H",
                references: {one: "13UnTeYu", two: "Phys. Chem. Chem. Phys., 2013,15, 10118-10125"},
                year: "2015",
                email: "s.yurchenko@ucl.ac.uk",
                supplementaryDescription: "A Fortran 90 routine for calculating potential energy values in combination with an input file; an input file containing the ab initio potential parameters defining the PES of SO3; an input file containing the morphed potential parameters defining the PES of SO3; and, experimental data with relative intensities scaled to an absolute value.",
                supplementaryLink: "http://pubs.rsc.org/en/content/articlelanding/2013/cp/c3cp50303h#!divAbstract",
                predictedEnergyLevels: "Yes, pure rotational and rotation-vibration line lists are available from www.exomol.com."
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "An ab initio variationally computed room-temperature line list for 32S16O3",
                surfaceDescription: "Ab initio DMS computed at the CCSD(T)-F12b level of theory with appropriate triple-zeta basis sets.",
                DOI: "10.1039/C3CP50303H",
                references: {one: "13UnTeYu", two: "Phys. Chem. Chem. Phys., 2013,15, 10118-10125"},
                year: "2015",
                email: "s.yurchenko@ucl.ac.uk",
                supplementaryDescription: "A program to compute the Cartesian dipole moment components of SO3 for arbitrary geometry (in Cartesian coordinate representation) from the dipole moment parameters in the single molecular bond (SMB) represention; an input file containing the ab initio dipole moment parameters of SO3 in its ground electronic states in the SMB representation for frequency range nu=3330..3338 cm-1; and, experimental data with relative intensities scaled to an absolute value.",
                supplementaryLink: "http://pubs.rsc.org/en/content/articlelanding/2013/cp/c3cp50303h#!divAbstract",
                predictedEnergyLevels: "Yes, pure rotational and rotation-vibration line lists are available from www.exomol.com."
            }
            ]
        }
    },
    {
        molecule: [
            {value: "N", sub: "2"},
            {value: "O-", sub: "1"},
            {value: "He", sub: "1"}
        ],
        name: "N2O-He",
        numberOfAtoms: "4",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "A new four-dimensional ab initio potential energy surface for N2O–He and vibrational band origin shifts for the N2O–He N clusters with N = 1–40",
                surfaceDescription: "4D ab initio PES is constructed at the CCSD(T) level with an aug-cc-pVQZ basis set together with bond functions. The vibrational coordinates Q1 and Q3 of N2O are explicitly included, due to the strong coupling between the symmetric and asymmetric stretches of N2O. A global PES is obtained by fitting the original potential points to a 4D Morse/long range (MLR) analytical form. In the fitting, the ab initio noise in the long range region of the potential is smoothed over by theoretically fixed long range parameters. 2D intermolecular potentials for both the ground and the excited nu-3 states of N2O are then constructed by vibrationally averaging the 4D potential.",
                DOI: "10.1063/1.4749248",
                references: {one: "12WaXiLe", two: "J. Chem. Phys. 137, 104311 (2012)"},
                year: "2012",
                email: "dqxie@nju.edu.cn or leroy@uwaterloo.ca",
                supplementaryDescription: "A listing of the 21390 ab initio points defining the 4D PES for N2O-He; a Fortran subroutine for generating the 4D MLR PES for N2O-He; a Fortran subroutine for generating the 2D MLR potential energy surfaces for (14)N2(16)O-He; a full listing of the parameters defining the analytic 4D MLR potential energy surfaces for N2O-He; and, a list of the calculated vibrational band origin shifts of N2O plotted in Fig.3 in the paper.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-137-039234",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "C", sub: "1"},
            {value: "H", sub: "4"},
        ],
        name: "CH4",
        numberOfAtoms: "5",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Vibrational transition moments of CH4 from first principles",
                surfaceDescription: "Spectroscopic PES. An ab initio PES was computed by employing the CCSD(T)-F12c approach with an aug-cc-pVQZ-F12 basis set. The frozen core approximation was applied in the coupled cluster calculations. Relativistic corrections were computed using the second-order Douglas Knoll method.",
                DOI: "10.1016/j.jms.2013.05.014",
                references: {one: "13YuTeBa", two: "Journal of Molecular Spectroscopy 291 (2013) 69–76"},
                year: "2013",
                email: "s.yurchenko@ucl.ac.uk",
                supplementaryDescription: "A Fortran 90 program to compute the Cartesian dipole moment components and potential energy values of CH4 for an arbitrary geometry from the dipole moment and potential parameters; ab initio and dipole moment parameters; refined potential and ab initio dipole moment parameters in a compact representation; and, a list of vibrational transition moments, individual vibrational matrix elements of the Cartesian components of the dipole moment, and band intensities of 12CH4 at T=298.15K",
                supplementaryLink: "http://www.sciencedirect.com/science/article/pii/S0022285213000866",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "Vibrational transition moments of CH4 from first principles",
                surfaceDescription: "9D ab initio electric DMSs of methane in its ground electronic state are presented. They are computed using a CCSD(T)-F12 method in conjugation with an F12-optimised correlation consistent basis of the TZ family, namely aug-cc-pVTZ-F12. A symmetrised molecular bond representation is used to parametrise the 9D DMSs in terms of sixth-order polynomials.",
                DOI: "10.1016/j.jms.2013.05.014",
                references: {one: "13YuTeBa", two: "Journal of Molecular Spectroscopy 291 (2013) 69–76"},
                year: "2013",
                email: "s.yurchenko@ucl.ac.uk",
                supplementaryDescription: "A Fortran 90 program to compute the Cartesian dipole moment components and potential energy values of CH4 for an arbitrary geometry from the dipole moment and potential parameters; ab initio and dipole moment parameters; refined potential and ab initio dipole moment parameters in a compact representation; a list of vibrational transition moments, individual vibrational matrix elements of the Cartesian components of the dipole moment, and band intensities of 12CH4 at T=298.15K.",
                supplementaryLink: "http://www.sciencedirect.com/science/article/pii/S0022285213000866",
                predictedEnergyLevels: "NA"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "Si", sub: "1"},
            {value: "H", sub: "4"},
        ],
        name: "SiH4",
        numberOfAtoms: "5",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "A global potential energy surface and dipole moment surface for silane",
                surfaceDescription: "9D global PES, CBS-F12HL, generated using high-level ab initio theory and based on explicitly correlated coupled cluster calculations with extrapolation to the complete basis set limit.",
                DOI: "10.1063/1.4938563",
                references: {one: "15OwYuYa", two: "J. Chem. Phys. 143, 244317 (2015)"},
                year: "2015",
                email: "owens@mpi-muelheim.mpg.de",
                supplementaryDescription: "Source Fortran code to construct potential energy surface for silane (the program will print potential energy at chosen geometries for respective potential energy surface); a Fortran 90 program to compute the Cartesian dipole moment components and potential energy values (cm-1) of XY4 molecule for an arbitrary geometry from the dipole moment and potential parameters the program requires a Lapack subroutine dgells to solve a 3x3 system of linear equation, which can be replaced by any linear solver); and, input files for both Fortran programs.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-143-010601",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "A global potential energy surface and dipole moment surface for silane",
                surfaceDescription: "9D global DMS generated using high-level ab initio theory and the aug-cc-pVTZ(+d for Si) basis set.",
                DOI: "10.1063/1.4938563",
                references: {one: "15OwYuYa", two: "J. Chem. Phys. 143, 244317 (2015)"},
                year: "2015",
                email: "owens@mpi-muelheim.mpg.de",
                supplementaryDescription: "Source Fortran code to construct potential energy surface for silane (the program will print potential energy at chosen geometries for respective potential energy surface); a Fortran 90 program to compute the Cartesian dipole moment components and potential energy values (cm-1) of XY4 molecule for an arbitrary geometry from the dipole moment and potential parameters the program requires a Lapack subroutine dgells to solve a 3x3 system of linear equation, which can be replaced by any linear solver); and, input files for both Fortran programs.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-143-010601",
                predictedEnergyLevels: "NA"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "C", sub: "1"},
            {value: "H", sub: "3"},
            {value: "Cl", sub: "1"},
        ],
        name: "CH3Cl",
        numberOfAtoms: "5",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Accurate ab initio vibrational energies of methyl chloride",
                surfaceDescription: "Two 9D PESs generated using high-level ab initio theory for the two main isotopologues of methyl chloride, CH3 35Cl and CH3 37Cl. The respective PESs, CBS-35 HL, and CBS-37 HL, are based on explicitly correlated coupled cluster calculations with extrapolation to the complete basis set (CBS) limit, and incorporate a range of higher-level (HL) additive energy corrections to account for core-valence electron correlation, higher-order coupled cluster terms, scalar relativistic effects, and diagonal Born-Oppenheimer corrections.",
                DOI: "10.1063/1.4922890",
                references: {one: "15OwYuYa", two: "J. Chem. Phys. 142, 244306 (2015)"},
                year: "2015",
                email: "owens@mpi-muelheim.mpg.de",
                supplementaryDescription: "Source Fortran code to construct PESs for CH3Cl; parameters of the CBS-35 HL and CBS-37 HL PESs; and, vibrational energy level assignment of CH3Cl.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-142-009525",
                predictedEnergyLevels: "Yes, vibrational energy levels."
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "A global ab initio dipole moment surface for methyl chloride",
                surfaceDescription: "A DMS for methyl chloride has been generated at the CCSD(T)/aug-cc-pVQZ(+d for Cl) level of theory. To represent the DMS, a symmetry-adapted analytic representation in terms of nine vibrational coordinates has been developed and implemented.",
                DOI: "10.1016/j.jqsrt.2016.06.037",
                references: {one: "16OwYuYa", two: "Journal of Quantitative Spectroscopy & Radiative Transfer 184 (2016) 100–110"},
                year: "2016",
                email: "alec.owens.13@ucl.ac.uk",
                supplementaryDescription: "Source Fortran code to construct DMS for methyl chloride (program will print Cartesian dipole moment components (D) for an arbitrary geometry using the DMS parameters); input file containing the DMS expansion parameters to use with the Fortran program; and, a spreadsheet containing vibrational transition moments (in Debye) from the vibrational ground state for both isotopologues of methyl chloride (also includes computed energies (in cm-1) and assignments from J. Chem. Phys. 142, 244306 (2015)).",
                supplementaryLink: "http://www.sciencedirect.com.libproxy.ucl.ac.uk/science/article/pii/S0022407316302655",
                predictedEnergyLevels: "NA"
            }
            ]
        }
    },
    {
        molecule: [
            {value: "H", sub: "2"},
            {value: "O-", sub: "1"},
            {value: "C", sub: "1"},
            {value: "O", sub: "2"},
        ],
        name: "H2O-CO2",
        numberOfAtoms: "6",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Intermolecular potential energy surface and second virial coefficients for the water–CO2 dimer",
                surfaceDescription: "5D intermolecular PES calculated using second-order Møller-Plesset perturbation theory and CCSD(T). aug-cc-pVTZ and aug-cc-pVQZ basis sets used for MP2 calculations, aug-cc-pVTZ used for CCSD(T) calculations.",
                DOI: "10.1063/1.3574345",
                references: {one: "11WhHaxx", two: "J. Chem. Phys. 134, 134309 (2011)"},
                year: "2011",
                email: "Richard.Wheatley@nottingham.ac.uk or aharvey@boulder.nist.gov",
                supplementaryDescription: "8820 intermolecular geometries; 8820 sets of intermolecular energies, one set per geometry (six energies are given: SCF/TZ, SCF/QZ, MP2/TZ, MP2/QZ, CCSD(T)/TZ and the estimated CCSD(T)/CBS interaction energy. Units are Hartree.); a Fortran subroutine and example main program to evaluate the fitted CO2-H2O energy in Hartree; input reference geometries for the program for CO2 and H2O; and, parameters for the fitted potential, in Hartree and Bohr.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-134-007114",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {}
    },
    {
        molecule: [
            {value: "H", sub: "1"},
            {value: "C", sub: "1"},
            {value: "N-", sub: "1"},
            {value: "H", sub: "1"},
            {value: "N", sub: "1"},
            {value: "C", sub: "1"},

        ],
        name: "HCN-HNC",
        numberOfAtoms: "6",

        potentialEnergySurface: {
            exists: true,
            array: [{
                paperTitle: "Ab initio global potential, dipole, adiabatic, and relativistic correction surfaces for the HCN–HNC system",
                surfaceDescription: "Ab initio semiglobal PES for the isomerising HCN-HNC system calculated principally at the all-electron cc-pCVQZ CCSD(T) level. Several PESs are presented in the paper.",
                DOI: "10.1063/1.1383586",
                references: {one: "01vaHaPo", two: "J. Chem. Phys. 115, 3706 (2001)"},
                year: "2001",
                email: "NA",
                supplementaryDescription: "The ab initio data of 243 potential energy points, 242 dipole points, 242 relativistic correction points and 242 adiabatic correction points; and, Fortran routines and constants of the fits for the VQZANO+ PES, the dipole surface, the relativistic correction surface and the adiabatic correction surface.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-115-307129",
                predictedEnergyLevels: "NA"
            }
            ]
        },
        dipoleMomentSurface: {
            exists: true,
            array: [{
                paperTitle: "Ab initio global potential, dipole, adiabatic, and relativistic correction surfaces for the HCN–HNC system",
                surfaceDescription: "Ab initio semiglobal DMS for the isomerising HCN-HNC system calculated principally at the all-electron cc-pCVQZ CCSD(T) level. ",
                DOI: "10.1063/1.1383586",
                references: {one: "01vaHaPo", two: "J. Chem. Phys. 115, 3706 (2001)"},
                year: "2001",
                email: "j.tennyson@ucl.ac.uk",
                supplementaryDescription: "The ab initio data of 243 potential energy points, 242 dipole points, 242 relativistic correction points and 242 adiabatic correction points; and, Fortran routines and constants of the fits for the VQZANO+ PES, the dipole surface, the relativistic correction surface and the adiabatic correction surface.",
                supplementaryLink: "ftp://ftp.aip.org/epaps/journ_chem_phys/E-JCPSA6-115-307129",
                predictedEnergyLevels: "NA"
            }
            ]
        }
    },
];

/** molecule: "",
 numberOfAtoms: "",
 *
 * exists: true,
 paperTitle: "",
 surfaceDescription: "",
 DOI: "",
 references: {one: "", two: ""},
 year: "",
 email: "",
 supplementaryDescription: "",
 supplementaryLink: "",
 predictedEnergyLevels: "" **/
class HomeWrapper extends React.Component {
    render() {
        console.log("Home loaded")
        return <Home molecules={molecules}/>
    }
}

class MoleculeInformationWrapper extends React.Component {
    render() {
        console.log("Information loaded")
        return <MoleculeInformation molecules={molecules} path={this.props.params.moleculeName}/>
    }
}

class PotentialMoleculeDisplayWrapper extends React.Component {
    findMoleculeByName(name) {
        return molecules.filter((molecule) => molecule.name == name)
    }

    render() {
        const molecule = this.findMoleculeByName(this.props.params.moleculeName)[0];
        return <MoleculeDisplay type="Potential" name={molecule.molecule} urlName={this.props.params.moleculeName}
                                data={molecule.potentialEnergySurface}/>
    }
}

class DipoleMoleculeDisplayWrapper extends React.Component {
    findMoleculeByName(name) {
        return molecules.filter((molecule) => molecule.name == name)
    }

    render() {
        const molecule = this.findMoleculeByName(this.props.params.moleculeName)[0];
        return <MoleculeDisplay type="Dipole" name={molecule.molecule} urlName={this.props.params.moleculeName}
                                data={molecule.dipoleMomentSurface}/>
    }
}

class MoleculeSurfaceDescriptionWrapper extends React.Component {
    findMoleculeByName(name) {
        return molecules.filter((molecule) => molecule.name == name)
    }

    render() {
        const molecule = this.findMoleculeByName(this.props.params.moleculeName);
        return this.props.route.path.includes("Potential") ? <MoleculeSurfaceDescription name={molecule[0].molecule}
                                                                                         data={molecule[0].potentialEnergySurface.array[this.props.params.index]}/> :
            <MoleculeSurfaceDescription name={molecule[0].molecule}
                                        data={molecule[0].dipoleMomentSurface.array[this.props.params.index]}/>
    }
}

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomeWrapper}/>
            <Route path="molecule/:moleculeName" component={MoleculeInformationWrapper}/>
            <Route path="molecule/:moleculeName/Potential" component={PotentialMoleculeDisplayWrapper}/>
            <Route path="molecule/:moleculeName/Dipole" component={DipoleMoleculeDisplayWrapper}/>
            <Route path="molecule/:moleculeName/Dipole" component={DipoleMoleculeDisplayWrapper}/>
            <Route path="molecule/:moleculeName/Potential/index/:index" component={MoleculeSurfaceDescriptionWrapper}/>
            <Route path="molecule/:moleculeName/Dipole/index/:index" component={MoleculeSurfaceDescriptionWrapper}/>
        </Route>
    </Router>,
    document.getElementById('react-container')
)
