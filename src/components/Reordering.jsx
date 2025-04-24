"use client"

import * as motion from "motion/react-client"
import React, { useEffect, useState } from "react"

export default function Reordering() {
    const [order, setOrder] = useState(initialOrder)

    useEffect(() => {
        const interval = setInterval(() => {
            setOrder(prev => shuffle([...prev]))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <ul style={container}>
            {order.map((backgroundColor) => (
                <motion.li
                    key={backgroundColor}
                    layout
                    transition={spring}
                    style={{ ...item, backgroundColor }}
                />
            ))}
        </ul>
    )
}

const initialOrder = [
    "#ff0088",
    "#dd00ee",
    "#9911ff",
    "#0d63f8",
]

// Shuffle utility — copies before sorting to avoid mutating original
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5)
}

// Spring animation config
const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

// Container styles
const container = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 300,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

// Individual item styles
const item = {
    width: 100,
    height: 100,
    borderRadius: "10px",
}
