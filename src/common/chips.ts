interface Saves {
    [key: string]: any;
}
export const chips: Saves = {
    "1bit-REGISTER": {
        Name: "1bit-REGISTER",
        Colour: "#D50036",
        displayID: 0,
        InputPins: [
            {
                Name: "DATA",
                ID: 1093997570,
                PositionY: 1.45370364,
                ColourThemeName: "Red",
            },
            {
                Name: "WRITE",
                ID: 927604864,
                PositionY: 0.8981484,
                ColourThemeName: "Red",
            },
            {
                Name: "CLOCK",
                ID: 1323027851,
                PositionY: -2.26851845,
                ColourThemeName: "Red",
            },
            {
                Name: "ENABLE",
                ID: 1897190903,
                PositionY: -1.70370364,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "OUT",
                ID: 1720878372,
                PositionY: 0.5740738,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "D-FLIP-FLOP",
                ID: 79170535,
                Points: [{ X: -1.25925875, Y: 0.814814 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1598603467,
                Points: [{ X: -5.84259272, Y: 1.111111 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1055011345,
                Points: [{ X: -5.84259272, Y: 1.61111116 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 2120539330,
                Points: [{ X: -4.34259224, Y: 1.71296239 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 242077112,
                Points: [{ X: -3.29629636, Y: 0.935184956 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 299395713,
                Points: [{ X: 3.33333349, Y: 0.6666666 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1323027851 },
                Target: { PinType: 3, SubChipID: 79170535, PinID: 1325456643 },
                WirePoints: [
                    { X: -7.837778, Y: -2.26851845 },
                    { X: -3.037037, Y: -2.28703713 },
                    { X: -2.90740776, Y: 0.6851852 },
                    { X: -2.32925868, Y: 0.694813967 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 242077112, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 79170535, PinID: 1252284597 },
                WirePoints: [
                    { X: -2.84629631, Y: 0.935184956 },
                    { X: -2.32925868, Y: 0.934814 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 927604864 },
                Target: { PinType: 3, SubChipID: 1598603467, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.8981484 },
                    { X: -6.392593, Y: 0.99111104 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 927604864 },
                Target: { PinType: 3, SubChipID: 1055011345, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 0.8981484 },
                    { X: -6.968672, Y: 0.954054356 },
                    { X: -6.392593, Y: 1.61111116 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1093997570 },
                Target: { PinType: 3, SubChipID: 1598603467, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.45370364 },
                    { X: -6.392593, Y: 1.231111 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1055011345, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2120539330, PinID: 1 },
                WirePoints: [
                    { X: -5.29259253, Y: 1.61111116 },
                    { X: -4.89259243, Y: 1.59296238 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 79170535, PinID: 1343169056 },
                Target: { PinType: 3, SubChipID: 2120539330, PinID: 0 },
                WirePoints: [
                    { X: -0.189258814, Y: 0.694813967 },
                    { X: 0.249448925, Y: 0.690731466 },
                    { X: 0.3148153, Y: 2.33333349 },
                    { X: -5.15740728, Y: 2.32407379 },
                    { X: -5.185186, Y: 1.86111093 },
                    { X: -4.89259243, Y: 1.83296239 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1598603467, PinID: 2 },
                Target: { PinType: 3, SubChipID: 242077112, PinID: 1969904689 },
                WirePoints: [
                    { X: -5.29259253, Y: 1.111111 },
                    { X: -3.74629641, Y: 0.815184951 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2120539330, PinID: 2 },
                Target: { PinType: 3, SubChipID: 242077112, PinID: 207650570 },
                WirePoints: [
                    { X: -3.79259229, Y: 1.71296239 },
                    { X: -3.74629641, Y: 1.055185 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1897190903 },
                Target: { PinType: 3, SubChipID: 299395713, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.70370364 },
                    { X: 0.898148239, Y: -0.833333433 },
                    { X: 2.41333342, Y: 0.841666639 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 299395713, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1720878372 },
                WirePoints: [
                    { X: 4.25333357, Y: 0.6666666 },
                    { X: 7.837778, Y: 0.5740738 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 79170535, PinID: 1343169056 },
                Target: { PinType: 3, SubChipID: 299395713, PinID: 1 },
                WirePoints: [
                    { X: -0.189258814, Y: 0.694813967 },
                    { X: 0.0371075422, Y: 0.6927075 },
                    { X: 2.41333342, Y: 0.491666615 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "3 NAND": {
        Name: "3 NAND",
        Colour: "#A569C3",
        displayID: 0,
        InputPins: [
            {
                Name: "0",
                ID: 1922562275,
                PositionY: 2.268519,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 1627345777,
                PositionY: 1.66666687,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 1737185950,
                PositionY: 1.07407391,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 563346421,
                PositionY: 1.62037015,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "3AND",
                ID: 1118893057,
                Points: [{ X: -4.962963, Y: 1.81481481 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 856980274,
                Points: [{ X: -2.12962961, Y: 1.76851869 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1922562275 },
                Target: {
                    PinType: 3,
                    SubChipID: 1118893057,
                    PinID: 1031037051,
                },
                WirePoints: [
                    { X: -7.837778, Y: 2.268519 },
                    { X: -5.607963, Y: 2.05481482 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1627345777 },
                Target: {
                    PinType: 3,
                    SubChipID: 1118893057,
                    PinID: 1494133027,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.66666687 },
                    { X: -5.607963, Y: 1.81481481 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1737185950 },
                Target: { PinType: 3, SubChipID: 1118893057, PinID: 97537940 },
                WirePoints: [
                    { X: -7.837778, Y: 1.07407391 },
                    { X: -5.607963, Y: 1.5748148 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1118893057,
                    PinID: 1697059946,
                },
                Target: { PinType: 3, SubChipID: 856980274, PinID: 0 },
                WirePoints: [
                    { X: -4.317963, Y: 1.81481481 },
                    { X: -2.67962956, Y: 1.76851869 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 856980274, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 563346421 },
                WirePoints: [
                    { X: -1.57962966, Y: 1.76851869 },
                    { X: 7.837778, Y: 1.62037015 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "3 NOR": {
        Name: "3 NOR",
        Colour: "#F2EC19",
        displayID: 0,
        InputPins: [
            {
                Name: "Pin",
                ID: 856191646,
                PositionY: 1.82407379,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 954792288,
                PositionY: 1.31481469,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1269232860,
                PositionY: 0.6944442,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 2013732582,
                PositionY: 1.07407391,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "OR",
                ID: 328957213,
                Points: [{ X: -5.296296, Y: 1.43287063 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 239164612,
                Points: [{ X: -3.62037, Y: 0.9097224 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 988456177,
                Points: [{ X: -1.20370388, Y: 1.05555534 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 856191646 },
                Target: { PinType: 3, SubChipID: 328957213, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 1.82407379 },
                    { X: -5.746296, Y: 1.55287063 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 954792288 },
                Target: { PinType: 3, SubChipID: 328957213, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 1.31481469 },
                    { X: -5.746296, Y: 1.31287062 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 328957213, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 239164612, PinID: 207650570 },
                WirePoints: [
                    { X: -4.84629631, Y: 1.43287063 },
                    { X: -4.07036972, Y: 1.02972233 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1269232860 },
                Target: { PinType: 3, SubChipID: 239164612, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 0.6944442 },
                    { X: -4.07036972, Y: 0.7897224 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 239164612, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 988456177, PinID: 0 },
                WirePoints: [
                    { X: -3.17036986, Y: 0.9097224 },
                    { X: -1.75370383, Y: 1.05555534 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 988456177, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2013732582 },
                WirePoints: [
                    { X: -0.653703868, Y: 1.05555534 },
                    { X: 7.837778, Y: 1.07407391 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "3AND": {
        Name: "3AND",
        Colour: "#39B2D7",
        InputPins: [
            {
                Name: "Pin",
                ID: 1031037051,
                PositionY: 1.62037015,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1494133027,
                PositionY: 1.06481493,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 97537940,
                PositionY: 0.5000001,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 1697059946,
                PositionY: 0.8518517,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "AND",
                ID: 1164173052,
                Points: [{ X: -6.509259, Y: 1.24768555 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1674216633,
                Points: [{ X: -4.685185, Y: 0.8611119 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1031037051 },
                Target: { PinType: 3, SubChipID: 1164173052, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.62037015 },
                    { X: -7.05925941, Y: 1.36768556 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1494133027 },
                Target: { PinType: 3, SubChipID: 1164173052, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 1.06481493 },
                    { X: -7.05925941, Y: 1.12768555 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 97537940 },
                Target: { PinType: 3, SubChipID: 1674216633, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.5000001 },
                    { X: -5.235185, Y: 0.7411119 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1164173052, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1674216633, PinID: 0 },
                WirePoints: [
                    { X: -5.959259, Y: 1.24768555 },
                    { X: -5.235185, Y: 0.9811119 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1674216633, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1697059946 },
                WirePoints: [
                    { X: -4.135185, Y: 0.8611119 },
                    { X: 7.837778, Y: 0.8518517 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "3NOT": {
        Name: "3NOT",
        Colour: "#BA1616",
        InputPins: [
            {
                Name: "Pin",
                ID: 919246279,
                PositionY: 1.55555546,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 466261574,
                PositionY: 1.05555534,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1958201299,
                PositionY: 0.5277777,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 1308068964,
                PositionY: 1.82407379,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 849462265,
                PositionY: 1.3611114,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 733224219,
                PositionY: 0.9166664,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "NOT",
                ID: 1609166485,
                Points: [{ X: -2.20370364, Y: 1.46240735 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1965139463,
                Points: [{ X: -2.20370364, Y: 0.9074074 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 133833521,
                Points: [{ X: -2.20370364, Y: 0.352407455 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 1609166485, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1308068964 },
                WirePoints: [
                    { X: -1.65370369, Y: 1.46240735 },
                    { X: 7.837778, Y: 1.82407379 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1965139463, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 849462265 },
                WirePoints: [
                    { X: -1.65370369, Y: 0.9074074 },
                    { X: 7.837778, Y: 1.3611114 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 133833521, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 733224219 },
                WirePoints: [
                    { X: -1.65370369, Y: 0.352407455 },
                    { X: 7.837778, Y: 0.9166664 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1958201299 },
                Target: { PinType: 3, SubChipID: 133833521, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 0.5277777 },
                    { X: -2.75370359, Y: 0.352407455 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 466261574 },
                Target: { PinType: 3, SubChipID: 1965139463, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.05555534 },
                    { X: -2.75370359, Y: 0.9074074 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 919246279 },
                Target: { PinType: 3, SubChipID: 1609166485, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.55555546 },
                    { X: -2.75370359, Y: 1.46240735 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "4AND": {
        Name: "4AND",
        Colour: "#2000FF",
        InputPins: [
            {
                Name: "0",
                ID: 1412749308,
                PositionY: 2.490741,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 1839139777,
                PositionY: 1.92592621,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 1666844580,
                PositionY: 1.34259284,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1496321589,
                PositionY: 0.768518448,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "OUT",
                ID: 1205844992,
                PositionY: 0.490740538,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "AND",
                ID: 1256146743,
                Points: [{ X: 1.45370388, Y: 0.8310182 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1557905309,
                Points: [{ X: -0.249999911, Y: 1.15972209 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 509579943,
                Points: [{ X: -0.249999911, Y: 0.5347221 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1496321589 },
                Target: { PinType: 3, SubChipID: 509579943, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.768518448 },
                    { X: -0.799999952, Y: 0.414722085 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1666844580 },
                Target: { PinType: 3, SubChipID: 509579943, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.34259284 },
                    { X: -0.799999952, Y: 0.6547221 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1839139777 },
                Target: { PinType: 3, SubChipID: 1557905309, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 1.92592621 },
                    { X: -0.799999952, Y: 1.03972208 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1412749308 },
                Target: { PinType: 3, SubChipID: 1557905309, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 2.490741 },
                    { X: -0.799999952, Y: 1.27972209 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 509579943, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1256146743, PinID: 1 },
                WirePoints: [
                    { X: 0.3000001, Y: 0.5347221 },
                    { X: 0.903703868, Y: 0.7110182 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1557905309, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1256146743, PinID: 0 },
                WirePoints: [
                    { X: 0.3000001, Y: 1.15972209 },
                    { X: 0.903703868, Y: 0.9510182 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1256146743, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1205844992 },
                WirePoints: [
                    { X: 2.00370383, Y: 0.8310182 },
                    { X: 7.837778, Y: 0.490740538 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "4AND=": {
        Name: "4AND=",
        Colour: "#CDDD24",
        InputPins: [
            {
                Name: "Pin",
                ID: 1810551303,
                PositionY: 3.138889,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 971868113,
                PositionY: 2.57407427,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1992020764,
                PositionY: 2.01851845,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1368007115,
                PositionY: 1.46296322,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 599528180,
                PositionY: 0.92592597,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1965303548,
                PositionY: 0.425925851,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1095853569,
                PositionY: -0.101851821,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 776769412,
                PositionY: -0.657407343,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 270142896,
                PositionY: 3.02777767,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1053000047,
                PositionY: 2.48148155,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 2125743434,
                PositionY: 1.91666663,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 2053864126,
                PositionY: 1.34259284,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "AND",
                ID: 481465925,
                Points: [{ X: -1.91666663, Y: 1.69675958 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 2110695066,
                Points: [{ X: -1.91666663, Y: 1.07175946 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1890099247,
                Points: [{ X: -1.91666663, Y: 0.4467594 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1097917540,
                Points: [{ X: -1.91666663, Y: -0.178240657 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1810551303 },
                Target: { PinType: 3, SubChipID: 481465925, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.138889 },
                    { X: -2.4666667, Y: 1.81675959 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 971868113 },
                Target: { PinType: 3, SubChipID: 481465925, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 2.57407427 },
                    { X: -2.4666667, Y: 1.57675958 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1992020764 },
                Target: { PinType: 3, SubChipID: 2110695066, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 2.01851845 },
                    { X: -2.4666667, Y: 1.19175947 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1368007115 },
                Target: { PinType: 3, SubChipID: 2110695066, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 1.46296322 },
                    { X: -2.4666667, Y: 0.951759458 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 599528180 },
                Target: { PinType: 3, SubChipID: 1890099247, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 0.92592597 },
                    { X: -2.4666667, Y: 0.5667594 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1965303548 },
                Target: { PinType: 3, SubChipID: 1890099247, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.425925851 },
                    { X: -2.4666667, Y: 0.3267594 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1095853569 },
                Target: { PinType: 3, SubChipID: 1097917540, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -0.101851821 },
                    { X: -2.4666667, Y: -0.05824066 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 776769412 },
                Target: { PinType: 3, SubChipID: 1097917540, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -0.657407343 },
                    { X: -2.4666667, Y: -0.298240662 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1097917540, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2053864126 },
                WirePoints: [
                    { X: -1.36666656, Y: -0.178240657 },
                    { X: 7.837778, Y: 1.34259284 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1890099247, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2125743434 },
                WirePoints: [
                    { X: -1.36666656, Y: 0.4467594 },
                    { X: 7.837778, Y: 1.91666663 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2110695066, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1053000047 },
                WirePoints: [
                    { X: -1.36666656, Y: 1.07175946 },
                    { X: 7.837778, Y: 2.48148155 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 481465925, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 270142896 },
                WirePoints: [
                    { X: -1.36666656, Y: 1.69675958 },
                    { X: 7.837778, Y: 3.02777767 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "4bit Add": {
        Name: "4bit Add",
        Colour: "#14A824",
        displayID: 0,
        InputPins: [
            {
                Name: "A0",
                ID: 488268948,
                PositionY: 4.296297,
                ColourThemeName: "Red",
            },
            {
                Name: "A1",
                ID: 1418205308,
                PositionY: 3.73148084,
                ColourThemeName: "Red",
            },
            {
                Name: "A2",
                ID: 439000977,
                PositionY: 3.16666651,
                ColourThemeName: "Red",
            },
            {
                Name: "A3",
                ID: 2121039846,
                PositionY: 2.601853,
                ColourThemeName: "Red",
            },
            {
                Name: "B0",
                ID: 1284573912,
                PositionY: -2.36111069,
                ColourThemeName: "Green",
            },
            {
                Name: "B1",
                ID: 1548015176,
                PositionY: -2.92592645,
                ColourThemeName: "Green",
            },
            {
                Name: "B2",
                ID: 584202309,
                PositionY: -3.46296358,
                ColourThemeName: "Green",
            },
            {
                Name: "B3",
                ID: 1596677607,
                PositionY: -4.037038,
                ColourThemeName: "Green",
            },
            {
                Name: "-",
                ID: 1675941895,
                PositionY: -5.202756,
                ColourThemeName: "Yellow",
            },
            {
                Name: "OVERFLOW",
                ID: 811840625,
                PositionY: -5.745616,
                ColourThemeName: "Indigo",
            },
            {
                Name: "ENABLED",
                ID: 1115055373,
                PositionY: -6.299359,
                ColourThemeName: "Blue",
            },
        ],
        OutputPins: [
            {
                Name: "0",
                ID: 898734536,
                PositionY: 4.36111164,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 1810689574,
                PositionY: 3.74999928,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 689721057,
                PositionY: 3.18518567,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1939980475,
                PositionY: 2.62037039,
                ColourThemeName: "Red",
            },
            {
                Name: "OVERFLOW",
                ID: 1425778082,
                PositionY: 2.07407427,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "adder",
                ID: 1917306657,
                Points: [{ X: -3.93518424, Y: 4.103055 }],
                Data: null,
            },
            {
                Name: "adder",
                ID: 1804912178,
                Points: [{ X: -1.78703713, Y: 3.50657415 }],
                Data: null,
            },
            {
                Name: "adder",
                ID: 2028052271,
                Points: [{ X: 0.314814925, Y: 2.9656477 }],
                Data: null,
            },
            {
                Name: "adder",
                ID: 1151660586,
                Points: [{ X: 2.41666555, Y: 2.369167 }],
                Data: null,
            },
            {
                Name: "XOR",
                ID: 465572319,
                Points: [{ X: -5.92592669, Y: -2.32175875 }],
                Data: null,
            },
            {
                Name: "XOR",
                ID: 1031864656,
                Points: [{ X: -5.92592669, Y: -2.94675875 }],
                Data: null,
            },
            {
                Name: "XOR",
                ID: 743345605,
                Points: [{ X: -5.92592669, Y: -3.57175875 }],
                Data: null,
            },
            {
                Name: "XOR",
                ID: 1359402044,
                Points: [{ X: -5.92592669, Y: -4.196759 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 427428260,
                Points: [{ X: 5.675926, Y: 4.507037 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 1658987305,
                Points: [{ X: 5.675926, Y: 3.772037 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 1323600663,
                Points: [{ X: 5.675926, Y: 3.03703666 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 1516627456,
                Points: [{ X: 5.675926, Y: 2.30203629 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 2113270639,
                Points: [{ X: 5.675926, Y: 1.56703615 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 1917306657, PinID: 317326242 },
                Target: { PinType: 3, SubChipID: 1804912178, PinID: 269672206 },
                WirePoints: [
                    { X: -3.190184, Y: 3.863055 },
                    { X: -2.86111069, Y: 3.87963 },
                    { X: -2.87037, Y: 3.2962966 },
                    { X: -2.53203726, Y: 3.26657414 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1804912178, PinID: 317326242 },
                Target: { PinType: 3, SubChipID: 2028052271, PinID: 269672206 },
                WirePoints: [
                    { X: -1.04203713, Y: 3.26657414 },
                    { X: -0.6944438, Y: 3.31481457 },
                    { X: -0.7037035, Y: 2.722222 },
                    { X: -0.43018508, Y: 2.72564769 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2028052271, PinID: 317326242 },
                Target: { PinType: 3, SubChipID: 1151660586, PinID: 269672206 },
                WirePoints: [
                    { X: 1.05981493, Y: 2.72564769 },
                    { X: 1.36111164, Y: 2.73148155 },
                    { X: 1.37037063, Y: 2.06481457 },
                    { X: 1.67166555, Y: 2.129167 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1284573912 },
                Target: { PinType: 3, SubChipID: 465572319, PinID: 1654960180 },
                WirePoints: [
                    { X: -7.837778, Y: -2.36111069 },
                    { X: -6.475927, Y: -2.20175886 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1548015176 },
                Target: {
                    PinType: 3,
                    SubChipID: 1031864656,
                    PinID: 1654960180,
                },
                WirePoints: [
                    { X: -7.837778, Y: -2.92592645 },
                    { X: -6.475927, Y: -2.82675886 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 584202309 },
                Target: { PinType: 3, SubChipID: 743345605, PinID: 1654960180 },
                WirePoints: [
                    { X: -7.837778, Y: -3.46296358 },
                    { X: -6.475927, Y: -3.45175886 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1596677607 },
                Target: {
                    PinType: 3,
                    SubChipID: 1359402044,
                    PinID: 1654960180,
                },
                WirePoints: [
                    { X: -7.837778, Y: -4.037038 },
                    { X: -6.475927, Y: -4.07675934 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1675941895 },
                Target: { PinType: 3, SubChipID: 1359402044, PinID: 996750 },
                WirePoints: [
                    { X: -7.837778, Y: -5.202756 },
                    { X: -7.31481552, Y: -5.21462536 },
                    { X: -7.30883169, Y: -4.372474 },
                    { X: -6.475927, Y: -4.316759 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1675941895 },
                Target: { PinType: 3, SubChipID: 743345605, PinID: 996750 },
                WirePoints: [
                    { X: -7.837778, Y: -5.202756 },
                    { X: -7.31481552, Y: -5.21462536 },
                    { X: -7.304228, Y: -3.72449064 },
                    { X: -6.475927, Y: -3.69175863 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1675941895 },
                Target: { PinType: 3, SubChipID: 1031864656, PinID: 996750 },
                WirePoints: [
                    { X: -7.837778, Y: -5.202756 },
                    { X: -7.31481552, Y: -5.21462536 },
                    { X: -7.299687, Y: -3.08543634 },
                    { X: -6.475927, Y: -3.06675863 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1675941895 },
                Target: { PinType: 3, SubChipID: 465572319, PinID: 996750 },
                WirePoints: [
                    { X: -7.837778, Y: -5.202756 },
                    { X: -7.31481552, Y: -5.21462536 },
                    { X: -7.295476, Y: -2.492808 },
                    { X: -6.475927, Y: -2.44175863 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1031864656,
                    PinID: 2043966668,
                },
                Target: { PinType: 3, SubChipID: 1804912178, PinID: 498445549 },
                WirePoints: [
                    { X: -5.37592649, Y: -2.94675875 },
                    { X: -4.85185242, Y: -2.964181 },
                    { X: -4.78703737, Y: 3.50000024 },
                    { X: -2.53203726, Y: 3.50657415 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 743345605, PinID: 2043966668 },
                Target: { PinType: 3, SubChipID: 2028052271, PinID: 498445549 },
                WirePoints: [
                    { X: -5.37592649, Y: -3.57175875 },
                    { X: -4.70370436, Y: -3.57407379 },
                    { X: -4.62037039, Y: 2.94444442 },
                    { X: -0.43018508, Y: 2.9656477 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1359402044,
                    PinID: 2043966668,
                },
                Target: { PinType: 3, SubChipID: 1151660586, PinID: 498445549 },
                WirePoints: [
                    { X: -5.37592649, Y: -4.196759 },
                    { X: -4.462963, Y: -4.17592573 },
                    { X: -4.416667, Y: 2.3888886 },
                    { X: 1.67166555, Y: 2.369167 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1418205308 },
                Target: { PinType: 3, SubChipID: 1804912178, PinID: 480637128 },
                WirePoints: [
                    { X: -7.837778, Y: 3.73148084 },
                    { X: -2.53203726, Y: 3.74657416 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 488268948 },
                Target: { PinType: 3, SubChipID: 1917306657, PinID: 480637128 },
                WirePoints: [
                    { X: -7.837778, Y: 4.296297 },
                    { X: -4.68018436, Y: 4.343055 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 439000977 },
                Target: { PinType: 3, SubChipID: 2028052271, PinID: 480637128 },
                WirePoints: [
                    { X: -7.837778, Y: 3.16666651 },
                    { X: -0.43018508, Y: 3.20564771 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2121039846 },
                Target: { PinType: 3, SubChipID: 1151660586, PinID: 480637128 },
                WirePoints: [
                    { X: -7.837778, Y: 2.601853 },
                    { X: 1.67166555, Y: 2.609167 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 465572319, PinID: 2043966668 },
                Target: { PinType: 3, SubChipID: 1917306657, PinID: 498445549 },
                WirePoints: [
                    { X: -5.37592649, Y: -2.32175875 },
                    { X: -5.111111, Y: -2.30555558 },
                    { X: -5.064815, Y: 4.08333349 },
                    { X: -4.68018436, Y: 4.103055 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1917306657, PinID: 380142586 },
                Target: { PinType: 3, SubChipID: 427428260, PinID: 1 },
                WirePoints: [
                    { X: -3.190184, Y: 4.343055 },
                    { X: 4.755926, Y: 4.332037 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1804912178, PinID: 380142586 },
                Target: { PinType: 3, SubChipID: 1658987305, PinID: 1 },
                WirePoints: [
                    { X: -1.04203713, Y: 3.74657416 },
                    { X: 4.755926, Y: 3.597037 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2028052271, PinID: 380142586 },
                Target: { PinType: 3, SubChipID: 1323600663, PinID: 1 },
                WirePoints: [
                    { X: 1.05981493, Y: 3.20564771 },
                    { X: 4.755926, Y: 2.86203671 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1151660586, PinID: 380142586 },
                Target: { PinType: 3, SubChipID: 1516627456, PinID: 1 },
                WirePoints: [
                    { X: 3.16166544, Y: 2.609167 },
                    { X: 4.755926, Y: 2.12703633 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1151660586, PinID: 317326242 },
                Target: { PinType: 3, SubChipID: 2113270639, PinID: 1 },
                WirePoints: [
                    { X: 3.16166544, Y: 2.129167 },
                    { X: 4.755926, Y: 1.3920362 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 427428260, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 898734536 },
                WirePoints: [
                    { X: 6.59592628, Y: 4.507037 },
                    { X: 7.837778, Y: 4.36111164 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1658987305, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1810689574 },
                WirePoints: [
                    { X: 6.59592628, Y: 3.772037 },
                    { X: 7.837778, Y: 3.74999928 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1323600663, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 689721057 },
                WirePoints: [
                    { X: 6.59592628, Y: 3.03703666 },
                    { X: 7.837778, Y: 3.18518567 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1516627456, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1939980475 },
                WirePoints: [
                    { X: 6.59592628, Y: 2.30203629 },
                    { X: 7.837778, Y: 2.62037039 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2113270639, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1425778082 },
                WirePoints: [
                    { X: 6.59592628, Y: 1.56703615 },
                    { X: 7.837778, Y: 2.07407427 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1115055373 },
                Target: { PinType: 3, SubChipID: 427428260, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -6.299359 },
                    { X: 4.20370436, Y: -6.51838064 },
                    { X: 4.25, Y: 4.66666651 },
                    { X: 4.755926, Y: 4.68203735 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1115055373 },
                Target: { PinType: 3, SubChipID: 1658987305, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -6.299359 },
                    { X: 4.20370436, Y: -6.51838064 },
                    { X: 4.247163, Y: 3.98122454 },
                    { X: 4.755926, Y: 3.947037 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1115055373 },
                Target: { PinType: 3, SubChipID: 1323600663, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -6.299359 },
                    { X: 4.20370436, Y: -6.51838064 },
                    { X: 4.243945, Y: 3.20380545 },
                    { X: 4.755926, Y: 3.21203661 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1115055373 },
                Target: { PinType: 3, SubChipID: 1516627456, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -6.299359 },
                    { X: 4.20370436, Y: -6.51838064 },
                    { X: 4.241031, Y: 2.499846 },
                    { X: 4.755926, Y: 2.47703624 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1115055373 },
                Target: { PinType: 3, SubChipID: 2113270639, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -6.299359 },
                    { X: 4.20370436, Y: -6.51838064 },
                    { X: 4.238119, Y: 1.79630709 },
                    { X: 4.755926, Y: 1.7420361 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 811840625 },
                Target: { PinType: 3, SubChipID: 1917306657, PinID: 269672206 },
                WirePoints: [
                    { X: -7.837778, Y: -5.745616 },
                    { X: -7.15740776, Y: -5.7549243 },
                    { X: -7.0462966, Y: 3.90740752 },
                    { X: -4.68018436, Y: 3.863055 },
                ],
                ColourThemeName: "Indigo",
            },
        ],
    },
    "4bit-REGISTER": {
        Name: "4bit-REGISTER",
        Colour: "#307508",
        displayID: 0,
        InputPins: [
            {
                Name: "IN1",
                ID: 1717760373,
                PositionY: 2.731481,
                ColourThemeName: "Red",
            },
            {
                Name: "IN2",
                ID: 2075328416,
                PositionY: 2.185185,
                ColourThemeName: "Red",
            },
            {
                Name: "IN3",
                ID: 1584202538,
                PositionY: 1.63888872,
                ColourThemeName: "Red",
            },
            {
                Name: "IN4",
                ID: 1788913590,
                PositionY: 1.09259248,
                ColourThemeName: "Red",
            },
            {
                Name: "ENABLED",
                ID: 323848307,
                PositionY: -2.80555582,
                ColourThemeName: "Red",
            },
            {
                Name: "CLOCK",
                ID: 335761334,
                PositionY: -3.30555558,
                ColourThemeName: "Red",
            },
            {
                Name: "WRITE",
                ID: 2121663745,
                PositionY: -1.94444442,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "OUT1",
                ID: 576114810,
                PositionY: 2.37963033,
                ColourThemeName: "Red",
            },
            {
                Name: "OUT2",
                ID: 652623521,
                PositionY: 1.35185182,
                ColourThemeName: "Red",
            },
            {
                Name: "OUT3",
                ID: 1563674029,
                PositionY: 0.19444406,
                ColourThemeName: "Red",
            },
            {
                Name: "OUT4",
                ID: 1484036384,
                PositionY: -0.9629631,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "1bit-REGISTER",
                ID: 1505314660,
                Points: [{ X: 0.222222015, Y: 2.398241 }],
                Data: null,
            },
            {
                Name: "1bit-REGISTER",
                ID: 1770136602,
                Points: [{ X: 0.222222015, Y: 1.293241 }],
                Data: null,
            },
            {
                Name: "1bit-REGISTER",
                ID: 1651979744,
                Points: [{ X: 0.222222015, Y: 0.188240826 }],
                Data: null,
            },
            {
                Name: "1bit-REGISTER",
                ID: 1327932421,
                Points: [{ X: 0.222222015, Y: -0.916759253 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1717760373 },
                Target: {
                    PinType: 3,
                    SubChipID: 1505314660,
                    PinID: 1093997570,
                },
                WirePoints: [
                    { X: -7.837778, Y: 2.731481 },
                    { X: -0.997778, Y: 2.75824118 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2075328416 },
                Target: {
                    PinType: 3,
                    SubChipID: 1770136602,
                    PinID: 1093997570,
                },
                WirePoints: [
                    { X: -7.837778, Y: 2.185185 },
                    { X: -2.5, Y: 2.27777767 },
                    { X: -2.490741, Y: 1.61111116 },
                    { X: -0.997778, Y: 1.653241 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1788913590 },
                Target: {
                    PinType: 3,
                    SubChipID: 1327932421,
                    PinID: 1093997570,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.09259248 },
                    { X: -3.35185218, Y: 1.14814818 },
                    { X: -3.37962961, Y: -0.5277777 },
                    { X: -0.997778, Y: -0.556759238 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1584202538 },
                Target: {
                    PinType: 3,
                    SubChipID: 1651979744,
                    PinID: 1093997570,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.63888872 },
                    { X: -2.97222257, Y: 1.73148155 },
                    { X: -2.96296287, Y: 0.5185187 },
                    { X: -0.997778, Y: 0.54824084 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2121663745 },
                Target: { PinType: 3, SubChipID: 1327932421, PinID: 927604864 },
                WirePoints: [
                    { X: -7.837778, Y: -1.94444442 },
                    { X: -1.92592573, Y: -1.925926 },
                    { X: -1.93518543, Y: -0.833333433 },
                    { X: -0.997778, Y: -0.796759248 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2121663745 },
                Target: { PinType: 3, SubChipID: 1651979744, PinID: 927604864 },
                WirePoints: [
                    { X: -7.837778, Y: -1.94444442 },
                    { X: -1.92592573, Y: -1.925926 },
                    { X: -1.930947, Y: -1.33345437 },
                    { X: -1.91666663, Y: 0.32407403 },
                    { X: -0.997778, Y: 0.308240831 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2121663745 },
                Target: { PinType: 3, SubChipID: 1770136602, PinID: 927604864 },
                WirePoints: [
                    { X: -7.837778, Y: -1.94444442 },
                    { X: -1.92592573, Y: -1.925926 },
                    { X: -1.930947, Y: -1.33345437 },
                    { X: -1.92041564, Y: -0.111078739 },
                    { X: -1.89814842, Y: 1.37962937 },
                    { X: -0.997778, Y: 1.413241 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2121663745 },
                Target: { PinType: 3, SubChipID: 1505314660, PinID: 927604864 },
                WirePoints: [
                    { X: -7.837778, Y: -1.94444442 },
                    { X: -1.92592573, Y: -1.925926 },
                    { X: -1.930947, Y: -1.33345437 },
                    { X: -1.92041564, Y: -0.111078739 },
                    { X: -1.903952, Y: 0.9911039 },
                    { X: -1.87037051, Y: 2.55555582 },
                    { X: -0.997778, Y: 2.518241 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 323848307 },
                Target: {
                    PinType: 3,
                    SubChipID: 1327932421,
                    PinID: 1897190903,
                },
                WirePoints: [
                    { X: -7.837778, Y: -2.80555582 },
                    { X: -1.62962973, Y: -2.73148155 },
                    { X: -1.61111093, Y: -1.08333325 },
                    { X: -0.997778, Y: -1.03675926 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 323848307 },
                Target: {
                    PinType: 3,
                    SubChipID: 1651979744,
                    PinID: 1897190903,
                },
                WirePoints: [
                    { X: -7.837778, Y: -2.80555582 },
                    { X: -1.62962973, Y: -2.73148155 },
                    { X: -1.61506736, Y: -1.4354527 },
                    { X: -1.60185182, Y: 0.0555557 },
                    { X: -0.997778, Y: 0.06824081 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 323848307 },
                Target: {
                    PinType: 3,
                    SubChipID: 1770136602,
                    PinID: 1897190903,
                },
                WirePoints: [
                    { X: -7.837778, Y: -2.80555582 },
                    { X: -1.62962973, Y: -2.73148155 },
                    { X: -1.61506736, Y: -1.4354527 },
                    { X: -1.60513294, Y: -0.314621449 },
                    { X: -1.58333361, Y: 1.16666675 },
                    { X: -0.997778, Y: 1.173241 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 323848307 },
                Target: {
                    PinType: 3,
                    SubChipID: 1505314660,
                    PinID: 1897190903,
                },
                WirePoints: [
                    { X: -7.837778, Y: -2.80555582 },
                    { X: -1.62962973, Y: -2.73148155 },
                    { X: -1.61506736, Y: -1.4354527 },
                    { X: -1.60513294, Y: -0.314621449 },
                    { X: -1.58905745, Y: 0.7777258 },
                    { X: -1.56481481, Y: 2.25000024 },
                    { X: -0.997778, Y: 2.278241 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 335761334 },
                Target: {
                    PinType: 3,
                    SubChipID: 1327932421,
                    PinID: 1323027851,
                },
                WirePoints: [
                    { X: -7.837778, Y: -3.30555558 },
                    { X: -1.17592609, Y: -3.26851845 },
                    { X: -1.15740728, Y: -1.27777791 },
                    { X: -0.997778, Y: -1.27675927 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 335761334 },
                Target: {
                    PinType: 3,
                    SubChipID: 1651979744,
                    PinID: 1323027851,
                },
                WirePoints: [
                    { X: -7.837778, Y: -3.30555558 },
                    { X: -1.17592609, Y: -3.26851845 },
                    { X: -1.16093683, Y: -1.65720212 },
                    { X: -1.14814818, Y: -0.138888955 },
                    { X: -0.997778, Y: -0.171759188 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 335761334 },
                Target: {
                    PinType: 3,
                    SubChipID: 1770136602,
                    PinID: 1323027851,
                },
                WirePoints: [
                    { X: -7.837778, Y: -3.30555558 },
                    { X: -1.17592609, Y: -3.26851845 },
                    { X: -1.16093683, Y: -1.65720212 },
                    { X: -1.15275121, Y: -0.68538034 },
                    { X: -1.12963, Y: 0.9629631 },
                    { X: -0.997778, Y: 0.933241 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 335761334 },
                Target: {
                    PinType: 3,
                    SubChipID: 1505314660,
                    PinID: 1323027851,
                },
                WirePoints: [
                    { X: -7.837778, Y: -3.30555558 },
                    { X: -1.17592609, Y: -3.26851845 },
                    { X: -1.16093683, Y: -1.65720212 },
                    { X: -1.15275121, Y: -0.68538034 },
                    { X: -1.13703346, Y: 0.435159326 },
                    { X: -1.12037027, Y: 2.037037 },
                    { X: -0.997778, Y: 2.038241 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1505314660,
                    PinID: 1720878372,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 576114810 },
                WirePoints: [
                    { X: 1.442222, Y: 2.398241 },
                    { X: 7.837778, Y: 2.37963033 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1770136602,
                    PinID: 1720878372,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 652623521 },
                WirePoints: [
                    { X: 1.442222, Y: 1.293241 },
                    { X: 7.837778, Y: 1.35185182 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1651979744,
                    PinID: 1720878372,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1563674029 },
                WirePoints: [
                    { X: 1.442222, Y: 0.188240826 },
                    { X: 7.837778, Y: 0.19444406 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1327932421,
                    PinID: 1720878372,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1484036384 },
                WirePoints: [
                    { X: 1.442222, Y: -0.916759253 },
                    { X: 7.837778, Y: -0.9629631 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "4OR": {
        Name: "4OR",
        Colour: "#366118",
        InputPins: [
            {
                Name: "Pin",
                ID: 1409329462,
                PositionY: 2.2037034,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 245899469,
                PositionY: 1.51851833,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1783330210,
                PositionY: 0.657407641,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 132057294,
                PositionY: -0.0370371342,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 1517132751,
                PositionY: 1.01851881,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "OR",
                ID: 644216446,
                Points: [{ X: -5.59259272, Y: 1.83101845 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1733875881,
                Points: [{ X: -5.59259272, Y: 1.20601821 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1550501870,
                Points: [{ X: -4.148148, Y: 1.55555546 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 644216446, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1550501870, PinID: 207650570 },
                WirePoints: [
                    { X: -5.142593, Y: 1.83101845 },
                    { X: -4.598148, Y: 1.67555547 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1733875881,
                    PinID: 2097025545,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1550501870,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -5.142593, Y: 1.20601821 },
                    { X: -4.598148, Y: 1.43555546 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1409329462 },
                Target: { PinType: 3, SubChipID: 644216446, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 2.2037034 },
                    { X: -6.04259253, Y: 1.95101845 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 245899469 },
                Target: { PinType: 3, SubChipID: 644216446, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 1.51851833 },
                    { X: -6.04259253, Y: 1.71101844 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1783330210 },
                Target: { PinType: 3, SubChipID: 1733875881, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 0.657407641 },
                    { X: -6.04259253, Y: 1.32601821 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 132057294 },
                Target: {
                    PinType: 3,
                    SubChipID: 1733875881,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: -0.0370371342 },
                    { X: -6.04259253, Y: 1.0860182 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1550501870,
                    PinID: 2097025545,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1517132751 },
                WirePoints: [
                    { X: -3.698148, Y: 1.55555546 },
                    { X: 7.837778, Y: 1.01851881 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "5AND": {
        Name: "5AND",
        Colour: "#58AB9A",
        displayID: 0,
        InputPins: [
            {
                Name: "0",
                ID: 1334820019,
                PositionY: 2.44444418,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 1338118848,
                PositionY: 1.93518519,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 1751301251,
                PositionY: 1.46296322,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1995641134,
                PositionY: 0.9537035,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 1861561861,
                PositionY: 0.425925851,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "OUT",
                ID: 941411240,
                PositionY: 0.9722221,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "AND",
                ID: 199508827,
                Points: [{ X: -4.61111164, Y: 2.328704 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 705147360,
                Points: [{ X: -4.61111164, Y: 1.703704 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1128243501,
                Points: [{ X: -2.740741, Y: 2.21990776 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1432566497,
                Points: [{ X: -2.75925851, Y: 1.31481588 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 199508827, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1128243501, PinID: 0 },
                WirePoints: [
                    { X: -4.06111145, Y: 2.328704 },
                    { X: -3.290741, Y: 2.33990765 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 705147360, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1128243501, PinID: 1 },
                WirePoints: [
                    { X: -4.06111145, Y: 1.703704 },
                    { X: -3.290741, Y: 2.09990788 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1334820019 },
                Target: { PinType: 3, SubChipID: 199508827, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 2.44444418 },
                    { X: -5.161112, Y: 2.448704 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1338118848 },
                Target: { PinType: 3, SubChipID: 199508827, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 1.93518519 },
                    { X: -5.161112, Y: 2.20870423 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1751301251 },
                Target: { PinType: 3, SubChipID: 705147360, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.46296322 },
                    { X: -5.161112, Y: 1.823704 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1995641134 },
                Target: { PinType: 3, SubChipID: 705147360, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.9537035 },
                    { X: -5.161112, Y: 1.583704 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1861561861 },
                Target: { PinType: 3, SubChipID: 1432566497, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.425925851 },
                    { X: -3.30925846, Y: 1.19481587 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1128243501, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1432566497, PinID: 0 },
                WirePoints: [
                    { X: -2.190741, Y: 2.21990776 },
                    { X: -1.87037051, Y: 2.212963 },
                    { X: -1.87962961, Y: 1.7592591 },
                    { X: -3.58333349, Y: 1.7592591 },
                    { X: -3.58333349, Y: 1.388889 },
                    { X: -3.30925846, Y: 1.43481588 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1432566497, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 941411240 },
                WirePoints: [
                    { X: -2.20925856, Y: 1.31481588 },
                    { X: 7.837778, Y: 0.9722221 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "7 AND": {
        Name: "7 AND",
        Colour: "#3724B3",
        displayID: 0,
        InputPins: [
            {
                Name: "Pin",
                ID: 1914396879,
                PositionY: 3.58333349,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1969696668,
                PositionY: 3.03703737,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 428449432,
                PositionY: 2.48148155,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1260296431,
                PositionY: 1.92592621,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1919520219,
                PositionY: 1.37037039,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1692660726,
                PositionY: 0.814814568,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1623836198,
                PositionY: 0.268518329,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 1254937307,
                PositionY: 1.398148,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "AND",
                ID: 1717602099,
                Points: [{ X: -5.58333349, Y: 2.73379636 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 247409570,
                Points: [{ X: -5.58333349, Y: 2.10879636 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 263017215,
                Points: [{ X: -5.58333349, Y: 1.48379612 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1528153313,
                Points: [{ X: -3.962963, Y: 2.42361116 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1602211132,
                Points: [{ X: -3.97222233, Y: 1.30787063 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1321713977,
                Points: [{ X: -2.02777815, Y: 1.90740788 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 1528153313, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1321713977, PinID: 0 },
                WirePoints: [
                    { X: -3.41296315, Y: 2.42361116 },
                    { X: -2.577778, Y: 2.027408 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1602211132, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1321713977, PinID: 1 },
                WirePoints: [
                    { X: -3.42222238, Y: 1.30787063 },
                    { X: -2.577778, Y: 1.78740788 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1717602099, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1528153313, PinID: 0 },
                WirePoints: [
                    { X: -5.0333333, Y: 2.73379636 },
                    { X: -4.51296329, Y: 2.543611 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 247409570, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1528153313, PinID: 1 },
                WirePoints: [
                    { X: -5.0333333, Y: 2.10879636 },
                    { X: -4.51296329, Y: 2.30361128 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 263017215, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1602211132, PinID: 0 },
                WirePoints: [
                    { X: -5.0333333, Y: 1.48379612 },
                    { X: -4.52222252, Y: 1.42787063 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1623836198 },
                Target: { PinType: 3, SubChipID: 1602211132, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.268518329 },
                    { X: -4.52222252, Y: 1.18787062 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1692660726 },
                Target: { PinType: 3, SubChipID: 263017215, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.814814568 },
                    { X: -6.13333368, Y: 1.36379611 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1919520219 },
                Target: { PinType: 3, SubChipID: 263017215, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.37037039 },
                    { X: -6.13333368, Y: 1.60379612 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1260296431 },
                Target: { PinType: 3, SubChipID: 247409570, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 1.92592621 },
                    { X: -6.13333368, Y: 1.98879635 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 428449432 },
                Target: { PinType: 3, SubChipID: 247409570, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 2.48148155 },
                    { X: -6.13333368, Y: 2.22879624 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1969696668 },
                Target: { PinType: 3, SubChipID: 1717602099, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 3.03703737 },
                    { X: -6.13333368, Y: 2.61379647 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1914396879 },
                Target: { PinType: 3, SubChipID: 1717602099, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.58333349 },
                    { X: -6.13333368, Y: 2.85379624 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1321713977, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1254937307 },
                WirePoints: [
                    { X: -1.4777782, Y: 1.90740788 },
                    { X: 7.837778, Y: 1.398148 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "8bit ADDER": {
        Name: "8bit ADDER",
        Colour: "#B5C734",
        displayID: 0,
        InputPins: [
            {
                Name: "0",
                ID: 1030196564,
                PositionY: 4.240741,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 667901101,
                PositionY: 3.68518543,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 1229328111,
                PositionY: 3.12962961,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1427679372,
                PositionY: 2.601852,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 131311591,
                PositionY: 2.04629612,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 2008669770,
                PositionY: 1.45370364,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 2110715836,
                PositionY: 0.935184956,
                ColourThemeName: "Red",
            },
            {
                Name: "0",
                ID: 298576927,
                PositionY: -0.785537362,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 1564528107,
                PositionY: -1.322574,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 2025921285,
                PositionY: -1.87812984,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 591829213,
                PositionY: -2.4336853,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 354679946,
                PositionY: -2.989241,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 2111221504,
                PositionY: -3.52627778,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 136900936,
                PositionY: -4.07257462,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 1407176605,
                PositionY: -4.60035229,
                ColourThemeName: "Red",
            },
            {
                Name: "-",
                ID: 1103110104,
                PositionY: -5.913667,
                ColourThemeName: "Green",
            },
            {
                Name: "7",
                ID: 1301875614,
                PositionY: 0.379629731,
                ColourThemeName: "Red",
            },
            {
                Name: "ENABLED",
                ID: 68915819,
                PositionY: -6.48112774,
                ColourThemeName: "Blue",
            },
        ],
        OutputPins: [
            {
                Name: "0",
                ID: 1424774048,
                PositionY: 3.935185,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 773509152,
                PositionY: 3.38888884,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 616653170,
                PositionY: 2.84259272,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1995946092,
                PositionY: 2.30555534,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 246945928,
                PositionY: 1.74074054,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 272018778,
                PositionY: 1.1944443,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 34320401,
                PositionY: 0.6666666,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 316821847,
                PositionY: 0.120370388,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "4bit Add",
                ID: 779334135,
                Points: [{ X: 1.685185, Y: 3.09657383 }],
                Data: null,
            },
            {
                Name: "4bit Add",
                ID: 1630202797,
                Points: [{ X: 4.47222233, Y: 0.736759245 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1030196564 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 488268948 },
                WirePoints: [
                    { X: -7.837778, Y: 4.240741 },
                    { X: 1.135185, Y: 4.29657364 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 667901101 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 1418205308 },
                WirePoints: [
                    { X: -7.837778, Y: 3.68518543 },
                    { X: 1.135185, Y: 4.056574 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1229328111 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 439000977 },
                WirePoints: [
                    { X: -7.837778, Y: 3.12962961 },
                    { X: 1.135185, Y: 3.81657386 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1427679372 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 2121039846 },
                WirePoints: [
                    { X: -7.837778, Y: 2.601852 },
                    { X: 1.135185, Y: 3.57657385 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 298576927 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 1284573912 },
                WirePoints: [
                    { X: -7.837778, Y: -0.785537362 },
                    { X: 0.231481135, Y: -0.6944445 },
                    { X: 0.305555135, Y: 3.111111 },
                    { X: 1.135185, Y: 3.33657384 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1564528107 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 1548015176 },
                WirePoints: [
                    { X: -7.837778, Y: -1.322574 },
                    { X: 0.4907407, Y: -1.175926 },
                    { X: 0.5277782, Y: 2.94444442 },
                    { X: 1.135185, Y: 3.09657383 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2025921285 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 584202309 },
                WirePoints: [
                    { X: -7.837778, Y: -1.87812984 },
                    { X: 0.6851854, Y: -1.5925926 },
                    { X: 0.675926268, Y: 2.787037 },
                    { X: 1.135185, Y: 2.85657382 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 591829213 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 1596677607 },
                WirePoints: [
                    { X: -7.837778, Y: -2.4336853 },
                    { X: 0.8703709, Y: -2.08333349 },
                    { X: 0.805556, Y: 2.490741 },
                    { X: 1.135185, Y: 2.61657381 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 131311591 },
                Target: { PinType: 3, SubChipID: 1630202797, PinID: 488268948 },
                WirePoints: [
                    { X: -7.837778, Y: 2.04629612 },
                    { X: -0.166666776, Y: 1.98148131 },
                    { X: -0.222222015, Y: 1.1388886 },
                    { X: 1.78703737, Y: 1.101852 },
                    { X: 1.77777827, Y: 1.60185158 },
                    { X: 3.157407, Y: 1.564815 },
                    { X: 3.12962961, Y: 1.87037051 },
                    { X: 3.92222238, Y: 1.93675923 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2008669770 },
                Target: {
                    PinType: 3,
                    SubChipID: 1630202797,
                    PinID: 1418205308,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.45370364 },
                    { X: -0.5740743, Y: 1.63888872 },
                    { X: -0.6296296, Y: 0.824074149 },
                    { X: 2.01851845, Y: 0.759259462 },
                    { X: 2.055556, Y: 1.43518507 },
                    { X: 3.26851869, Y: 1.40740752 },
                    { X: 3.287037, Y: 1.74074054 },
                    { X: 3.92222238, Y: 1.69675922 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2110715836 },
                Target: { PinType: 3, SubChipID: 1630202797, PinID: 439000977 },
                WirePoints: [
                    { X: -7.837778, Y: 0.935184956 },
                    { X: -0.9166665, Y: 1.08333349 },
                    { X: -0.888889134, Y: 0.6296295 },
                    { X: 2.25926, Y: 0.5740738 },
                    { X: 2.29629636, Y: 1.31481469 },
                    { X: 3.3981483, Y: 1.27777755 },
                    { X: 3.46296334, Y: 1.54629648 },
                    { X: 3.92222238, Y: 1.45675921 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1301875614 },
                Target: {
                    PinType: 3,
                    SubChipID: 1630202797,
                    PinID: 2121039846,
                },
                WirePoints: [
                    { X: -7.837778, Y: 0.379629731 },
                    { X: 2.490741, Y: 0.416666865 },
                    { X: 2.54629683, Y: 1.12037063 },
                    { X: 3.53703737, Y: 1.101852 },
                    { X: 3.53703737, Y: 1.29629612 },
                    { X: 3.92222238, Y: 1.2167592 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 354679946 },
                Target: {
                    PinType: 3,
                    SubChipID: 1630202797,
                    PinID: 1284573912,
                },
                WirePoints: [
                    { X: -7.837778, Y: -2.989241 },
                    { X: 1.12037027, Y: -2.82257414 },
                    { X: 1.166667, Y: 0.131129622 },
                    { X: 2.83333373, Y: 0.195944309 },
                    { X: 2.81481552, Y: 0.9366853 },
                    { X: 3.92222238, Y: 0.976759255 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2111221504 },
                Target: {
                    PinType: 3,
                    SubChipID: 1630202797,
                    PinID: 1548015176,
                },
                WirePoints: [
                    { X: -7.837778, Y: -3.52627778 },
                    { X: 1.462963, Y: -3.24850035 },
                    { X: 1.48148119, Y: -0.0818336 },
                    { X: 3.12037063, Y: -0.0170189142 },
                    { X: 3.03703737, Y: 0.723722 },
                    { X: 3.92222238, Y: 0.736759245 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 136900936 },
                Target: { PinType: 3, SubChipID: 1630202797, PinID: 584202309 },
                WirePoints: [
                    { X: -7.837778, Y: -4.07257462 },
                    { X: 1.759259, Y: -3.674426 },
                    { X: 1.759259, Y: -0.239241123 },
                    { X: 3.25925946, Y: -0.17442584 },
                    { X: 3.20370364, Y: 0.5014998 },
                    { X: 3.92222238, Y: 0.496759176 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1407176605 },
                Target: {
                    PinType: 3,
                    SubChipID: 1630202797,
                    PinID: 1596677607,
                },
                WirePoints: [
                    { X: -7.837778, Y: -4.60035229 },
                    { X: 2.00000024, Y: -4.03553724 },
                    { X: 1.981482, Y: -0.415166616 },
                    { X: 3.32407427, Y: -0.396648049 },
                    { X: 3.38888931, Y: 0.270018578 },
                    { X: 3.92222238, Y: 0.256759256 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1103110104 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 1675941895 },
                WirePoints: [
                    { X: -7.837778, Y: -5.913667 },
                    { X: -1.66666675, Y: -5.760258 },
                    { X: -1.63888884, Y: 2.24074078 },
                    { X: 1.135185, Y: 2.3765738 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 68915819 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 1115055373 },
                WirePoints: [
                    { X: -7.837778, Y: -6.48112774 },
                    { X: -2.17592621, Y: -6.32861 },
                    { X: -2.19444442, Y: 1.82407379 },
                    { X: 1.135185, Y: 1.89657378 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 68915819 },
                Target: {
                    PinType: 3,
                    SubChipID: 1630202797,
                    PinID: 1115055373,
                },
                WirePoints: [
                    { X: -7.837778, Y: -6.48112774 },
                    { X: -2.17592621, Y: -6.32861 },
                    { X: -2.188004, Y: -1.01133966 },
                    { X: 3.64814878, Y: -0.844728351 },
                    { X: 3.61111116, Y: -0.428062081 },
                    { X: 3.92222238, Y: -0.4632408 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 779334135, PinID: 898734536 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1424774048 },
                WirePoints: [
                    { X: 2.235185, Y: 4.29657364 },
                    { X: 7.837778, Y: 3.935185 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 779334135, PinID: 1810689574 },
                Target: { PinType: 2, SubChipID: 0, PinID: 773509152 },
                WirePoints: [
                    { X: 2.235185, Y: 3.69657373 },
                    { X: 7.837778, Y: 3.38888884 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 779334135, PinID: 689721057 },
                Target: { PinType: 2, SubChipID: 0, PinID: 616653170 },
                WirePoints: [
                    { X: 2.235185, Y: 3.09657383 },
                    { X: 7.837778, Y: 2.84259272 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 779334135, PinID: 1939980475 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1995946092 },
                WirePoints: [
                    { X: 2.235185, Y: 2.496574 },
                    { X: 7.837778, Y: 2.30555534 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1630202797, PinID: 898734536 },
                Target: { PinType: 2, SubChipID: 0, PinID: 246945928 },
                WirePoints: [
                    { X: 5.02222252, Y: 1.93675923 },
                    { X: 7.837778, Y: 1.74074054 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1630202797,
                    PinID: 1810689574,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 272018778 },
                WirePoints: [
                    { X: 5.02222252, Y: 1.33675933 },
                    { X: 7.837778, Y: 1.1944443 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1630202797, PinID: 689721057 },
                Target: { PinType: 2, SubChipID: 0, PinID: 34320401 },
                WirePoints: [
                    { X: 5.02222252, Y: 0.736759245 },
                    { X: 7.837778, Y: 0.6666666 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1630202797,
                    PinID: 1939980475,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 316821847 },
                WirePoints: [
                    { X: 5.02222252, Y: 0.136759222 },
                    { X: 7.837778, Y: 0.120370388 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 779334135, PinID: 1425778082 },
                Target: { PinType: 3, SubChipID: 1630202797, PinID: 811840625 },
                WirePoints: [
                    { X: 2.235185, Y: 1.89657378 },
                    { X: 3.92222238, Y: -0.223240733 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1103110104 },
                Target: {
                    PinType: 3,
                    SubChipID: 1630202797,
                    PinID: 1675941895,
                },
                WirePoints: [
                    { X: -7.837778, Y: -5.913667 },
                    { X: -1.66666675, Y: -5.760258 },
                    { X: -1.64734292, Y: -0.1943183 },
                    { X: 3.92222238, Y: 0.0167592168 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1103110104 },
                Target: { PinType: 3, SubChipID: 779334135, PinID: 811840625 },
                WirePoints: [
                    { X: -7.837778, Y: -5.913667 },
                    { X: -1.66666675, Y: -5.760258 },
                    { X: -1.63888884, Y: 2.24074078 },
                    { X: -0.05481994, Y: 2.318305 },
                    { X: -0.0185187664, Y: 2.05555558 },
                    { X: 1.135185, Y: 2.13657379 },
                ],
                ColourThemeName: "Green",
            },
        ],
    },
    "8bit-REGISTER": {
        Name: "8bit-REGISTER",
        Colour: "#7D7E03",
        displayID: 0,
        InputPins: [
            {
                Name: "0",
                ID: 394935240,
                PositionY: 4.12037,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 699877108,
                PositionY: 3.62037063,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 285195245,
                PositionY: 3.05555582,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 397780527,
                PositionY: 2.5,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 1447474653,
                PositionY: 1.9907409,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 1230097902,
                PositionY: 1.44444466,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 136930271,
                PositionY: 0.87962985,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 807409755,
                PositionY: 0.388888717,
                ColourThemeName: "Red",
            },
            {
                Name: "ENABLE",
                ID: 1123941419,
                PositionY: -1.14814818,
                ColourThemeName: "Green",
            },
            {
                Name: "WRITE",
                ID: 600137525,
                PositionY: -1.69444442,
                ColourThemeName: "Indigo",
            },
            {
                Name: "CLOCK",
                ID: 1425871993,
                PositionY: -2.24074078,
                ColourThemeName: "Yellow",
            },
        ],
        OutputPins: [
            {
                Name: "0",
                ID: 1289544212,
                PositionY: 4.111111,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 1707752613,
                PositionY: 3.518519,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 672620736,
                PositionY: 2.95370388,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 576761498,
                PositionY: 2.41666675,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 793392506,
                PositionY: 1.82407379,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 932461842,
                PositionY: 1.22222245,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 1664659923,
                PositionY: 0.6666666,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 2136002862,
                PositionY: 0.120370388,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "4bit-REGISTER",
                ID: 964328544,
                Points: [{ X: 1.70370424, Y: 2.5606482 }],
                Data: null,
            },
            {
                Name: "4bit-REGISTER",
                ID: 30951385,
                Points: [{ X: 1.70370424, Y: 0.735648334 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 394935240 },
                Target: { PinType: 3, SubChipID: 964328544, PinID: 1717760373 },
                WirePoints: [
                    { X: -7.837778, Y: 4.12037 },
                    { X: 0.4837042, Y: 3.28064823 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285195245 },
                Target: { PinType: 3, SubChipID: 964328544, PinID: 1584202538 },
                WirePoints: [
                    { X: -7.837778, Y: 3.05555582 },
                    { X: 0.4837042, Y: 2.80064821 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 699877108 },
                Target: { PinType: 3, SubChipID: 964328544, PinID: 2075328416 },
                WirePoints: [
                    { X: -7.837778, Y: 3.62037063 },
                    { X: 0.4837042, Y: 3.04064822 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 397780527 },
                Target: { PinType: 3, SubChipID: 964328544, PinID: 1788913590 },
                WirePoints: [
                    { X: -7.837778, Y: 2.5 },
                    { X: 0.4837042, Y: 2.5606482 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1447474653 },
                Target: { PinType: 3, SubChipID: 30951385, PinID: 1717760373 },
                WirePoints: [
                    { X: -7.837778, Y: 1.9907409 },
                    { X: 0.4837042, Y: 1.4556483 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1230097902 },
                Target: { PinType: 3, SubChipID: 30951385, PinID: 2075328416 },
                WirePoints: [
                    { X: -7.837778, Y: 1.44444466 },
                    { X: 0.4837042, Y: 1.21564829 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 136930271 },
                Target: { PinType: 3, SubChipID: 30951385, PinID: 1584202538 },
                WirePoints: [
                    { X: -7.837778, Y: 0.87962985 },
                    { X: 0.4837042, Y: 0.9756483 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 807409755 },
                Target: { PinType: 3, SubChipID: 30951385, PinID: 1788913590 },
                WirePoints: [
                    { X: -7.837778, Y: 0.388888717 },
                    { X: 0.4837042, Y: 0.735648334 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1425871993 },
                Target: { PinType: 3, SubChipID: 964328544, PinID: 335761334 },
                WirePoints: [
                    { X: -7.837778, Y: -2.24074078 },
                    { X: 0.175926432, Y: -2.19444466 },
                    { X: 0.05555577, Y: 1.84259236 },
                    { X: 0.4837042, Y: 1.84064817 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1425871993 },
                Target: { PinType: 3, SubChipID: 30951385, PinID: 335761334 },
                WirePoints: [
                    { X: -7.837778, Y: -2.24074078 },
                    { X: 0.175926432, Y: -2.19444466 },
                    { X: 0.108874016, Y: 0.05438471 },
                    { X: 0.4837042, Y: 0.015648365 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1123941419 },
                Target: { PinType: 3, SubChipID: 964328544, PinID: 323848307 },
                WirePoints: [
                    { X: -7.837778, Y: -1.14814818 },
                    { X: -0.157407656, Y: -1.29629636 },
                    { X: -0.240740791, Y: 2.09259272 },
                    { X: 0.4837042, Y: 2.08064818 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1123941419 },
                Target: { PinType: 3, SubChipID: 30951385, PinID: 323848307 },
                WirePoints: [
                    { X: -7.837778, Y: -1.14814818 },
                    { X: -0.157407656, Y: -1.29629636 },
                    { X: -0.194498077, Y: 0.212051153 },
                    { X: 0.4837042, Y: 0.255648375 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 600137525 },
                Target: { PinType: 3, SubChipID: 964328544, PinID: 2121663745 },
                WirePoints: [
                    { X: -7.837778, Y: -1.69444442 },
                    { X: -0.5277777, Y: -1.824074 },
                    { X: -0.5740743, Y: 2.25925922 },
                    { X: 0.4837042, Y: 2.32064819 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 600137525 },
                Target: { PinType: 3, SubChipID: 30951385, PinID: 2121663745 },
                WirePoints: [
                    { X: -7.837778, Y: -1.69444442 },
                    { X: -0.5277777, Y: -1.824074 },
                    { X: -0.5534983, Y: 0.444467783 },
                    { X: 0.4837042, Y: 0.495648324 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 964328544, PinID: 576114810 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1289544212 },
                WirePoints: [
                    { X: 2.92370415, Y: 3.28064823 },
                    { X: 7.837778, Y: 4.111111 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 964328544, PinID: 652623521 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1707752613 },
                WirePoints: [
                    { X: 2.92370415, Y: 2.80064821 },
                    { X: 7.837778, Y: 3.518519 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 964328544, PinID: 1563674029 },
                Target: { PinType: 2, SubChipID: 0, PinID: 672620736 },
                WirePoints: [
                    { X: 2.92370415, Y: 2.32064819 },
                    { X: 7.837778, Y: 2.95370388 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 964328544, PinID: 1484036384 },
                Target: { PinType: 2, SubChipID: 0, PinID: 576761498 },
                WirePoints: [
                    { X: 2.92370415, Y: 1.84064817 },
                    { X: 7.837778, Y: 2.41666675 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 30951385, PinID: 576114810 },
                Target: { PinType: 2, SubChipID: 0, PinID: 793392506 },
                WirePoints: [
                    { X: 2.92370415, Y: 1.4556483 },
                    { X: 7.837778, Y: 1.82407379 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 30951385, PinID: 652623521 },
                Target: { PinType: 2, SubChipID: 0, PinID: 932461842 },
                WirePoints: [
                    { X: 2.92370415, Y: 0.9756483 },
                    { X: 7.837778, Y: 1.22222245 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 30951385, PinID: 1563674029 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1664659923 },
                WirePoints: [
                    { X: 2.92370415, Y: 0.495648324 },
                    { X: 7.837778, Y: 0.6666666 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 30951385, PinID: 1484036384 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2136002862 },
                WirePoints: [
                    { X: 2.92370415, Y: 0.015648365 },
                    { X: 7.837778, Y: 0.120370388 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "8OR": {
        Name: "8OR",
        Colour: "#FF0279",
        InputPins: [
            {
                Name: "Pin",
                ID: 69855477,
                PositionY: 3.58333349,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 301942230,
                PositionY: 3.02777767,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1490589018,
                PositionY: 2.47222233,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 269814637,
                PositionY: 1.90740764,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 486149291,
                PositionY: 1.18518531,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 198738580,
                PositionY: 0.6203699,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 597468119,
                PositionY: 0.00925898552,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1690409278,
                PositionY: -0.5833334,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 1430770313,
                PositionY: 1.25,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "OR",
                ID: 1253586293,
                Points: [{ X: -6.73148155, Y: 3.32407427 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 165169035,
                Points: [{ X: -6.72222233, Y: 2.15740776 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1268448874,
                Points: [{ X: -6.722223, Y: 0.916667 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1924771512,
                Points: [{ X: -6.740741, Y: -0.25000006 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1705515045,
                Points: [{ X: -4.73148155, Y: 0.5000001 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1580535419,
                Points: [{ X: -4.712963, Y: 2.95370388 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 375439290,
                Points: [{ X: -2.33333325, Y: 1.7592591 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1690409278 },
                Target: {
                    PinType: 3,
                    SubChipID: 1924771512,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: -0.5833334 },
                    { X: -7.19074059, Y: -0.370000064 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 597468119 },
                Target: { PinType: 3, SubChipID: 1924771512, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 0.00925898552 },
                    { X: -7.19074059, Y: -0.130000055 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 198738580 },
                Target: {
                    PinType: 3,
                    SubChipID: 1268448874,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: 0.6203699 },
                    { X: -7.17222261, Y: 0.796667 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 486149291 },
                Target: { PinType: 3, SubChipID: 1268448874, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 1.18518531 },
                    { X: -7.17222261, Y: 1.036667 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 269814637 },
                Target: { PinType: 3, SubChipID: 165169035, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 1.90740764 },
                    { X: -7.172222, Y: 2.03740788 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1490589018 },
                Target: { PinType: 3, SubChipID: 165169035, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 2.47222233 },
                    { X: -7.172222, Y: 2.27740765 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 69855477 },
                Target: { PinType: 3, SubChipID: 1253586293, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 3.58333349 },
                    { X: -7.18148136, Y: 3.44407415 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 301942230 },
                Target: {
                    PinType: 3,
                    SubChipID: 1253586293,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: 3.02777767 },
                    { X: -7.18148136, Y: 3.20407438 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1253586293,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1580535419, PinID: 207650570 },
                WirePoints: [
                    { X: -6.28148174, Y: 3.32407427 },
                    { X: -5.162963, Y: 3.07370377 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 165169035, PinID: 2097025545 },
                Target: {
                    PinType: 3,
                    SubChipID: 1580535419,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -6.27222252, Y: 2.15740776 },
                    { X: -5.162963, Y: 2.833704 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1580535419,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 375439290, PinID: 207650570 },
                WirePoints: [
                    { X: -4.26296329, Y: 2.95370388 },
                    { X: -2.7833333, Y: 1.87925911 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1705515045,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 375439290, PinID: 1969904689 },
                WirePoints: [
                    { X: -4.28148174, Y: 0.5000001 },
                    { X: -2.7833333, Y: 1.6392591 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1268448874,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1705515045, PinID: 207650570 },
                WirePoints: [
                    { X: -6.272223, Y: 0.916667 },
                    { X: -5.18148136, Y: 0.6200001 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1924771512,
                    PinID: 2097025545,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1705515045,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -6.290741, Y: -0.25000006 },
                    { X: -5.18148136, Y: 0.3800001 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 375439290, PinID: 2097025545 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1430770313 },
                WirePoints: [
                    { X: -1.88333321, Y: 1.7592591 },
                    { X: 7.837778, Y: 1.25 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    adder: {
        Name: "adder",
        Colour: "#566D77",
        displayID: 0,
        InputPins: [
            {
                Name: "A",
                ID: 480637128,
                PositionY: 2.12037015,
                ColourThemeName: "Red",
            },
            {
                Name: "B",
                ID: 498445549,
                PositionY: 1.564815,
                ColourThemeName: "Green",
            },
            {
                Name: "C",
                ID: 269672206,
                PositionY: 1.00925922,
                ColourThemeName: "Yellow",
            },
        ],
        OutputPins: [
            {
                Name: "1",
                ID: 380142586,
                PositionY: 1.43518388,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 317326242,
                PositionY: 0.5648136,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "half adder",
                ID: 106752447,
                Points: [{ X: -2.52777767, Y: 1.79629624 }],
                Data: null,
            },
            {
                Name: "half adder",
                ID: 1693706986,
                Points: [{ X: 1.23148108, Y: 1.23148179 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1449414095,
                Points: [{ X: 6.09259224, Y: 0.5648142 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 480637128 },
                Target: { PinType: 3, SubChipID: 106752447, PinID: 1400386686 },
                WirePoints: [
                    { X: -7.837778, Y: 2.12037015 },
                    { X: -3.15277767, Y: 1.97129631 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 498445549 },
                Target: { PinType: 3, SubChipID: 106752447, PinID: 960256329 },
                WirePoints: [
                    { X: -7.837778, Y: 1.564815 },
                    { X: -3.15277767, Y: 1.62129617 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 269672206 },
                Target: { PinType: 3, SubChipID: 1693706986, PinID: 960256329 },
                WirePoints: [
                    { X: -7.837778, Y: 1.00925922 },
                    { X: 0.6064811, Y: 1.05648184 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 106752447, PinID: 1255496580 },
                Target: {
                    PinType: 3,
                    SubChipID: 1693706986,
                    PinID: 1400386686,
                },
                WirePoints: [
                    { X: -1.90277767, Y: 1.97129631 },
                    { X: 0.250000447, Y: 1.99999988 },
                    { X: 0.250000447, Y: 1.37962937 },
                    { X: 0.6064811, Y: 1.40648174 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1693706986,
                    PinID: 1255496580,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 380142586 },
                WirePoints: [
                    { X: 1.85648108, Y: 1.40648174 },
                    { X: 7.837778, Y: 1.43518388 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1449414095,
                    PinID: 2097025545,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 317326242 },
                WirePoints: [
                    { X: 6.542592, Y: 0.5648142 },
                    { X: 7.837778, Y: 0.5648136 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 106752447, PinID: 956194334 },
                Target: { PinType: 3, SubChipID: 1449414095, PinID: 207650570 },
                WirePoints: [
                    { X: -1.90277767, Y: 1.62129617 },
                    { X: -0.07407401, Y: 1.60185158 },
                    { X: -0.05555577, Y: 0.657407641 },
                    { X: 5.64259243, Y: 0.6848142 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1693706986, PinID: 956194334 },
                Target: {
                    PinType: 3,
                    SubChipID: 1449414095,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: 1.85648108, Y: 1.05648184 },
                    { X: 2.13888931, Y: 1.06481493 },
                    { X: 2.1481483, Y: 0.425925851 },
                    { X: 5.64259243, Y: 0.4448142 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "command register": {
        Name: "command register",
        Colour: "#CF6500",
        displayID: 0,
        InputPins: [
            {
                Name: "0",
                ID: 1844290274,
                PositionY: -25.8499413,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 774120682,
                PositionY: -26.424017,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 1314999326,
                PositionY: -26.99809,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1310339867,
                PositionY: -27.5721645,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 1783275710,
                PositionY: -28.13698,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 720280624,
                PositionY: -28.7017937,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 1579903863,
                PositionY: -29.26661,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 1207885134,
                PositionY: -29.8314247,
                ColourThemeName: "Red",
            },
            {
                Name: "ENABLED",
                ID: 1104488226,
                PositionY: -30.9795742,
                ColourThemeName: "Blue",
            },
            {
                Name: "WRITE",
                ID: 1586322270,
                PositionY: -31.5536461,
                ColourThemeName: "Blue",
            },
            {
                Name: "CLOAK",
                ID: 265601652,
                PositionY: -33.8331528,
                ColourThemeName: "Yellow",
            },
            {
                Name: "STOP",
                ID: 2130868597,
                PositionY: -32.73066,
                ColourThemeName: "Green",
            },
            {
                Name: "CLEAR",
                ID: 622102920,
                PositionY: -32.1455956,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "D0",
                ID: 953669358,
                PositionY: -27.0412636,
                ColourThemeName: "Red",
            },
            {
                Name: "D1",
                ID: 426164622,
                PositionY: -27.58756,
                ColourThemeName: "Red",
            },
            {
                Name: "D2",
                ID: 364227130,
                PositionY: -28.1523743,
                ColourThemeName: "Red",
            },
            {
                Name: "D3",
                ID: 201150219,
                PositionY: -28.6801529,
                ColourThemeName: "Red",
            },
            {
                Name: "SET ADR",
                ID: 999328615,
                PositionY: 4.240741,
                ColourThemeName: "Red",
            },
            {
                Name: "ENB MEM",
                ID: 1336304000,
                PositionY: 3.67592573,
                ColourThemeName: "Red",
            },
            {
                Name: "SET MEM",
                ID: 1560032633,
                PositionY: 3.138889,
                ColourThemeName: "Red",
            },
            {
                Name: "SET A",
                ID: 1186870432,
                PositionY: 2.57407427,
                ColourThemeName: "Red",
            },
            {
                Name: "SET B",
                ID: 1934597837,
                PositionY: 2.02777815,
                ColourThemeName: "Red",
            },
            {
                Name: "ENB A",
                ID: 455447014,
                PositionY: 1.49074078,
                ColourThemeName: "Red",
            },
            {
                Name: "ENB ALU",
                ID: 1487899313,
                PositionY: 0.9537035,
                ColourThemeName: "Red",
            },
            {
                Name: "SUB ALU",
                ID: 1314783160,
                PositionY: 0.416666865,
                ColourThemeName: "Red",
            },
            {
                Name: "ADD CMD",
                ID: 1066300812,
                PositionY: -0.120370388,
                ColourThemeName: "Red",
            },
            {
                Name: "ENB CMD",
                ID: 63523106,
                PositionY: -0.64814806,
                ColourThemeName: "Red",
            },
            {
                Name: "CLR CMD",
                ID: 1311831639,
                PositionY: -1.16666675,
                ColourThemeName: "Red",
            },
            {
                Name: "SET DECODE",
                ID: 1223220242,
                PositionY: -1.69444442,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "8bit-REGISTER",
                ID: 1537379439,
                Points: [{ X: -4.60185242, Y: -27.9332771 }],
                Data: null,
            },
            {
                Name: "counter 4b",
                ID: 2083132180,
                Points: [{ X: -2.157407, Y: -30.475729 }],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1381665270,
                Points: [
                    { X: -6.720371, Y: -71.65803 },
                    { X: -6.75740767, Y: 4.129822 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 530453171,
                Points: [
                    { X: -6.920371, Y: -71.65813 },
                    { X: -6.957408, Y: 4.12973 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 2052664053,
                Points: [
                    { X: -7.120371, Y: -71.658226 },
                    { X: -7.15740776, Y: 4.129631 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 354619304,
                Points: [
                    { X: -7.32037067, Y: -71.6583252 },
                    { X: -7.35740757, Y: 4.129532 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 967201106,
                Points: [
                    { X: -7.520371, Y: -71.6584244 },
                    { X: -7.557408, Y: 4.12943268 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 730153250,
                Points: [
                    { X: -7.720371, Y: -71.6585159 },
                    { X: -7.75740767, Y: 4.1293335 },
                ],
                Data: null,
            },
            {
                Name: "AND",
                ID: 659203902,
                Points: [{ X: 0.05555577, Y: -30.4604073 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1725537623,
                Points: [{ X: -4.268519, Y: -30.6641121 }],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 95195607,
                Points: [
                    { X: -6.527778, Y: -71.6541 },
                    { X: -6.53703737, Y: 4.120369 },
                ],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 897065201,
                Points: [{ X: 0.05555564, Y: 3.65740728 }],
                Data: null,
            },
            {
                Name: "3AND",
                ID: 1235816630,
                Points: [{ X: -3.33333349, Y: 1.87037051 }],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1546063437,
                Points: [
                    { X: -5.63333368, Y: -72.8922348 },
                    { X: -5.67963028, Y: 4.250122 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1382700102,
                Points: [
                    { X: -5.83333349, Y: -72.89236 },
                    { X: -5.87963, Y: 4.25 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 682276596,
                Points: [
                    { X: -6.0333333, Y: -72.89248 },
                    { X: -6.07963, Y: 4.249878 },
                ],
                Data: null,
            },
            {
                Name: "3NOT",
                ID: 1621698728,
                Points: [{ X: -7.01851845, Y: -73.522 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 1682774949,
                Points: [{ X: 0.0277773552, Y: 1.87963009 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1540277407,
                Points: [{ X: -4.87037039, Y: -32.74396 }],
                Data: null,
            },
            {
                Name: "4AND",
                ID: 498307995,
                Points: [{ X: -3.34259272, Y: 3.59259272 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1844290274 },
                Target: { PinType: 3, SubChipID: 1537379439, PinID: 394935240 },
                WirePoints: [
                    { X: -7.837778, Y: -25.8499413 },
                    { X: -5.82185268, Y: -26.7332764 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 774120682 },
                Target: { PinType: 3, SubChipID: 1537379439, PinID: 699877108 },
                WirePoints: [
                    { X: -7.837778, Y: -26.424017 },
                    { X: -5.82185268, Y: -26.973278 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1314999326 },
                Target: { PinType: 3, SubChipID: 1537379439, PinID: 285195245 },
                WirePoints: [
                    { X: -7.837778, Y: -26.99809 },
                    { X: -5.82185268, Y: -27.2132778 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1310339867 },
                Target: { PinType: 3, SubChipID: 1537379439, PinID: 397780527 },
                WirePoints: [
                    { X: -7.837778, Y: -27.5721645 },
                    { X: -5.82185268, Y: -27.4532776 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1783275710 },
                Target: {
                    PinType: 3,
                    SubChipID: 1537379439,
                    PinID: 1447474653,
                },
                WirePoints: [
                    { X: -7.837778, Y: -28.13698 },
                    { X: -5.82185268, Y: -27.6932774 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 720280624 },
                Target: {
                    PinType: 3,
                    SubChipID: 1537379439,
                    PinID: 1230097902,
                },
                WirePoints: [
                    { X: -7.837778, Y: -28.7017937 },
                    { X: -5.82185268, Y: -27.9332771 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1579903863 },
                Target: { PinType: 3, SubChipID: 1537379439, PinID: 136930271 },
                WirePoints: [
                    { X: -7.837778, Y: -29.26661 },
                    { X: -5.82185268, Y: -28.1732769 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1207885134 },
                Target: { PinType: 3, SubChipID: 1537379439, PinID: 807409755 },
                WirePoints: [
                    { X: -7.837778, Y: -29.8314247 },
                    { X: -5.82185268, Y: -28.4132767 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 265601652 },
                Target: {
                    PinType: 3,
                    SubChipID: 1537379439,
                    PinID: 1425871993,
                },
                WirePoints: [
                    { X: -7.837778, Y: -33.8331528 },
                    { X: -6.0000186, Y: -33.83038 },
                    { X: -6.12962961, Y: -29.1387062 },
                    { X: -5.82185268, Y: -29.1332779 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1586322270 },
                Target: { PinType: 3, SubChipID: 1537379439, PinID: 600137525 },
                WirePoints: [
                    { X: -7.837778, Y: -31.5536461 },
                    { X: -5.82185268, Y: -28.8932762 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 1537379439, PinID: 793392506 },
                Target: { PinType: 2, SubChipID: 0, PinID: 953669358 },
                WirePoints: [
                    { X: -3.38185239, Y: -28.1047058 },
                    { X: 7.837778, Y: -27.0412636 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1537379439, PinID: 932461842 },
                Target: { PinType: 2, SubChipID: 0, PinID: 426164622 },
                WirePoints: [
                    { X: -3.38185239, Y: -28.4475632 },
                    { X: 7.837778, Y: -27.58756 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1537379439,
                    PinID: 1664659923,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 364227130 },
                WirePoints: [
                    { X: -3.38185239, Y: -28.79042 },
                    { X: 7.837778, Y: -28.1523743 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1537379439,
                    PinID: 2136002862,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 201150219 },
                WirePoints: [
                    { X: -3.38185239, Y: -29.1332779 },
                    { X: 7.837778, Y: -28.6801529 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1537379439,
                    PinID: 1289544212,
                },
                Target: { PinType: 3, SubChipID: 730153250, PinID: 0 },
                WirePoints: [
                    { X: -3.38185239, Y: -26.7332764 },
                    { X: -2.574074, Y: -26.7115421 },
                    { X: -2.564815, Y: -25.2763577 },
                    { X: -7.74299669, Y: -25.35968 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1537379439,
                    PinID: 1707752613,
                },
                Target: { PinType: 3, SubChipID: 967201106, PinID: 0 },
                WirePoints: [
                    { X: -3.38185239, Y: -27.0761337 },
                    { X: -2.3981483, Y: -27.0541344 },
                    { X: -2.3981483, Y: -25.0356159 },
                    { X: -7.543105, Y: -25.13747 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1537379439, PinID: 672620736 },
                Target: { PinType: 3, SubChipID: 354619304, PinID: 0 },
                WirePoints: [
                    { X: -3.38185239, Y: -27.4189911 },
                    { X: -2.212963, Y: -27.3874683 },
                    { X: -2.240741, Y: -24.8133945 },
                    { X: -7.3432045, Y: -24.93377 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1537379439, PinID: 576761498 },
                Target: { PinType: 3, SubChipID: 2052664053, PinID: 0 },
                WirePoints: [
                    { X: -3.38185239, Y: -27.7618484 },
                    { X: -2.07407427, Y: -27.7393188 },
                    { X: -2.10185218, Y: -24.6652451 },
                    { X: -7.1432724, Y: -24.7948837 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2083132180, PinID: 593344879 },
                Target: { PinType: 3, SubChipID: 659203902, PinID: 0 },
                WirePoints: [
                    { X: -1.38240707, Y: -30.3557281 },
                    { X: -0.494444251, Y: -30.3404064 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2083132180,
                    PinID: 1640413403,
                },
                Target: { PinType: 3, SubChipID: 659203902, PinID: 1 },
                WirePoints: [
                    { X: -1.38240707, Y: -30.59573 },
                    { X: -0.494444251, Y: -30.5804081 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1725537623,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 2083132180, PinID: 699473070 },
                WirePoints: [
                    { X: -3.81851888, Y: -30.6641121 },
                    { X: -2.932407, Y: -30.59573 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 622102920 },
                Target: { PinType: 3, SubChipID: 1725537623, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: -32.1455956 },
                    { X: -5.77777767, Y: -32.07152 },
                    { X: -5.7962966, Y: -30.5252228 },
                    { X: -4.71851873, Y: -30.5441113 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 659203902, PinID: 2 },
                Target: {
                    PinType: 3,
                    SubChipID: 1725537623,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: 0.6055558, Y: -30.4604073 },
                    { X: 0.962963164, Y: -30.43263 },
                    { X: 0.9814814, Y: -31.8955936 },
                    { X: -5.58333349, Y: -31.9881859 },
                    { X: -5.564815, Y: -30.7659645 },
                    { X: -4.71851873, Y: -30.7841129 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 265601652 },
                Target: { PinType: 3, SubChipID: 2083132180, PinID: 532585341 },
                WirePoints: [
                    { X: -7.837778, Y: -33.8331528 },
                    { X: -6.30559826, Y: -33.83084 },
                    { X: -3.53703737, Y: -33.8492966 },
                    { X: -3.57407427, Y: -30.8400383 },
                    { X: -2.932407, Y: -30.83573 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1104488226 },
                Target: {
                    PinType: 3,
                    SubChipID: 1537379439,
                    PinID: 1123941419,
                },
                WirePoints: [
                    { X: -7.837778, Y: -30.9795742 },
                    { X: -5.82185268, Y: -28.6532764 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2083132180,
                    PinID: 2073071841,
                },
                Target: { PinType: 3, SubChipID: 530453171, PinID: 0 },
                WirePoints: [
                    { X: -1.38240707, Y: -30.1157284 },
                    { X: -1.13888907, Y: -30.1199436 },
                    { X: -1.15740728, Y: -29.8884621 },
                    { X: -6.94077444, Y: -29.90699 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 2083132180, PinID: 593344879 },
                Target: { PinType: 3, SubChipID: 1381665270, PinID: 0 },
                WirePoints: [
                    { X: -1.38240707, Y: -30.3557281 },
                    { X: -1.05541873, Y: -30.3500862 },
                    { X: -1.05555534, Y: -29.7310543 },
                    { X: -6.740842, Y: -29.7680931 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2083132180,
                    PinID: 1640413403,
                },
                Target: { PinType: 3, SubChipID: 95195607, PinID: 0 },
                WirePoints: [
                    { X: -1.38240707, Y: -30.59573 },
                    { X: -0.9440341, Y: -30.5881653 },
                    { X: -0.962963164, Y: -29.6106853 },
                    { X: -6.53291464, Y: -29.6199417 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 897065201, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 999328615 },
                WirePoints: [
                    { X: 0.975555658, Y: 3.65740728 },
                    { X: 7.837778, Y: 4.240741 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 897065201, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 63523106 },
                WirePoints: [
                    { X: 0.975555658, Y: 3.65740728 },
                    { X: 7.837778, Y: -0.64814806 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1621698728,
                    PinID: 1308068964,
                },
                Target: { PinType: 3, SubChipID: 682276596, PinID: 0 },
                WirePoints: [
                    { X: -6.37351847, Y: -73.2820053 },
                    { X: -6.0462966, Y: -73.290535 },
                    { X: -6.03343344, Y: -72.72571 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1621698728, PinID: 849462265 },
                Target: { PinType: 3, SubChipID: 1382700102, PinID: 0 },
                WirePoints: [
                    { X: -6.37351847, Y: -73.522 },
                    { X: -5.87037039, Y: -73.51276 },
                    { X: -5.833439, Y: -72.7164459 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1621698728, PinID: 733224219 },
                Target: { PinType: 3, SubChipID: 1546063437, PinID: 0 },
                WirePoints: [
                    { X: -6.37351847, Y: -73.762 },
                    { X: -5.666667, Y: -73.74423 },
                    { X: -5.633428, Y: -72.73497 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 530453171, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1621698728, PinID: 919246279 },
                WirePoints: [
                    { X: -6.920433, Y: -71.5312653 },
                    { X: -6.93518543, Y: -71.9757156 },
                    { X: -7.87963, Y: -71.9757156 },
                    { X: -7.87963, Y: -73.28127 },
                    { X: -7.66351843, Y: -73.2820053 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1381665270, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1621698728, PinID: 466261574 },
                WirePoints: [
                    { X: -6.720442, Y: -71.51276 },
                    { X: -6.740741, Y: -72.0960846 },
                    { X: -8.046297, Y: -72.12386 },
                    { X: -8.037038, Y: -73.53127 },
                    { X: -7.66351843, Y: -73.522 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 95195607, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1621698728,
                    PinID: 1958201299,
                },
                WirePoints: [
                    { X: -6.5277977, Y: -71.49423 },
                    { X: -6.5, Y: -72.2257156 },
                    { X: -8.212963, Y: -72.27201 },
                    { X: -8.212963, Y: -73.77201 },
                    { X: -7.66351843, Y: -73.762 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1546063437, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1235816630, PinID: 97537940 },
                WirePoints: [
                    { X: -5.6780467, Y: 1.6111145 },
                    { X: -3.97833347, Y: 1.6303705 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1235816630,
                    PinID: 1697059946,
                },
                Target: { PinType: 3, SubChipID: 1682774949, PinID: 0 },
                WirePoints: [
                    { X: -2.68833351, Y: 1.87037051 },
                    { X: -0.892222643, Y: 2.05463 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1235816630,
                    PinID: 1697059946,
                },
                Target: { PinType: 3, SubChipID: 1682774949, PinID: 1 },
                WirePoints: [
                    { X: -2.68833351, Y: 1.87037051 },
                    { X: -0.892222643, Y: 1.70463014 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1682774949, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1066300812 },
                WirePoints: [
                    { X: 0.9477774, Y: 1.87963009 },
                    { X: 7.837778, Y: -0.120370388 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1682774949, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1336304000 },
                WirePoints: [
                    { X: 0.9477774, Y: 1.87963009 },
                    { X: 7.837778, Y: 3.67592573 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1682774949, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1223220242 },
                WirePoints: [
                    { X: 0.9477774, Y: 1.87963009 },
                    { X: 7.837778, Y: -1.69444442 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2130868597 },
                Target: { PinType: 3, SubChipID: 1540277407, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -32.73066 },
                    { X: -5.42037058, Y: -32.74396 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1540277407, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2083132180,
                    PinID: 2066367549,
                },
                WirePoints: [
                    { X: -4.32037, Y: -32.74396 },
                    { X: -3.32407427, Y: -32.75322 },
                    { X: -3.30555558, Y: -30.0772934 },
                    { X: -2.932407, Y: -30.1157284 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1540277407, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2083132180, PinID: 666301525 },
                WirePoints: [
                    { X: -4.32037, Y: -32.74396 },
                    { X: -3.32407427, Y: -32.75322 },
                    { X: -3.30722117, Y: -30.3179569 },
                    { X: -2.932407, Y: -30.3557281 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 498307995, PinID: 1205844992 },
                Target: { PinType: 3, SubChipID: 897065201, PinID: 1 },
                WirePoints: [
                    { X: -2.69759274, Y: 3.59259272 },
                    { X: -0.8644444, Y: 3.48240733 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 498307995, PinID: 1205844992 },
                Target: { PinType: 3, SubChipID: 897065201, PinID: 0 },
                WirePoints: [
                    { X: -2.69759274, Y: 3.59259272 },
                    { X: -0.8644444, Y: 3.83240724 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1546063437, PinID: 1 },
                Target: { PinType: 3, SubChipID: 498307995, PinID: 1496321589 },
                WirePoints: [
                    { X: -5.679008, Y: 3.21297455 },
                    { X: -3.9875927, Y: 3.23259258 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1382700102, PinID: 1 },
                Target: { PinType: 3, SubChipID: 498307995, PinID: 1666844580 },
                WirePoints: [
                    { X: -5.87914658, Y: 3.44446564 },
                    { X: -3.9875927, Y: 3.47259259 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 682276596, PinID: 1 },
                Target: { PinType: 3, SubChipID: 498307995, PinID: 1839139777 },
                WirePoints: [
                    { X: -6.07931328, Y: 3.72222137 },
                    { X: -3.9875927, Y: 3.7125926 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1382700102, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1235816630,
                    PinID: 1494133027,
                },
                WirePoints: [
                    { X: -5.87818527, Y: 1.8425827 },
                    { X: -3.97833347, Y: 1.87037051 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 530453171, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1235816630,
                    PinID: 1031037051,
                },
                WirePoints: [
                    { X: -6.956399, Y: 2.06481171 },
                    { X: -3.97833347, Y: 2.11037064 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1540277407, PinID: 1 },
                Target: { PinType: 3, SubChipID: 498307995, PinID: 1412749308 },
                WirePoints: [
                    { X: -4.32037, Y: -32.74396 },
                    { X: -3.32407427, Y: -32.75322 },
                    { X: -3.32199645, Y: -32.45297 },
                    { X: -8.027778, Y: -32.4808578 },
                    { X: -8.06481552, Y: 4.7037034 },
                    { X: -5.333334, Y: 4.675926 },
                    { X: -5.34259272, Y: 3.97222233 },
                    { X: -3.9875927, Y: 3.95259285 },
                ],
                ColourThemeName: "Green",
            },
        ],
    },
    "counter 4b": {
        Name: "counter 4b",
        Colour: "#053532",
        displayID: 0,
        InputPins: [
            {
                Name: "ENABLE",
                ID: 2066367549,
                PositionY: 3.27777815,
                ColourThemeName: "Red",
            },
            {
                Name: "ADD",
                ID: 666301525,
                PositionY: 2.67592621,
                ColourThemeName: "Red",
            },
            {
                Name: "CLEAR",
                ID: 699473070,
                PositionY: 2.11111116,
                ColourThemeName: "Red",
            },
            {
                Name: "CLOCK",
                ID: 532585341,
                PositionY: 1.52777791,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "0",
                ID: 2073071841,
                PositionY: 2.92592573,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 593344879,
                PositionY: 2.33333349,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 1640413403,
                PositionY: 1.75000012,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1031270065,
                PositionY: 1.18518531,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "timer 4b",
                ID: 1694675997,
                Points: [{ X: -2.1111114, Y: 2.361111 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 1136456159,
                Points: [{ X: 3.731482, Y: 3.19509315 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 767916510,
                Points: [{ X: 3.731482, Y: 2.46009278 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 1428714739,
                Points: [{ X: 3.731482, Y: 1.72509265 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 1542811688,
                Points: [{ X: 3.731482, Y: 0.9900924 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 666301525 },
                Target: { PinType: 3, SubChipID: 1694675997, PinID: 84045896 },
                WirePoints: [
                    { X: -7.837778, Y: 2.67592621 },
                    { X: -2.7361114, Y: 2.72111082 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 532585341 },
                Target: {
                    PinType: 3,
                    SubChipID: 1694675997,
                    PinID: 1022152081,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.52777791 },
                    { X: -2.7361114, Y: 2.48111081 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 699473070 },
                Target: {
                    PinType: 3,
                    SubChipID: 1694675997,
                    PinID: 1728110198,
                },
                WirePoints: [
                    { X: -7.837778, Y: 2.11111116 },
                    { X: -2.7361114, Y: 2.001111 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1136456159, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2073071841 },
                WirePoints: [
                    { X: 4.651482, Y: 3.19509315 },
                    { X: 7.837778, Y: 2.92592573 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 767916510, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 593344879 },
                WirePoints: [
                    { X: 4.651482, Y: 2.46009278 },
                    { X: 7.837778, Y: 2.33333349 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1428714739, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1640413403 },
                WirePoints: [
                    { X: 4.651482, Y: 1.72509265 },
                    { X: 7.837778, Y: 1.75000012 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1542811688, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1031270065 },
                WirePoints: [
                    { X: 4.651482, Y: 0.9900924 },
                    { X: 7.837778, Y: 1.18518531 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1694675997,
                    PinID: 1940277741,
                },
                Target: { PinType: 3, SubChipID: 1542811688, PinID: 1 },
                WirePoints: [
                    { X: -1.4861114, Y: 2.001111 },
                    { X: 2.811482, Y: 0.8150924 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1694675997, PinID: 602873282 },
                Target: { PinType: 3, SubChipID: 1428714739, PinID: 1 },
                WirePoints: [
                    { X: -1.4861114, Y: 2.2411108 },
                    { X: 2.811482, Y: 1.5500927 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1694675997, PinID: 518298035 },
                Target: { PinType: 3, SubChipID: 767916510, PinID: 1 },
                WirePoints: [
                    { X: -1.4861114, Y: 2.48111081 },
                    { X: 2.811482, Y: 2.28509283 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1694675997, PinID: 923483017 },
                Target: { PinType: 3, SubChipID: 1136456159, PinID: 1 },
                WirePoints: [
                    { X: -1.4861114, Y: 2.72111082 },
                    { X: 2.811482, Y: 3.0200932 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2066367549 },
                Target: { PinType: 3, SubChipID: 1542811688, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.27777815 },
                    { X: 2.28703713, Y: 3.50000024 },
                    { X: 2.48148179, Y: 1.12962961 },
                    { X: 2.811482, Y: 1.16509247 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2066367549 },
                Target: { PinType: 3, SubChipID: 1136456159, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.27777815 },
                    { X: 2.28703713, Y: 3.50000024 },
                    { X: 2.30231237, Y: 3.313789 },
                    { X: 2.811482, Y: 3.370093 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2066367549 },
                Target: { PinType: 3, SubChipID: 767916510, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.27777815 },
                    { X: 2.28703713, Y: 3.50000024 },
                    { X: 2.360716, Y: 2.60181952 },
                    { X: 2.811482, Y: 2.63509274 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2066367549 },
                Target: { PinType: 3, SubChipID: 1428714739, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.27777815 },
                    { X: 2.28703713, Y: 3.50000024 },
                    { X: 2.42043138, Y: 1.87386191 },
                    { X: 2.811482, Y: 1.9000926 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 666301525 },
                Target: { PinType: 3, SubChipID: 1694675997, PinID: 20017733 },
                WirePoints: [
                    { X: -7.837778, Y: 2.67592621 },
                    { X: -3.18540049, Y: 2.71812415 },
                    { X: -3.20370364, Y: 2.25000024 },
                    { X: -2.7361114, Y: 2.2411108 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "D-FLIP-FLOP": {
        Name: "D-FLIP-FLOP",
        Colour: "#A8DA22",
        displayID: 0,
        InputPins: [
            {
                Name: "DATA",
                ID: 1252284597,
                PositionY: 0.759259462,
                ColourThemeName: "Red",
            },
            {
                Name: "CLOCK",
                ID: 1325456643,
                PositionY: 0.222222209,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "NOUTPUT",
                ID: 1683784443,
                PositionY: 0.7499999,
                ColourThemeName: "Red",
            },
            {
                Name: "OUTPUT",
                ID: 1343169056,
                PositionY: 0.222222209,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "D-LATCH",
                ID: 447631426,
                Points: [{ X: -1.23148179, Y: 0.6388885 }],
                Data: null,
            },
            {
                Name: "D-LATCH",
                ID: 56686914,
                Points: [{ X: -3.86111069, Y: 1.19444489 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 2032716819,
                Points: [{ X: -5.86111164, Y: 0.6851852 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 447631426, PinID: 1766677428 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1683784443 },
                WirePoints: [
                    { X: -0.4564818, Y: 0.7588885 },
                    { X: 7.837778, Y: 0.7499999 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 447631426, PinID: 421012988 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1343169056 },
                WirePoints: [
                    { X: -0.4564818, Y: 0.5188885 },
                    { X: 7.837778, Y: 0.222222209 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 56686914, PinID: 421012988 },
                Target: { PinType: 3, SubChipID: 447631426, PinID: 1327505293 },
                WirePoints: [
                    { X: -3.08611059, Y: 1.07444489 },
                    { X: -2.00648165, Y: 0.7588885 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1325456643 },
                Target: { PinType: 3, SubChipID: 447631426, PinID: 859316496 },
                WirePoints: [
                    { X: -7.837778, Y: 0.222222209 },
                    { X: -2.00648165, Y: 0.5188885 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1252284597 },
                Target: { PinType: 3, SubChipID: 56686914, PinID: 1327505293 },
                WirePoints: [
                    { X: -7.837778, Y: 0.759259462 },
                    { X: -4.636111, Y: 1.3144449 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1325456643 },
                Target: { PinType: 3, SubChipID: 2032716819, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 0.222222209 },
                    { X: -6.833108, Y: 0.273334652 },
                    { X: -6.411112, Y: 0.6851852 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2032716819, PinID: 1 },
                Target: { PinType: 3, SubChipID: 56686914, PinID: 859316496 },
                WirePoints: [
                    { X: -5.31111145, Y: 0.6851852 },
                    { X: -4.636111, Y: 1.07444489 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "D-LATCH": {
        Name: "D-LATCH",
        Colour: "#1B0869",
        displayID: 0,
        InputPins: [
            {
                Name: "DATA",
                ID: 1327505293,
                PositionY: 1.759259,
                ColourThemeName: "Red",
            },
            {
                Name: "WRITE",
                ID: 859316496,
                PositionY: 0.5185187,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "NOUTPUT",
                ID: 1766677428,
                PositionY: 1.3611114,
                ColourThemeName: "Red",
            },
            {
                Name: "OUTPUT",
                ID: 421012988,
                PositionY: 0.805555,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "AND",
                ID: 1897602241,
                Points: [{ X: -1.44444478, Y: 1.50925934 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 684733112,
                Points: [{ X: -1.44444478, Y: 0.657407641 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1296091327,
                Points: [{ X: -3.59259248, Y: 1.12962961 }],
                Data: null,
            },
            {
                Name: "SR-LATCH",
                ID: 848583459,
                Points: [{ X: 0.731482, Y: 1.12037063 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1327505293 },
                Target: { PinType: 3, SubChipID: 1897602241, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.759259 },
                    { X: -1.99444485, Y: 1.62925935 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 859316496 },
                Target: { PinType: 3, SubChipID: 684733112, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.5185187 },
                    { X: -1.99444485, Y: 0.537407637 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1296091327, PinID: 1 },
                Target: { PinType: 3, SubChipID: 684733112, PinID: 0 },
                WirePoints: [
                    { X: -3.04259253, Y: 1.12962961 },
                    { X: -1.99444485, Y: 0.777407646 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1327505293 },
                Target: { PinType: 3, SubChipID: 1296091327, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.759259 },
                    { X: -4.850933, Y: 1.7607044 },
                    { X: -4.861111, Y: 1.14814818 },
                    { X: -4.14259243, Y: 1.12962961 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 859316496 },
                Target: { PinType: 3, SubChipID: 1897602241, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.5185187 },
                    { X: -5.70375633, Y: 0.52541703 },
                    { X: -5.82407427, Y: 2.814815 },
                    { X: -2.50925922, Y: 2.67592621 },
                    { X: -2.462963, Y: 1.388889 },
                    { X: -1.99444485, Y: 1.38925934 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1897602241, PinID: 2 },
                Target: { PinType: 3, SubChipID: 848583459, PinID: 888280736 },
                WirePoints: [
                    { X: -0.894444764, Y: 1.50925934 },
                    { X: -0.118517995, Y: 1.24037063 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 684733112, PinID: 2 },
                Target: { PinType: 3, SubChipID: 848583459, PinID: 836603439 },
                WirePoints: [
                    { X: -0.894444764, Y: 0.657407641 },
                    { X: -0.118517995, Y: 1.00037062 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 848583459, PinID: 1208563366 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1766677428 },
                WirePoints: [
                    { X: 1.581482, Y: 1.24037063 },
                    { X: 7.837778, Y: 1.3611114 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 848583459, PinID: 468991679 },
                Target: { PinType: 2, SubChipID: 0, PinID: 421012988 },
                WirePoints: [
                    { X: 1.581482, Y: 1.00037062 },
                    { X: 7.837778, Y: 0.805555 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    equal: {
        Name: "equal",
        Colour: "#627C70",
        displayID: 0,
        InputPins: [
            {
                Name: "Pin",
                ID: 53444049,
                PositionY: 2.037037,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 527997433,
                PositionY: 1.48148119,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 1739941076,
                PositionY: 1.1944443,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "NOR",
                ID: 1685274173,
                Points: [{ X: -4.99074125, Y: 1.74074054 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 2140222663,
                Points: [{ X: -2.740741, Y: 1.3055557 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1144396234,
                Points: [{ X: -5.009259, Y: 0.990740657 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 1685274173, PinID: 970550351 },
                Target: { PinType: 3, SubChipID: 2140222663, PinID: 207650570 },
                WirePoints: [
                    { X: -4.440741, Y: 1.74074054 },
                    { X: -3.190741, Y: 1.42555571 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2140222663,
                    PinID: 2097025545,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1739941076 },
                WirePoints: [
                    { X: -2.290741, Y: 1.3055557 },
                    { X: 7.837778, Y: 1.1944443 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 53444049 },
                Target: { PinType: 3, SubChipID: 1685274173, PinID: 602321611 },
                WirePoints: [
                    { X: -7.837778, Y: 2.037037 },
                    { X: -5.54074144, Y: 1.86074054 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 527997433 },
                Target: { PinType: 3, SubChipID: 1685274173, PinID: 333544862 },
                WirePoints: [
                    { X: -7.837778, Y: 1.48148119 },
                    { X: -5.54074144, Y: 1.62074053 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 53444049 },
                Target: { PinType: 3, SubChipID: 1144396234, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 2.037037 },
                    { X: -5.968311, Y: 1.89355624 },
                    { X: -6.018519, Y: 1.08333349 },
                    { X: -5.55925941, Y: 1.11074066 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 527997433 },
                Target: { PinType: 3, SubChipID: 1144396234, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 1.48148119 },
                    { X: -6.195988, Y: 1.58101583 },
                    { X: -6.12962961, Y: 0.8611113 },
                    { X: -5.55925941, Y: 0.870740652 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1144396234, PinID: 2 },
                Target: {
                    PinType: 3,
                    SubChipID: 2140222663,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -4.459259, Y: 0.990740657 },
                    { X: -3.190741, Y: 1.1855557 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "half adder": {
        Name: "half adder",
        Colour: "#424B5B",
        displayID: 0,
        InputPins: [
            {
                Name: "A",
                ID: 1400386686,
                PositionY: 0.481482148,
                ColourThemeName: "Red",
            },
            {
                Name: "B",
                ID: 960256329,
                PositionY: -0.0833332539,
                ColourThemeName: "Green",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 1255496580,
                PositionY: 0.07407457,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 956194334,
                PositionY: -0.4907409,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "XOR",
                ID: 1598850701,
                Points: [{ X: -1.39814806, Y: 0.296296775 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1548180619,
                Points: [{ X: -1.38888943, Y: -0.240740478 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 960256329 },
                Target: { PinType: 3, SubChipID: 1548180619, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -0.0833332539 },
                    { X: -1.9388895, Y: -0.120740481 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1598850701,
                    PinID: 2043966668,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1255496580 },
                WirePoints: [
                    { X: -0.848148048, Y: 0.296296775 },
                    { X: 7.837778, Y: 0.07407457 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1400386686 },
                Target: {
                    PinType: 3,
                    SubChipID: 1598850701,
                    PinID: 1654960180,
                },
                WirePoints: [
                    { X: -7.837778, Y: 0.481482148 },
                    { X: -1.948148, Y: 0.41629678 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 960256329 },
                Target: { PinType: 3, SubChipID: 1598850701, PinID: 996750 },
                WirePoints: [
                    { X: -7.837778, Y: -0.0833332539 },
                    { X: -2.28731871, Y: -0.118530951 },
                    { X: -2.27777815, Y: 0.203703642 },
                    { X: -1.948148, Y: 0.176296771 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1400386686 },
                Target: { PinType: 3, SubChipID: 1548180619, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.481482148 },
                    { X: -2.50014067, Y: 0.422406137 },
                    { X: -2.490741, Y: -0.379629731 },
                    { X: -1.9388895, Y: -0.360740483 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1548180619, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 956194334 },
                WirePoints: [
                    { X: -0.8388894, Y: -0.240740478 },
                    { X: 7.837778, Y: -0.4907409 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "JK TRIGGER": {
        Name: "JK TRIGGER",
        Colour: "#422C33",
        displayID: 0,
        InputPins: [
            {
                Name: "J",
                ID: 238097623,
                PositionY: 0.5633755,
                ColourThemeName: "Red",
            },
            {
                Name: "K",
                ID: 2092324150,
                PositionY: -0.9273653,
                ColourThemeName: "Red",
            },
            {
                Name: "CLOCK",
                ID: 1589320256,
                PositionY: -0.232921124,
                ColourThemeName: "Yellow",
            },
            {
                Name: "CLR",
                ID: 1662832200,
                PositionY: -2.37037039,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Q",
                ID: 255925912,
                PositionY: 0.424486816,
                ColourThemeName: "Red",
            },
            {
                Name: "-Q",
                ID: 409100475,
                PositionY: -0.1495874,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "SR-LATCH",
                ID: 1902045222,
                Points: [{ X: -1.62962973, Y: -0.260698676 }],
                Data: null,
            },
            {
                Name: "SR-LATCH",
                ID: 1829594077,
                Points: [{ X: 2.65740919, Y: -0.232921422 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 264937795,
                Points: [{ X: -1.60185134, Y: -2.12962985 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1730369370,
                Points: [{ X: 0.5092589, Y: -0.030092597 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 679564452,
                Points: [{ X: 0.5092589, Y: -0.6550926 }],
                Data: null,
            },
            {
                Name: "3AND",
                ID: 2007462247,
                Points: [{ X: -4.101852, Y: 0.182499975 }],
                Data: null,
            },
            {
                Name: "3AND",
                ID: 1997357656,
                Points: [{ X: -4.101852, Y: -0.6825001 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1080804422,
                Points: [{ X: -2.84259224, Y: -1.1944443 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 302968358,
                Points: [{ X: -6.537037, Y: 1.35185182 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 2060674019,
                Points: [{ X: 1.41666627, Y: -1.34259248 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1829594077,
                    PinID: 1208563366,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 409100475 },
                WirePoints: [
                    { X: 3.507409, Y: -0.352921426 },
                    { X: 7.837778, Y: -0.1495874 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1829594077, PinID: 468991679 },
                Target: { PinType: 2, SubChipID: 0, PinID: 255925912 },
                WirePoints: [
                    { X: 3.507409, Y: -0.112921424 },
                    { X: 7.837778, Y: 0.424486816 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1902045222,
                    PinID: 1208563366,
                },
                Target: { PinType: 3, SubChipID: 1730369370, PinID: 0 },
                WirePoints: [
                    { X: -0.7796297, Y: -0.380698681 },
                    { X: -0.040741086, Y: 0.0899074 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1902045222, PinID: 468991679 },
                Target: { PinType: 3, SubChipID: 679564452, PinID: 0 },
                WirePoints: [
                    { X: -0.7796297, Y: -0.140698671 },
                    { X: -0.040741086, Y: -0.5350926 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1829594077, PinID: 468991679 },
                Target: { PinType: 3, SubChipID: 1997357656, PinID: 97537940 },
                WirePoints: [
                    { X: 3.507409, Y: -0.112921424 },
                    { X: 3.839904, Y: -0.318874925 },
                    { X: 3.79629683, Y: -1.824074 },
                    { X: -5.064815, Y: -1.76851845 },
                    { X: -5.09259272, Y: -1.06481493 },
                    { X: -4.746852, Y: -0.922500134 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 238097623 },
                Target: { PinType: 3, SubChipID: 2007462247, PinID: 97537940 },
                WirePoints: [
                    { X: -7.837778, Y: 0.5633755 },
                    { X: -4.746852, Y: -0.0575000346 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2092324150 },
                Target: {
                    PinType: 3,
                    SubChipID: 1997357656,
                    PinID: 1031037051,
                },
                WirePoints: [
                    { X: -7.837778, Y: -0.9273653 },
                    { X: -4.746852, Y: -0.4425001 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1829594077,
                    PinID: 1208563366,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 2007462247,
                    PinID: 1031037051,
                },
                WirePoints: [
                    { X: 3.507409, Y: -0.352921426 },
                    { X: 3.75931144, Y: -0.141216025 },
                    { X: 3.731482, Y: 1.08333349 },
                    { X: -5.166667, Y: 1.00000024 },
                    { X: -5.212963, Y: 0.407407284 },
                    { X: -4.746852, Y: 0.422499985 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 679564452, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1829594077, PinID: 888280736 },
                WirePoints: [
                    { X: 1.05925894, Y: -0.6550926 },
                    { X: 1.80740917, Y: -0.112921424 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1080804422,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1902045222, PinID: 836603439 },
                WirePoints: [
                    { X: -2.39259219, Y: -1.1944443 },
                    { X: -2.47962976, Y: -0.380698681 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1997357656,
                    PinID: 1697059946,
                },
                Target: { PinType: 3, SubChipID: 1080804422, PinID: 207650570 },
                WirePoints: [
                    { X: -3.456852, Y: -0.6825001 },
                    { X: -3.29259229, Y: -1.07444429 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1662832200 },
                Target: {
                    PinType: 3,
                    SubChipID: 1080804422,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: -2.37037039 },
                    { X: -3.29259229, Y: -1.3144443 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 264937795, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1730369370, PinID: 1 },
                WirePoints: [
                    { X: -1.05185127, Y: -2.12962985 },
                    { X: -0.240740791, Y: -2.15740728 },
                    { X: -0.3425927, Y: -0.185185075 },
                    { X: -0.040741086, Y: -0.1500926 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 264937795, PinID: 1 },
                Target: { PinType: 3, SubChipID: 679564452, PinID: 1 },
                WirePoints: [
                    { X: -1.05185127, Y: -2.12962985 },
                    { X: -0.240740791, Y: -2.15740728 },
                    { X: -0.310492218, Y: -0.806766868 },
                    { X: -0.040741086, Y: -0.7750926 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2007462247,
                    PinID: 1697059946,
                },
                Target: { PinType: 3, SubChipID: 1902045222, PinID: 888280736 },
                WirePoints: [
                    { X: -3.456852, Y: 0.182499975 },
                    { X: -2.47962976, Y: -0.140698671 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 302968358, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1997357656,
                    PinID: 1494133027,
                },
                WirePoints: [
                    { X: -5.98703671, Y: 1.35185182 },
                    { X: -5.703704, Y: 1.34259284 },
                    { X: -5.787037, Y: -0.824074149 },
                    { X: -4.746852, Y: -0.6825001 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 302968358, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2007462247,
                    PinID: 1494133027,
                },
                WirePoints: [
                    { X: -5.98703671, Y: 1.35185182 },
                    { X: -5.703704, Y: 1.34259284 },
                    { X: -5.74463844, Y: 0.278283954 },
                    { X: -4.746852, Y: 0.182499975 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 302968358, PinID: 1 },
                Target: { PinType: 3, SubChipID: 264937795, PinID: 0 },
                WirePoints: [
                    { X: -5.98703671, Y: 1.35185182 },
                    { X: -5.703704, Y: 1.34259284 },
                    { X: -5.7827816, Y: -0.7134403 },
                    { X: -5.7592597, Y: -2.09259272 },
                    { X: -2.15185142, Y: -2.12962985 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1589320256 },
                Target: { PinType: 3, SubChipID: 302968358, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -0.232921124 },
                    { X: -7.2962966, Y: -0.2870369 },
                    { X: -7.28703737, Y: 1.33333325 },
                    { X: -7.087037, Y: 1.35185182 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 1730369370, PinID: 2 },
                Target: { PinType: 3, SubChipID: 2060674019, PinID: 207650570 },
                WirePoints: [
                    { X: 1.05925894, Y: -0.030092597 },
                    { X: 1.30555582, Y: -0.009259284 },
                    { X: 1.28703761, Y: -0.9629631 },
                    { X: 0.7037036, Y: -1.00925922 },
                    { X: 0.722221851, Y: -1.18518531 },
                    { X: 0.9666663, Y: -1.22259247 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2060674019,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1829594077, PinID: 836603439 },
                WirePoints: [
                    { X: 1.86666632, Y: -1.34259248 },
                    { X: 2.11111069, Y: -1.29629636 },
                    { X: 1.685185, Y: -0.7407406 },
                    { X: 1.80740917, Y: -0.352921426 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1662832200 },
                Target: {
                    PinType: 3,
                    SubChipID: 2060674019,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: -2.37037039 },
                    { X: -3.932354, Y: -1.46307218 },
                    { X: 0.9666663, Y: -1.46259248 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    NAND: {
        Name: "NAND",
        Colour: "#4F5E8F",
        InputPins: [
            {
                Name: "Pin",
                ID: 260329442,
                PositionY: 0.60185194,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 895713554,
                PositionY: 0.0925928354,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 2060701350,
                PositionY: 0.2870369,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "AND",
                ID: 1000669325,
                Points: [{ X: -5.82407427, Y: 0.259259343 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1654914133,
                Points: [{ X: -4.268519, Y: 0.222222209 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 260329442 },
                Target: { PinType: 3, SubChipID: 1000669325, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 0.60185194 },
                    { X: -6.37407446, Y: 0.379259348 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 895713554 },
                Target: { PinType: 3, SubChipID: 1000669325, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 0.0925928354 },
                    { X: -6.37407446, Y: 0.139259338 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1000669325, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1654914133, PinID: 0 },
                WirePoints: [
                    { X: -5.274074, Y: 0.259259343 },
                    { X: -4.818519, Y: 0.222222209 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1654914133, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2060701350 },
                WirePoints: [
                    { X: -3.718519, Y: 0.222222209 },
                    { X: 7.837778, Y: 0.2870369 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    NOR: {
        Name: "NOR",
        Colour: "#3F74EA",
        InputPins: [
            {
                Name: "Pin",
                ID: 602321611,
                PositionY: 1.42592609,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 333544862,
                PositionY: 0.3425926,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 970550351,
                PositionY: 0.9629631,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "NOT",
                ID: 363651912,
                Points: [{ X: -3.17592573, Y: 0.92592597 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1810543939,
                Points: [{ X: -5.2592597, Y: 0.9814817 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1810543939,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 363651912, PinID: 0 },
                WirePoints: [
                    { X: -4.80926, Y: 0.9814817 },
                    { X: -3.72592568, Y: 0.92592597 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 363651912, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 970550351 },
                WirePoints: [
                    { X: -2.62592578, Y: 0.92592597 },
                    { X: 7.837778, Y: 0.9629631 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 602321611 },
                Target: { PinType: 3, SubChipID: 1810543939, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 1.42592609 },
                    { X: -5.70925951, Y: 1.10148168 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 333544862 },
                Target: {
                    PinType: 3,
                    SubChipID: 1810543939,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: 0.3425926 },
                    { X: -5.70925951, Y: 0.861481667 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "numbers display": {
        Name: "numbers display",
        Colour: "#801241",
        displayID: 0,
        InputPins: [
            {
                Name: "A",
                ID: 1795821171,
                PositionY: 0.749999166,
                ColourThemeName: "Red",
            },
            {
                Name: "B",
                ID: 1458113498,
                PositionY: 1.75925922,
                ColourThemeName: "Green",
            },
            {
                Name: "C",
                ID: 767476907,
                PositionY: 2.66666651,
                ColourThemeName: "Blue",
            },
            {
                Name: "D",
                ID: 941844968,
                PositionY: 3.50925946,
                ColourThemeName: "Indigo",
            },
            {
                Name: "E",
                ID: 285508765,
                PositionY: 4.527777,
                ColourThemeName: "Yellow",
            },
        ],
        OutputPins: [
            {
                Name: "-",
                ID: 1209060429,
                PositionY: 3.648148,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 854348043,
                PositionY: 3.04629612,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 174998424,
                PositionY: 2.46296287,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1659249729,
                PositionY: 1.87962949,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 392396866,
                PositionY: 1.27777755,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 77313475,
                PositionY: 0.702204,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 223387773,
                PositionY: 0.101851821,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 897616466,
                PositionY: -0.472222269,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "NOR",
                ID: 361242184,
                Points: [{ X: -4.83333349, Y: 3.91666651 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 2044508555,
                Points: [{ X: -4.78703737, Y: 2.74999976 }],
                Data: null,
            },
            {
                Name: "XOR",
                ID: 1675467124,
                Points: [{ X: -4.81481457, Y: 1.97222233 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1570690226,
                Points: [{ X: -4.85185242, Y: 1.240741 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 950710761,
                Points: [{ X: -4.80555534, Y: 0.6388891 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 295970000,
                Points: [{ X: -4.9537034, Y: -0.148148239 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1951815612,
                Points: [{ X: -4.78703737, Y: -0.7499999 }],
                Data: null,
            },
            {
                Name: "NOR",
                ID: 202839581,
                Points: [{ X: -4.925926, Y: -1.50925934 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 519173093,
                Points: [{ X: -4.981482, Y: -2.037037 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1742974357,
                Points: [{ X: -0.4629628, Y: 4.138889 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 426438,
                Points: [{ X: -0.361110926, Y: 3.23148131 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 63786783,
                Points: [{ X: -0.379629672, Y: 2.42592573 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1738830899,
                Points: [{ X: -0.499999821, Y: 1.58333361 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 2004483242,
                Points: [{ X: -0.361110926, Y: 0.8425927 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1944351135,
                Points: [{ X: -0.361110926, Y: 0.194444656 }],
                Data: null,
            },
            {
                Name: "NOR",
                ID: 688647987,
                Points: [{ X: -0.481481582, Y: -0.481481552 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 514636631,
                Points: [{ X: -0.5555556, Y: -1.18518531 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 172786557,
                Points: [{ X: -0.5833335, Y: -1.87962949 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1069048900,
                Points: [{ X: -0.407407582, Y: -2.56481457 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1000264959,
                Points: [{ X: 2.07407427, Y: 4.28703737 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 420497213,
                Points: [{ X: 2.11111069, Y: 3.099537 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 93886155,
                Points: [{ X: 2.11111069, Y: 2.474537 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1232064587,
                Points: [{ X: 2.25926, Y: -0.06944448 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 38473322,
                Points: [{ X: 2.25926, Y: -0.6944445 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1570629108,
                Points: [{ X: 2.25926, Y: -1.31944442 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1751726050,
                Points: [{ X: -4.916667, Y: -6.05761957 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 749632949,
                Points: [{ X: -4.87037039, Y: -6.756694 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 855008701,
                Points: [{ X: -4.87037039, Y: -7.38169336 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1067500347,
                Points: [{ X: -4.87037039, Y: -8.006693 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1053750008,
                Points: [{ X: -2.67592621, Y: -7.4742856 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1310837404,
                Points: [{ X: -0.962963164, Y: -6.20576763 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1412813048,
                Points: [{ X: 1.36111164, Y: -5.4835453 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1376415524,
                Points: [{ X: 1.55555522, Y: -6.47660065 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 148512626,
                Points: [{ X: 1.55555522, Y: -7.10160065 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1683105601,
                Points: [{ X: 1.42592645, Y: -8.039101 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1255198175,
                Points: [{ X: 5.277778, Y: -5.770583 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 2129896508,
                Points: [{ X: 3.509259, Y: -6.631694 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 2080867618,
                Points: [{ X: -5.509259, Y: -10.611804 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 2077846865,
                Points: [{ X: -5.509259, Y: -11.236804 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1304981433,
                Points: [{ X: -5.509259, Y: -11.861804 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1962367896,
                Points: [{ X: -2.78703713, Y: -11.3108778 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 880805812,
                Points: [{ X: -0.3611114, Y: -10.5817108 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 671450993,
                Points: [{ X: -0.370370567, Y: -11.1604147 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 2079221329,
                Points: [{ X: -0.518518567, Y: -11.986804 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 529111402,
                Points: [{ X: -0.481481582, Y: -12.653471 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1407368851,
                Points: [{ X: 2.84259272, Y: -10.5608778 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1546334124,
                Points: [{ X: 2.90740776, Y: -11.2483778 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1882438798,
                Points: [{ X: 2.90740776, Y: -11.8733778 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 927613443,
                Points: [{ X: -5.805556, Y: -15.15973 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 81655542,
                Points: [{ X: -5.787037, Y: -15.8726921 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 354785176,
                Points: [{ X: -1.74999988, Y: -15.0208406 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 2005654180,
                Points: [{ X: -1.82407439, Y: -15.8171368 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1835291828,
                Points: [{ X: 1.65740764, Y: -15.1504707 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 354785176, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1835291828, PinID: 207650570 },
                WirePoints: [
                    { X: -1.1049999, Y: -15.0208406 },
                    { X: 1.20740771, Y: -15.0304708 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 81655542, PinID: 2 },
                Target: {
                    PinType: 3,
                    SubChipID: 1835291828,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -5.23703671, Y: -15.8726921 },
                    { X: 1.20740771, Y: -15.2704706 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2005654180, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 77313475 },
                WirePoints: [
                    { X: -1.27407432, Y: -15.8171368 },
                    { X: 8.046297, Y: -15.9745445 },
                    { X: 7.837778, Y: 0.702204 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1835291828,
                    PinID: 2097025545,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 854348043 },
                WirePoints: [
                    { X: 2.10740757, Y: -15.1504707 },
                    { X: 7.833334, Y: -15.2817059 },
                    { X: 7.837778, Y: 3.04629612 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 354785176, PinID: 2060701350 },
                Target: { PinType: 2, SubChipID: 0, PinID: 392396866 },
                WirePoints: [
                    { X: -1.1049999, Y: -15.0208406 },
                    { X: 0.370283842, Y: -15.0269842 },
                    { X: 0.398148447, Y: -14.5711079 },
                    { X: 7.5555563, Y: -14.7192564 },
                    { X: 7.837778, Y: 1.27777755 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 927613443, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 354785176, PinID: 895713554 },
                WirePoints: [
                    { X: -5.355556, Y: -15.15973 },
                    { X: -2.395, Y: -15.1408405 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 927613443, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 2005654180, PinID: 0 },
                WirePoints: [
                    { X: -5.355556, Y: -15.15973 },
                    { X: -3.07415438, Y: -15.145174 },
                    { X: -3.07407451, Y: -15.8613949 },
                    { X: -2.37407446, Y: -15.8171368 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2079221329,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 81655542, PinID: 0 },
                WirePoints: [
                    { X: -0.06851858, Y: -11.986804 },
                    { X: 4.481482, Y: -12.4744864 },
                    { X: 4.90740776, Y: -13.835597 },
                    { X: -6.7962966, Y: -13.6874495 },
                    { X: -6.833334, Y: -15.7337456 },
                    { X: -6.337037, Y: -15.7526922 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1882438798,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 81655542, PinID: 1 },
                WirePoints: [
                    { X: 3.55240774, Y: -11.8733778 },
                    { X: 5.203704, Y: -11.9652271 },
                    { X: 5.39814854, Y: -13.6318941 },
                    { X: -7.21296358, Y: -13.3263378 },
                    { X: -7.22222233, Y: -16.085598 },
                    { X: -6.337037, Y: -15.992692 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 529111402, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1882438798, PinID: 895713554 },
                WirePoints: [
                    { X: -0.0314815938, Y: -12.653471 },
                    { X: 2.26240778, Y: -11.9933777 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2079221329,
                    PinID: 2097025545,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1659249729 },
                WirePoints: [
                    { X: -0.06851858, Y: -11.986804 },
                    { X: 4.43556261, Y: -12.4695644 },
                    { X: 7.388889, Y: -12.6133757 },
                    { X: 7.837778, Y: 1.87962949 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 172786557, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1882438798, PinID: 260329442 },
                WirePoints: [
                    { X: -0.1333335, Y: -1.87962949 },
                    { X: 0.7685185, Y: -1.9629631 },
                    { X: 0.740741134, Y: -3.31481481 },
                    { X: -7.944445, Y: -2.97222233 },
                    { X: -8.083334, Y: -9.393322 },
                    { X: 1.62037015, Y: -9.272952 },
                    { X: 1.8518523, Y: -11.704216 },
                    { X: 2.26240778, Y: -11.7533779 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 671450993, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1546334124, PinID: 895713554 },
                WirePoints: [
                    { X: 0.2746294, Y: -11.1604147 },
                    { X: 2.26240778, Y: -11.3683777 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 880805812, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1407368851, PinID: 1 },
                WirePoints: [
                    { X: 0.283888578, Y: -10.5817108 },
                    { X: 2.29259276, Y: -10.6808777 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1407368851, PinID: 2 },
                Target: { PinType: 3, SubChipID: 927613443, PinID: 207650570 },
                WirePoints: [
                    { X: 3.39259267, Y: -10.5608778 },
                    { X: 5.68518543, Y: -10.6836615 },
                    { X: 5.87963, Y: -13.7577353 },
                    { X: -6.583334, Y: -14.2392168 },
                    { X: -6.25555563, Y: -15.03973 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1795821171 },
                Target: { PinType: 3, SubChipID: 361242184, PinID: 602321611 },
                WirePoints: [
                    { X: -7.837778, Y: 0.749999166 },
                    { X: -5.38333368, Y: 4.03666639 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1458113498 },
                Target: { PinType: 3, SubChipID: 361242184, PinID: 333544862 },
                WirePoints: [
                    { X: -7.837778, Y: 1.75925922 },
                    { X: -7.03703737, Y: 3 },
                    { X: -7.0092597, Y: 3.73148155 },
                    { X: -5.38333368, Y: 3.79666662 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1458113498 },
                Target: { PinType: 3, SubChipID: 2044508555, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.75925922 },
                    { X: -7.03703737, Y: 3 },
                    { X: -7.032981, Y: 3.10682321 },
                    { X: -5.33703756, Y: 2.74999976 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1458113498 },
                Target: {
                    PinType: 3,
                    SubChipID: 1675467124,
                    PinID: 1654960180,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.75925922 },
                    { X: -7.03703737, Y: 3 },
                    { X: -7.032981, Y: 3.10682321 },
                    { X: -5.89488363, Y: 2.86736965 },
                    { X: -5.82407427, Y: 2.01851845 },
                    { X: -5.36481476, Y: 2.09222221 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 767476907 },
                Target: { PinType: 3, SubChipID: 1675467124, PinID: 996750 },
                WirePoints: [
                    { X: -7.837778, Y: 2.66666651 },
                    { X: -5.36481476, Y: 1.85222232 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1458113498 },
                Target: { PinType: 3, SubChipID: 1951815612, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 1.75925922 },
                    { X: -7.03703737, Y: 3 },
                    { X: -6.985933, Y: 3.0969243 },
                    { X: -6.777778, Y: -0.657407343 },
                    { X: -5.43203735, Y: -0.6299999 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1795821171 },
                Target: { PinType: 3, SubChipID: 1951815612, PinID: 895713554 },
                WirePoints: [
                    { X: -7.837778, Y: 0.749999166 },
                    { X: -7.24216461, Y: 3.94578648 },
                    { X: -7.21296358, Y: -0.9722221 },
                    { X: -5.43203735, Y: -0.8699999 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1795821171 },
                Target: { PinType: 3, SubChipID: 950710761, PinID: 895713554 },
                WirePoints: [
                    { X: -7.837778, Y: 0.749999166 },
                    { X: -7.24216461, Y: 3.94578648 },
                    { X: -7.221759, Y: 0.5090971 },
                    { X: -5.45055532, Y: 0.51888907 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285508765 },
                Target: { PinType: 3, SubChipID: 950710761, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 4.527777 },
                    { X: -5.45055532, Y: 0.7588891 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 767476907 },
                Target: { PinType: 3, SubChipID: 519173093, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 2.66666651 },
                    { X: -6.498555, Y: 2.02185035 },
                    { X: -6.435186, Y: -2.04629636 },
                    { X: -5.531482, Y: -2.037037 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285508765 },
                Target: { PinType: 3, SubChipID: 295970000, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 4.527777 },
                    { X: -5.95289564, Y: 0.6712884 },
                    { X: -5.97222233, Y: -0.06481469 },
                    { X: -5.403703, Y: -0.0281482413 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 941844968 },
                Target: { PinType: 3, SubChipID: 1570690226, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.50925946 },
                    { X: -5.40185261, Y: 1.240741 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 941844968 },
                Target: { PinType: 3, SubChipID: 295970000, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 3.50925946 },
                    { X: -6.29573631, Y: 1.28830969 },
                    { X: -6.32407427, Y: -0.296296179 },
                    { X: -5.403703, Y: -0.268148243 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 941844968 },
                Target: { PinType: 3, SubChipID: 202839581, PinID: 333544862 },
                WirePoints: [
                    { X: -7.837778, Y: 3.50925946 },
                    { X: -6.29573631, Y: 1.28830969 },
                    { X: -6.32026052, Y: -0.0830495358 },
                    { X: -6.34259272, Y: -1.5925926 },
                    { X: -5.4759264, Y: -1.62925935 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285508765 },
                Target: { PinType: 3, SubChipID: 202839581, PinID: 602321611 },
                WirePoints: [
                    { X: -7.837778, Y: 4.527777 },
                    { X: -5.95289564, Y: 0.6712884 },
                    { X: -5.965158, Y: 0.2042475 },
                    { X: -5.98148155, Y: -1.3055557 },
                    { X: -5.4759264, Y: -1.38925934 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 2044508555, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1742974357, PinID: 207650570 },
                WirePoints: [
                    { X: -4.237037, Y: 2.74999976 },
                    { X: -2.90740776, Y: 2.76851845 },
                    { X: -2.87037063, Y: 4.28703737 },
                    { X: -0.9129628, Y: 4.25888872 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 767476907 },
                Target: {
                    PinType: 3,
                    SubChipID: 1742974357,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: 2.66666651 },
                    { X: -6.498555, Y: 2.02185035 },
                    { X: -6.491001, Y: 1.5368886 },
                    { X: -2.675926, Y: 1.58333361 },
                    { X: -2.62037015, Y: 3.99999976 },
                    { X: -0.9129628, Y: 4.018889 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 2044508555, PinID: 1 },
                Target: { PinType: 3, SubChipID: 426438, PinID: 260329442 },
                WirePoints: [
                    { X: -4.237037, Y: 2.74999976 },
                    { X: -2.90740776, Y: 2.76851845 },
                    { X: -2.894086, Y: 3.31471539 },
                    { X: -1.00611091, Y: 3.3514812 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1795821171 },
                Target: { PinType: 3, SubChipID: 426438, PinID: 895713554 },
                WirePoints: [
                    { X: -7.837778, Y: 0.749999166 },
                    { X: -7.24216461, Y: 3.94578648 },
                    { X: -7.23781252, Y: 3.212815 },
                    { X: -1.00611091, Y: 3.11148143 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 767476907 },
                Target: { PinType: 3, SubChipID: 63786783, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 2.66666651 },
                    { X: -6.498555, Y: 2.02185035 },
                    { X: -6.491001, Y: 1.5368886 },
                    { X: -2.675926, Y: 1.58333361 },
                    { X: -2.65400338, Y: 2.53695869 },
                    { X: -1.02462959, Y: 2.54592562 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 1570690226, PinID: 1 },
                Target: { PinType: 3, SubChipID: 63786783, PinID: 895713554 },
                WirePoints: [
                    { X: -4.301852, Y: 1.240741 },
                    { X: -2.527778, Y: 1.101852 },
                    { X: -2.47222233, Y: 2.29629636 },
                    { X: -1.02462959, Y: 2.30592585 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1570690226, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1738830899, PinID: 207650570 },
                WirePoints: [
                    { X: -4.301852, Y: 1.240741 },
                    { X: -2.527778, Y: 1.101852 },
                    { X: -2.49716687, Y: 1.75998867 },
                    { X: -0.9499998, Y: 1.70333362 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 767476907 },
                Target: {
                    PinType: 3,
                    SubChipID: 1738830899,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: 2.66666651 },
                    { X: -6.498555, Y: 2.02185035 },
                    { X: -6.491001, Y: 1.5368886 },
                    { X: -2.86108327, Y: 1.58107948 },
                    { X: -0.9499998, Y: 1.46333361 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 950710761, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 2004483242, PinID: 895713554 },
                WirePoints: [
                    { X: -4.16055536, Y: 0.6388891 },
                    { X: -1.00611091, Y: 0.7225927 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1458113498 },
                Target: { PinType: 3, SubChipID: 2004483242, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 1.75925922 },
                    { X: -7.03703737, Y: 3 },
                    { X: -7.032981, Y: 3.10682321 },
                    { X: -5.89488363, Y: 2.86736965 },
                    { X: -5.865751, Y: 2.51813149 },
                    { X: -2.12962961, Y: 2.70370364 },
                    { X: -2.28703713, Y: 0.8981484 },
                    { X: -1.00611091, Y: 0.9625927 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 767476907 },
                Target: { PinType: 3, SubChipID: 1944351135, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 2.66666651 },
                    { X: -6.498555, Y: 2.02185035 },
                    { X: -6.491001, Y: 1.5368886 },
                    { X: -2.74976349, Y: 1.58243465 },
                    { X: -2.740741, Y: 0.3333336 },
                    { X: -1.00611091, Y: 0.314444661 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 295970000, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1944351135, PinID: 895713554 },
                WirePoints: [
                    { X: -4.50370359, Y: -0.148148239 },
                    { X: -1.00611091, Y: 0.07444466 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1570690226, PinID: 1 },
                Target: { PinType: 3, SubChipID: 688647987, PinID: 602321611 },
                WirePoints: [
                    { X: -4.301852, Y: 1.240741 },
                    { X: -2.52348065, Y: 1.19424438 },
                    { X: -2.53703713, Y: -0.398148 },
                    { X: -1.03148162, Y: -0.361481547 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1458113498 },
                Target: { PinType: 3, SubChipID: 688647987, PinID: 333544862 },
                WirePoints: [
                    { X: -7.837778, Y: 1.75925922 },
                    { X: -7.03703737, Y: 3 },
                    { X: -7.032981, Y: 3.10682321 },
                    { X: -5.89488363, Y: 2.86736965 },
                    { X: -5.865751, Y: 2.51813149 },
                    { X: -2.12962961, Y: 2.70370364 },
                    { X: -2.259659, Y: 1.21219051 },
                    { X: -2.240741, Y: -0.64814806 },
                    { X: -1.03148162, Y: -0.601481557 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1570690226, PinID: 1 },
                Target: { PinType: 3, SubChipID: 514636631, PinID: 207650570 },
                WirePoints: [
                    { X: -4.301852, Y: 1.240741 },
                    { X: -2.52348065, Y: 1.19424438 },
                    { X: -2.53514481, Y: -0.175862908 },
                    { X: -2.48148131, Y: -1.09259248 },
                    { X: -1.00555563, Y: -1.06518531 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1570690226, PinID: 1 },
                Target: { PinType: 3, SubChipID: 172786557, PinID: 207650570 },
                WirePoints: [
                    { X: -4.301852, Y: 1.240741 },
                    { X: -2.52348065, Y: 1.19424438 },
                    { X: -2.53514481, Y: -0.175862908 },
                    { X: -2.4945085, Y: -0.8700488 },
                    { X: -2.462963, Y: -1.83333337 },
                    { X: -1.03333354, Y: -1.75962949 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1570690226, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1069048900, PinID: 260329442 },
                WirePoints: [
                    { X: -4.301852, Y: 1.240741 },
                    { X: -2.52348065, Y: 1.19424438 },
                    { X: -2.53514481, Y: -0.175862908 },
                    { X: -2.4945085, Y: -0.8700488 },
                    { X: -2.47116113, Y: -1.58299518 },
                    { X: -2.37037039, Y: -2.48148155 },
                    { X: -1.0524075, Y: -2.44481468 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285508765 },
                Target: { PinType: 3, SubChipID: 514636631, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 4.527777 },
                    { X: -5.95289564, Y: 0.6712884 },
                    { X: -5.965158, Y: 0.2042475 },
                    { X: -5.98148155, Y: -1.3055557 },
                    { X: -5.860407, Y: -1.29693234 },
                    { X: -1.00555563, Y: -1.30518532 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1458113498 },
                Target: { PinType: 3, SubChipID: 172786557, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 1.75925922 },
                    { X: -7.03703737, Y: 3 },
                    { X: -7.032981, Y: 3.10682321 },
                    { X: -5.89488363, Y: 2.86736965 },
                    { X: -5.865751, Y: 2.51813149 },
                    { X: -2.12962961, Y: 2.70370364 },
                    { X: -2.259659, Y: 1.21219051 },
                    { X: -2.24187, Y: -0.537142754 },
                    { X: -2.27777815, Y: -2.04629636 },
                    { X: -1.03333354, Y: -1.9996295 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1795821171 },
                Target: { PinType: 3, SubChipID: 1069048900, PinID: 895713554 },
                WirePoints: [
                    { X: -7.837778, Y: 0.749999166 },
                    { X: -7.24216461, Y: 3.94578648 },
                    { X: -7.23781252, Y: 3.212815 },
                    { X: -1.90731335, Y: 3.12613583 },
                    { X: -1.93518543, Y: -2.73148155 },
                    { X: -1.0524075, Y: -2.68481445 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1742974357,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1000264959, PinID: 207650570 },
                WirePoints: [
                    { X: -0.0129628181, Y: 4.138889 },
                    { X: 1.62407422, Y: 4.40703726 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 941844968 },
                Target: {
                    PinType: 3,
                    SubChipID: 1000264959,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: 3.50925946 },
                    { X: -6.379326, Y: 1.292758 },
                    { X: -6.435186, Y: 4.57407427 },
                    { X: 0.472222447, Y: 4.611111 },
                    { X: 1.62407422, Y: 4.16703749 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1738830899,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 420497213, PinID: 0 },
                WirePoints: [
                    { X: -0.0499998331, Y: 1.58333361 },
                    { X: 1.092593, Y: 1.5925926 },
                    { X: 1.12037027, Y: 3.26851845 },
                    { X: 1.56111073, Y: 3.21953678 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 426438, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 420497213, PinID: 1 },
                WirePoints: [
                    { X: 0.283889055, Y: 3.23148131 },
                    { X: 1.56111073, Y: 2.979537 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 63786783, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 93886155, PinID: 1 },
                WirePoints: [
                    { X: 0.2653703, Y: 2.42592573 },
                    { X: 1.56111073, Y: 2.354537 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2004483242,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 93886155, PinID: 0 },
                WirePoints: [
                    { X: 0.283889055, Y: 0.8425927 },
                    { X: 0.7685185, Y: 0.8518517 },
                    { X: 0.7962958, Y: 2.62037039 },
                    { X: 1.56111073, Y: 2.59453678 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1944351135,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1232064587, PinID: 895713554 },
                WirePoints: [
                    { X: 0.283889055, Y: 0.194444656 },
                    { X: 1.61426, Y: -0.189444482 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 361242184, PinID: 970550351 },
                Target: { PinType: 3, SubChipID: 1232064587, PinID: 260329442 },
                WirePoints: [
                    { X: -4.2833333, Y: 3.91666651 },
                    { X: 0.7129627, Y: 3.68518543 },
                    { X: 0.9259256, Y: 0.212963223 },
                    { X: 1.61426, Y: 0.05055552 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285508765 },
                Target: { PinType: 3, SubChipID: 38473322, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 4.527777 },
                    { X: -5.95289564, Y: 0.6712884 },
                    { X: -5.965158, Y: 0.2042475 },
                    { X: -5.98148155, Y: -1.3055557 },
                    { X: -5.860407, Y: -1.29693234 },
                    { X: -1.58341026, Y: -1.304203 },
                    { X: -1.59259272, Y: -0.851852 },
                    { X: 0.2870369, Y: -0.8981481 },
                    { X: 0.3148153, Y: -0.5000001 },
                    { X: 1.61426, Y: -0.5744445 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 688647987, PinID: 970550351 },
                Target: { PinType: 3, SubChipID: 38473322, PinID: 895713554 },
                WirePoints: [
                    { X: 0.06851843, Y: -0.481481552 },
                    { X: 1.61426, Y: -0.8144445 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 514636631, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1570629108, PinID: 260329442 },
                WirePoints: [
                    { X: -0.105555594, Y: -1.18518531 },
                    { X: 1.61426, Y: -1.19944441 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 63786783, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1570629108, PinID: 895713554 },
                WirePoints: [
                    { X: 0.2653703, Y: 2.42592573 },
                    { X: 1.27929091, Y: 2.37006378 },
                    { X: 1.31481493, Y: -1.5370369 },
                    { X: 1.61426, Y: -1.43944442 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1570629108,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1067500347, PinID: 895713554 },
                WirePoints: [
                    { X: 2.90426, Y: -1.31944442 },
                    { X: 3.50926, Y: -1.36111116 },
                    { X: 3.49074054, Y: -4.23980474 },
                    { X: -7.09259272, Y: -4.01758242 },
                    { X: -7.20370436, Y: -8.286101 },
                    { X: -5.51537037, Y: -8.126693 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 361242184, PinID: 970550351 },
                Target: { PinType: 3, SubChipID: 1067500347, PinID: 260329442 },
                WirePoints: [
                    { X: -4.2833333, Y: 3.91666651 },
                    { X: 0.7129627, Y: 3.68518543 },
                    { X: 0.9222428, Y: 0.273008823 },
                    { X: 1.03703713, Y: -3.749064 },
                    { X: -7.49074125, Y: -3.54536057 },
                    { X: -7.620371, Y: -7.90647125 },
                    { X: -5.51537037, Y: -7.886693 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 38473322, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 855008701, PinID: 895713554 },
                WirePoints: [
                    { X: 2.90426, Y: -0.6944445 },
                    { X: 4.111111, Y: -0.733263 },
                    { X: 3.84259248, Y: -4.71474457 },
                    { X: -6.805556, Y: -4.53881836 },
                    { X: -6.86111164, Y: -7.57585526 },
                    { X: -5.51537037, Y: -7.50169325 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1951815612,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 855008701, PinID: 260329442 },
                WirePoints: [
                    { X: -4.14203739, Y: -0.7499999 },
                    { X: -3.50000024, Y: -0.659188747 },
                    { X: -3.52777815, Y: -2.85363317 },
                    { X: -6.361111, Y: -2.79807758 },
                    { X: -6.62037039, Y: -7.298078 },
                    { X: -5.51537037, Y: -7.26169348 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 93886155, PinID: 2 },
                Target: { PinType: 3, SubChipID: 749632949, PinID: 895713554 },
                WirePoints: [
                    { X: 2.66111064, Y: 2.474537 },
                    { X: 4.49074125, Y: 2.43023515 },
                    { X: 5.16666651, Y: -4.07728767 },
                    { X: -6.19444466, Y: -3.80876923 },
                    { X: -6.35185242, Y: -6.89210224 },
                    { X: -5.51537037, Y: -6.87669373 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420497213, PinID: 2 },
                Target: { PinType: 3, SubChipID: 749632949, PinID: 260329442 },
                WirePoints: [
                    { X: 2.66111064, Y: 3.099537 },
                    { X: 4.73148155, Y: 2.85185146 },
                    { X: 5.39814854, Y: -4.53013563 },
                    { X: -6.018519, Y: -4.317173 },
                    { X: -6.12037039, Y: -6.650506 },
                    { X: -5.51537037, Y: -6.636694 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1000264959,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1751726050, PinID: 1 },
                WirePoints: [
                    { X: 2.52407432, Y: 4.28703737 },
                    { X: 5.296296, Y: 4.18518543 },
                    { X: 5.731482, Y: -3.63198757 },
                    { X: -5.81481552, Y: -3.30791378 },
                    { X: -5.990741, Y: -6.196802 },
                    { X: -5.466667, Y: -6.17761946 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1232064587,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1751726050, PinID: 0 },
                WirePoints: [
                    { X: 2.90426, Y: -0.06944448 },
                    { X: 4.27777863, Y: -0.107841015 },
                    { X: 4.41666746, Y: -4.99673 },
                    { X: -5.75000048, Y: -4.70043325 },
                    { X: -5.787037, Y: -5.89335 },
                    { X: -5.466667, Y: -5.93761969 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1751726050, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1310837404, PinID: 260329442 },
                WirePoints: [
                    { X: -4.366667, Y: -6.05761957 },
                    { X: -1.60796309, Y: -6.08576775 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1053750008,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1310837404, PinID: 895713554 },
                WirePoints: [
                    { X: -2.03092623, Y: -7.4742856 },
                    { X: -1.60796309, Y: -6.32576752 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 855008701, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1053750008, PinID: 260329442 },
                WirePoints: [
                    { X: -4.22537041, Y: -7.38169336 },
                    { X: -3.32092619, Y: -7.35428572 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 767476907 },
                Target: { PinType: 3, SubChipID: 1053750008, PinID: 895713554 },
                WirePoints: [
                    { X: -7.837778, Y: 2.66666651 },
                    { X: -6.498555, Y: 2.02185035 },
                    { X: -6.43775034, Y: -1.88166189 },
                    { X: -6.32407427, Y: -2.66851473 },
                    { X: -7.28703737, Y: -2.6962924 },
                    { X: -7.527778, Y: -8.85937 },
                    { X: -3.68518519, Y: -8.822333 },
                    { X: -3.68518519, Y: -7.61862946 },
                    { X: -3.32092619, Y: -7.59428549 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1310837404,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1412813048, PinID: 207650570 },
                WirePoints: [
                    { X: -0.317963183, Y: -6.20576763 },
                    { X: 0.911111653, Y: -5.36354542 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1951815612,
                    PinID: 2060701350,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1412813048,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -4.14203739, Y: -0.7499999 },
                    { X: -3.50000024, Y: -0.659188747 },
                    { X: -3.52777815, Y: -2.85363317 },
                    { X: -6.361111, Y: -2.79807758 },
                    { X: -6.51007032, Y: -5.3835845 },
                    { X: 0.911111653, Y: -5.603545 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1310837404,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1376415524, PinID: 260329442 },
                WirePoints: [
                    { X: -0.317963183, Y: -6.20576763 },
                    { X: 0.2856229, Y: -5.792161 },
                    { X: 0.910555243, Y: -6.35660076 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1310837404,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 148512626, PinID: 260329442 },
                WirePoints: [
                    { X: -0.317963183, Y: -6.20576763 },
                    { X: 0.239268363, Y: -5.8239255 },
                    { X: 0.910555243, Y: -6.98160076 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1310837404,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1683105601, PinID: 0 },
                WirePoints: [
                    { X: -0.317963183, Y: -6.20576763 },
                    { X: 0.151552826, Y: -5.88403225 },
                    { X: 0.875926435, Y: -7.91910076 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285508765 },
                Target: { PinType: 3, SubChipID: 1683105601, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 4.527777 },
                    { X: -5.95289564, Y: 0.6712884 },
                    { X: -5.965158, Y: 0.2042475 },
                    { X: -5.980041, Y: -1.172316 },
                    { X: -5.91666651, Y: -2.496675 },
                    { X: -7.68518543, Y: -2.44111943 },
                    { X: -7.861111, Y: -8.539971 },
                    { X: 0.875926435, Y: -8.159101 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 202839581, PinID: 970550351 },
                Target: { PinType: 3, SubChipID: 148512626, PinID: 895713554 },
                WirePoints: [
                    { X: -4.375926, Y: -1.50925934 },
                    { X: -3.972222, Y: -1.57112682 },
                    { X: -4.27777767, Y: -2.5803864 },
                    { X: -7.43518543, Y: -2.00631237 },
                    { X: -7.814815, Y: -9.064499 },
                    { X: -1.25, Y: -8.981165 },
                    { X: -0.759259343, Y: -7.2682023 },
                    { X: 0.910555243, Y: -7.22160053 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 749632949, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1376415524, PinID: 895713554 },
                WirePoints: [
                    { X: -4.22537041, Y: -6.756694 },
                    { X: 0.910555243, Y: -6.59660053 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1376415524,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 2129896508, PinID: 0 },
                WirePoints: [
                    { X: 2.20055532, Y: -6.47660065 },
                    { X: 2.959259, Y: -6.511694 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1412813048,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1255198175, PinID: 260329442 },
                WirePoints: [
                    { X: 1.81111169, Y: -5.4835453 },
                    { X: 4.632778, Y: -5.65058327 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2129896508, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1255198175, PinID: 895713554 },
                WirePoints: [
                    { X: 4.059259, Y: -6.631694 },
                    { X: 4.632778, Y: -5.890583 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1067500347,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 2129896508, PinID: 1 },
                WirePoints: [
                    { X: -4.22537041, Y: -8.006693 },
                    { X: 0.101851359, Y: -7.94011354 },
                    { X: 0.05555577, Y: -8.467892 },
                    { X: 3.26851869, Y: -8.54196548 },
                    { X: 2.959259, Y: -6.75169373 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1255198175,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1304981433, PinID: 895713554 },
                WirePoints: [
                    { X: 5.922778, Y: -5.770583 },
                    { X: 6.462963, Y: -5.79196548 },
                    { X: 6.19444466, Y: -9.725717 },
                    { X: -7.22222233, Y: -9.864605 },
                    { X: -7.305556, Y: -12.0960865 },
                    { X: -6.154259, Y: -11.9818039 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1255198175,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 2077846865, PinID: 895713554 },
                WirePoints: [
                    { X: 5.922778, Y: -5.770583 },
                    { X: 6.462963, Y: -5.79196548 },
                    { X: 6.19444466, Y: -9.725717 },
                    { X: -7.22222233, Y: -9.864605 },
                    { X: -7.279313, Y: -11.393364 },
                    { X: -6.154259, Y: -11.3568039 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1255198175,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 2080867618, PinID: 895713554 },
                WirePoints: [
                    { X: 5.922778, Y: -5.770583 },
                    { X: 6.462963, Y: -5.79196548 },
                    { X: 6.19444466, Y: -9.725717 },
                    { X: -7.22222233, Y: -9.864605 },
                    { X: -7.25406742, Y: -10.7173424 },
                    { X: -6.154259, Y: -10.7318039 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285508765 },
                Target: { PinType: 3, SubChipID: 2080867618, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 4.527777 },
                    { X: -5.95289564, Y: 0.6712884 },
                    { X: -5.965158, Y: 0.2042475 },
                    { X: -5.980041, Y: -1.172316 },
                    { X: -5.91666651, Y: -2.496675 },
                    { X: -7.68518543, Y: -2.44111943 },
                    { X: -7.853144, Y: -8.263786 },
                    { X: -7.851852, Y: -10.5775681 },
                    { X: -6.154259, Y: -10.4918041 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1675467124,
                    PinID: 2043966668,
                },
                Target: { PinType: 3, SubChipID: 2077846865, PinID: 260329442 },
                WirePoints: [
                    { X: -4.26481438, Y: 1.97222233 },
                    { X: -3.15740752, Y: 2.07407427 },
                    { X: -3.101852, Y: -2.425926 },
                    { X: -8.138889, Y: -2.44444418 },
                    { X: -8.240741, Y: -11.2071981 },
                    { X: -6.154259, Y: -11.1168041 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 941844968 },
                Target: { PinType: 3, SubChipID: 1304981433, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 3.50925946 },
                    { X: -6.29573631, Y: 1.28830969 },
                    { X: -6.32026052, Y: -0.0830495358 },
                    { X: -6.260869, Y: -1.59605014 },
                    { X: -7.82407427, Y: -1.96540868 },
                    { X: -8.06481552, Y: -11.8319416 },
                    { X: -6.154259, Y: -11.7418041 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2077846865,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1962367896, PinID: 260329442 },
                WirePoints: [
                    { X: -4.86425924, Y: -11.236804 },
                    { X: -3.432037, Y: -11.1908779 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 148512626, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1962367896, PinID: 895713554 },
                WirePoints: [
                    { X: 2.20055532, Y: -7.10160065 },
                    { X: 2.712963, Y: -7.09807873 },
                    { X: 2.694445, Y: -9.3388195 },
                    { X: -3.842593, Y: -9.5888195 },
                    { X: -3.86111116, Y: -11.5147457 },
                    { X: -3.432037, Y: -11.4308777 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1962367896,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 880805812, PinID: 895713554 },
                WirePoints: [
                    { X: -2.14203715, Y: -11.3108778 },
                    { X: -1.00611138, Y: -10.7017107 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1962367896,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 671450993, PinID: 895713554 },
                WirePoints: [
                    { X: -2.14203715, Y: -11.3108778 },
                    { X: -1.01537061, Y: -11.2804146 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1962367896,
                    PinID: 2060701350,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 2079221329,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -2.14203715, Y: -11.3108778 },
                    { X: -0.968518555, Y: -12.1068039 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1962367896,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 529111402, PinID: 1969904689 },
                WirePoints: [
                    { X: -2.14203715, Y: -11.3108778 },
                    { X: -0.9314816, Y: -12.7734709 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1069048900,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 529111402, PinID: 207650570 },
                WirePoints: [
                    { X: 0.2375924, Y: -2.56481457 },
                    { X: 0.37037003, Y: -3.1188705 },
                    { X: -6.916667, Y: -2.82257414 },
                    { X: -7.777778, Y: -12.80586 },
                    { X: -0.9314816, Y: -12.5334711 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1683105601, PinID: 2 },
                Target: { PinType: 3, SubChipID: 2079221329, PinID: 207650570 },
                WirePoints: [
                    { X: 1.9759264, Y: -8.039101 },
                    { X: 2.29629636, Y: -8.915132 },
                    { X: -0.8425925, Y: -8.989206 },
                    { X: -1.58333361, Y: -10.266984 },
                    { X: -0.968518555, Y: -11.8668041 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1304981433,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1407368851, PinID: 0 },
                WirePoints: [
                    { X: -4.86425924, Y: -11.861804 },
                    { X: -4.27777767, Y: -11.8780956 },
                    { X: -4.416667, Y: -10.100317 },
                    { X: 1.21296251, Y: -10.1188354 },
                    { X: 2.29259276, Y: -10.4408779 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1951815612,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 1546334124, PinID: 260329442 },
                WirePoints: [
                    { X: -4.14203739, Y: -0.7499999 },
                    { X: -3.50000024, Y: -0.659188747 },
                    { X: -3.503826, Y: -0.9614144 },
                    { X: -3.25000048, Y: -2.7485 },
                    { X: -5.83333349, Y: -2.6188705 },
                    { X: -7.21296358, Y: -9.239206 },
                    { X: 0.962963164, Y: -9.06328 },
                    { X: 1.13888848, Y: -11.016984 },
                    { X: 2.26240778, Y: -11.1283779 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1546334124,
                    PinID: 2060701350,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1209060429 },
                WirePoints: [
                    { X: 3.55240774, Y: -11.2483778 },
                    { X: 7.185185, Y: -11.3490267 },
                    { X: 7.837778, Y: 3.648148 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1310837404,
                    PinID: 2060701350,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 174998424 },
                WirePoints: [
                    { X: -0.317963183, Y: -6.20576763 },
                    { X: 0.06984067, Y: -5.94002533 },
                    { X: 7.08333349, Y: -6.427685 },
                    { X: 7.837778, Y: 2.46296287 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 285508765 },
                Target: { PinType: 3, SubChipID: 927613443, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 4.527777 },
                    { X: -5.95289564, Y: 0.6712884 },
                    { X: -5.965158, Y: 0.2042475 },
                    { X: -5.980041, Y: -1.172316 },
                    { X: -5.91666651, Y: -2.496675 },
                    { X: -7.68518543, Y: -2.44111943 },
                    { X: -7.853144, Y: -8.263786 },
                    { X: -7.85191, Y: -10.4735947 },
                    { X: -8.018519, Y: -15.3018484 },
                    { X: -6.25555563, Y: -15.27973 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2080867618,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 354785176, PinID: 260329442 },
                WirePoints: [
                    { X: -4.86425924, Y: -10.611804 },
                    { X: -4.62037039, Y: -10.564539 },
                    { X: -4.63888931, Y: -13.1478729 },
                    { X: -7.63888931, Y: -13.1015768 },
                    { X: -7.72222233, Y: -14.7731447 },
                    { X: -2.395, Y: -14.9008408 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1962367896,
                    PinID: 2060701350,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 223387773 },
                WirePoints: [
                    { X: -2.14203715, Y: -11.3108778 },
                    { X: -2.01725245, Y: -11.3075037 },
                    { X: -1.95370364, Y: -10.3069782 },
                    { X: 3.92592669, Y: -10.15883 },
                    { X: 6.898148, Y: -7.39481258 },
                    { X: 6.083334, Y: 0.203703642 },
                    { X: 7.837778, Y: 0.101851821 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1255198175,
                    PinID: 2060701350,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 897616466 },
                WirePoints: [
                    { X: 5.922778, Y: -5.770583 },
                    { X: 6.462963, Y: -5.79196548 },
                    { X: 6.455484, Y: -5.901531 },
                    { X: 7.837778, Y: -0.472222269 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 519173093, PinID: 1 },
                Target: { PinType: 3, SubChipID: 880805812, PinID: 260329442 },
                WirePoints: [
                    { X: -4.431482, Y: -2.037037 },
                    { X: -3.75925922, Y: -2.07022023 },
                    { X: -4.57407427, Y: -4.21836853 },
                    { X: -7.20370436, Y: -3.94059086 },
                    { X: -7.055556, Y: -10.2841883 },
                    { X: -1.00611138, Y: -10.4617109 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1795821171 },
                Target: { PinType: 3, SubChipID: 671450993, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 0.749999166 },
                    { X: -7.24216461, Y: 3.94578648 },
                    { X: -7.21411562, Y: -0.778218746 },
                    { X: -7.694445, Y: -9.596998 },
                    { X: -4.73148155, Y: -9.485887 },
                    { X: -2.75925922, Y: -10.8840351 },
                    { X: -1.01537061, Y: -11.0404148 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    OR: {
        Name: "OR",
        Colour: "#0C6215",
        InputPins: [
            {
                Name: "Pin",
                ID: 207650570,
                PositionY: 1.05555534,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 1969904689,
                PositionY: 0.425925851,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 2097025545,
                PositionY: 0.592592359,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "NOT",
                ID: 865926174,
                Points: [{ X: -6.907408, Y: 1.0367589 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 923751815,
                Points: [{ X: -6.95370436, Y: 0.4076852 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 372993944,
                Points: [{ X: -5.09259272, Y: 0.703703761 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 207650570 },
                Target: { PinType: 3, SubChipID: 865926174, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.05555534 },
                    { X: -7.45740843, Y: 1.0367589 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1969904689 },
                Target: { PinType: 3, SubChipID: 923751815, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 0.425925851 },
                    { X: -7.50370455, Y: 0.4076852 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 865926174, PinID: 1 },
                Target: { PinType: 3, SubChipID: 372993944, PinID: 260329442 },
                WirePoints: [
                    { X: -6.357408, Y: 1.0367589 },
                    { X: -5.7375927, Y: 0.823703766 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 923751815, PinID: 1 },
                Target: { PinType: 3, SubChipID: 372993944, PinID: 895713554 },
                WirePoints: [
                    { X: -6.403704, Y: 0.4076852 },
                    { X: -5.7375927, Y: 0.583703756 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 372993944, PinID: 2060701350 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2097025545 },
                WirePoints: [
                    { X: -4.44759274, Y: 0.703703761 },
                    { X: 7.837778, Y: 0.592592359 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "positive display": {
        Name: "positive display",
        Colour: "#3F1ECB",
        displayID: 0,
        InputPins: [
            {
                Name: "8",
                ID: 714688914,
                PositionY: -3.240741,
                ColourThemeName: "Indigo",
            },
            {
                Name: "4",
                ID: 307385327,
                PositionY: -1.36111021,
                ColourThemeName: "Green",
            },
            {
                Name: "2",
                ID: 1983232281,
                PositionY: 1.24074018,
                ColourThemeName: "Yellow",
            },
            {
                Name: "1",
                ID: 1901104715,
                PositionY: 4.52777767,
                ColourThemeName: "Blue",
            },
            {
                Name: "-",
                ID: 1945141333,
                PositionY: -3.95370364,
                ColourThemeName: "Yellow",
            },
        ],
        OutputPins: [
            {
                Name: "0",
                ID: 2049723069,
                PositionY: 3.08333349,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 804143229,
                PositionY: 2.45370388,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 132776910,
                PositionY: 1.81481481,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 506227197,
                PositionY: 1.21296287,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 1181346718,
                PositionY: 0.5833334,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 1626219222,
                PositionY: -0.06481469,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 1055243200,
                PositionY: -0.6759259,
                ColourThemeName: "Red",
            },
            {
                Name: "-",
                ID: 689480350,
                PositionY: 3.68518519,
                ColourThemeName: "Yellow",
            },
        ],
        SubChips: [
            {
                Name: "NOT",
                ID: 1010696328,
                Points: [{ X: -6.03703737, Y: 3.84259248 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1233460366,
                Points: [{ X: -3.25925946, Y: 3.79629612 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 824854769,
                Points: [{ X: -1.50925839, Y: 3.925925 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1471292361,
                Points: [{ X: -5.972223, Y: -0.8611113 }],
                Data: null,
            },
            {
                Name: "XOR",
                ID: 68422685,
                Points: [{ X: -6.018518, Y: 1.51851892 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 267693928,
                Points: [{ X: -3.15740776, Y: 1.66666687 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 373459657,
                Points: [{ X: -0.407408118, Y: 1.78703666 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1945505429,
                Points: [{ X: -5.888889, Y: -1.64814806 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1838106283,
                Points: [{ X: -6.07407427, Y: -2.33333325 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 2092644923,
                Points: [{ X: -5.98148155, Y: -3.00925922 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 848150984,
                Points: [{ X: -6.03703737, Y: -3.68518543 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 3083866,
                Points: [{ X: -3.69444442, Y: -3.55555534 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 931394597,
                Points: [{ X: -4.018519, Y: 0.296296477 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1150491703,
                Points: [{ X: -2.00000048, Y: 0.185185671 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 909056722,
                Points: [{ X: -1.12037039, Y: -0.6296298 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 2094100113,
                Points: [{ X: 0.185184479, Y: -3.44444442 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1781655432,
                Points: [{ X: 1.10185111, Y: 4.222222 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 108130904,
                Points: [{ X: 1.25925946, Y: 3.092592 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1802256460,
                Points: [{ X: 1.35185146, Y: 1.66666555 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1779562805,
                Points: [{ X: 1.22222281, Y: 0.055554688 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1327131037,
                Points: [{ X: 0.5277773, Y: -1.22222257 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 833562510,
                Points: [{ X: 2.990741, Y: 2.814815 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 393904288,
                Points: [{ X: 3.12037063, Y: 1.42592549 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1264333385,
                Points: [{ X: 4.20370436, Y: 3.981481 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 33705128,
                Points: [{ X: 4.694445, Y: 2.185185 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1819646966,
                Points: [{ X: 3.64814878, Y: -0.314814746 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 764557592,
                Points: [{ X: 4.407408, Y: -1.97222221 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 2096660192,
                Points: [{ X: 4.36111164, Y: -2.62268543 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1595335941,
                Points: [{ X: 4.36111164, Y: -3.24768543 }],
                Data: null,
            },
            {
                Name: "NAND",
                ID: 1869913907,
                Points: [{ X: 6.157407, Y: -2.47222257 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 913676481,
                Points: [{ X: 6.231482, Y: -3.648148 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 714688914 },
                Target: { PinType: 3, SubChipID: 1010696328, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -3.240741 },
                    { X: -6.58703756, Y: 3.84259248 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1233460366, PinID: 2 },
                Target: { PinType: 3, SubChipID: 824854769, PinID: 895713554 },
                WirePoints: [
                    { X: -2.70925951, Y: 3.79629612 },
                    { X: -2.15425825, Y: 3.80592513 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1010696328, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1233460366, PinID: 0 },
                WirePoints: [
                    { X: -5.487037, Y: 3.84259248 },
                    { X: -3.80925941, Y: 3.916296 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1983232281 },
                Target: { PinType: 3, SubChipID: 1471292361, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.24074018 },
                    { X: -6.522223, Y: -0.8611113 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 307385327 },
                Target: { PinType: 3, SubChipID: 68422685, PinID: 1654960180 },
                WirePoints: [
                    { X: -7.837778, Y: -1.36111021 },
                    { X: -6.568518, Y: 1.63851893 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 714688914 },
                Target: { PinType: 3, SubChipID: 68422685, PinID: 996750 },
                WirePoints: [
                    { X: -7.837778, Y: -3.240741 },
                    { X: -7.1111517, Y: 3.83871245 },
                    { X: -7.09259272, Y: 1.35185182 },
                    { X: -6.568518, Y: 1.39851892 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 68422685, PinID: 2043966668 },
                Target: { PinType: 3, SubChipID: 267693928, PinID: 895713554 },
                WirePoints: [
                    { X: -5.468518, Y: 1.51851892 },
                    { X: -3.80240774, Y: 1.54666686 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1471292361, PinID: 1 },
                Target: { PinType: 3, SubChipID: 267693928, PinID: 260329442 },
                WirePoints: [
                    { X: -5.42222261, Y: -0.8611113 },
                    { X: -4.18518543, Y: -0.861111 },
                    { X: -4.166667, Y: 1.79629624 },
                    { X: -3.80240774, Y: 1.78666687 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 267693928, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 373459657, PinID: 895713554 },
                WirePoints: [
                    { X: -2.51240778, Y: 1.66666687 },
                    { X: -1.0524081, Y: 1.66703665 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824854769, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 373459657, PinID: 260329442 },
                WirePoints: [
                    { X: -0.8642584, Y: 3.925925 },
                    { X: -0.666666567, Y: 3.962963 },
                    { X: -0.7037036, Y: 3.61111116 },
                    { X: -1.287037, Y: 3.62037063 },
                    { X: -1.27777791, Y: 1.90740764 },
                    { X: -1.0524081, Y: 1.90703666 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1901104715 },
                Target: { PinType: 3, SubChipID: 1945505429, PinID: 895713554 },
                WirePoints: [
                    { X: -7.837778, Y: 4.52777767 },
                    { X: -7.15740776, Y: -3.175926 },
                    { X: -7.18518543, Y: -1.7870369 },
                    { X: -6.533889, Y: -1.76814806 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 307385327 },
                Target: { PinType: 3, SubChipID: 1945505429, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: -1.36111021 },
                    { X: -6.91679049, Y: 1.6411612 },
                    { X: -6.916667, Y: -1.5925926 },
                    { X: -6.533889, Y: -1.528148 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1983232281 },
                Target: { PinType: 3, SubChipID: 1838106283, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 1.24074018 },
                    { X: -7.05552959, Y: -0.8573577 },
                    { X: -7.055556, Y: -2.20370388 },
                    { X: -6.524074, Y: -2.21333337 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 307385327 },
                Target: {
                    PinType: 3,
                    SubChipID: 1838106283,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: -1.36111021 },
                    { X: -6.91679049, Y: 1.6411612 },
                    { X: -6.91668, Y: -1.25925922 },
                    { X: -6.916667, Y: -2.53703713 },
                    { X: -6.524074, Y: -2.45333314 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1901104715 },
                Target: { PinType: 3, SubChipID: 2092644923, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 4.52777767 },
                    { X: -7.462655, Y: -3.18008018 },
                    { X: -6.53148174, Y: -3.129259 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 307385327 },
                Target: { PinType: 3, SubChipID: 848150984, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.36111021 },
                    { X: -6.91679049, Y: 1.6411612 },
                    { X: -6.91668, Y: -1.25925922 },
                    { X: -6.916669, Y: -2.33237052 },
                    { X: -6.94444466, Y: -3.73148155 },
                    { X: -6.58703756, Y: -3.68518543 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 307385327 },
                Target: { PinType: 3, SubChipID: 2092644923, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.36111021 },
                    { X: -6.91679049, Y: 1.6411612 },
                    { X: -6.91668, Y: -1.25925922 },
                    { X: -6.916669, Y: -2.33237052 },
                    { X: -6.92790747, Y: -2.8984766 },
                    { X: -6.53148174, Y: -2.88925934 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 848150984, PinID: 1 },
                Target: { PinType: 3, SubChipID: 3083866, PinID: 895713554 },
                WirePoints: [
                    { X: -5.487037, Y: -3.68518543 },
                    { X: -4.339444, Y: -3.67555523 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1983232281 },
                Target: { PinType: 3, SubChipID: 1233460366, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: 1.24074018 },
                    { X: -7.157572, Y: -0.8566395 },
                    { X: -7.35185242, Y: 3.4537034 },
                    { X: -3.80925941, Y: 3.67629623 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1983232281 },
                Target: { PinType: 3, SubChipID: 3083866, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 1.24074018 },
                    { X: -7.05552959, Y: -0.8573577 },
                    { X: -7.05554676, Y: -1.74074078 },
                    { X: -7.120371, Y: -3.43518519 },
                    { X: -4.339444, Y: -3.43555546 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1983232281 },
                Target: { PinType: 3, SubChipID: 931394597, PinID: 895713554 },
                WirePoints: [
                    { X: -7.837778, Y: 1.24074018 },
                    { X: -7.157572, Y: -0.8566395 },
                    { X: -7.19536543, Y: -0.0181427 },
                    { X: -4.663519, Y: 0.176296473 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 1010696328, PinID: 1 },
                Target: { PinType: 3, SubChipID: 931394597, PinID: 260329442 },
                WirePoints: [
                    { X: -5.487037, Y: 3.84259248 },
                    { X: -5.09457, Y: 3.85983324 },
                    { X: -5.07407427, Y: 0.425925851 },
                    { X: -4.663519, Y: 0.416296482 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 931394597, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1150491703, PinID: 0 },
                WirePoints: [
                    { X: -3.373519, Y: 0.296296477 },
                    { X: -2.55000043, Y: 0.305185676 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1838106283,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1150491703, PinID: 1 },
                WirePoints: [
                    { X: -5.62407446, Y: -2.33333325 },
                    { X: -2.84259272, Y: -2.37037039 },
                    { X: -2.87962985, Y: 0.04629612 },
                    { X: -2.55000043, Y: 0.06518567 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1945505429,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 824854769, PinID: 260329442 },
                WirePoints: [
                    { X: -5.243889, Y: -1.64814806 },
                    { X: -2.518519, Y: -1.67592585 },
                    { X: -2.43518519, Y: 4.037037 },
                    { X: -2.15425825, Y: 4.045925 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1150491703, PinID: 2 },
                Target: { PinType: 3, SubChipID: 909056722, PinID: 207650570 },
                WirePoints: [
                    { X: -1.45000052, Y: 0.185185671 },
                    { X: -1.57037044, Y: -0.5096298 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1901104715 },
                Target: { PinType: 3, SubChipID: 909056722, PinID: 1969904689 },
                WirePoints: [
                    { X: -7.837778, Y: 4.52777767 },
                    { X: -7.15740776, Y: -3.175926 },
                    { X: -7.179447, Y: -2.07395935 },
                    { X: -7.07407475, Y: -0.194444358 },
                    { X: -1.57037044, Y: -0.7496298 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 3083866, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 2094100113, PinID: 895713554 },
                WirePoints: [
                    { X: -3.04944444, Y: -3.55555534 },
                    { X: -0.4598155, Y: -3.5644443 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 373459657, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 108130904, PinID: 895713554 },
                WirePoints: [
                    { X: 0.237591863, Y: 1.78703666 },
                    { X: 0.6142595, Y: 2.972592 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 373459657, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1781655432, PinID: 0 },
                WirePoints: [
                    { X: 0.237591863, Y: 1.78703666 },
                    { X: 0.5518511, Y: 4.222222 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 373459657, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 2094100113, PinID: 260329442 },
                WirePoints: [
                    { X: 0.237591863, Y: 1.78703666 },
                    { X: -0.4598155, Y: -3.32444453 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1901104715 },
                Target: { PinType: 3, SubChipID: 108130904, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 4.52777767 },
                    { X: -7.15740776, Y: -3.175926 },
                    { X: -7.179447, Y: -2.07395935 },
                    { X: -7.078517, Y: -0.27367866 },
                    { X: 0.6142595, Y: 3.212592 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 108130904, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 833562510, PinID: 260329442 },
                WirePoints: [
                    { X: 1.90425944, Y: 3.092592 },
                    { X: 2.345741, Y: 2.934815 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 909056722, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1802256460, PinID: 207650570 },
                WirePoints: [
                    { X: -0.6703704, Y: -0.6296298 },
                    { X: 0.9018515, Y: 1.78666556 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 909056722, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 833562510, PinID: 895713554 },
                WirePoints: [
                    { X: -0.6703704, Y: -0.6296298 },
                    { X: 0.4771784, Y: 1.21563911 },
                    { X: 0.731482, Y: 2.268519 },
                    { X: 2.345741, Y: 2.69481516 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 909056722, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1327131037, PinID: 0 },
                WirePoints: [
                    { X: -0.6703704, Y: -0.6296298 },
                    { X: -0.0222226977, Y: -1.22222257 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 909056722, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1779562805, PinID: 1 },
                WirePoints: [
                    { X: -0.6703704, Y: -0.6296298 },
                    { X: 0.6722228, Y: -0.06444531 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1010696328, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1779562805, PinID: 0 },
                WirePoints: [
                    { X: -5.487037, Y: 3.84259248 },
                    { X: -5.09457, Y: 3.85983324 },
                    { X: -5.078164, Y: 1.11114192 },
                    { X: 0.583332956, Y: 1.03703678 },
                    { X: 0.6722228, Y: 0.1755547 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1802256460,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 393904288, PinID: 260329442 },
                WirePoints: [
                    { X: 1.80185151, Y: 1.66666555 },
                    { X: 2.47537065, Y: 1.5459255 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2094100113,
                    PinID: 2060701350,
                },
                Target: { PinType: 3, SubChipID: 393904288, PinID: 895713554 },
                WirePoints: [
                    { X: 0.83018446, Y: -3.44444442 },
                    { X: 0.898148239, Y: 1.26851857 },
                    { X: 2.47537065, Y: 1.30592549 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 393904288, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 33705128, PinID: 1969904689 },
                WirePoints: [
                    { X: 3.76537061, Y: 1.42592549 },
                    { X: 4.24444532, Y: 2.065185 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 1779562805, PinID: 2 },
                Target: { PinType: 3, SubChipID: 33705128, PinID: 207650570 },
                WirePoints: [
                    { X: 1.77222276, Y: 0.055554688 },
                    { X: 4.24444532, Y: 2.30518484 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 393904288, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1819646966, PinID: 207650570 },
                WirePoints: [
                    { X: 3.76537061, Y: 1.42592549 },
                    { X: 3.19814873, Y: -0.194814742 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 833562510, PinID: 2060701350 },
                Target: {
                    PinType: 3,
                    SubChipID: 1264333385,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: 3.635741, Y: 2.814815 },
                    { X: 3.75370431, Y: 3.86148119 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1781655432, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1264333385, PinID: 207650570 },
                WirePoints: [
                    { X: 1.65185118, Y: 4.222222 },
                    { X: 3.75370431, Y: 4.101481 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 833562510, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 913676481, PinID: 207650570 },
                WirePoints: [
                    { X: 3.635741, Y: 2.814815 },
                    { X: 4.46339369, Y: 2.83670163 },
                    { X: 4.472222, Y: -3.65740752 },
                    { X: 5.781482, Y: -3.52814817 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1595335941, PinID: 2 },
                Target: { PinType: 3, SubChipID: 913676481, PinID: 1969904689 },
                WirePoints: [
                    { X: 4.911112, Y: -3.24768543 },
                    { X: 5.781482, Y: -3.768148 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 33705128, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 1595335941, PinID: 0 },
                WirePoints: [
                    { X: 5.144445, Y: 2.185185 },
                    { X: 5.87963, Y: 2.222222 },
                    { X: 2.51851845, Y: 0.240740776 },
                    { X: 2.342593, Y: -3.12962961 },
                    { X: 3.81111169, Y: -3.12768555 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2092644923, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1595335941, PinID: 1 },
                WirePoints: [
                    { X: -5.43148136, Y: -3.00925922 },
                    { X: 3.81111169, Y: -3.36768532 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 714688914 },
                Target: {
                    PinType: 3,
                    SubChipID: 1819646966,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: -3.240741 },
                    { X: -7.15723944, Y: 3.83837128 },
                    { X: -7.166667, Y: 4.638889 },
                    { X: 2.80555534, Y: 4.65740728 },
                    { X: 2.88888955, Y: -0.194444358 },
                    { X: 3.19814873, Y: -0.434814751 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1819646966,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 2096660192, PinID: 1 },
                WirePoints: [
                    { X: 4.098149, Y: -0.314814746 },
                    { X: 3.12962961, Y: -1.07407427 },
                    { X: 3.26851869, Y: -2.7962966 },
                    { X: 3.81111169, Y: -2.74268532 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1264333385,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 2096660192, PinID: 0 },
                WirePoints: [
                    { X: 4.653704, Y: 3.981481 },
                    { X: 5.01851845, Y: 3.84259272 },
                    { X: 4.222223, Y: 3.25 },
                    { X: 3.41666651, Y: -2.472222 },
                    { X: 3.81111169, Y: -2.50268555 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2096660192, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1869913907, PinID: 895713554 },
                WirePoints: [
                    { X: 4.911112, Y: -2.62268543 },
                    { X: 5.512407, Y: -2.59222245 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 764557592, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1869913907, PinID: 260329442 },
                WirePoints: [
                    { X: 5.052408, Y: -1.97222221 },
                    { X: 5.512407, Y: -2.35222268 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 913676481, PinID: 2097025545 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2049723069 },
                WirePoints: [
                    { X: 6.681482, Y: -3.648148 },
                    { X: 7.240741, Y: -3.63888884 },
                    { X: 7.25926, Y: 3.05555582 },
                    { X: 7.837778, Y: 3.08333349 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1327131037, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1181346718 },
                WirePoints: [
                    { X: 1.07777739, Y: -1.22222257 },
                    { X: 7.51851845, Y: -1.23148143 },
                    { X: 7.5092597, Y: 0.5833334 },
                    { X: 7.837778, Y: 0.5833334 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1869913907,
                    PinID: 2060701350,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 804143229 },
                WirePoints: [
                    { X: 6.802407, Y: -2.47222257 },
                    { X: 7.67592669, Y: -2.48148155 },
                    { X: 7.601852, Y: 2.33333349 },
                    { X: 7.837778, Y: 2.45370388 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 33705128, PinID: 2097025545 },
                Target: { PinType: 3, SubChipID: 764557592, PinID: 260329442 },
                WirePoints: [
                    { X: 5.144445, Y: 2.185185 },
                    { X: 5.87963, Y: 2.222222 },
                    { X: 2.51851845, Y: 0.240740776 },
                    { X: 2.41118765, Y: -1.81549549 },
                    { X: 3.76240826, Y: -1.8522222 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 848150984, PinID: 1 },
                Target: { PinType: 3, SubChipID: 764557592, PinID: 895713554 },
                WirePoints: [
                    { X: -5.487037, Y: -3.68518543 },
                    { X: -4.944716, Y: -3.6806345 },
                    { X: -4.925926, Y: -4.12962961 },
                    { X: 3.53703737, Y: -4.16666651 },
                    { X: 3.592593, Y: -2.08333349 },
                    { X: 3.76240826, Y: -2.09222221 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 33705128, PinID: 2097025545 },
                Target: { PinType: 2, SubChipID: 0, PinID: 132776910 },
                WirePoints: [
                    { X: 5.144445, Y: 2.185185 },
                    { X: 5.42754, Y: 2.19944668 },
                    { X: 7.837778, Y: 1.81481481 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 833562510, PinID: 2060701350 },
                Target: { PinType: 2, SubChipID: 0, PinID: 506227197 },
                WirePoints: [
                    { X: 3.635741, Y: 2.814815 },
                    { X: 4.29914141, Y: 2.82469654 },
                    { X: 6.71296358, Y: 2.648148 },
                    { X: 6.787038, Y: 1.22222245 },
                    { X: 7.837778, Y: 1.21296287 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 393904288, PinID: 2060701350 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1626219222 },
                WirePoints: [
                    { X: 3.76537061, Y: 1.42592549 },
                    { X: 6.18518543, Y: 1.46296322 },
                    { X: 6.203704, Y: -0.157407522 },
                    { X: 7.837778, Y: -0.06481469 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 373459657, PinID: 2060701350 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1055243200 },
                WirePoints: [
                    { X: 0.237591863, Y: 1.78703666 },
                    { X: 6.48148155, Y: 1.7592591 },
                    { X: 6.500001, Y: -0.6388888 },
                    { X: 7.837778, Y: -0.6759259 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1983232281 },
                Target: {
                    PinType: 3,
                    SubChipID: 1802256460,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.24074018 },
                    { X: -7.157572, Y: -0.8566395 },
                    { X: -7.247465, Y: 1.13775086 },
                    { X: -0.2777778, Y: 1.240741 },
                    { X: 0.9018515, Y: 1.54666555 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1945141333 },
                Target: { PinType: 2, SubChipID: 0, PinID: 689480350 },
                WirePoints: [
                    { X: -7.837778, Y: -3.95370364 },
                    { X: 6.92592669, Y: -4.15740728 },
                    { X: 7.837778, Y: 3.68518519 },
                ],
                ColourThemeName: "Yellow",
            },
        ],
    },
    processor: {
        Name: "processor",
        Colour: "#6E081B",
        displayID: 0,
        InputPins: [
            {
                Name: "0",
                ID: 1037523902,
                PositionY: 2.5,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 2050569706,
                PositionY: 1.96296275,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 1989525304,
                PositionY: 1.42592609,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 946842675,
                PositionY: 0.888888836,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 450910619,
                PositionY: 0.361111164,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 1265742012,
                PositionY: -0.185185075,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 1881921622,
                PositionY: -0.7222223,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 806386989,
                PositionY: -1.25,
                ColourThemeName: "Red",
            },
            {
                Name: "SET ADR",
                ID: 359392866,
                PositionY: -2.3518517,
                ColourThemeName: "Indigo",
            },
            {
                Name: "SET DATA",
                ID: 1654542336,
                PositionY: -2.916667,
                ColourThemeName: "Indigo",
            },
            {
                Name: "STOP",
                ID: 1287569512,
                PositionY: -3.49850059,
                ColourThemeName: "Blue",
            },
        ],
        OutputPins: [],
        SubChips: [
            {
                Name: "BUS",
                ID: 1880208571,
                Points: [
                    { X: 8.116668, Y: -260.2997 },
                    { X: 8.107409, Y: 4.02780151 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 614857253,
                Points: [
                    { X: 7.91666746, Y: -260.2997 },
                    { X: 7.907408, Y: 4.02780151 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 331943033,
                Points: [
                    { X: 7.71666765, Y: -260.299744 },
                    { X: 7.70740843, Y: 4.02780151 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 607159276,
                Points: [
                    { X: 7.51666737, Y: -260.299744 },
                    { X: 7.507408, Y: 4.027771 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 669854380,
                Points: [
                    { X: 7.31666756, Y: -260.299744 },
                    { X: 7.30740833, Y: 4.027771 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1244639499,
                Points: [
                    { X: 7.11666727, Y: -260.299744 },
                    { X: 7.107408, Y: 4.027771 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1758970046,
                Points: [
                    { X: 6.91666746, Y: -260.299774 },
                    { X: 6.907408, Y: 4.027771 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 979704215,
                Points: [
                    { X: 6.71666765, Y: -260.299774 },
                    { X: 6.70740843, Y: 4.02774048 },
                ],
                Data: null,
            },
            {
                Name: "counter 4b",
                ID: 1854544001,
                Points: [{ X: 4.91666651, Y: 3.314815 }],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 609093938,
                Points: [
                    { X: -7.35185242, Y: -259.656525 },
                    { X: -7.35185242, Y: 3.8888855 },
                ],
                Data: null,
            },
            {
                Name: "4bit-REGISTER",
                ID: 526060005,
                Points: [{ X: -0.9814814, Y: -0.5555552 }],
                Data: null,
            },
            {
                Name: "CLOCK",
                ID: 1628930487,
                Points: [{ X: -7.45370436, Y: 4.55555534 }],
                Data: null,
            },
            {
                Name: "RAM 8bit x16",
                ID: 1872597154,
                Points: [{ X: 4.768519, Y: -0.5740741 }],
                Data: null,
            },
            {
                Name: "8bit-REGISTER",
                ID: 2015362347,
                Points: [{ X: 3.93518543, Y: -6.550934 }],
                Data: null,
            },
            {
                Name: "8bit ADDER",
                ID: 1015333090,
                Points: [{ X: 5.24999952, Y: -12.6542912 }],
                Data: null,
            },
            {
                Name: "8bit-REGISTER",
                ID: 1820907511,
                Points: [{ X: 2.611112, Y: -13.8485088 }],
                Data: null,
            },
            {
                Name: "command register",
                ID: 1797919671,
                Points: [{ X: -4.111112, Y: -5.705552 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1685850915,
                Points: [{ X: -3.89814782, Y: -0.991203666 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 694170723,
                Points: [{ X: -4.80555534, Y: -2.61570334 }],
                Data: null,
            },
            {
                Name: "TRI-STATE BUFFER",
                ID: 1371663404,
                Points: [{ X: -4.80555534, Y: -3.35070348 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 609093938, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1854544001, PinID: 532585341 },
                WirePoints: [
                    { X: -7.35185242, Y: 3.02780151 },
                    { X: 4.14166641, Y: 2.954815 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1854544001,
                    PinID: 2073071841,
                },
                Target: { PinType: 3, SubChipID: 1880208571, PinID: 0 },
                WirePoints: [
                    { X: 5.6916666, Y: 3.67481518 },
                    { X: 8.107423, Y: 3.62036133 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1854544001, PinID: 593344879 },
                Target: { PinType: 3, SubChipID: 614857253, PinID: 0 },
                WirePoints: [
                    { X: 5.6916666, Y: 3.434815 },
                    { X: 7.907431, Y: 3.37039185 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1854544001,
                    PinID: 1640413403,
                },
                Target: { PinType: 3, SubChipID: 331943033, PinID: 0 },
                WirePoints: [
                    { X: 5.6916666, Y: 3.194815 },
                    { X: 7.70743656, Y: 3.23147583 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1854544001,
                    PinID: 1031270065,
                },
                Target: { PinType: 3, SubChipID: 607159276, PinID: 0 },
                WirePoints: [
                    { X: 5.6916666, Y: 2.954815 },
                    { X: 7.50744343, Y: 3.01855469 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 607159276, PinID: 1 },
                Target: { PinType: 3, SubChipID: 526060005, PinID: 1788913590 },
                WirePoints: [
                    { X: 7.507664, Y: -3.277771 },
                    { X: 2.24999976, Y: -3.22222233 },
                    { X: 2.133066, Y: 0.6199119 },
                    { X: -2.48148131, Y: 0.490740538 },
                    { X: -2.45370388, Y: -0.5648148 },
                    { X: -2.20148134, Y: -0.5555552 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 331943033, PinID: 1 },
                Target: { PinType: 3, SubChipID: 526060005, PinID: 1584202538 },
                WirePoints: [
                    { X: 7.7076683, Y: -3.388916 },
                    { X: 2.12963, Y: -3.37962985 },
                    { X: 1.98862684, Y: 0.767502069 },
                    { X: -2.574074, Y: 0.6388891 },
                    { X: -2.592593, Y: -0.3333333 },
                    { X: -2.20148134, Y: -0.315555245 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 614857253, PinID: 1 },
                Target: { PinType: 3, SubChipID: 526060005, PinID: 2075328416 },
                WirePoints: [
                    { X: 7.90767241, Y: -3.51849365 },
                    { X: 2.00925946, Y: -3.51851845 },
                    { X: 1.84349012, Y: 0.8992243 },
                    { X: -2.7962966, Y: 0.7314813 },
                    { X: -2.76851869, Y: -0.07407397 },
                    { X: -2.20148134, Y: -0.0755552649 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1880208571, PinID: 1 },
                Target: { PinType: 3, SubChipID: 526060005, PinID: 1717760373 },
                WirePoints: [
                    { X: 8.107678, Y: -3.67590332 },
                    { X: 1.8611114, Y: -3.65740752 },
                    { X: 1.64061117, Y: 1.03842187 },
                    { X: -2.90740776, Y: 0.87962985 },
                    { X: -2.925926, Y: 0.212963223 },
                    { X: -2.20148134, Y: 0.164444745 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 609093938, PinID: 1 },
                Target: { PinType: 3, SubChipID: 526060005, PinID: 335761334 },
                WirePoints: [
                    { X: -7.35185242, Y: -1.26852417 },
                    { X: -2.20148134, Y: -1.27555513 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 1628930487, PinID: 2 },
                Target: { PinType: 3, SubChipID: 609093938, PinID: 0 },
                WirePoints: [
                    { X: -6.70870447, Y: 4.55555534 },
                    { X: -6.314815, Y: 4.55555534 },
                    { X: -6.62963, Y: 4.074074 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 526060005, PinID: 1484036384 },
                Target: { PinType: 3, SubChipID: 1872597154, PinID: 811835251 },
                WirePoints: [
                    { X: 0.238518655, Y: -1.27555513 },
                    { X: 4.21851873, Y: -1.53407407 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 526060005, PinID: 1563674029 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1671380431,
                },
                WirePoints: [
                    { X: 0.238518655, Y: -0.795555234 },
                    { X: 4.21851873, Y: -1.29407418 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 526060005, PinID: 652623521 },
                Target: { PinType: 3, SubChipID: 1872597154, PinID: 163382642 },
                WirePoints: [
                    { X: 0.238518655, Y: -0.315555245 },
                    { X: 4.21851873, Y: -1.054074 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 526060005, PinID: 576114810 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1730958947,
                },
                WirePoints: [
                    { X: 0.238518655, Y: 0.164444745 },
                    { X: 4.21851873, Y: -0.814074159 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1872597154, PinID: 303959809 },
                Target: { PinType: 3, SubChipID: 1880208571, PinID: 0 },
                WirePoints: [
                    { X: 5.318519, Y: 1.105926 },
                    { X: 8.10751, Y: 1.12963867 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1872597154,
                    PinID: 1140474556,
                },
                Target: { PinType: 3, SubChipID: 614857253, PinID: 0 },
                WirePoints: [
                    { X: 5.318519, Y: 0.625925958 },
                    { X: 7.90752745, Y: 0.6296387 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1872597154,
                    PinID: 1836932444,
                },
                Target: { PinType: 3, SubChipID: 331943033, PinID: 0 },
                WirePoints: [
                    { X: 5.318519, Y: 0.145925879 },
                    { X: 7.707544, Y: 0.166625977 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1872597154,
                    PinID: 1692608148,
                },
                Target: { PinType: 3, SubChipID: 607159276, PinID: 0 },
                WirePoints: [
                    { X: 5.318519, Y: -0.33407408 },
                    { X: 7.50756025, Y: -0.314788818 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1872597154,
                    PinID: 1357166359,
                },
                Target: { PinType: 3, SubChipID: 669854380, PinID: 0 },
                WirePoints: [
                    { X: 5.318519, Y: -0.814074159 },
                    { X: 7.307577, Y: -0.78704834 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1872597154, PinID: 722664755 },
                Target: { PinType: 3, SubChipID: 1244639499, PinID: 0 },
                WirePoints: [
                    { X: 5.318519, Y: -1.29407418 },
                    { X: 7.107593, Y: -1.25921631 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1872597154,
                    PinID: 1629312028,
                },
                Target: { PinType: 3, SubChipID: 1758970046, PinID: 0 },
                WirePoints: [
                    { X: 5.318519, Y: -1.77407408 },
                    { X: 6.907611, Y: -1.75924683 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1872597154, PinID: 605709595 },
                Target: { PinType: 3, SubChipID: 979704215, PinID: 0 },
                WirePoints: [
                    { X: 5.318519, Y: -2.254074 },
                    { X: 6.707628, Y: -2.24072266 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1880208571, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1494296396,
                },
                WirePoints: [
                    { X: 8.107498, Y: 1.46298218 },
                    { X: 3.962963, Y: 1.43518507 },
                    { X: 3.93518567, Y: 1.101852 },
                    { X: 4.21851873, Y: 1.105926 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 614857253, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1408343464,
                },
                WirePoints: [
                    { X: 7.907489, Y: 1.722229 },
                    { X: 3.731482, Y: 1.65740728 },
                    { X: 3.740741, Y: 0.870370269 },
                    { X: 4.21851873, Y: 0.865925968 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 331943033, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1872597154, PinID: 634691022 },
                WirePoints: [
                    { X: 7.707481, Y: 1.95370483 },
                    { X: 3.52777815, Y: 1.86111093 },
                    { X: 3.53703737, Y: 0.6388891 },
                    { X: 4.21851873, Y: 0.625925958 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 607159276, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1390844848,
                },
                WirePoints: [
                    { X: 7.507477, Y: 2.06484985 },
                    { X: 3.42592573, Y: 1.9907409 },
                    { X: 3.46296334, Y: 0.379629731 },
                    { X: 4.21851873, Y: 0.385925949 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 669854380, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1838761848,
                },
                WirePoints: [
                    { X: 7.30747175, Y: 2.21298218 },
                    { X: 3.287037, Y: 2.16666651 },
                    { X: 3.305556, Y: 0.222222209 },
                    { X: 3.40740752, Y: 0.222222209 },
                    { X: 4.21851873, Y: 0.145925879 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1244639499, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1053540464,
                },
                WirePoints: [
                    { X: 7.1074667, Y: 2.35183716 },
                    { X: 3.17592645, Y: 2.287037 },
                    { X: 3.22222185, Y: 0.04629612 },
                    { X: 4.21851873, Y: -0.0940741 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1758970046, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1299691907,
                },
                WirePoints: [
                    { X: 6.9074626, Y: 2.47219849 },
                    { X: 3.0462966, Y: 2.3888886 },
                    { X: 3.05555582, Y: 0.00925898552 },
                    { X: 4.21851873, Y: -0.33407408 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 979704215, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1022346388,
                },
                WirePoints: [
                    { X: 6.7074585, Y: 2.59262085 },
                    { X: 2.88888955, Y: 2.58333325 },
                    { X: 2.91666675, Y: -0.07407397 },
                    { X: 4.21851873, Y: -0.5740741 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2015362347,
                    PinID: 1289544212,
                },
                Target: { PinType: 3, SubChipID: 1880208571, PinID: 0 },
                WirePoints: [
                    { X: 5.1551857, Y: -5.350934 },
                    { X: 8.107738, Y: -5.36145 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2015362347,
                    PinID: 1707752613,
                },
                Target: { PinType: 3, SubChipID: 614857253, PinID: 0 },
                WirePoints: [
                    { X: 5.1551857, Y: -5.693791 },
                    { X: 7.907748, Y: -5.67625427 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2015362347, PinID: 672620736 },
                Target: { PinType: 3, SubChipID: 331943033, PinID: 0 },
                WirePoints: [
                    { X: 5.1551857, Y: -6.03664827 },
                    { X: 7.707761, Y: -6.037384 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2015362347, PinID: 576761498 },
                Target: { PinType: 3, SubChipID: 607159276, PinID: 0 },
                WirePoints: [
                    { X: 5.1551857, Y: -6.379505 },
                    { X: 7.507772, Y: -6.361435 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2015362347, PinID: 793392506 },
                Target: { PinType: 3, SubChipID: 669854380, PinID: 0 },
                WirePoints: [
                    { X: 5.1551857, Y: -6.72236252 },
                    { X: 7.307785, Y: -6.722534 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2015362347, PinID: 932461842 },
                Target: { PinType: 3, SubChipID: 1244639499, PinID: 0 },
                WirePoints: [
                    { X: 5.1551857, Y: -7.06522 },
                    { X: 7.10779667, Y: -7.06514 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2015362347,
                    PinID: 1664659923,
                },
                Target: { PinType: 3, SubChipID: 1758970046, PinID: 0 },
                WirePoints: [
                    { X: 5.1551857, Y: -7.408077 },
                    { X: 6.907809, Y: -7.40776062 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2015362347,
                    PinID: 2136002862,
                },
                Target: { PinType: 3, SubChipID: 979704215, PinID: 0 },
                WirePoints: [
                    { X: 5.1551857, Y: -7.75093365 },
                    { X: 6.707821, Y: -7.75032043 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1880208571, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2015362347, PinID: 394935240 },
                WirePoints: [
                    { X: 8.107726, Y: -5.0466156 },
                    { X: 2.54629683, Y: -5.018855 },
                    { X: 2.52777743, Y: -5.37996626 },
                    { X: 2.7151854, Y: -5.350934 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 614857253, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2015362347, PinID: 699877108 },
                WirePoints: [
                    { X: 7.907719, Y: -4.842911 },
                    { X: 2.37962937, Y: -4.824411 },
                    { X: 2.37037039, Y: -5.620707 },
                    { X: 2.7151854, Y: -5.590934 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 331943033, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2015362347, PinID: 285195245 },
                WirePoints: [
                    { X: 7.707714, Y: -4.6947937 },
                    { X: 2.27777815, Y: -4.70404053 },
                    { X: 2.268519, Y: -5.805892 },
                    { X: 2.7151854, Y: -5.83093357 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 607159276, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2015362347, PinID: 397780527 },
                WirePoints: [
                    { X: 7.507708, Y: -4.528076 },
                    { X: 2.194445, Y: -4.52811432 },
                    { X: 2.15740752, Y: -6.065151 },
                    { X: 2.7151854, Y: -6.070934 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 669854380, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2015362347,
                    PinID: 1447474653,
                },
                WirePoints: [
                    { X: 7.307702, Y: -4.361435 },
                    { X: 2.046296, Y: -4.361448 },
                    { X: 2.046296, Y: -6.32441044 },
                    { X: 2.7151854, Y: -6.310934 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1244639499, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2015362347,
                    PinID: 1230097902,
                },
                WirePoints: [
                    { X: 7.107697, Y: -4.22189331 },
                    { X: 1.8611114, Y: -4.22191048 },
                    { X: 1.87037051, Y: -6.57376242 },
                    { X: 2.7151854, Y: -6.550934 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1758970046, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2015362347, PinID: 136930271 },
                WirePoints: [
                    { X: 6.90769148, Y: -4.055237 },
                    { X: 1.61111093, Y: -4.055244 },
                    { X: 1.62962925, Y: -6.80524349 },
                    { X: 2.7151854, Y: -6.790934 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 979704215, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2015362347, PinID: 807409755 },
                WirePoints: [
                    { X: 6.70768642, Y: -3.907074 },
                    { X: 1.462963, Y: -3.91635513 },
                    { X: 1.47222209, Y: -7.04598427 },
                    { X: 2.7151854, Y: -7.030934 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2015362347,
                    PinID: 1289544212,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 1030196564,
                },
                WirePoints: [
                    { X: 5.1551857, Y: -5.350934 },
                    { X: 4.80555534, Y: -7.96157837 },
                    { X: 4.23148155, Y: -10.5541706 },
                    { X: 4.62499952, Y: -10.6142912 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2015362347,
                    PinID: 1707752613,
                },
                Target: { PinType: 3, SubChipID: 1015333090, PinID: 667901101 },
                WirePoints: [
                    { X: 5.1551857, Y: -5.693791 },
                    { X: 4.59259272, Y: -7.94306 },
                    { X: 4.027778, Y: -10.4523191 },
                    { X: 4.12037039, Y: -10.7763929 },
                    { X: 4.62499952, Y: -10.854291 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2015362347, PinID: 672620736 },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 1229328111,
                },
                WirePoints: [
                    { X: 5.1551857, Y: -6.03664827 },
                    { X: 4.388889, Y: -7.934625 },
                    { X: 3.72222281, Y: -10.99944 },
                    { X: 4.62499952, Y: -11.0942917 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2015362347, PinID: 576761498 },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 1427679372,
                },
                WirePoints: [
                    { X: 5.1551857, Y: -6.379505 },
                    { X: 4.15740776, Y: -7.926071 },
                    { X: 3.31481528, Y: -11.2594042 },
                    { X: 4.62499952, Y: -11.3342915 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2015362347, PinID: 793392506 },
                Target: { PinType: 3, SubChipID: 1015333090, PinID: 131311591 },
                WirePoints: [
                    { X: 5.1551857, Y: -6.72236252 },
                    { X: 3.95370388, Y: -7.92573357 },
                    { X: 2.722222, Y: -11.47203 },
                    { X: 4.62499952, Y: -11.5742912 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2015362347, PinID: 932461842 },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 2008669770,
                },
                WirePoints: [
                    { X: 5.1551857, Y: -7.06522 },
                    { X: 3.657408, Y: -7.935446 },
                    { X: 2.342593, Y: -11.7578936 },
                    { X: 4.62499952, Y: -11.814291 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2015362347,
                    PinID: 1664659923,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 2110715836,
                },
                WirePoints: [
                    { X: 5.1551857, Y: -7.408077 },
                    { X: 3.42592573, Y: -7.893438 },
                    { X: 1.96296275, Y: -12.0770283 },
                    { X: 4.62499952, Y: -12.0542908 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2015362347,
                    PinID: 2136002862,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 1301875614,
                },
                WirePoints: [
                    { X: 5.1551857, Y: -7.75093365 },
                    { X: 2.88888955, Y: -7.910524 },
                    { X: 1.23148179, Y: -12.33645 },
                    { X: 4.62499952, Y: -12.2942915 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1015333090,
                    PinID: 1424774048,
                },
                Target: { PinType: 3, SubChipID: 1880208571, PinID: 0 },
                WirePoints: [
                    { X: 5.87499952, Y: -10.6142912 },
                    { X: 8.107918, Y: -10.5154724 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1015333090, PinID: 773509152 },
                Target: { PinType: 3, SubChipID: 614857253, PinID: 0 },
                WirePoints: [
                    { X: 5.87499952, Y: -11.1971483 },
                    { X: 7.907938, Y: -11.0988007 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1015333090, PinID: 616653170 },
                Target: { PinType: 3, SubChipID: 331943033, PinID: 0 },
                WirePoints: [
                    { X: 5.87499952, Y: -11.7800055 },
                    { X: 7.707958, Y: -11.6636353 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1015333090,
                    PinID: 1995946092,
                },
                Target: { PinType: 3, SubChipID: 607159276, PinID: 0 },
                WirePoints: [
                    { X: 5.87499952, Y: -12.3628626 },
                    { X: 7.50797749, Y: -12.2191772 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1015333090, PinID: 246945928 },
                Target: { PinType: 3, SubChipID: 669854380, PinID: 0 },
                WirePoints: [
                    { X: 5.87499952, Y: -12.94572 },
                    { X: 7.3079977, Y: -12.7932434 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1015333090, PinID: 272018778 },
                Target: { PinType: 3, SubChipID: 1244639499, PinID: 0 },
                WirePoints: [
                    { X: 5.87499952, Y: -13.5285769 },
                    { X: 7.108018, Y: -13.3858337 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1015333090, PinID: 34320401 },
                Target: { PinType: 3, SubChipID: 1758970046, PinID: 0 },
                WirePoints: [
                    { X: 5.87499952, Y: -14.111434 },
                    { X: 6.908039, Y: -13.97847 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1015333090, PinID: 316821847 },
                Target: { PinType: 3, SubChipID: 979704215, PinID: 0 },
                WirePoints: [
                    { X: 5.87499952, Y: -14.6942911 },
                    { X: 6.70806026, Y: -14.5802765 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1820907511,
                    PinID: 1289544212,
                },
                Target: { PinType: 3, SubChipID: 1015333090, PinID: 298576927 },
                WirePoints: [
                    { X: 3.83111215, Y: -12.648509 },
                    { X: 4.62499952, Y: -12.5342913 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1820907511,
                    PinID: 1707752613,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 1564528107,
                },
                WirePoints: [
                    { X: 3.83111215, Y: -12.9913664 },
                    { X: 4.62499952, Y: -12.774291 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1820907511, PinID: 672620736 },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 2025921285,
                },
                WirePoints: [
                    { X: 3.83111215, Y: -13.3342228 },
                    { X: 4.62499952, Y: -13.0142908 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1820907511, PinID: 576761498 },
                Target: { PinType: 3, SubChipID: 1015333090, PinID: 591829213 },
                WirePoints: [
                    { X: 3.83111215, Y: -13.67708 },
                    { X: 4.62499952, Y: -13.2542915 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1820907511, PinID: 793392506 },
                Target: { PinType: 3, SubChipID: 1015333090, PinID: 354679946 },
                WirePoints: [
                    { X: 3.83111215, Y: -14.0199375 },
                    { X: 4.62499952, Y: -13.4942913 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1820907511, PinID: 932461842 },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 2111221504,
                },
                WirePoints: [
                    { X: 3.83111215, Y: -14.3627949 },
                    { X: 4.62499952, Y: -13.7342911 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1820907511,
                    PinID: 1664659923,
                },
                Target: { PinType: 3, SubChipID: 1015333090, PinID: 136900936 },
                WirePoints: [
                    { X: 3.83111215, Y: -14.7056522 },
                    { X: 4.62499952, Y: -13.9742908 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1820907511,
                    PinID: 2136002862,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1015333090,
                    PinID: 1407176605,
                },
                WirePoints: [
                    { X: 3.83111215, Y: -15.0485086 },
                    { X: 4.62499952, Y: -14.2142906 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 979704215, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1820907511, PinID: 807409755 },
                WirePoints: [
                    { X: 6.70809937, Y: -15.70314 },
                    { X: 0.6666671, Y: -15.758709 },
                    { X: 0.611111343, Y: -14.2864866 },
                    { X: 1.39111209, Y: -14.3285084 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1758970046, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1820907511, PinID: 136930271 },
                WirePoints: [
                    { X: 6.90811253, Y: -16.0735321 },
                    { X: 0.407407582, Y: -16.11982 },
                    { X: 0.3425927, Y: -14.0642643 },
                    { X: 1.39111209, Y: -14.0885086 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1244639499, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1820907511,
                    PinID: 1230097902,
                },
                WirePoints: [
                    { X: 7.108123, Y: -16.3790588 },
                    { X: 0.129629776, Y: -16.4438934 },
                    { X: 0.06481489, Y: -13.8142643 },
                    { X: 1.39111209, Y: -13.8485088 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 669854380, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1820907511,
                    PinID: 1447474653,
                },
                WirePoints: [
                    { X: 7.308136, Y: -16.7494354 },
                    { X: -0.194444671, Y: -16.842041 },
                    { X: -0.2685187, Y: -13.6661158 },
                    { X: -0.08333313, Y: -13.5735235 },
                    { X: 1.39111209, Y: -13.6085091 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 607159276, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1820907511, PinID: 397780527 },
                WirePoints: [
                    { X: 7.50814629, Y: -17.04573 },
                    { X: -0.4907407, Y: -17.1475983 },
                    { X: -0.509259462, Y: -13.3327827 },
                    { X: 1.39111209, Y: -13.3685093 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 331943033, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1820907511, PinID: 285195245 },
                WirePoints: [
                    { X: 7.70816135, Y: -17.4624329 },
                    { X: -0.7314815, Y: -17.5272274 },
                    { X: -0.750000238, Y: -13.0735235 },
                    { X: 1.39111209, Y: -13.1285086 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 614857253, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1820907511, PinID: 699877108 },
                WirePoints: [
                    { X: 7.90818262, Y: -18.0735016 },
                    { X: -1.064815, Y: -18.1383381 },
                    { X: -1.07407415, Y: -12.8142643 },
                    { X: 1.39111209, Y: -12.8885088 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1880208571, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1820907511, PinID: 394935240 },
                WirePoints: [
                    { X: 8.108196, Y: -18.4624023 },
                    { X: -1.29629624, Y: -18.5457458 },
                    { X: -1.29629624, Y: -12.592042 },
                    { X: 1.39111209, Y: -12.648509 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 609093938, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1872597154, PinID: 858304018 },
                WirePoints: [
                    { X: -7.35185242, Y: -2.23147583 },
                    { X: 4.21851873, Y: -2.254074 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 609093938, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2015362347,
                    PinID: 1425871993,
                },
                WirePoints: [
                    { X: -7.35185242, Y: -7.744461 },
                    { X: 2.7151854, Y: -7.75093365 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 609093938, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1820907511,
                    PinID: 1425871993,
                },
                WirePoints: [
                    { X: -7.35185242, Y: -14.8316193 },
                    { X: 1.39111209, Y: -15.0485086 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1287569512 },
                Target: { PinType: 3, SubChipID: 1854544001, PinID: 699473070 },
                WirePoints: [
                    { X: -7.837778, Y: -3.49850059 },
                    { X: -6.84259272, Y: -3.53703713 },
                    { X: -6.870371, Y: 3.3518517 },
                    { X: 4.14166641, Y: 3.194815 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 609093938, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1797919671, PinID: 265601652 },
                WirePoints: [
                    { X: -7.35185242, Y: -7.49407959 },
                    { X: -4.961112, Y: -7.50555229 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1287569512 },
                Target: {
                    PinType: 3,
                    SubChipID: 1797919671,
                    PinID: 2130868597,
                },
                WirePoints: [
                    { X: -7.837778, Y: -3.49850059 },
                    { X: -6.92487526, Y: -3.533851 },
                    { X: -7.02777767, Y: -7.290385 },
                    { X: -4.961112, Y: -7.205552 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1287569512 },
                Target: { PinType: 3, SubChipID: 1797919671, PinID: 622102920 },
                WirePoints: [
                    { X: -7.837778, Y: -3.49850059 },
                    { X: -6.92487526, Y: -3.533851 },
                    { X: -7.0178175, Y: -6.92677975 },
                    { X: -4.961112, Y: -6.905552 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 1797919671, PinID: 999328615 },
                Target: { PinType: 3, SubChipID: 526060005, PinID: 2121663745 },
                WirePoints: [
                    { X: -3.26111221, Y: -3.905552 },
                    { X: -2.97222257, Y: -3.88888884 },
                    { X: -2.93518567, Y: -0.759259164 },
                    { X: -2.20148134, Y: -0.795555234 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1797919671,
                    PinID: 1336304000,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1872597154,
                    PinID: 1174169110,
                },
                WirePoints: [
                    { X: -3.26111221, Y: -4.145552 },
                    { X: -2.84259272, Y: -4.12220955 },
                    { X: -2.7962966, Y: -1.640728 },
                    { X: 4.21851873, Y: -1.77407408 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1797919671,
                    PinID: 1560032633,
                },
                Target: { PinType: 3, SubChipID: 1872597154, PinID: 64787434 },
                WirePoints: [
                    { X: -3.26111221, Y: -4.385552 },
                    { X: -2.722222, Y: -4.390728 },
                    { X: -2.675926, Y: -1.91850567 },
                    { X: 4.21851873, Y: -2.014074 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1685850915, PinID: 1 },
                Target: { PinType: 3, SubChipID: 526060005, PinID: 323848307 },
                WirePoints: [
                    { X: -3.34814787, Y: -0.991203666 },
                    { X: -2.20148134, Y: -1.03555512 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1797919671,
                    PinID: 1223220242,
                },
                Target: {
                    PinType: 3,
                    SubChipID: 1797919671,
                    PinID: 1586322270,
                },
                WirePoints: [
                    { X: -3.26111221, Y: -6.54555225 },
                    { X: -2.58333325, Y: -6.56957436 },
                    { X: -2.58333325, Y: -8.384389 },
                    { X: -5.722223, Y: -8.319574 },
                    { X: -5.666667, Y: -6.56957436 },
                    { X: -4.961112, Y: -6.605552 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 359392866 },
                Target: { PinType: 3, SubChipID: 694170723, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -2.3518517 },
                    { X: -5.72555542, Y: -2.7907033 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1654542336 },
                Target: { PinType: 3, SubChipID: 1371663404, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -2.916667 },
                    { X: -5.72555542, Y: -3.52570343 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 694170723, PinID: 2 },
                Target: { PinType: 3, SubChipID: 526060005, PinID: 2121663745 },
                WirePoints: [
                    { X: -3.88555527, Y: -2.61570334 },
                    { X: -2.95712471, Y: -2.613121 },
                    { X: -2.93518567, Y: -0.759259164 },
                    { X: -2.20148134, Y: -0.795555234 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1371663404, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1872597154, PinID: 64787434 },
                WirePoints: [
                    { X: -3.88555527, Y: -3.35070348 },
                    { X: -2.70263, Y: -3.34450817 },
                    { X: -2.675926, Y: -1.91850567 },
                    { X: 4.21851873, Y: -2.014074 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1287569512 },
                Target: { PinType: 3, SubChipID: 1371663404, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -3.49850059 },
                    { X: -6.84259272, Y: -3.53703713 },
                    { X: -6.84452724, Y: -3.057285 },
                    { X: -5.72555542, Y: -3.17570353 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1287569512 },
                Target: { PinType: 3, SubChipID: 694170723, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -3.49850059 },
                    { X: -6.84259272, Y: -3.53703713 },
                    { X: -6.847066, Y: -2.42770314 },
                    { X: -5.72555542, Y: -2.44070339 },
                ],
                ColourThemeName: "Blue",
            },
        ],
    },
    "RAM 8bit x16": {
        Name: "RAM 8bit x16",
        Colour: "#0F2582",
        displayID: 0,
        InputPins: [
            {
                Name: "D0",
                ID: 1494296396,
                PositionY: 4.42592573,
                ColourThemeName: "Red",
            },
            {
                Name: "D1",
                ID: 1408343464,
                PositionY: 3.898148,
                ColourThemeName: "Red",
            },
            {
                Name: "D2",
                ID: 634691022,
                PositionY: 3.36111116,
                ColourThemeName: "Red",
            },
            {
                Name: "D3",
                ID: 1390844848,
                PositionY: 2.80555534,
                ColourThemeName: "Red",
            },
            {
                Name: "D4",
                ID: 1838761848,
                PositionY: 2.24074078,
                ColourThemeName: "Red",
            },
            {
                Name: "D5",
                ID: 1053540464,
                PositionY: 1.69444442,
                ColourThemeName: "Red",
            },
            {
                Name: "D6",
                ID: 1299691907,
                PositionY: 1.16666675,
                ColourThemeName: "Red",
            },
            {
                Name: "D7",
                ID: 1022346388,
                PositionY: 0.6203705,
                ColourThemeName: "Red",
            },
            {
                Name: "ADR0",
                ID: 1730958947,
                PositionY: -0.759259164,
                ColourThemeName: "Green",
            },
            {
                Name: "ADR1",
                ID: 163382642,
                PositionY: -1.3055557,
                ColourThemeName: "Green",
            },
            {
                Name: "ADR2",
                ID: 1671380431,
                PositionY: -1.86111116,
                ColourThemeName: "Green",
            },
            {
                Name: "ADR3",
                ID: 811835251,
                PositionY: -2.37962961,
                ColourThemeName: "Green",
            },
            {
                Name: "ENABLE",
                ID: 1174169110,
                PositionY: -3.6836853,
                ColourThemeName: "Green",
            },
            {
                Name: "WRITE",
                ID: 64787434,
                PositionY: -4.220722,
                ColourThemeName: "Blue",
            },
            {
                Name: "CLOCK",
                ID: 858304018,
                PositionY: -4.76701832,
                ColourThemeName: "Yellow",
            },
        ],
        OutputPins: [
            {
                Name: "D0",
                ID: 303959809,
                PositionY: 3.68518543,
                ColourThemeName: "Red",
            },
            {
                Name: "D1",
                ID: 1140474556,
                PositionY: 3.12037039,
                ColourThemeName: "Red",
            },
            {
                Name: "D2",
                ID: 1836932444,
                PositionY: 2.57407427,
                ColourThemeName: "Red",
            },
            {
                Name: "D3",
                ID: 1692608148,
                PositionY: 2.01851845,
                ColourThemeName: "Red",
            },
            {
                Name: "D4",
                ID: 1357166359,
                PositionY: 1.46296322,
                ColourThemeName: "Red",
            },
            {
                Name: "D5",
                ID: 722664755,
                PositionY: 0.92592597,
                ColourThemeName: "Red",
            },
            {
                Name: "D6",
                ID: 1629312028,
                PositionY: 0.407407284,
                ColourThemeName: "Red",
            },
            {
                Name: "D7",
                ID: 605709595,
                PositionY: -0.148148239,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "RAM 8bit x8",
                ID: 1738272073,
                Points: [{ X: 0.879629135, Y: 2.82657385 }],
                Data: null,
            },
            {
                Name: "RAM 8bit x8",
                ID: 442173316,
                Points: [{ X: 0.8796301, Y: -0.6228705 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 823914734,
                Points: [{ X: -3.57407427, Y: -1.21064818 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 148998454,
                Points: [{ X: -3.57407427, Y: -1.83564806 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 599659728,
                Points: [{ X: -3.57407427, Y: -2.460648 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1967097285,
                Points: [{ X: -3.57407427, Y: -3.085648 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 739928982,
                Points: [{ X: -7.10185242, Y: -2.92592573 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1494296396 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 111291676 },
                WirePoints: [
                    { X: -7.837778, Y: 4.42592573 },
                    { X: 0.329629123, Y: 4.386574 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1408343464 },
                Target: {
                    PinType: 3,
                    SubChipID: 1738272073,
                    PinID: 1273740431,
                },
                WirePoints: [
                    { X: -7.837778, Y: 3.898148 },
                    { X: 0.329629123, Y: 4.146574 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 634691022 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 623779886 },
                WirePoints: [
                    { X: -7.837778, Y: 3.36111116 },
                    { X: 0.329629123, Y: 3.90657377 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1390844848 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 547431144 },
                WirePoints: [
                    { X: -7.837778, Y: 2.80555534 },
                    { X: 0.329629123, Y: 3.666574 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1838761848 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 887437200 },
                WirePoints: [
                    { X: -7.837778, Y: 2.24074078 },
                    { X: 0.329629123, Y: 3.42657375 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1053540464 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 381801836 },
                WirePoints: [
                    { X: -7.837778, Y: 1.69444442 },
                    { X: 0.329629123, Y: 3.18657374 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1299691907 },
                Target: {
                    PinType: 3,
                    SubChipID: 1738272073,
                    PinID: 1584830005,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.16666675 },
                    { X: 0.329629123, Y: 2.94657373 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1022346388 },
                Target: {
                    PinType: 3,
                    SubChipID: 1738272073,
                    PinID: 1090265190,
                },
                WirePoints: [
                    { X: -7.837778, Y: 0.6203705 },
                    { X: 0.329629123, Y: 2.70657372 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1494296396 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 111291676 },
                WirePoints: [
                    { X: -7.837778, Y: 4.42592573 },
                    { X: 0.329630077, Y: 0.937129557 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1408343464 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 1273740431 },
                WirePoints: [
                    { X: -7.837778, Y: 3.898148 },
                    { X: 0.329630077, Y: 0.697129548 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 634691022 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 623779886 },
                WirePoints: [
                    { X: -7.837778, Y: 3.36111116 },
                    { X: 0.329630077, Y: 0.457129538 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1390844848 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 547431144 },
                WirePoints: [
                    { X: -7.837778, Y: 2.80555534 },
                    { X: 0.329630077, Y: 0.217129529 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1838761848 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 887437200 },
                WirePoints: [
                    { X: -7.837778, Y: 2.24074078 },
                    { X: 0.329630077, Y: -0.02287054 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1053540464 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 381801836 },
                WirePoints: [
                    { X: -7.837778, Y: 1.69444442 },
                    { X: 0.329630077, Y: -0.26287052 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1299691907 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 1584830005 },
                WirePoints: [
                    { X: -7.837778, Y: 1.16666675 },
                    { X: 0.329630077, Y: -0.5028705 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1022346388 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 1090265190 },
                WirePoints: [
                    { X: -7.837778, Y: 0.6203705 },
                    { X: 0.329630077, Y: -0.742870569 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1738272073,
                    PinID: 1300230193,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 303959809 },
                WirePoints: [
                    { X: 1.42962909, Y: 4.386574 },
                    { X: 7.837778, Y: 3.68518543 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1738272073,
                    PinID: 1083106291,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1140474556 },
                WirePoints: [
                    { X: 1.42962909, Y: 3.94085956 },
                    { X: 7.837778, Y: 3.12037039 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1738272073,
                    PinID: 1367031792,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1836932444 },
                WirePoints: [
                    { X: 1.42962909, Y: 3.49514532 },
                    { X: 7.837778, Y: 2.57407427 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1738272073,
                    PinID: 1280501752,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1692608148 },
                WirePoints: [
                    { X: 1.42962909, Y: 3.049431 },
                    { X: 7.837778, Y: 2.01851845 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1738272073, PinID: 806422093 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1357166359 },
                WirePoints: [
                    { X: 1.42962909, Y: 2.60371661 },
                    { X: 7.837778, Y: 1.46296322 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1738272073, PinID: 948362212 },
                Target: { PinType: 2, SubChipID: 0, PinID: 722664755 },
                WirePoints: [
                    { X: 1.42962909, Y: 2.15800238 },
                    { X: 7.837778, Y: 0.92592597 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1738272073,
                    PinID: 1695556290,
                },
                Target: { PinType: 2, SubChipID: 0, PinID: 1629312028 },
                WirePoints: [
                    { X: 1.42962909, Y: 1.712288 },
                    { X: 7.837778, Y: 0.407407284 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1738272073, PinID: 958899171 },
                Target: { PinType: 2, SubChipID: 0, PinID: 605709595 },
                WirePoints: [
                    { X: 1.42962909, Y: 1.26657379 },
                    { X: 7.837778, Y: -0.148148239 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 442173316, PinID: 1300230193 },
                Target: { PinType: 2, SubChipID: 0, PinID: 303959809 },
                WirePoints: [
                    { X: 1.42963, Y: 0.937129557 },
                    { X: 7.837778, Y: 3.68518543 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 442173316, PinID: 1083106291 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1140474556 },
                WirePoints: [
                    { X: 1.42963, Y: 0.4914152 },
                    { X: 7.837778, Y: 3.12037039 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 442173316, PinID: 1367031792 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1836932444 },
                WirePoints: [
                    { X: 1.42963, Y: 0.0457009077 },
                    { X: 7.837778, Y: 2.57407427 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 442173316, PinID: 1280501752 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1692608148 },
                WirePoints: [
                    { X: 1.42963, Y: -0.4000134 },
                    { X: 7.837778, Y: 2.01851845 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 442173316, PinID: 806422093 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1357166359 },
                WirePoints: [
                    { X: 1.42963, Y: -0.845727742 },
                    { X: 7.837778, Y: 1.46296322 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 442173316, PinID: 948362212 },
                Target: { PinType: 2, SubChipID: 0, PinID: 722664755 },
                WirePoints: [
                    { X: 1.42963, Y: -1.291442 },
                    { X: 7.837778, Y: 0.92592597 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 442173316, PinID: 1695556290 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1629312028 },
                WirePoints: [
                    { X: 1.42963, Y: -1.73715639 },
                    { X: 7.837778, Y: 0.407407284 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 442173316, PinID: 958899171 },
                Target: { PinType: 2, SubChipID: 0, PinID: 605709595 },
                WirePoints: [
                    { X: 1.42963, Y: -2.18287063 },
                    { X: 7.837778, Y: -0.148148239 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 811835251 },
                Target: { PinType: 3, SubChipID: 739928982, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -2.37962961 },
                    { X: -7.65185261, Y: -2.92592573 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 739928982, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1967097285, PinID: 1 },
                WirePoints: [
                    { X: -6.551852, Y: -2.92592573 },
                    { X: -4.12407446, Y: -3.205648 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 739928982, PinID: 1 },
                Target: { PinType: 3, SubChipID: 599659728, PinID: 1 },
                WirePoints: [
                    { X: -6.551852, Y: -2.92592573 },
                    { X: -4.12407446, Y: -2.580648 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 811835251 },
                Target: { PinType: 3, SubChipID: 148998454, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -2.37962961 },
                    { X: -4.12407446, Y: -1.95564806 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 811835251 },
                Target: { PinType: 3, SubChipID: 823914734, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -2.37962961 },
                    { X: -4.12407446, Y: -1.33064818 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1174169110 },
                Target: { PinType: 3, SubChipID: 823914734, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -3.6836853 },
                    { X: -4.62963, Y: -3.69108438 },
                    { X: -4.56481552, Y: -1.144788 },
                    { X: -4.12407446, Y: -1.09064817 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1174169110 },
                Target: { PinType: 3, SubChipID: 599659728, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -3.6836853 },
                    { X: -4.62963, Y: -3.69108438 },
                    { X: -4.59709024, Y: -2.412721 },
                    { X: -4.12407446, Y: -2.34064817 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 64787434 },
                Target: { PinType: 3, SubChipID: 148998454, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -4.220722 },
                    { X: -4.925926, Y: -4.079973 },
                    { X: -4.85185242, Y: -1.74664 },
                    { X: -4.12407446, Y: -1.715648 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 64787434 },
                Target: { PinType: 3, SubChipID: 1967097285, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -4.220722 },
                    { X: -4.925926, Y: -4.079973 },
                    { X: -4.89008236, Y: -2.95089388 },
                    { X: -4.12407446, Y: -2.96564817 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1730958947 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 835305760 },
                WirePoints: [
                    { X: -7.837778, Y: -0.759259164 },
                    { X: 0.329629123, Y: 2.46657372 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 163382642 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 626999079 },
                WirePoints: [
                    { X: -7.837778, Y: -1.3055557 },
                    { X: 0.329629123, Y: 2.22657371 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1671380431 },
                Target: {
                    PinType: 3,
                    SubChipID: 1738272073,
                    PinID: 1181784448,
                },
                WirePoints: [
                    { X: -7.837778, Y: -1.86111116 },
                    { X: 0.329629123, Y: 1.9865737 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1730958947 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 835305760 },
                WirePoints: [
                    { X: -7.837778, Y: -0.759259164 },
                    { X: 0.329630077, Y: -0.9828706 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 163382642 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 626999079 },
                WirePoints: [
                    { X: -7.837778, Y: -1.3055557 },
                    { X: 0.329630077, Y: -1.22287059 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1671380431 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 1181784448 },
                WirePoints: [
                    { X: -7.837778, Y: -1.86111116 },
                    { X: 0.329630077, Y: -1.4628706 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 823914734, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 204363152 },
                WirePoints: [
                    { X: -3.02407432, Y: -1.21064818 },
                    { X: 0.329629123, Y: 1.74657381 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 148998454, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 672669116 },
                WirePoints: [
                    { X: -3.02407432, Y: -1.83564806 },
                    { X: 0.329629123, Y: 1.5065738 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 599659728, PinID: 2 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 204363152 },
                WirePoints: [
                    { X: -3.02407432, Y: -2.460648 },
                    { X: 0.329630077, Y: -1.70287061 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1967097285, PinID: 2 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 672669116 },
                WirePoints: [
                    { X: -3.02407432, Y: -3.085648 },
                    { X: 0.329630077, Y: -1.94287062 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 858304018 },
                Target: { PinType: 3, SubChipID: 1738272073, PinID: 263344985 },
                WirePoints: [
                    { X: -7.837778, Y: -4.76701832 },
                    { X: -0.3425927, Y: -4.68732452 },
                    { X: -0.120370127, Y: 1.54629648 },
                    { X: 0.329629123, Y: 1.26657379 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 858304018 },
                Target: { PinType: 3, SubChipID: 442173316, PinID: 263344985 },
                WirePoints: [
                    { X: -7.837778, Y: -4.76701832 },
                    { X: -0.3425927, Y: -4.68732452 },
                    { X: -0.256344736, Y: -2.267962 },
                    { X: 0.329630077, Y: -2.18287063 },
                ],
                ColourThemeName: "Yellow",
            },
        ],
    },
    "RAM 8bit x4": {
        Name: "RAM 8bit x4",
        Colour: "#34331F",
        displayID: 0,
        InputPins: [
            {
                Name: "0",
                ID: 505148981,
                PositionY: 3.99074078,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 322180082,
                PositionY: 3.4537034,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 206544233,
                PositionY: 2.90740752,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 1584761349,
                PositionY: 2.35185146,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 1645789127,
                PositionY: 1.78703642,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 2071952710,
                PositionY: 1.23148084,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 731075272,
                PositionY: 0.657407045,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 1454530826,
                PositionY: 0.111111224,
                ColourThemeName: "Red",
            },
            {
                Name: "ADR0",
                ID: 1150469024,
                PositionY: -1.71725345,
                ColourThemeName: "Green",
            },
            {
                Name: "ENABLE",
                ID: 1714478727,
                PositionY: -4.55703,
                ColourThemeName: "Red",
            },
            {
                Name: "WRITE",
                ID: 1859317599,
                PositionY: -5.112586,
                ColourThemeName: "Blue",
            },
            {
                Name: "CLOCK",
                ID: 1077963413,
                PositionY: -5.68666,
                ColourThemeName: "Yellow",
            },
            {
                Name: "ADR1",
                ID: 1402181743,
                PositionY: -2.35185146,
                ColourThemeName: "Green",
            },
        ],
        OutputPins: [
            {
                Name: "0",
                ID: 1556902714,
                PositionY: 3.43518567,
                ColourThemeName: "Red",
            },
            {
                Name: "1",
                ID: 1997878893,
                PositionY: 2.879629,
                ColourThemeName: "Red",
            },
            {
                Name: "2",
                ID: 975811377,
                PositionY: 2.314814,
                ColourThemeName: "Red",
            },
            {
                Name: "3",
                ID: 730746703,
                PositionY: 1.74999976,
                ColourThemeName: "Red",
            },
            {
                Name: "4",
                ID: 1659146462,
                PositionY: 1.20370388,
                ColourThemeName: "Red",
            },
            {
                Name: "5",
                ID: 355688267,
                PositionY: 0.629629731,
                ColourThemeName: "Red",
            },
            {
                Name: "6",
                ID: 29065826,
                PositionY: 0.0555551052,
                ColourThemeName: "Red",
            },
            {
                Name: "7",
                ID: 1971181939,
                PositionY: -0.4629624,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "BUS",
                ID: 416159502,
                Points: [
                    { X: 6.62592554, Y: -11.3330994 },
                    { X: 6.61666632, Y: 4.0467186 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1266571626,
                Points: [
                    { X: 6.42592573, Y: -11.3332176 },
                    { X: 6.41666651, Y: 4.04659748 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 522596829,
                Points: [
                    { X: 6.22592545, Y: -11.33334 },
                    { X: 6.216666, Y: 4.04647732 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 913273112,
                Points: [
                    { X: 6.02592564, Y: -11.33346 },
                    { X: 6.01666641, Y: 4.046356 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 855685871,
                Points: [
                    { X: 5.825926, Y: -11.33358 },
                    { X: 5.8166666, Y: 4.046236 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 381701140,
                Points: [
                    { X: 5.625926, Y: -11.3337 },
                    { X: 5.616667, Y: 4.046116 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 548670154,
                Points: [
                    { X: 5.42592573, Y: -11.33382 },
                    { X: 5.41666651, Y: 4.04599571 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 798465564,
                Points: [
                    { X: 5.225926, Y: -11.3339415 },
                    { X: 5.2166667, Y: 4.0458746 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1164984714,
                Points: [
                    { X: -0.848148, Y: 4.18518543 },
                    { X: -0.848148, Y: -11.1019993 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1356507498,
                Points: [
                    { X: -0.648148, Y: 4.18518543 },
                    { X: -0.648148, Y: -11.1019993 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1054903506,
                Points: [
                    { X: -0.448148, Y: 4.18518543 },
                    { X: -0.448148, Y: -11.1019993 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1524489823,
                Points: [
                    { X: -0.248148024, Y: 4.18518543 },
                    { X: -0.248148024, Y: -11.1019993 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1821431378,
                Points: [
                    { X: -0.0481480137, Y: 4.18518543 },
                    { X: -0.0481480137, Y: -11.1019993 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 818389029,
                Points: [
                    { X: 0.151852, Y: 4.18518543 },
                    { X: 0.151852, Y: -11.1019993 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1085382556,
                Points: [
                    { X: 0.351852, Y: 4.18518543 },
                    { X: 0.351852, Y: -11.1019993 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 198372726,
                Points: [
                    { X: 0.551852, Y: 4.18518543 },
                    { X: 0.551852, Y: -11.1019993 },
                ],
                Data: null,
            },
            {
                Name: "8bit-REGISTER",
                ID: 2014244246,
                Points: [{ X: 2.96296334, Y: -7.150673 }],
                Data: null,
            },
            {
                Name: "8bit-REGISTER",
                ID: 701225236,
                Points: [{ X: 2.96296334, Y: -9.935673 }],
                Data: null,
            },
            {
                Name: "8bit-REGISTER",
                ID: 420531010,
                Points: [{ X: 2.95370436, Y: -1.64379883 }],
                Data: null,
            },
            {
                Name: "8bit-REGISTER",
                ID: 630824111,
                Points: [{ X: 2.95370436, Y: -4.42879868 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 991052598,
                Points: [{ X: -6.425926, Y: -0.457272053 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 1787774423,
                Points: [{ X: -6.425926, Y: -1.01227212 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 829314863,
                Points: [{ X: -4.49074125, Y: -1.945441 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 759836201,
                Points: [{ X: -4.49074125, Y: -2.57044077 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 861868635,
                Points: [{ X: -4.49074125, Y: -3.19544077 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1184402618,
                Points: [{ X: -4.49074125, Y: -3.82044053 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 735850407,
                Points: [{ X: -4.25, Y: -5.334541 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 2005700063,
                Points: [{ X: -4.25, Y: -5.95954037 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1370729017,
                Points: [{ X: -4.25, Y: -6.58454037 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1938519388,
                Points: [{ X: -4.25, Y: -7.20954 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1651456427,
                Points: [{ X: -4.2962966, Y: -8.114178 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 953916345,
                Points: [{ X: -4.2962966, Y: -8.739177 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1392315054,
                Points: [{ X: -4.2962966, Y: -9.364177 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1219704122,
                Points: [{ X: -4.2962966, Y: -9.989176 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 798465564, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1556902714 },
                WirePoints: [
                    { X: 5.21703434, Y: 3.43520451 },
                    { X: 7.837778, Y: 3.43518567 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 548670154, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1997878893 },
                WirePoints: [
                    { X: 5.417369, Y: 2.87961769 },
                    { X: 7.837778, Y: 2.879629 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 381701140, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 975811377 },
                WirePoints: [
                    { X: 5.617709, Y: 2.31480122 },
                    { X: 7.837778, Y: 2.314814 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 855685871, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 730746703 },
                WirePoints: [
                    { X: 5.818049, Y: 1.75002384 },
                    { X: 7.837778, Y: 1.74999976 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 913273112, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1659146462 },
                WirePoints: [
                    { X: 6.018378, Y: 1.20368671 },
                    { X: 7.837778, Y: 1.20370388 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 522596829, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 355688267 },
                WirePoints: [
                    { X: 6.2187233, Y: 0.6296387 },
                    { X: 7.837778, Y: 0.629629731 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1266571626, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 29065826 },
                WirePoints: [
                    { X: 6.41906929, Y: 0.0555448532 },
                    { X: 7.837778, Y: 0.0555551052 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 416159502, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1971181939 },
                WirePoints: [
                    { X: 6.61938143, Y: -0.46295166 },
                    { X: 7.837778, Y: -0.4629624 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1054903506, PinID: 1 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 285195245 },
                WirePoints: [
                    { X: -0.448148, Y: -0.923798561 },
                    { X: 1.73370433, Y: -0.9237988 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1524489823, PinID: 1 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 397780527 },
                WirePoints: [
                    { X: -0.248148024, Y: -1.16379881 },
                    { X: 1.73370433, Y: -1.16379881 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1821431378, PinID: 1 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 1447474653 },
                WirePoints: [
                    { X: -0.0481480137, Y: -1.40379858 },
                    { X: 1.73370433, Y: -1.40379882 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 818389029, PinID: 1 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 1230097902 },
                WirePoints: [
                    { X: 0.151852, Y: -1.64379883 },
                    { X: 1.73370433, Y: -1.64379883 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1085382556, PinID: 1 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 136930271 },
                WirePoints: [
                    { X: 0.351852, Y: -1.88379908 },
                    { X: 1.73370433, Y: -1.88379884 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 198372726, PinID: 1 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 807409755 },
                WirePoints: [
                    { X: 0.551852, Y: -2.12379932 },
                    { X: 1.73370433, Y: -2.12379885 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1356507498, PinID: 1 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 699877108 },
                WirePoints: [
                    { X: -0.648148, Y: -0.6837988 },
                    { X: 1.73370433, Y: -0.6837988 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1164984714, PinID: 1 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 394935240 },
                WirePoints: [
                    { X: -0.848148, Y: -0.443798542 },
                    { X: 1.73370433, Y: -0.44379878 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 505148981 },
                Target: { PinType: 3, SubChipID: 1164984714, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.99074078 },
                    { X: -0.848148, Y: 3.99074078 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1454530826 },
                Target: { PinType: 3, SubChipID: 198372726, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 0.111111224 },
                    { X: 0.551852, Y: 0.111111164 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 731075272 },
                Target: { PinType: 3, SubChipID: 1085382556, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 0.657407045 },
                    { X: 0.351852, Y: 0.657407045 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 2071952710 },
                Target: { PinType: 3, SubChipID: 818389029, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.23148084 },
                    { X: 0.151852, Y: 1.23148084 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1645789127 },
                Target: { PinType: 3, SubChipID: 1821431378, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 1.78703642 },
                    { X: -0.0481480137, Y: 1.78703642 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1584761349 },
                Target: { PinType: 3, SubChipID: 1524489823, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 2.35185146 },
                    { X: -0.248148024, Y: 2.35185146 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 206544233 },
                Target: { PinType: 3, SubChipID: 1054903506, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 2.90740752 },
                    { X: -0.448148, Y: 2.90740752 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 322180082 },
                Target: { PinType: 3, SubChipID: 1356507498, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: 3.4537034 },
                    { X: -0.648148, Y: 3.4537034 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1164984714, PinID: 1 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 394935240 },
                WirePoints: [
                    { X: -0.848148, Y: -3.22879934 },
                    { X: 1.73370433, Y: -3.22879863 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1356507498, PinID: 1 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 699877108 },
                WirePoints: [
                    { X: -0.648148, Y: -3.468799 },
                    { X: 1.73370433, Y: -3.46879864 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1054903506, PinID: 1 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 285195245 },
                WirePoints: [
                    { X: -0.448148, Y: -3.70879841 },
                    { X: 1.73370433, Y: -3.70879865 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1524489823, PinID: 1 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 397780527 },
                WirePoints: [
                    { X: -0.248148024, Y: -3.94879913 },
                    { X: 1.73370433, Y: -3.94879866 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1821431378, PinID: 1 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 1447474653 },
                WirePoints: [
                    { X: -0.0481480137, Y: -4.188799 },
                    { X: 1.73370433, Y: -4.188799 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 818389029, PinID: 1 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 1230097902 },
                WirePoints: [
                    { X: 0.151852, Y: -4.42879868 },
                    { X: 1.73370433, Y: -4.42879868 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1085382556, PinID: 1 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 136930271 },
                WirePoints: [
                    { X: 0.351852, Y: -4.6687994 },
                    { X: 1.73370433, Y: -4.668799 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 198372726, PinID: 1 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 807409755 },
                WirePoints: [
                    { X: 0.551852, Y: -4.908799 },
                    { X: 1.73370433, Y: -4.90879869 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1164984714, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2014244246, PinID: 394935240 },
                WirePoints: [
                    { X: -0.848148, Y: -5.950673 },
                    { X: 1.74296331, Y: -5.950673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1356507498, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2014244246, PinID: 699877108 },
                WirePoints: [
                    { X: -0.648148, Y: -6.190673 },
                    { X: 1.74296331, Y: -6.190673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1054903506, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2014244246, PinID: 285195245 },
                WirePoints: [
                    { X: -0.448148, Y: -6.4306736 },
                    { X: 1.74296331, Y: -6.43067265 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1524489823, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2014244246, PinID: 397780527 },
                WirePoints: [
                    { X: -0.248148024, Y: -6.67067242 },
                    { X: 1.74296331, Y: -6.670673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1821431378, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2014244246,
                    PinID: 1447474653,
                },
                WirePoints: [
                    { X: -0.0481480137, Y: -6.910673 },
                    { X: 1.74296331, Y: -6.910673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 818389029, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2014244246,
                    PinID: 1230097902,
                },
                WirePoints: [
                    { X: 0.151852, Y: -7.150673 },
                    { X: 1.74296331, Y: -7.150673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1085382556, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2014244246, PinID: 136930271 },
                WirePoints: [
                    { X: 0.351852, Y: -7.39067364 },
                    { X: 1.74296331, Y: -7.390673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 198372726, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2014244246, PinID: 807409755 },
                WirePoints: [
                    { X: 0.551852, Y: -7.63067341 },
                    { X: 1.74296331, Y: -7.630673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1164984714, PinID: 1 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 394935240 },
                WirePoints: [
                    { X: -0.848148, Y: -8.735673 },
                    { X: 1.74296331, Y: -8.735673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1356507498, PinID: 1 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 699877108 },
                WirePoints: [
                    { X: -0.648148, Y: -8.975673 },
                    { X: 1.74296331, Y: -8.975673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1054903506, PinID: 1 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 285195245 },
                WirePoints: [
                    { X: -0.448148, Y: -9.21567249 },
                    { X: 1.74296331, Y: -9.21567249 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1524489823, PinID: 1 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 397780527 },
                WirePoints: [
                    { X: -0.248148024, Y: -9.455672 },
                    { X: 1.74296331, Y: -9.455673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1821431378, PinID: 1 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 1447474653 },
                WirePoints: [
                    { X: -0.0481480137, Y: -9.695673 },
                    { X: 1.74296331, Y: -9.695673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 818389029, PinID: 1 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 1230097902 },
                WirePoints: [
                    { X: 0.151852, Y: -9.935673 },
                    { X: 1.74296331, Y: -9.935673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1085382556, PinID: 1 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 136930271 },
                WirePoints: [
                    { X: 0.351852, Y: -10.1756725 },
                    { X: 1.74296331, Y: -10.1756725 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 198372726, PinID: 1 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 807409755 },
                WirePoints: [
                    { X: 0.551852, Y: -10.4156723 },
                    { X: 1.74296331, Y: -10.4156723 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1077963413 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 1425871993 },
                WirePoints: [
                    { X: -7.837778, Y: -5.68666 },
                    { X: -7.50000048, Y: -5.695919 },
                    { X: -7.50000048, Y: -13.01958 },
                    { X: 1.28703761, Y: -13.01958 },
                    { X: 1.28703761, Y: -2.83319569 },
                    { X: 1.73370433, Y: -2.84379888 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1077963413 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 1425871993 },
                WirePoints: [
                    { X: -7.837778, Y: -5.68666 },
                    { X: -7.50000048, Y: -5.695919 },
                    { X: -7.50000048, Y: -13.01958 },
                    { X: 1.28703761, Y: -13.01958 },
                    { X: 1.28703761, Y: -5.659678 },
                    { X: 1.73370433, Y: -5.62879848 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1077963413 },
                Target: {
                    PinType: 3,
                    SubChipID: 2014244246,
                    PinID: 1425871993,
                },
                WirePoints: [
                    { X: -7.837778, Y: -5.68666 },
                    { X: -7.50000048, Y: -5.695919 },
                    { X: -7.50000048, Y: -13.01958 },
                    { X: 1.28703761, Y: -13.01958 },
                    { X: 1.28703761, Y: -8.35322 },
                    { X: 1.74296331, Y: -8.350673 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1077963413 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 1425871993 },
                WirePoints: [
                    { X: -7.837778, Y: -5.68666 },
                    { X: -7.50000048, Y: -5.695919 },
                    { X: -7.50000048, Y: -13.01958 },
                    { X: 1.28703761, Y: -13.01958 },
                    { X: 1.28703761, Y: -11.1495171 },
                    { X: 1.74296331, Y: -11.1356726 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1150469024 },
                Target: { PinType: 3, SubChipID: 991052598, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.71725345 },
                    { X: -7.57407427, Y: -1.71725345 },
                    { X: -7.57407427, Y: -0.447734833 },
                    { X: -6.9759264, Y: -0.457272053 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1402181743 },
                Target: { PinType: 3, SubChipID: 1787774423, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -2.35185146 },
                    { X: -7.37037039, Y: -2.35185146 },
                    { X: -7.37037039, Y: -1.03106821 },
                    { X: -6.9759264, Y: -1.01227212 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1714478727 },
                Target: { PinType: 3, SubChipID: 1938519388, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -4.55703 },
                    { X: -5.03703737, Y: -4.55703 },
                    { X: -5.03703737, Y: -7.09764576 },
                    { X: -4.8, Y: -7.08954 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1714478727 },
                Target: { PinType: 3, SubChipID: 1370729017, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -4.55703 },
                    { X: -5.03703737, Y: -4.55703 },
                    { X: -5.03703737, Y: -6.393942 },
                    { X: -4.8, Y: -6.46454048 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1714478727 },
                Target: { PinType: 3, SubChipID: 2005700063, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -4.55703 },
                    { X: -5.03703737, Y: -4.55703 },
                    { X: -5.03703737, Y: -5.819868 },
                    { X: -4.8, Y: -5.83954048 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1714478727 },
                Target: { PinType: 3, SubChipID: 735850407, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -4.55703 },
                    { X: -5.03703737, Y: -4.55703 },
                    { X: -5.03703737, Y: -5.24579334 },
                    { X: -4.8, Y: -5.214541 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1859317599 },
                Target: { PinType: 3, SubChipID: 1219704122, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -5.112586 },
                    { X: -7.14814854, Y: -5.112586 },
                    { X: -7.14814854, Y: -7.94349337 },
                    { X: -5.08333349, Y: -7.94349337 },
                    { X: -5.08333349, Y: -9.860161 },
                    { X: -4.846297, Y: -9.869176 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1859317599 },
                Target: { PinType: 3, SubChipID: 1392315054, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -5.112586 },
                    { X: -7.14814854, Y: -5.112586 },
                    { X: -7.14814854, Y: -7.94349337 },
                    { X: -5.08333349, Y: -7.94349337 },
                    { X: -5.08333349, Y: -9.258308 },
                    { X: -4.846297, Y: -9.244177 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1859317599 },
                Target: { PinType: 3, SubChipID: 953916345, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -5.112586 },
                    { X: -7.14814854, Y: -5.112586 },
                    { X: -7.14814854, Y: -7.94349337 },
                    { X: -5.08333349, Y: -7.94349337 },
                    { X: -5.08333349, Y: -8.656457 },
                    { X: -4.846297, Y: -8.619177 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1859317599 },
                Target: { PinType: 3, SubChipID: 1651456427, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -5.112586 },
                    { X: -7.14814854, Y: -5.112586 },
                    { X: -7.14814854, Y: -7.94349337 },
                    { X: -5.203704, Y: -7.94349337 },
                    { X: -4.846297, Y: -7.994178 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 991052598, PinID: 1 },
                Target: { PinType: 3, SubChipID: 829314863, PinID: 0 },
                WirePoints: [
                    { X: -5.875926, Y: -0.457272053 },
                    { X: -5.277778, Y: -0.457272053 },
                    { X: -5.277778, Y: -1.83378649 },
                    { X: -5.04074144, Y: -1.825441 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1787774423, PinID: 1 },
                Target: { PinType: 3, SubChipID: 829314863, PinID: 1 },
                WirePoints: [
                    { X: -5.875926, Y: -1.01227212 },
                    { X: -5.75000048, Y: -0.9911938 },
                    { X: -5.75000048, Y: -2.065441 },
                    { X: -5.04074144, Y: -2.065441 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1150469024 },
                Target: { PinType: 3, SubChipID: 759836201, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.71725345 },
                    { X: -6.38888931, Y: -1.71725345 },
                    { X: -6.38888931, Y: -2.44489813 },
                    { X: -5.04074144, Y: -2.450441 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1787774423, PinID: 1 },
                Target: { PinType: 3, SubChipID: 759836201, PinID: 1 },
                WirePoints: [
                    { X: -5.875926, Y: -1.01227212 },
                    { X: -5.75000048, Y: -0.9911938 },
                    { X: -5.75000048, Y: -1.66712 },
                    { X: -5.7592597, Y: -2.69044065 },
                    { X: -5.04074144, Y: -2.69044065 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1402181743 },
                Target: { PinType: 3, SubChipID: 861868635, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -2.35185146 },
                    { X: -6.777778, Y: -2.35185146 },
                    { X: -6.777778, Y: -3.343046 },
                    { X: -5.04074144, Y: -3.31544065 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 991052598, PinID: 1 },
                Target: { PinType: 3, SubChipID: 861868635, PinID: 0 },
                WirePoints: [
                    { X: -5.875926, Y: -0.457272053 },
                    { X: -5.277778, Y: -0.457272053 },
                    { X: -5.277778, Y: -1.620795 },
                    { X: -5.276745, Y: -3.056009 },
                    { X: -5.04074144, Y: -3.075441 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1402181743 },
                Target: { PinType: 3, SubChipID: 1184402618, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -2.35185146 },
                    { X: -6.777778, Y: -2.35185146 },
                    { X: -6.777778, Y: -2.9726758 },
                    { X: -6.787038, Y: -3.94044042 },
                    { X: -5.04074144, Y: -3.94044042 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1150469024 },
                Target: { PinType: 3, SubChipID: 1184402618, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.71725345 },
                    { X: -6.38888931, Y: -1.71725345 },
                    { X: -6.38888931, Y: -2.1763792 },
                    { X: -6.38888931, Y: -3.70044065 },
                    { X: -5.04074144, Y: -3.70044065 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1184402618, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1938519388, PinID: 1 },
                WirePoints: [
                    { X: -3.9407413, Y: -3.82044053 },
                    { X: -3.75000024, Y: -3.78749037 },
                    { X: -3.75000024, Y: -4.27823162 },
                    { X: -6.07407427, Y: -4.27823162 },
                    { X: -6.07407427, Y: -7.32954 },
                    { X: -4.8, Y: -7.32954 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 861868635, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1370729017, PinID: 1 },
                WirePoints: [
                    { X: -3.9407413, Y: -3.19544077 },
                    { X: -3.57407427, Y: -3.15786076 },
                    { X: -3.57407427, Y: -4.426379 },
                    { X: -5.89814854, Y: -4.426379 },
                    { X: -5.89814854, Y: -6.70454025 },
                    { X: -4.8, Y: -6.70454025 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 759836201, PinID: 2 },
                Target: { PinType: 3, SubChipID: 2005700063, PinID: 1 },
                WirePoints: [
                    { X: -3.9407413, Y: -2.57044077 },
                    { X: -3.40740752, Y: -2.54675 },
                    { X: -3.40740752, Y: -4.704157 },
                    { X: -5.73148155, Y: -4.704157 },
                    { X: -5.73148155, Y: -6.07954025 },
                    { X: -4.8, Y: -6.07954025 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 829314863, PinID: 2 },
                Target: { PinType: 3, SubChipID: 735850407, PinID: 1 },
                WirePoints: [
                    { X: -3.9407413, Y: -1.945441 },
                    { X: -3.25000048, Y: -1.92637944 },
                    { X: -3.25000048, Y: -4.88934231 },
                    { X: -5.57407427, Y: -4.88934231 },
                    { X: -5.57407427, Y: -5.45454073 },
                    { X: -4.8, Y: -5.45454073 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1184402618, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1219704122, PinID: 1 },
                WirePoints: [
                    { X: -3.9407413, Y: -3.82044053 },
                    { X: -3.75000024, Y: -3.78749037 },
                    { X: -3.75000024, Y: -4.27823162 },
                    { X: -6.07407427, Y: -4.27823162 },
                    { X: -6.07407427, Y: -6.99633026 },
                    { X: -6.11111164, Y: -10.1091757 },
                    { X: -4.846297, Y: -10.1091757 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 861868635, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1392315054, PinID: 1 },
                WirePoints: [
                    { X: -3.9407413, Y: -3.19544077 },
                    { X: -3.57407427, Y: -3.15786076 },
                    { X: -3.57407427, Y: -4.426379 },
                    { X: -5.89814854, Y: -4.426379 },
                    { X: -5.89814854, Y: -6.385219 },
                    { X: -5.86111164, Y: -9.484177 },
                    { X: -4.846297, Y: -9.484177 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 759836201, PinID: 2 },
                Target: { PinType: 3, SubChipID: 953916345, PinID: 1 },
                WirePoints: [
                    { X: -3.9407413, Y: -2.57044077 },
                    { X: -3.40740752, Y: -2.54675 },
                    { X: -3.40740752, Y: -4.704157 },
                    { X: -5.73148155, Y: -4.704157 },
                    { X: -5.73148155, Y: -5.774108 },
                    { X: -5.69444466, Y: -8.859177 },
                    { X: -4.846297, Y: -8.859177 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 829314863, PinID: 2 },
                Target: { PinType: 3, SubChipID: 1651456427, PinID: 1 },
                WirePoints: [
                    { X: -3.9407413, Y: -1.945441 },
                    { X: -3.25000048, Y: -1.92637944 },
                    { X: -3.25000048, Y: -4.88934231 },
                    { X: -5.57407427, Y: -4.88934231 },
                    { X: -5.57407427, Y: -5.21855259 },
                    { X: -5.564815, Y: -8.234178 },
                    { X: -4.846297, Y: -8.234178 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1219704122, PinID: 2 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 600137525 },
                WirePoints: [
                    { X: -3.74629664, Y: -9.989176 },
                    { X: -2.212963, Y: -9.989176 },
                    { X: -2.212963, Y: -10.89633 },
                    { X: 1.74296331, Y: -10.8956728 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 1392315054, PinID: 2 },
                Target: { PinType: 3, SubChipID: 2014244246, PinID: 600137525 },
                WirePoints: [
                    { X: -3.74629664, Y: -9.364177 },
                    { X: -2.22222233, Y: -9.364177 },
                    { X: -2.22222233, Y: -8.109293 },
                    { X: 1.74296331, Y: -8.110673 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 953916345, PinID: 2 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 600137525 },
                WirePoints: [
                    { X: -3.74629664, Y: -8.739177 },
                    { X: -2.462963, Y: -8.739177 },
                    { X: -2.462963, Y: -5.37781143 },
                    { X: 1.73370433, Y: -5.38879871 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 1651456427, PinID: 2 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 600137525 },
                WirePoints: [
                    { X: -3.74629664, Y: -8.114178 },
                    { X: -2.648148, Y: -8.114178 },
                    { X: -2.648148, Y: -2.60153437 },
                    { X: 1.73370433, Y: -2.60379887 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 735850407, PinID: 2 },
                Target: { PinType: 3, SubChipID: 420531010, PinID: 1123941419 },
                WirePoints: [
                    { X: -3.7, Y: -5.334541 },
                    { X: -3.01851869, Y: -5.334541 },
                    { X: -3.01851869, Y: -2.342275 },
                    { X: 1.73370433, Y: -2.36379886 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2005700063, PinID: 2 },
                Target: { PinType: 3, SubChipID: 630824111, PinID: 1123941419 },
                WirePoints: [
                    { X: -3.7, Y: -5.95954037 },
                    { X: -2.87037063, Y: -5.95954037 },
                    { X: -2.87037063, Y: -5.15709 },
                    { X: 1.73370433, Y: -5.148799 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1370729017, PinID: 2 },
                Target: {
                    PinType: 3,
                    SubChipID: 2014244246,
                    PinID: 1123941419,
                },
                WirePoints: [
                    { X: -3.7, Y: -6.58454037 },
                    { X: -2.93518567, Y: -6.58454037 },
                    { X: -2.93518567, Y: -7.90401173 },
                    { X: 1.74296331, Y: -7.870673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1938519388, PinID: 2 },
                Target: { PinType: 3, SubChipID: 701225236, PinID: 1123941419 },
                WirePoints: [
                    { X: -3.7, Y: -7.20954 },
                    { X: -3.16666675, Y: -7.20954 },
                    { X: -3.16666675, Y: -10.6803551 },
                    { X: 1.74296331, Y: -10.655673 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420531010, PinID: 1289544212 },
                Target: { PinType: 3, SubChipID: 798465564, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -0.44379878 },
                    { X: 5.21936941, Y: -0.4437952 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420531010, PinID: 1707752613 },
                Target: { PinType: 3, SubChipID: 548670154, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -0.786655962 },
                    { X: 5.419576, Y: -0.786677361 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420531010, PinID: 672620736 },
                Target: { PinType: 3, SubChipID: 381701140, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -1.12951314 },
                    { X: 5.619783, Y: -1.1295023 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420531010, PinID: 576761498 },
                Target: { PinType: 3, SubChipID: 855685871, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -1.47237027 },
                    { X: 5.819989, Y: -1.47236156 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420531010, PinID: 793392506 },
                Target: { PinType: 3, SubChipID: 913273112, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -1.81522751 },
                    { X: 6.02019548, Y: -1.81522083 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420531010, PinID: 932461842 },
                Target: { PinType: 3, SubChipID: 522596829, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -2.15808463 },
                    { X: 6.220402, Y: -2.15808678 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420531010, PinID: 1664659923 },
                Target: { PinType: 3, SubChipID: 1266571626, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -2.50094175 },
                    { X: 6.42060852, Y: -2.50095654 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 420531010, PinID: 2136002862 },
                Target: { PinType: 3, SubChipID: 416159502, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -2.84379888 },
                    { X: 6.620815, Y: -2.843792 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 630824111, PinID: 1289544212 },
                Target: { PinType: 3, SubChipID: 798465564, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -3.22879863 },
                    { X: 5.22104645, Y: -3.228794 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 630824111, PinID: 1707752613 },
                Target: { PinType: 3, SubChipID: 548670154, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -3.57165575 },
                    { X: 5.42125273, Y: -3.57167578 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 630824111, PinID: 672620736 },
                Target: { PinType: 3, SubChipID: 381701140, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -3.914513 },
                    { X: 5.62145948, Y: -3.914485 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 630824111, PinID: 576761498 },
                Target: { PinType: 3, SubChipID: 855685871, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -4.25737 },
                    { X: 5.821666, Y: -4.257366 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 630824111, PinID: 793392506 },
                Target: { PinType: 3, SubChipID: 913273112, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -4.60022736 },
                    { X: 6.021872, Y: -4.600203 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 630824111, PinID: 932461842 },
                Target: { PinType: 3, SubChipID: 522596829, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -4.94308472 },
                    { X: 6.22207832, Y: -4.94303465 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 630824111, PinID: 1664659923 },
                Target: { PinType: 3, SubChipID: 1266571626, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -5.2859416 },
                    { X: 6.422285, Y: -5.28592157 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 630824111, PinID: 2136002862 },
                Target: { PinType: 3, SubChipID: 416159502, PinID: 0 },
                WirePoints: [
                    { X: 4.173704, Y: -5.62879848 },
                    { X: 6.62249136, Y: -5.628825 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2014244246,
                    PinID: 1289544212,
                },
                Target: { PinType: 3, SubChipID: 798465564, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -5.950673 },
                    { X: 5.222685, Y: -5.95069 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2014244246,
                    PinID: 1707752613,
                },
                Target: { PinType: 3, SubChipID: 548670154, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -6.29353 },
                    { X: 5.422891, Y: -6.293549 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2014244246, PinID: 672620736 },
                Target: { PinType: 3, SubChipID: 381701140, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -6.63638735 },
                    { X: 5.623098, Y: -6.63636351 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2014244246, PinID: 576761498 },
                Target: { PinType: 3, SubChipID: 855685871, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -6.979244 },
                    { X: 5.823304, Y: -6.97924471 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2014244246, PinID: 793392506 },
                Target: { PinType: 3, SubChipID: 913273112, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -7.32210159 },
                    { X: 6.02351046, Y: -7.322093 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 2014244246, PinID: 932461842 },
                Target: { PinType: 3, SubChipID: 522596829, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -7.664959 },
                    { X: 6.22371674, Y: -7.66493034 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2014244246,
                    PinID: 1664659923,
                },
                Target: { PinType: 3, SubChipID: 1266571626, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -8.007816 },
                    { X: 6.42392349, Y: -8.007795 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 2014244246,
                    PinID: 2136002862,
                },
                Target: { PinType: 3, SubChipID: 416159502, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -8.350673 },
                    { X: 6.62413025, Y: -8.350693 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 701225236, PinID: 1289544212 },
                Target: { PinType: 3, SubChipID: 798465564, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -8.735673 },
                    { X: 5.22436142, Y: -8.735639 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 701225236, PinID: 1707752613 },
                Target: { PinType: 3, SubChipID: 548670154, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -9.07853 },
                    { X: 5.424568, Y: -9.078503 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 701225236, PinID: 672620736 },
                Target: { PinType: 3, SubChipID: 381701140, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -9.421387 },
                    { X: 5.624775, Y: -9.421401 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 701225236, PinID: 576761498 },
                Target: { PinType: 3, SubChipID: 855685871, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -9.764244 },
                    { X: 5.824981, Y: -9.764238 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 701225236, PinID: 793392506 },
                Target: { PinType: 3, SubChipID: 913273112, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -10.1071014 },
                    { X: 6.02518749, Y: -10.10708 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 701225236, PinID: 932461842 },
                Target: { PinType: 3, SubChipID: 522596829, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -10.4499588 },
                    { X: 6.225394, Y: -10.4499178 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 701225236, PinID: 1664659923 },
                Target: { PinType: 3, SubChipID: 1266571626, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -10.7928162 },
                    { X: 6.42560053, Y: -10.79285 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 701225236, PinID: 2136002862 },
                Target: { PinType: 3, SubChipID: 416159502, PinID: 0 },
                WirePoints: [
                    { X: 4.18296337, Y: -11.1356726 },
                    { X: 6.625807, Y: -11.1356583 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "RAM 8bit x8": {
        Name: "RAM 8bit x8",
        Colour: "#0DA137",
        displayID: 0,
        InputPins: [
            {
                Name: "D0",
                ID: 111291676,
                PositionY: 4.398148,
                ColourThemeName: "Red",
            },
            {
                Name: "D1",
                ID: 1273740431,
                PositionY: 3.851852,
                ColourThemeName: "Red",
            },
            {
                Name: "D2",
                ID: 623779886,
                PositionY: 3.30555558,
                ColourThemeName: "Red",
            },
            {
                Name: "D3",
                ID: 547431144,
                PositionY: 2.74999976,
                ColourThemeName: "Red",
            },
            {
                Name: "D4",
                ID: 887437200,
                PositionY: 2.185185,
                ColourThemeName: "Red",
            },
            {
                Name: "D5",
                ID: 381801836,
                PositionY: 1.62962973,
                ColourThemeName: "Red",
            },
            {
                Name: "D6",
                ID: 1584830005,
                PositionY: 1.06481493,
                ColourThemeName: "Red",
            },
            {
                Name: "D7",
                ID: 1090265190,
                PositionY: 0.5185187,
                ColourThemeName: "Red",
            },
            {
                Name: "ADR0",
                ID: 835305760,
                PositionY: -0.472222269,
                ColourThemeName: "Green",
            },
            {
                Name: "ADR1",
                ID: 626999079,
                PositionY: -1.01851845,
                ColourThemeName: "Green",
            },
            {
                Name: "ADR2",
                ID: 1181784448,
                PositionY: -1.574074,
                ColourThemeName: "Green",
            },
            {
                Name: "ENABLE",
                ID: 204363152,
                PositionY: -2.97222233,
                ColourThemeName: "Red",
            },
            {
                Name: "WRITE",
                ID: 672669116,
                PositionY: -3.51851845,
                ColourThemeName: "Blue",
            },
            {
                Name: "CLOCK",
                ID: 263344985,
                PositionY: -4.074074,
                ColourThemeName: "Yellow",
            },
        ],
        OutputPins: [
            {
                Name: "D0",
                ID: 1300230193,
                PositionY: 4.203704,
                ColourThemeName: "Red",
            },
            {
                Name: "D1",
                ID: 1083106291,
                PositionY: 3.6388886,
                ColourThemeName: "Red",
            },
            {
                Name: "D2",
                ID: 1367031792,
                PositionY: 3.05555582,
                ColourThemeName: "Red",
            },
            {
                Name: "D3",
                ID: 1280501752,
                PositionY: 2.5,
                ColourThemeName: "Red",
            },
            {
                Name: "D4",
                ID: 806422093,
                PositionY: 1.91666663,
                ColourThemeName: "Red",
            },
            {
                Name: "D5",
                ID: 948362212,
                PositionY: 1.32407427,
                ColourThemeName: "Red",
            },
            {
                Name: "D6",
                ID: 1695556290,
                PositionY: 0.7407409,
                ColourThemeName: "Red",
            },
            {
                Name: "D7",
                ID: 958899171,
                PositionY: 0.157407522,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "RAM 8bit x4",
                ID: 638400965,
                Points: [{ X: 4.23148155, Y: 2.09259272 }],
                Data: null,
            },
            {
                Name: "RAM 8bit x4",
                ID: 824090862,
                Points: [{ X: 4.240741, Y: -1.1944443 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 326310704,
                Points: [{ X: -3.703704, Y: -2.465278 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1800459482,
                Points: [{ X: -3.703704, Y: -3.090278 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1792234027,
                Points: [{ X: -3.69444442, Y: -1.23379612 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1725415070,
                Points: [{ X: -3.69444442, Y: -1.85879612 }],
                Data: null,
            },
            {
                Name: "NOT",
                ID: 946727339,
                Points: [{ X: -6.18518543, Y: -1.48148179 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 111291676 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 505148981 },
                WirePoints: [
                    { X: -7.837778, Y: 4.398148 },
                    { X: 3.6814816, Y: 3.53259277 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1273740431 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 322180082 },
                WirePoints: [
                    { X: -7.837778, Y: 3.851852 },
                    { X: 3.6814816, Y: 3.29259276 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 623779886 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 206544233 },
                WirePoints: [
                    { X: -7.837778, Y: 3.30555558 },
                    { X: 3.6814816, Y: 3.05259275 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 547431144 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 1584761349 },
                WirePoints: [
                    { X: -7.837778, Y: 2.74999976 },
                    { X: 3.6814816, Y: 2.81259274 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 887437200 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 1645789127 },
                WirePoints: [
                    { X: -7.837778, Y: 2.185185 },
                    { X: 3.6814816, Y: 2.57259274 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 381801836 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 2071952710 },
                WirePoints: [
                    { X: -7.837778, Y: 1.62962973 },
                    { X: 3.6814816, Y: 2.33259273 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1584830005 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 731075272 },
                WirePoints: [
                    { X: -7.837778, Y: 1.06481493 },
                    { X: 3.6814816, Y: 2.09259272 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1090265190 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 1454530826 },
                WirePoints: [
                    { X: -7.837778, Y: 0.5185187 },
                    { X: 3.6814816, Y: 1.85259271 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 111291676 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 505148981 },
                WirePoints: [
                    { X: -7.837778, Y: 4.398148 },
                    { X: 3.69074082, Y: 0.245555758 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1273740431 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 322180082 },
                WirePoints: [
                    { X: -7.837778, Y: 3.851852 },
                    { X: 3.69074082, Y: 0.005555749 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 623779886 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 206544233 },
                WirePoints: [
                    { X: -7.837778, Y: 3.30555558 },
                    { X: 3.69074082, Y: -0.234444261 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 547431144 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 1584761349 },
                WirePoints: [
                    { X: -7.837778, Y: 2.74999976 },
                    { X: 3.69074082, Y: -0.47444427 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 887437200 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 1645789127 },
                WirePoints: [
                    { X: -7.837778, Y: 2.185185 },
                    { X: 3.69074082, Y: -0.7144443 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 381801836 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 2071952710 },
                WirePoints: [
                    { X: -7.837778, Y: 1.62962973 },
                    { X: 3.69074082, Y: -0.9544443 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1584830005 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 731075272 },
                WirePoints: [
                    { X: -7.837778, Y: 1.06481493 },
                    { X: 3.69074082, Y: -1.1944443 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1090265190 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 1454530826 },
                WirePoints: [
                    { X: -7.837778, Y: 0.5185187 },
                    { X: 3.69074082, Y: -1.43444419 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 835305760 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 1150469024 },
                WirePoints: [
                    { X: -7.837778, Y: -0.472222269 },
                    { X: 3.69074082, Y: -1.67444444 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 626999079 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 1402181743 },
                WirePoints: [
                    { X: -7.837778, Y: -1.01851845 },
                    { X: 3.69074082, Y: -1.91444433 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 835305760 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 1150469024 },
                WirePoints: [
                    { X: -7.837778, Y: -0.472222269 },
                    { X: 3.6814816, Y: 1.6125927 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 626999079 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 1402181743 },
                WirePoints: [
                    { X: -7.837778, Y: -1.01851845 },
                    { X: 3.6814816, Y: 1.37259269 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1181784448 },
                Target: { PinType: 3, SubChipID: 326310704, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.574074 },
                    { X: -4.253704, Y: -2.345278 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1181784448 },
                Target: { PinType: 3, SubChipID: 1800459482, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.574074 },
                    { X: -4.253704, Y: -2.970278 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 204363152 },
                Target: { PinType: 3, SubChipID: 326310704, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -2.97222233 },
                    { X: -4.253704, Y: -2.5852778 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 672669116 },
                Target: { PinType: 3, SubChipID: 1800459482, PinID: 1 },
                WirePoints: [
                    { X: -7.837778, Y: -3.51851845 },
                    { X: -4.253704, Y: -3.2102778 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 1800459482, PinID: 2 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 1859317599 },
                WirePoints: [
                    { X: -3.15370417, Y: -3.090278 },
                    { X: 3.69074082, Y: -2.39444447 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 326310704, PinID: 2 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 1714478727 },
                WirePoints: [
                    { X: -3.15370417, Y: -2.465278 },
                    { X: 3.69074082, Y: -2.15444422 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 263344985 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 1077963413 },
                WirePoints: [
                    { X: -7.837778, Y: -4.074074 },
                    { X: 3.46296334, Y: -4.09259272 },
                    { X: 3.435185, Y: 0.6666666 },
                    { X: 3.6814816, Y: 0.652592659 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 263344985 },
                Target: { PinType: 3, SubChipID: 824090862, PinID: 1077963413 },
                WirePoints: [
                    { X: -7.837778, Y: -4.074074 },
                    { X: 3.46296334, Y: -4.09259272 },
                    { X: 3.454317, Y: -2.61121559 },
                    { X: 3.69074082, Y: -2.63444424 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1181784448 },
                Target: { PinType: 3, SubChipID: 946727339, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -1.574074 },
                    { X: -6.73518562, Y: -1.48148179 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 946727339, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1725415070, PinID: 1 },
                WirePoints: [
                    { X: -5.63518524, Y: -1.48148179 },
                    { X: -4.24444437, Y: -1.97879612 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 946727339, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1792234027, PinID: 1 },
                WirePoints: [
                    { X: -5.63518524, Y: -1.48148179 },
                    { X: -4.24444437, Y: -1.35379612 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 672669116 },
                Target: { PinType: 3, SubChipID: 1725415070, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -3.51851845 },
                    { X: -6.091178, Y: -3.368306 },
                    { X: -4.24444437, Y: -1.73879611 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 204363152 },
                Target: { PinType: 3, SubChipID: 1792234027, PinID: 0 },
                WirePoints: [
                    { X: -7.837778, Y: -2.97222233 },
                    { X: -6.03505754, Y: -2.77759671 },
                    { X: -4.24444437, Y: -1.11379611 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1792234027, PinID: 2 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 1714478727 },
                WirePoints: [
                    { X: -3.14444447, Y: -1.23379612 },
                    { X: 3.6814816, Y: 1.13259268 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1725415070, PinID: 2 },
                Target: { PinType: 3, SubChipID: 638400965, PinID: 1859317599 },
                WirePoints: [
                    { X: -3.14444447, Y: -1.85879612 },
                    { X: 3.6814816, Y: 0.892592669 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 638400965, PinID: 1556902714 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1300230193 },
                WirePoints: [
                    { X: 4.78148174, Y: 3.53259277 },
                    { X: 7.837778, Y: 4.203704 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 638400965, PinID: 1997878893 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1083106291 },
                WirePoints: [
                    { X: 4.78148174, Y: 3.12116432 },
                    { X: 7.837778, Y: 3.6388886 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 638400965, PinID: 975811377 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1367031792 },
                WirePoints: [
                    { X: 4.78148174, Y: 2.70973563 },
                    { X: 7.837778, Y: 3.05555582 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 638400965, PinID: 730746703 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1280501752 },
                WirePoints: [
                    { X: 4.78148174, Y: 2.298307 },
                    { X: 7.837778, Y: 2.5 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 638400965, PinID: 1659146462 },
                Target: { PinType: 2, SubChipID: 0, PinID: 806422093 },
                WirePoints: [
                    { X: 4.78148174, Y: 1.88687837 },
                    { X: 7.837778, Y: 1.91666663 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 638400965, PinID: 355688267 },
                Target: { PinType: 2, SubChipID: 0, PinID: 948362212 },
                WirePoints: [
                    { X: 4.78148174, Y: 1.4754498 },
                    { X: 7.837778, Y: 1.32407427 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 638400965, PinID: 29065826 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1695556290 },
                WirePoints: [
                    { X: 4.78148174, Y: 1.06402123 },
                    { X: 7.837778, Y: 0.7407409 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 638400965, PinID: 1971181939 },
                Target: { PinType: 2, SubChipID: 0, PinID: 958899171 },
                WirePoints: [
                    { X: 4.78148174, Y: 0.652592659 },
                    { X: 7.837778, Y: 0.157407522 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824090862, PinID: 1556902714 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1300230193 },
                WirePoints: [
                    { X: 4.790741, Y: 0.245555758 },
                    { X: 7.837778, Y: 4.203704 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824090862, PinID: 1997878893 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1083106291 },
                WirePoints: [
                    { X: 4.790741, Y: -0.165872812 },
                    { X: 7.837778, Y: 3.6388886 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824090862, PinID: 975811377 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1367031792 },
                WirePoints: [
                    { X: 4.790741, Y: -0.577301443 },
                    { X: 7.837778, Y: 3.05555582 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824090862, PinID: 730746703 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1280501752 },
                WirePoints: [
                    { X: 4.790741, Y: -0.98873 },
                    { X: 7.837778, Y: 2.5 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824090862, PinID: 1659146462 },
                Target: { PinType: 2, SubChipID: 0, PinID: 806422093 },
                WirePoints: [
                    { X: 4.790741, Y: -1.40015864 },
                    { X: 7.837778, Y: 1.91666663 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824090862, PinID: 355688267 },
                Target: { PinType: 2, SubChipID: 0, PinID: 948362212 },
                WirePoints: [
                    { X: 4.790741, Y: -1.81158721 },
                    { X: 7.837778, Y: 1.32407427 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824090862, PinID: 29065826 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1695556290 },
                WirePoints: [
                    { X: 4.790741, Y: -2.22301579 },
                    { X: 7.837778, Y: 0.7407409 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 824090862, PinID: 1971181939 },
                Target: { PinType: 2, SubChipID: 0, PinID: 958899171 },
                WirePoints: [
                    { X: 4.790741, Y: -2.63444424 },
                    { X: 7.837778, Y: 0.157407522 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "SR-LATCH": {
        Name: "SR-LATCH",
        Colour: "#71FF4C",
        displayID: 0,
        InputPins: [
            {
                Name: "SET",
                ID: 888280736,
                PositionY: 1.66666687,
                ColourThemeName: "Red",
            },
            {
                Name: "RESET",
                ID: 836603439,
                PositionY: 0.138888955,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "-Q",
                ID: 1208563366,
                PositionY: 1.111111,
                ColourThemeName: "Red",
            },
            {
                Name: "Q",
                ID: 468991679,
                PositionY: 1.74074054,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "NOR",
                ID: 1063643140,
                Points: [{ X: -0.898148239, Y: 1.81250048 }],
                Data: null,
            },
            {
                Name: "NOR",
                ID: 1527697041,
                Points: [{ X: -0.9814814, Y: 0.761574447 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 1063643140, PinID: 970550351 },
                Target: { PinType: 3, SubChipID: 1527697041, PinID: 602321611 },
                WirePoints: [
                    { X: -0.348148227, Y: 1.81250048 },
                    { X: 0.0185187683, Y: 1.80555582 },
                    { X: -0.259259015, Y: 1.3055557 },
                    { X: -1.694444, Y: 1.28703713 },
                    { X: -1.72222185, Y: 0.9722227 },
                    { X: -1.53148139, Y: 0.881574452 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1527697041, PinID: 970550351 },
                Target: { PinType: 3, SubChipID: 1063643140, PinID: 333544862 },
                WirePoints: [
                    { X: -0.431481361, Y: 0.761574447 },
                    { X: -0.111111008, Y: 0.9629631 },
                    { X: -0.101851888, Y: 1.20370388 },
                    { X: -1.54629612, Y: 1.16666675 },
                    { X: -1.759259, Y: 1.65740788 },
                    { X: -1.44814825, Y: 1.69250047 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1527697041, PinID: 970550351 },
                Target: { PinType: 2, SubChipID: 0, PinID: 468991679 },
                WirePoints: [
                    { X: -0.431481361, Y: 0.761574447 },
                    { X: 7.837778, Y: 1.74074054 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1063643140, PinID: 970550351 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1208563366 },
                WirePoints: [
                    { X: -0.348148227, Y: 1.81250048 },
                    { X: 7.837778, Y: 1.111111 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 888280736 },
                Target: { PinType: 3, SubChipID: 1063643140, PinID: 602321611 },
                WirePoints: [
                    { X: -7.837778, Y: 1.66666687 },
                    { X: -1.44814825, Y: 1.93250048 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 836603439 },
                Target: { PinType: 3, SubChipID: 1527697041, PinID: 333544862 },
                WirePoints: [
                    { X: -7.837778, Y: 0.138888955 },
                    { X: -1.53148139, Y: 0.641574442 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
    "timer 4b": {
        Name: "timer 4b",
        Colour: "#326B35",
        displayID: 0,
        InputPins: [
            {
                Name: "CLOCK",
                ID: 1022152081,
                PositionY: 1.12037063,
                ColourThemeName: "Yellow",
            },
            {
                Name: "J",
                ID: 84045896,
                PositionY: 1.98148119,
                ColourThemeName: "Green",
            },
            {
                Name: "K",
                ID: 20017733,
                PositionY: 0.379629731,
                ColourThemeName: "Red",
            },
            {
                Name: "CLR",
                ID: 1728110198,
                PositionY: -0.6759259,
                ColourThemeName: "Blue",
            },
        ],
        OutputPins: [
            {
                Name: "1",
                ID: 923483017,
                PositionY: 1.33333385,
                ColourThemeName: "Indigo",
            },
            {
                Name: "2",
                ID: 518298035,
                PositionY: 0.768518448,
                ColourThemeName: "Indigo",
            },
            {
                Name: "4",
                ID: 602873282,
                PositionY: 0.212963223,
                ColourThemeName: "Indigo",
            },
            {
                Name: "8",
                ID: 1940277741,
                PositionY: -0.361111164,
                ColourThemeName: "Indigo",
            },
        ],
        SubChips: [
            {
                Name: "JK TRIGGER",
                ID: 1046130954,
                Points: [{ X: -3.55555558, Y: 1.824166 }],
                Data: null,
            },
            {
                Name: "JK TRIGGER",
                ID: 1517897450,
                Points: [{ X: -0.666666567, Y: 1.82101858 }],
                Data: null,
            },
            {
                Name: "JK TRIGGER",
                ID: 2105521649,
                Points: [{ X: 2.120371, Y: 1.80861151 }],
                Data: null,
            },
            {
                Name: "JK TRIGGER",
                ID: 231939309,
                Points: [{ X: 4.7685194, Y: 1.81472254 }],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1823638777,
                Points: [
                    { X: 6.289019, Y: 1.19070268 },
                    { X: -4.39616728, Y: 1.07959187 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1350385703,
                Points: [
                    { X: 6.291098, Y: 0.9907135 },
                    { X: -4.39408827, Y: 0.8796027 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1240438159,
                Points: [
                    { X: 6.293177, Y: 0.790724337 },
                    { X: -4.3920083, Y: 0.679613531 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 325317731,
                Points: [
                    { X: 6.295257, Y: 0.590735137 },
                    { X: -4.38992929, Y: 0.479624331 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 368676708,
                Points: [
                    { X: 6.297337, Y: 0.390745938 },
                    { X: -4.38784933, Y: 0.279635131 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 1139140722,
                Points: [
                    { X: 6.299416, Y: 0.190756738 },
                    { X: -4.38576937, Y: 0.07964593 },
                ],
                Data: null,
            },
            {
                Name: "BUS",
                ID: 349988100,
                Points: [
                    { X: 6.301496, Y: -0.009232432 },
                    { X: -4.38369036, Y: -0.120343238 },
                ],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 4, SubChipID: 1823638777, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 923483017 },
                WirePoints: [{ X: 7.837778, Y: 1.33333385 }],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1350385703, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 518298035 },
                WirePoints: [{ X: 7.837778, Y: 0.768518448 }],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1240438159, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 602873282 },
                WirePoints: [{ X: 7.837778, Y: 0.212963223 }],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 325317731, PinID: 1 },
                Target: { PinType: 2, SubChipID: 0, PinID: 1940277741 },
                WirePoints: [{ X: 7.837778, Y: -0.361111164 }],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 231939309, PinID: 255925912 },
                Target: { PinType: 3, SubChipID: 325317731, PinID: 0 },
                WirePoints: [
                    { X: 5.5435195, Y: 2.17472267 },
                    { X: 5.97222233, Y: 2.185185 },
                    { X: 5.972758, Y: 0.5873816 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 2105521649, PinID: 255925912 },
                Target: { PinType: 3, SubChipID: 1240438159, PinID: 0 },
                WirePoints: [
                    { X: 2.895371, Y: 2.16861153 },
                    { X: 3.25000048, Y: 2.15740728 },
                    { X: 3.241033, Y: 0.758986354 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1517897450, PinID: 255925912 },
                Target: { PinType: 3, SubChipID: 1350385703, PinID: 0 },
                WirePoints: [
                    { X: 0.108333409, Y: 2.18101859 },
                    { X: 0.5092589, Y: 2.185185 },
                    { X: 0.509402752, Y: 0.93059206 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1046130954, PinID: 255925912 },
                Target: { PinType: 3, SubChipID: 1823638777, PinID: 0 },
                WirePoints: [
                    { X: -2.78055573, Y: 2.184166 },
                    { X: -2.43518519, Y: 2.175926 },
                    { X: -2.48059034, Y: 1.09951115 },
                ],
                ColourThemeName: "Indigo",
            },
            {
                Source: { PinType: 4, SubChipID: 1046130954, PinID: 409100475 },
                Target: {
                    PinType: 3,
                    SubChipID: 1517897450,
                    PinID: 1589320256,
                },
                WirePoints: [
                    { X: -2.78055573, Y: 1.464166 },
                    { X: -1.4416666, Y: 1.94101858 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 1517897450, PinID: 409100475 },
                Target: {
                    PinType: 3,
                    SubChipID: 2105521649,
                    PinID: 1589320256,
                },
                WirePoints: [
                    { X: 0.108333409, Y: 1.46101856 },
                    { X: 1.34537113, Y: 1.92861152 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 4, SubChipID: 2105521649, PinID: 409100475 },
                Target: { PinType: 3, SubChipID: 231939309, PinID: 1589320256 },
                WirePoints: [
                    { X: 2.895371, Y: 1.4486115 },
                    { X: 3.99351931, Y: 1.93472254 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1022152081 },
                Target: {
                    PinType: 3,
                    SubChipID: 1046130954,
                    PinID: 1589320256,
                },
                WirePoints: [
                    { X: -7.837778, Y: 1.12037063 },
                    { X: -4.33055544, Y: 1.94416606 },
                ],
                ColourThemeName: "Yellow",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 84045896 },
                Target: { PinType: 3, SubChipID: 368676708, PinID: 0 },
                WirePoints: [{ X: -7.837778, Y: 1.98148119 }],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 20017733 },
                Target: { PinType: 3, SubChipID: 1139140722, PinID: 0 },
                WirePoints: [{ X: -7.837778, Y: 0.379629731 }],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1728110198 },
                Target: { PinType: 3, SubChipID: 349988100, PinID: 0 },
                WirePoints: [{ X: -7.837778, Y: -0.6759259 }],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 349988100, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1046130954,
                    PinID: 1662832200,
                },
                WirePoints: [
                    { X: -4.194947, Y: -0.118380576 },
                    { X: -4.75000048, Y: -0.185185075 },
                    { X: -4.65740776, Y: 1.50925934 },
                    { X: -4.33055544, Y: 1.464166 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 368676708, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1046130954, PinID: 238097623 },
                WirePoints: [
                    { X: -4.259292, Y: 0.280971944 },
                    { X: -5.07407427, Y: 0.268518329 },
                    { X: -5.07407427, Y: 2.185185 },
                    { X: -4.33055544, Y: 2.184166 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1139140722, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1046130954,
                    PinID: 2092324150,
                },
                WirePoints: [
                    { X: -4.23155546, Y: 0.0812495351 },
                    { X: -4.93518543, Y: 0.0833332539 },
                    { X: -4.93518543, Y: 1.67592585 },
                    { X: -4.33055544, Y: 1.704166 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 368676708, PinID: 1 },
                Target: { PinType: 3, SubChipID: 1517897450, PinID: 238097623 },
                WirePoints: [
                    { X: -2.20328474, Y: 0.3023515 },
                    { X: -2.19444442, Y: 2.185185 },
                    { X: -1.4416666, Y: 2.18101859 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1139140722, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1517897450,
                    PinID: 2092324150,
                },
                WirePoints: [
                    { X: -2.064546, Y: 0.103783369 },
                    { X: -2.07407427, Y: 1.60185158 },
                    { X: -1.4416666, Y: 1.70101857 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 349988100, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 1517897450,
                    PinID: 1662832200,
                },
                WirePoints: [
                    { X: -1.796288, Y: -0.09343792 },
                    { X: -1.8425926, Y: 1.40740752 },
                    { X: -1.4416666, Y: 1.46101856 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 368676708, PinID: 1 },
                Target: { PinType: 3, SubChipID: 2105521649, PinID: 238097623 },
                WirePoints: [
                    { X: 0.713355064, Y: 0.332680434 },
                    { X: 0.722221851, Y: 2.15740728 },
                    { X: 1.34537113, Y: 2.16861153 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1139140722, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2105521649,
                    PinID: 2092324150,
                },
                WirePoints: [
                    { X: 0.87051487, Y: 0.134303853 },
                    { X: 0.861110747, Y: 1.62037015 },
                    { X: 1.34537113, Y: 1.68861151 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 349988100, PinID: 1 },
                Target: {
                    PinType: 3,
                    SubChipID: 2105521649,
                    PinID: 1662832200,
                },
                WirePoints: [
                    { X: 1.06432152, Y: -0.06369163 },
                    { X: 1.05555534, Y: 1.42592609 },
                    { X: 1.34537113, Y: 1.4486115 },
                ],
                ColourThemeName: "Blue",
            },
            {
                Source: { PinType: 4, SubChipID: 368676708, PinID: 1 },
                Target: { PinType: 3, SubChipID: 231939309, PinID: 238097623 },
                WirePoints: [
                    { X: 3.38879943, Y: 0.36050126 },
                    { X: 3.40740752, Y: 2.16666651 },
                    { X: 3.99351931, Y: 2.17472267 },
                ],
                ColourThemeName: "Green",
            },
            {
                Source: { PinType: 4, SubChipID: 1139140722, PinID: 1 },
                Target: { PinType: 3, SubChipID: 231939309, PinID: 2092324150 },
                WirePoints: [
                    { X: 3.5830884, Y: 0.162510768 },
                    { X: 3.57407379, Y: 1.62962973 },
                    { X: 3.99351931, Y: 1.69472253 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 349988100, PinID: 1 },
                Target: { PinType: 3, SubChipID: 231939309, PinID: 1662832200 },
                WirePoints: [
                    { X: 3.76859951, Y: -0.0355709679 },
                    { X: 3.75000024, Y: 1.44444466 },
                    { X: 3.99351931, Y: 1.45472252 },
                ],
                ColourThemeName: "Blue",
            },
        ],
    },
    XOR: {
        Name: "XOR",
        Colour: "#D4A5DB",
        InputPins: [
            {
                Name: "Pin",
                ID: 1654960180,
                PositionY: 0.87962985,
                ColourThemeName: "Red",
            },
            {
                Name: "Pin",
                ID: 996750,
                PositionY: 0.129629374,
                ColourThemeName: "Red",
            },
        ],
        OutputPins: [
            {
                Name: "Pin",
                ID: 2043966668,
                PositionY: 0.546296239,
                ColourThemeName: "Red",
            },
        ],
        SubChips: [
            {
                Name: "NAND",
                ID: 453710367,
                Points: [{ X: -4.453704, Y: 0.07407367 }],
                Data: null,
            },
            {
                Name: "OR",
                ID: 1300717562,
                Points: [{ X: -4.268518, Y: 0.6666666 }],
                Data: null,
            },
            {
                Name: "AND",
                ID: 1113501544,
                Points: [{ X: -1.37037015, Y: 0.481481552 }],
                Data: null,
            },
        ],
        Connections: [
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1654960180 },
                Target: { PinType: 3, SubChipID: 1300717562, PinID: 207650570 },
                WirePoints: [
                    { X: -7.837778, Y: 0.87962985 },
                    { X: -4.718518, Y: 0.786666632 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 996750 },
                Target: {
                    PinType: 3,
                    SubChipID: 1300717562,
                    PinID: 1969904689,
                },
                WirePoints: [
                    { X: -7.837778, Y: 0.129629374 },
                    { X: -4.718518, Y: 0.5466666 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 1654960180 },
                Target: { PinType: 3, SubChipID: 453710367, PinID: 260329442 },
                WirePoints: [
                    { X: -7.837778, Y: 0.87962985 },
                    { X: -5.98119926, Y: 0.824298263 },
                    { X: -5.098704, Y: 0.194073677 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 1, SubChipID: 0, PinID: 996750 },
                Target: { PinType: 3, SubChipID: 453710367, PinID: 895713554 },
                WirePoints: [
                    { X: -7.837778, Y: 0.129629374 },
                    { X: -6.16984034, Y: 0.352628469 },
                    { X: -5.098704, Y: -0.045926325 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: {
                    PinType: 4,
                    SubChipID: 1300717562,
                    PinID: 2097025545,
                },
                Target: { PinType: 3, SubChipID: 1113501544, PinID: 0 },
                WirePoints: [
                    { X: -3.818518, Y: 0.6666666 },
                    { X: -1.9203701, Y: 0.601481557 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 453710367, PinID: 2060701350 },
                Target: { PinType: 3, SubChipID: 1113501544, PinID: 1 },
                WirePoints: [
                    { X: -3.808704, Y: 0.07407367 },
                    { X: -1.9203701, Y: 0.361481547 },
                ],
                ColourThemeName: "Red",
            },
            {
                Source: { PinType: 4, SubChipID: 1113501544, PinID: 2 },
                Target: { PinType: 2, SubChipID: 0, PinID: 2043966668 },
                WirePoints: [
                    { X: -0.820370138, Y: 0.481481552 },
                    { X: 7.837778, Y: 0.546296239 },
                ],
                ColourThemeName: "Red",
            },
        ],
    },
};
