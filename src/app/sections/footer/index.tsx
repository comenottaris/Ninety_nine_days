"use client";

import * as Scrollytelling from "../../../lib/scrollytelling-client";

import confetti from "canvas-confetti";
import s from "./footer.module.scss";
import Link from "next/link";
import clsx from "clsx";
import { DottedDiv } from "../../components/dotted-container";
import { useMedia } from "../../../hooks/use-media";
import { toVw } from "../../../lib/utils";
import { useCallback, useEffect, useRef, useState } from "react";

const ghHref = "https://github.com/basementstudio/scrollytelling";

export const Footer = () => {
  return (
    <Scrollytelling.Root start="top 80%" debug={{ label: "Footer" }}>
      <footer className={s.footer}>
        <PreFooter />
        <div className={s.centeredText}>
        </div>
        <div className={s.links}>
          <div>
            <span>credit and rights</span>
          </div>
        </div>
      </footer>
    </Scrollytelling.Root>
  );
};

const PreFooter = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const triggerConfetti = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    confetti.create(canvas, {
      resize: true,
      useWorker: true,
    })({
      startVelocity: 20,
      particleCount: 140,
      spread: 2000,
      gravity: 0.6,
      origin: { y: 0.425 },
      colors: ["#ff4d00", "#ff5e00", "#ff8000", "#ffa200", "#b23500", "#d84000"],
    });
  }, []);

  return (
    <div className={s["pre-footer"]}>
      <canvas ref={canvasRef} className={s.confetti} />
      <Scrollytelling.Waypoint at={50} onCall={triggerConfetti} />
      <Scrollytelling.Waypoint
        at={75}
        tween={{
          target: ["body"],
          to: { background: "black", color: "white" },
          duration: 0.35,
        }}
      />
    </div>
  );
};
