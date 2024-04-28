"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2076],
  {
    43902: function (e, t, a) {
      a.r(t);
      var n = a(3827),
        r = a(78959),
        s = a(47082);
      a(64090);
      var l = a(60604),
        i = a(35202),
        d = a(85590),
        o = a(18118);
      (0, i.E)(d.vc, {
        onChange(e) {
          (0, o.B)(e);
        },
      }),
        d.vc.subscribe(
          (e) => {
            var t;
            let { connections: a, current: n } = e;
            return n
              ? null === (t = a.get(n)) || void 0 === t
                ? void 0
                : t.chainId
              : void 0;
          },
          (e) => {
            if (d.Gw.some((t) => t.id === e))
              return d.vc.setState((t) => ({
                ...t,
                chainId: null != e ? e : t.chainId,
              }));
          }
        ),
        (t.default = function (e) {
          let { children: t, locale: a } = e;
          return (0, n.jsx)(l.F, {
            config: d.vc,
            children: (0, n.jsx)(s.aH, {
              client: d.Eh,
              children: (0, n.jsx)(r.pj, { locale: a, children: t }),
            }),
          });
        });
    },
    85964: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return ew;
          },
        });
      var n = a(3827),
        r = a(95601),
        s = a.n(r),
        l = a(64090),
        i = a(20703),
        d = a(8792),
        o = {
          src: "/_next/static/media/gullnetwork_logo.fd31351e.png",
          height: 118,
          width: 117,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42iVOy07CQBS9ia70w3StP6PfYiJqWJgYrNgWiPVBhehGVy3RYIxPmlAfWAvTTju9xxk5q5Nz73mQgctYtGfVZlui62bo2oI3PIWF+THHshZ6jgT2vwUaUwUnBxzBl/cKS+RlvOdpofP5Ky/CYXX2HFVWWkidBEtwjTSZaQJ/MMQo9BHc9vEy/kAJoJ9xSjqKjyW4+fCK0K9j+2ALJ+8xggrcy1iZhztbAnacGBOSQqH+k5dW/l8xoFZarjYLwLm+wVvH5cejQ274VzCj21O1QgY7o6/1aBxPkijC0/kpgt3apCXUGhHRH1Q7zQ5/mKa8AAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        c = a(78959),
        u = a(23441),
        A = a(19524),
        f = a.n(A),
        m = a(17252),
        x = a(87710),
        h = a(21716),
        p = function () {
          let e = (0, x.Y)(),
            t = (0, h.b)(),
            a = f().find(e, (e) => {
              var a;
              return (
                void 0 !== e.icon &&
                e.name ==
                  (null === (a = t[0]) || void 0 === a
                    ? void 0
                    : a.connector.name)
              );
            });
          return a
            ? (0, n.jsx)("img", {
                src: a.icon,
                width: 24,
                height: 24,
                alt: a.name,
              })
            : (0, n.jsx)(m.Z, { width: 24, height: 24 });
        },
        g = a(22169),
        b = (e) => {
          let { width: t, height: a, src: r, className: s, ...l } = e;
          return (0, n.jsx)("img", {
            className: (0, g.cn)("rounded-full", s),
            src: r,
            style: { width: t, height: a },
            ...l,
          });
        };
      a(23663).Buffer;
      let N = (e) =>
        "/images/chain/".concat(
          e.name.replace(/\s/g, "-").toLowerCase(),
          ".svg"
        );
      var w = (e) => {
          let { width: t, height: a, chain: r, ...s } = e;
          a = a || t;
          let l = N(r);
          return r
            ? (0, n.jsx)(b, { src: l, width: t, height: a, ...s })
            : (0, n.jsx)("div", {
                className: "h-["
                  .concat(a, "px] w-[")
                  .concat(t, "px] rounded-full animate-pulse ")
                  .concat(null == s ? void 0 : s.className),
              });
        },
        E = a(575),
        v = a(12272),
        j = function () {
          let e =
              "flex item-center justify-center px-2.5 py-0 h-[36px] text-base min-h-[36px] font-medium",
            t = (0, v.Z)();
          return (0, n.jsx)(c.NL.Custom, {
            children: (a) => {
              let {
                  account: r,
                  openAccountModal: s,
                  openChainModal: l,
                  openConnectModal: i,
                  authenticationStatus: d,
                  mounted: o,
                  chain: c,
                } = a,
                A = o && "loading" !== d;
              return (0, n.jsx)("div", {
                ...(!A && {
                  "aria-hidden": !0,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                }),
                children: (0, n.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    t &&
                      (0, n.jsxs)("button", {
                        className: "gap-1.5",
                        onClick: l,
                        style: { display: "flex", alignItems: "center" },
                        type: "button",
                        children: [
                          (0, n.jsx)(w, { chain: t, width: 24 }),
                          (0, n.jsx)(u.Z, {}),
                        ],
                      }),
                    A && r && c && (!d || "authenticated" === d)
                      ? c.unsupported
                        ? (0, n.jsx)(E.z, {
                            className: (0, g.cn)(
                              e,
                              "!bg-red-500 text-white border-red-500"
                            ),
                            onClick: i,
                            children: "Wrong network",
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsxs)(E.z, {
                                className: (0, g.cn)(
                                  e,
                                  "hidden md:flex !bg-blue-300 border-blue-300 gap-2.5"
                                ),
                                onClick: s,
                                children: [(0, n.jsx)(p, {}), r.displayName],
                              }),
                              (0, n.jsx)("button", {
                                className: (0, g.cn)(
                                  e,
                                  "flex md:hidden items-center p-2"
                                ),
                                onClick: s,
                                children: (0, n.jsx)(p, {}),
                              }),
                            ],
                          })
                      : (0, n.jsxs)(E.z, {
                          className: (0, g.cn)(
                            e,
                            "relative !bg-black text-white"
                          ),
                          onClick: i,
                          children: [
                            (0, n.jsx)("span", {
                              className: "hidden md:block",
                              children: "Connect Wallet",
                            }),
                            (0, n.jsx)("span", {
                              className: "block md:hidden",
                              children: "Connect",
                            }),
                          ],
                        }),
                  ],
                }),
              });
            },
          });
        },
        k = a(10380),
        y = function () {
          let e = (e, t) =>
              !!(e.subItems && e.subItems.some((e) => e.active(e, t))),
            t = (e, t) => !!(e.href && t && t.startsWith(e.href));
          return (0, l.useMemo)(
            () => [
              {
                label: "Trade",
                active: e,
                subItems: [
                  { label: "Swap", active: t, href: (0, k.KE)() },
                  {
                    label: "Liquidity",
                    active: (e, t) =>
                      !!(
                        e.href &&
                        t &&
                        (t.startsWith(e.href) || t.startsWith((0, k.$K)()))
                      ),
                    href: (0, k.e1)(),
                  },
                ],
              },
              {
                label: "StockGame",
                active: e,
                subItems: [
                  {
                    label: "Stock Farm",
                    active: t,
                    target: "_blank",
                    href: "https://www.stocknetwork.com/farms",
                  },
                  {
                    label: "Profile",
                    active: t,
                    target: "_blank",
                    href: "https://www.stocknetwork.com/profile",
                  },
                ],
              },
            ],
            []
          );
        },
        I = a(47907),
        U = a(50080),
        T = a(57742);
      let C = l.forwardRef((e, t) => {
        let { className: a, children: r, ...s } = e;
        return (0, n.jsxs)(U.fC, {
          ref: t,
          className: (0, g.cn)(
            "relative z-10 flex max-w-max flex-1 items-center justify-center",
            a
          ),
          ...s,
          children: [r, (0, n.jsx)(_, {})],
        });
      });
      C.displayName = U.fC.displayName;
      let B = l.forwardRef((e, t) => {
        let { className: a, ...r } = e;
        return (0, n.jsx)(U.aV, {
          ref: t,
          className: (0, g.cn)(
            "group flex flex-1 list-none items-center justify-center space-x-1",
            a
          ),
          ...r,
        });
      });
      B.displayName = U.aV.displayName;
      let L = U.ck,
        D = (0, T.j)(
          "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
        );
      (l.forwardRef((e, t) => {
        let { className: a, children: r, ...s } = e;
        return (0, n.jsxs)(U.xz, {
          ref: t,
          className: (0, g.cn)(D(), "group", a),
          ...s,
          children: [
            r,
            " ",
            (0, n.jsx)(u.Z, {
              className:
                "relative top-[1px] ml-1 h-[1.2em] w-[1.2em] transition duration-200",
              "aria-hidden": "true",
            }),
          ],
        });
      }).displayName = U.xz.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, n.jsx)(U.VY, {
            ref: t,
            className: (0, g.cn)(
              "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
              a
            ),
            ...r,
          });
        }).displayName = U.VY.displayName);
      let S = U.rU,
        _ = l.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, n.jsx)("div", {
            className: (0, g.cn)(
              "absolute left-0 top-full flex justify-center"
            ),
            children: (0, n.jsx)(U.l_, {
              className: (0, g.cn)(
                "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
                a
              ),
              ref: t,
              ...r,
            }),
          });
        });
      (_.displayName = U.l_.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...r } = e;
          return (0, n.jsx)(U.z$, {
            ref: t,
            className: (0, g.cn)(
              "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
              a
            ),
            ...r,
            children: (0, n.jsx)("div", {
              className:
                "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
            }),
          });
        }).displayName = U.z$.displayName);
      var R = a(30307),
        M = a(57427);
      let O = M.fC,
        P = M.xz,
        W = l.forwardRef((e, t) => {
          let {
            className: a,
            align: r = "center",
            sideOffset: s = 4,
            ...l
          } = e;
          return (0, n.jsx)(M.h_, {
            children: (0, n.jsx)(M.VY, {
              ref: t,
              align: r,
              sideOffset: s,
              className: (0, g.cn)(
                "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                a
              ),
              ...l,
            }),
          });
        });
      W.displayName = M.VY.displayName;
      var F = function (e) {
        let { children: t, content: a, duration: r = 300, className: s } = e,
          [i, d] = (0, l.useState)(!1),
          [o, c] = (0, l.useState)(null);
        return (
          (0, R.KS)(() => d(!1), o),
          (0, n.jsxs)(O, {
            open: i,
            onOpenChange: d,
            children: [
              (0, n.jsx)(P, {
                className: "outline-none",
                onMouseEnter: () => {
                  c(null), d(!0);
                },
                onMouseLeave: () => c(r),
                children: t,
              }),
              (0, n.jsx)(W, {
                className: s,
                onMouseEnter: () => c(null),
                onMouseLeave: () => c(r),
                children: a,
              }),
            ],
          })
        );
      };
      function Q(e) {
        let { navItems: t } = e;
        return (0, n.jsx)(C, {
          children: (0, n.jsx)(B, {
            className: "flex-wrap",
            children: t.map((e) =>
              (0, n.jsx)(L, { children: (0, n.jsx)(Y, { item: e }) }, e.label)
            ),
          }),
        });
      }
      let z = l.forwardRef((e, t) => {
        let { className: a, item: r, active: s, children: l, ...i } = e,
          { href: o, label: c } = r;
        return (0, n.jsx)("li", {
          children: (0, n.jsx)(S, {
            asChild: !0,
            children: (0, n.jsxs)(d.default, {
              ref: t,
              target: r.target,
              href: r.comingSoon ? "#" : null != o ? o : "#",
              className: (0, g.cn)(
                "flex items-center gap-2 min-w-[152px] select-none space-y-1 rounded-md px-2 py-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:font-semibold",
                s && "bg-yellow-500 hover:bg-yellow-500 font-semibold",
                r.comingSoon &&
                  "!bg-transparent hover:font-normal cursor-default !text-muted-foreground"
              ),
              ...i,
              children: [
                (0, n.jsx)("div", {
                  className: "flex items-center",
                  children: r.label,
                }),
                r.comingSoon &&
                  (0, n.jsx)("div", {
                    className:
                      "bg-yellow-500 text-xs py-0.5 px-2 rounded-lg text-black",
                    children: "Coming soon",
                  }),
              ],
            }),
          }),
        });
      });
      function Y(e) {
        let { className: t, item: a } = e,
          { href: r, active: s, label: l } = a,
          i = (0, I.useRouter)(),
          d = (0, I.usePathname)(),
          o = "w-full !text-base font-normal flex justify-start px-6";
        return a.subItems
          ? (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)(F, {
                className: "w-max border-3 p-4 border-primary",
                content: (0, n.jsx)("ul", {
                  children: a.subItems.map((e) =>
                    (0, n.jsx)(z, { item: e, active: e.active(e, d) }, e.label)
                  ),
                }),
                children: (0, n.jsxs)(S, {
                  className: (0, g.cn)(
                    D(),
                    "w-full !text-base font-normal flex justify-start px-6",
                    o,
                    s(a, d) && "font-semibold"
                  ),
                  onClick: () => r && i.push(r),
                  children: [l, (0, n.jsx)(u.Z, { className: "ml-1" })],
                }),
              }),
            })
          : (0, n.jsx)(S, {
              className: (0, g.cn)(
                D(),
                "w-full !text-base font-normal flex justify-start px-6",
                o,
                s(a, d) && "font-semibold"
              ),
              onClick: () => r && i.push(r),
              children: l,
            });
      }
      var G = a(11348),
        V = a(37191),
        H = a(9230);
      function Z(e) {
        let { showConnectTwitterButton: t, isConnectWallet: a } = e,
          [r, s] = (0, l.useState)(!1),
          [i, d] = (0, l.useState)(""),
          o = y();
        return (
          (0, l.useEffect)(() => {
            let e = () => {
              s(!1);
            };
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, n.jsxs)(O, {
            open: r,
            defaultOpen: !1,
            onOpenChange: s,
            children: [
              (0, n.jsx)(P, {
                asChild: !0,
                children: (0, n.jsx)("button", {
                  className: "w-9 h-9 flex justify-center items-center",
                  children: (0, n.jsx)(H.Z, { strokeWidth: 2 }),
                }),
              }),
              (0, n.jsx)(W, {
                align: "start",
                className:
                  "w-[320px] p-0 bg-white rounded-lg border-2 border-black flex flex-col overflow-hidden",
                children: o.map((e, t) => {
                  let a = 0 === t;
                  if (e.comingSoon)
                    return (0, n.jsx)(
                      K,
                      {
                        label: e.label + " - Coming Soon",
                        className: (0, g.cn)(
                          a || "border-t-2 border-border-[#E2E2E2]"
                        ),
                      },
                      e.label
                    );
                  if (!e.subItems)
                    return (0, n.jsx)(
                      K,
                      {
                        label: e.label,
                        href: e.href,
                        className: (0, g.cn)(
                          a || "border-t-2 border-border-[#E2E2E2]"
                        ),
                      },
                      e.label
                    );
                  let r = i === e.label;
                  return (0, n.jsxs)(
                    l.Fragment,
                    {
                      children: [
                        (0, n.jsxs)("div", {
                          className: (0, g.cn)(
                            "select-none rounded-none",
                            a || "border-t-2 border-[#E2E2E2]",
                            "text-xl font-medium",
                            "w-full h-16 pl-6 hover:bg-sky-100 flex justify-start items-center gap-1"
                          ),
                          onClick: () => {
                            r ? d("") : d(e.label);
                          },
                          children: [
                            e.label,
                            (0, n.jsx)(u.Z, {
                              className: (0, g.cn)(
                                "h-6 transition-transform",
                                r && "rotate-180"
                              ),
                              strokeWidth: 3,
                            }),
                          ],
                        }),
                        (0, n.jsx)(G.M, {
                          initial: !1,
                          children:
                            r &&
                            (0, n.jsx)(V.E.div, {
                              className:
                                "flex flex-col border-t-2 border-[#E2E2E2]",
                              initial: "collapsed",
                              animate: "open",
                              exit: "collapsed",
                              variants: {
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                              },
                              transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.1 },
                                ease: "linear",
                              },
                              children: e.subItems.map((e) =>
                                (0, n.jsx)(
                                  K,
                                  {
                                    label: e.label,
                                    href: e.href,
                                    linkClassName: "pl-12",
                                  },
                                  e.href
                                )
                              ),
                            }),
                        }),
                      ],
                    },
                    e.label
                  );
                }),
              }),
            ],
          })
        );
      }
      function K(e) {
        let { href: t, label: a, className: r, linkClassName: s } = e;
        return (0, n.jsx)("div", {
          className: (0, g.cn)(
            "w-full h-16 hover:bg-sky-100 flex items-center select-none",
            r
          ),
          children: (0, n.jsx)(d.default, {
            className: (0, g.cn)(
              "pl-6 h-full w-full text-left flex items-center font-medium text-xl",
              s
            ),
            href: t || "#",
            onClick: (e) => {
              t || e.preventDefault();
            },
            children: a,
          }),
        });
      }
      let q = (e) => {
        let { item: t, active: a, onClick: r } = e;
        return (0, n.jsxs)("button", {
          className: (0, g.cn)(
            "relative flex-1 transition-all bg-background",
            a && "cursor-default"
          ),
          onClick: a ? void 0 : r,
          children: [
            (0, n.jsx)("span", {
              className: (0, g.cn)(
                "px-4 w-full text-secondary",
                a && "font-semibold text-primary"
              ),
              children: t.label,
            }),
            (0, n.jsx)("div", {
              className: (0, g.cn)(
                "absolute bottom-0 h-[4px] flex w-full bg-blue-500 opacity-0",
                a && "opacity-100"
              ),
            }),
          ],
        });
      };
      var X = function () {
          let e = y(),
            t = (0, I.useRouter)(),
            a = (0, I.usePathname)(),
            r = (0, l.useMemo)(
              () => f().find(e, (e) => e.active(e, a)),
              [e, a]
            );
          return r && r.subItems
            ? (0, n.jsx)("div", {
                className:
                  "md:hidden border-t-2 border-gray-300 flex z-40 h-[46px]",
                children: r.subItems.map((e) =>
                  (0, n.jsx)(
                    q,
                    {
                      item: e,
                      active: e.active(e, a),
                      onClick: () => e.href && t.push(e.href),
                    },
                    e.href
                  )
                ),
              })
            : (0, n.jsx)(n.Fragment, {});
        },
        J = a(32653),
        $ = a(39296),
        ee = a(76675),
        et = a(99279),
        ea = a(22850),
        en = a(96043),
        er = a(32360),
        es = a(98065),
        el = a(64856),
        ei = a(94741);
      function ed() {
        let e = (0, $.m)(),
          t = (0, ee.x)(),
          { openConnectModal: a } = (0, c.We)(),
          r = (0, et.t)(),
          s = (0, ea.p)(),
          { switchChainAsync: i } = (0, en.o)(),
          { addToast: d } = (0, er.Z)(),
          { addTransaction: o } = (0, el.nB)(),
          [u, A] = (0, l.useState)(!1),
          f = async () => {
            if (!e.isConnected || !e.address) {
              null == a || a();
              return;
            }
            if (r && s.data) {
              t !== J.h.id && (await i({ chainId: J.h.id })), A(!0);
              try {
                let t = {
                    address: "0x15dd5CdDcBCf5e9c47e99FbdF0101cd4d7A17f3f",
                    abi: [
                      {
                        inputs: [],
                        name: "requestTokens",
                        outputs: [],
                        stateMutability: "nonpayable",
                        type: "function",
                      },
                    ],
                    functionName: "requestTokens",
                    account: e.address,
                  },
                  a = await r.estimateContractGas(t),
                  { request: n } = await r.simulateContract({
                    ...t,
                    gas: (0, es.y)(a),
                  }),
                  l = await s.data.writeContract(n);
                o({
                  id: l,
                  type: ei.iU.TX,
                  summary: "Request fUSDT faucet",
                  action: ei.Q6.REQUEST_FAUCET,
                }),
                  await r.waitForTransactionReceipt({ hash: l });
              } catch (e) {
                if (
                  "TransactionExecutionError" === e.name &&
                  "UserRejectedRequestError" === e.cause.name
                )
                  return;
                d({
                  type: "error",
                  title: "Error",
                  description:
                    "You can only request faucet every 10 minutes. Please wait...",
                });
              }
              A(!1);
            }
          };
        return (0, n.jsx)("button", {
          disabled: e.isConnecting || e.isReconnecting || u,
          onClick: f,
          className:
            "transition-colors text-yellow-500 font-semibold disabled:text-yellow-500/60",
          children: "Get test token fUSD",
        });
      }
      var eo = () => {
          let e = y();
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsxs)("header", {
                className:
                  "font-sans sticky top-0 w-full min-h-[52px] flex items-center justify-between px-2 pl-4 bg-white z-40",
                children: [
                  (0, n.jsxs)("div", {
                    className: "h-full flex items-center gap-4",
                    children: [
                      (0, n.jsxs)(d.default, {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                          (0, n.jsx)("img", {
                            width: "22",
                            height: "22",
                            src: "/_next/images/big_seagull_icon.b1544418.png",
                            alt: "StockNetwork",
                          }),
                          (0, n.jsx)("span", {
                            className: "font-medium text-[20px]",
                            children: "StockNetwork",
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "h-full hidden md:flex items-center gap-2",
                        children: (0, n.jsx)(Q, { navItems: e }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "ml-auto mr-4 block md:hidden",
                    children: (0, n.jsx)(Z, {}),
                  }),
                  (0, n.jsx)(j, {}),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "sticky top-[52px] z-40",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "bg-black text-white h-[36px] flex items-center justify-center",
                    children: [
                      (0, n.jsx)("span", {
                        className: "hidden md:inline-block mr-1",
                        children: "Testnet Live!",
                      }),
                      (0, n.jsxs)("span", {
                        children: [
                          (0, n.jsx)(d.default, {
                            href: "https://pacific-info.sepolia-testnet.manta.network/",
                            target: "_blank",
                            children: (0, n.jsx)("span", {
                              className: "text-yellow-500 font-semibold",
                              children: "Request Faucet Funds",
                            }),
                          }),
                          " ",
                          "or ",
                          (0, n.jsx)(ed, {}),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(X, {}),
                ],
              }),
            ],
          });
        },
        ec = {
          src: "/_next/static/media/left_background_corals.adb480de.png",
          height: 850,
          width: 962,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAaVBMVEUBdpkAdpgBdZkBdZgAdZgBdpkBdpgBdpkAdZgBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkAdZgBdpkBdpkAdpkAdZgBdpkAdpkAdpgAdZkAdZjpeIXNAAAAHnRSTlMAAAAAAAEBAgIDCBQXJilWcYaHpa3H8Pb7+/3+/v540ow0AAAAPUlEQVR42gVAhRHAIAx8GuruQiHw+w/JYR4sqsIYPNc5oRYBya3rUUI/3vuIFuTvedgGjHRvWAWqKTqGJQNpdgQoDwYDmAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 7,
        },
        eu = {
          src: "/_next/static/media/left_cloud.64eb1c6a.png",
          height: 1651,
          width: 1449,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAz0lEQVR42mMAgWtPfjNfe/Y/5uaLf+4g/o0X/xnBEl///4/4/P//1S///8iC+A/f/WXff+4LRPLO86+f7r389v/977+///z/r82ADM7c+Oxw8c6XDfdffb/59MPPh6++/XZcsvWT4NVHP9jgiiYs+cSx68gb4Reff8o/+fjXACz44vOv65/+/XOCKXr+6Xf643c/Dr35/keN4cbjLy3PP/1qePDmp8SF+3+4ZnduY5ww+QY7UAEv3Njbz79zXHn8l//mi/9a99//52FgYGAAAJj+eGtyFUMcAAAAAElFTkSuQmCC",
          blurWidth: 7,
          blurHeight: 8,
        },
        eA = {
          src: "/_next/static/media/left_corals.ea6e36ec.png",
          height: 1470,
          width: 1233,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAyklEQVR42mOYudq+lAEZ1B9kKiidwQxmt8+Z+zuzcUEriL0/014Zpia/dA4TQ/nk7f+ru1b+L5+w4Xb3hOUfi1uWnEoomxMGVrGzpO7//pb6v4nNS/5Hly/9H5Ex/XBwymRzsGR/S/PtygXT/k8pbni/wr16HcxYv5SZTAwMfXO/C69Z+ycmp+t/q3fBFrCM5zwWML3Gt/J/bXzjf4X4zv/xIRX/q4PSs0HideE5LAzHFFP/LrfL/6YdWLtAxa26kMGmTA+sy66KCQDm1VMjFGHvewAAAABJRU5ErkJggg==",
          blurWidth: 7,
          blurHeight: 8,
        },
        ef = {
          src: "/_next/static/media/right_background_corals.a36351fe.png",
          height: 887,
          width: 741,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAbFBMVEUBd5kBdpkAdZkAdZgAdJgBdpkAdZkAdZkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkBdpkAdpkAdpgAdpkBdZkAdpkBdZgAdpgAdpkAdpgAdpkBdZkBdZgAdZkAdZhc20L2AAAAH3RSTlMAAAAAAAMDBAYTJS01RLzT1Nbb7Pf6+vr7+/z8/f7+e5DWwAAAAEFJREFUeNoNxccBgCAQBMBdMWLOkRO5/nuU+QxIZGxGpCZn1QWYIrG9HijZTno70C66fQ71rOsbH8LpfXx/RESuH2JWBCfr4OicAAAAAElFTkSuQmCC",
          blurWidth: 7,
          blurHeight: 8,
        },
        em = {
          src: "/_next/static/media/right_cloud.846fcf67.png",
          height: 1499,
          width: 1164,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAYAAADaxo44AAAAvElEQVR42mO4+viv7fl7vy6s3P1V4vf//1bvfv1tZmCYysxw8f4vlbV73ksyAAFQcPODV9//X73/+RUDDHz8+6/hzrOv/y/d+fgUKLGb4fazrwrPPv7MfvT2R9/Z6x/8GRjWMzOAwP1X31hhuv7//8/z4ssfh/tvfouBBe48/yYJ1GF179VPhycffukBTWQESxw7+xysfcaW/8zn7v6xvvH8HzcDkAi4+eK/KAMQXLj/S+zs7Z8Gd9/8ZwEAyatuWDIt7sEAAAAASUVORK5CYII=",
          blurWidth: 6,
          blurHeight: 8,
        },
        ex = {
          src: "/_next/static/media/right_corals.9d2ff5bc.png",
          height: 1061,
          width: 1368,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAeUlEQVR42mNABztyS1hA9Lrs4oY5tVMvYigIrlnIDKJj82akxpbMe4giGTRtBiOM3XSKQTpxkeFUuKRDdxdY0r2vU0Fn4swM7/zaVQGlVe/gChwzGyC6Gzt5U1MaXweFNP23DGz9z4ABYvpNZiqHWKQbxzqqulc2AABJxya1pNawEQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 6,
        },
        eh = {
          src: "/_next/static/media/sea_left.e6dd30e7.png",
          height: 165,
          width: 467,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AYuPlusBAQEK/Pz70QMDAyH39/W46unfm5SRl8lUVlEcAY6RqNwAAQH+AP//BwICAwLv7/Ac/v74AP38AXQEBBUEAZGM/wcBAwAC898A+hYt7h/7/elO+/v32v7++sFxbzn1USYyPM6VwqAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 3,
        },
        ep = {
          src: "/_next/static/media/sea_right.5fa80668.png",
          height: 1046,
          width: 885,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA10lEQVR42mPonDqLiQEI2iZO12rsnmIJYndMmg0WYzgyZwkziN4/fWHk1onz8kDs5VMXcvRPBoo/X7qSBSTwavnq5AcLVpQyIIP/uzaCjXgwcWrBpa7JvQz5rqwTJsyq6eyZtYwhJ62Ru6hmkklny4TLjTU9b2qbp7+qbZz2v7xqyn+G7LxOoaaWFZ5t3Wu217XM+F/TMPl/S8eU/21dQEkY6Gw7LtLRtSWjsXn5sqbWZU+aWle9ZahrWMVYUj6Bed3GR8w3bvxnW77yrdL8hU+s5i98EAsAJRFgWsSth2AAAAAASUVORK5CYII=",
          blurWidth: 7,
          blurHeight: 8,
        },
        eg = {
          src: "/_next/static/media/sea_top.083160d3.png",
          height: 329,
          width: 1029,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAWklEQVR42hWKSQqAMBAEuyeOy0F8gT/yx578jR6UIIKHJBPHoqEpKMLZzhtXTOw0SAVYCQNgy7yD6xFDBfm82YZeRCnwSYHlP2o6dQvkOLVwciolVGMZqf7QD0Y9H7Hfe2HWAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 3,
        },
        eb = function () {
          return (0, n.jsx)("div", {
            className:
              "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/50 to-red-500/50 flex flex-col overflow-hidden",
            children: (0, n.jsxs)("div", {
              className: "relative flex flex-col min-h-[4000px] h-full",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "relative h-[calc(100vh_-_140px)] bg-gradient-to-b from-[#86bce8] to-[#b9dbf6] overflow-hidden",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute bottom-[300px] w-full flex justify-center items-center",
                      children: (0, n.jsxs)("div", {
                        className:
                          "flex w-screen justify-between min-w-[1080px]",
                        children: [
                          (0, n.jsx)(i.default, {
                            src: eu,
                            alt: "Cloud",
                            className: "relative left-0 w-[45vw] min-w-[620px]",
                          }),
                          (0, n.jsx)(i.default, {
                            src: em,
                            alt: "Cloud",
                            className:
                              "relative right-0 w-[45vw] min-w-[620px]",
                          }),
                        ],
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute bottom-[-70%] w-full flex justify-center items-center",
                      children: (0, n.jsx)("div", {
                        className:
                          "bg-[radial-gradient(closest-side,_#dbeefd,_transparent)] w-[80%] aspect-square",
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "relative h-[520px] bg-[linear-gradient(180deg,_#6aaedf,_#8be1e2_30%,_#d0f6f9)]",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "absolute flex top-0 w-full justify-between",
                      children: [
                        (0, n.jsx)(i.default, {
                          className:
                            "relative w-[120px] md:w-[247px] -top-[20px] md:-top-[38px] h-max",
                          src: eh,
                          alt: "Stone",
                        }),
                        (0, n.jsx)(i.default, {
                          className:
                            "relative w-[220px] md:w-[422px] -top-[150px] md:-top-[314px] h-max",
                          src: ep,
                          alt: "Lighthouse",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "absolute flex top-0 w-full justify-center",
                      children: (0, n.jsx)(i.default, { src: eg, alt: "Wave" }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className:
                    "flex-1 min-h-[600px] bg-gradient-to-b from-[#79c3e0] to-[#3a9ac0]",
                }),
                (0, n.jsxs)("div", {
                  className:
                    "absolute h-[400px] w-full z-[2] bottom-0 left-0\\",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "seafloor z-[2] absolute bottom-0 left-0 w-screen h-[200px] lg:h-[300px] bg-repeat-x bg-cover",
                      style: {
                        background: "url(".concat(
                          "/_next/static/media/seafloor.bae78923.png",
                          ")"
                        ),
                        backgroundSize: "100% 100%",
                      },
                    }),
                    (0, n.jsx)(i.default, {
                      src: ec,
                      alt: "corals",
                      className:
                        "z-[1] w-[360px] lg:w-[640px] h-auto absolute bottom-0 left-0",
                    }),
                    (0, n.jsx)(i.default, {
                      src: ef,
                      alt: "corals",
                      className:
                        "z-[1] w-[240px] lg:w-[640px] h-auto absolute bottom-0 right-0",
                    }),
                    (0, n.jsx)(i.default, {
                      src: eA,
                      alt: "corals",
                      className:
                        "z-[4] w-[220px] lg:w-[520px] h-auto absolute -bottom-[60px] left-0",
                    }),
                    (0, n.jsx)(i.default, {
                      src: ex,
                      alt: "corals",
                      className:
                        "z-[4] w-[220px] lg:w-[540px] h-auto absolute -bottom-[60px] right-0",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        eN = a(5324),
        ew = function (e) {
          let { children: t } = e;
          return (
            (0, eN.TQ)(),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)(s(), {
                  children: [
                    (0, n.jsx)("link", {
                      rel: "icon",
                      href: "/favicon.ico",
                      type: "image/x-icon",
                    }),
                    (0, n.jsx)("title", { children: "StockNetwork" }),
                    (0, n.jsx)("meta", {
                      name: "description",
                      content:
                        "Instantly buy or sell tokens at superior prices",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: (0, g.cn)(
                    "relative min-h-screen max-w-[100vw] flex flex-col",
                    "font-sans"
                  ),
                  children: [
                    (0, n.jsx)(eb, {}),
                    (0, n.jsx)(eo, {}),
                    (0, n.jsx)("main", {
                      className: "flex flex-1 flex-col items-center z-20",
                      children: t,
                    }),
                    (0, n.jsx)("footer", {
                      className: "py-5 mt-auto z-20",
                      children: (0, n.jsxs)("div", {
                        className: "text-xs font-bold text-center",
                        children: [
                          "\xa9 ",
                          new Date().getFullYear(),
                          " StockNetwork. All rights reserved.",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    28194: function (e, t, a) {
      a.d(t, {
        IP: function () {
          return d;
        },
        NB: function () {
          return c;
        },
        lM: function () {
          return i;
        },
        xu: function () {
          return o;
        },
      });
      var n = a(20713),
        r = a(66571),
        s = a(3676);
      let l = {
          [n.a_.MANTA_SEPOLIA]: {
            fUSD: new n.WU(
              3441006,
              "0x205c3E32cd4Fe95ba6Cac86aDae1b3702844d8f3",
              18,
              "fUSD",
              "fake USD",
              "/images/token/fUSD.png"
            ),
            CRAB: new n.WU(
              3441006,
              "0xc15D625e835Fd10B7c8C43e48F3Dc1d7cF8C92df",
              18,
              "CRAB",
              "Crab",
              "/images/token/CRAB.png"
            ),
            fGULL: new n.WU(
              3441006,
              "0xab5Bff303312E24dc77bB71a451343f9fEB20093",
              18,
              "fGULL",
              "fake Gull",
              "/images/token/fGULL.png"
            ),
            HBG: new n.WU(
              3441006,
              "0x617f1536daFd893994b9f51381F78875c86D2e95",
              18,
              "HBG",
              "Hey Baby Gull",
              "/images/token/HBG.png"
            ),
            MOBULA: new n.WU(
              3441006,
              "0xa283dFCC54117a06e6c30838E89AF8173ae68737",
              18,
              "MOBULA",
              "Mobula",
              "/images/token/MOBULA.png"
            ),
          },
          [n.a_.MAINNET]: {
            DAI: new n.WU(
              n.a_.MAINNET,
              "0x6B175474E89094C44Da98b954EedeAC495271d0F",
              18,
              "DAI",
              "Dai Stablecoin"
            ),
            USDC: new n.WU(
              n.a_.MAINNET,
              "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
              6,
              "USDC",
              "USD//C"
            ),
            USDT: new n.WU(
              n.a_.MAINNET,
              "0xdAC17F958D2ee523a2206206994597C13D831ec7",
              6,
              "USDT",
              "Tether USD"
            ),
            COM: new n.WU(
              n.a_.MAINNET,
              "0xc00e94Cb662C3520282E6f5717214004A7f26888",
              18,
              "COMP",
              "Compound"
            ),
            MKR: new n.WU(
              n.a_.MAINNET,
              "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
              18,
              "MKR",
              "Maker"
            ),
            AMP: new n.WU(
              n.a_.MAINNET,
              "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
              9,
              "AMPL",
              "Ampleforth"
            ),
            TOKEN_A: new n.WU(
              n.a_.MAINNET,
              "0xc38dd2f0A06201653957Ea95DCb411665e40d9Fd",
              18,
              "TOKENA",
              "Token A"
            ),
            TOKEN_B: new n.WU(
              n.a_.MAINNET,
              "0x75bE878A8e9B2Cf2461CBCdaA765d09f8A45a0EE",
              18,
              "TOKENB",
              "Token B"
            ),
          },
        },
        i = {
          [n.a_.MANTA_SEPOLIA]: [
            n.DX[n.a_.MANTA_SEPOLIA],
            ...Object.values(l[n.a_.MANTA_SEPOLIA]),
          ],
          [n.a_.MAINNET]: [
            n.DX[n.a_.MAINNET],
            l[n.a_.MAINNET].USDT,
            l[n.a_.MAINNET].USDC,
            l[n.a_.MAINNET].DAI,
          ],
        },
        d = { [n.a_.MANTA_SEPOLIA]: {} };
      n.a_.MANTA_SEPOLIA,
        [n.DX[n.a_.MANTA_SEPOLIA], ...Object.values(l[n.a_.MANTA_SEPOLIA])],
        n.a_.MAINNET,
        n.DX[n.a_.MAINNET],
        l[n.a_.MAINNET].USDT,
        l[n.a_.MAINNET].USDC,
        l[n.a_.MAINNET].DAI;
      let o = {
          [n.a_.MANTA_SEPOLIA]: [
            n.DX[n.a_.MANTA_SEPOLIA],
            ...Object.values(l[n.a_.MANTA_SEPOLIA]),
          ],
          [n.a_.MAINNET]: [
            n.DX[n.a_.MAINNET],
            l[n.a_.MAINNET].USDT,
            l[n.a_.MAINNET].USDC,
            l[n.a_.MAINNET].DAI,
            l[n.a_.MAINNET].TOKEN_A,
            l[n.a_.MAINNET].TOKEN_B,
          ],
        },
        c = {
          [n.a_.MAINNET]: {
            [s.g.INPUT]: (0, r.g)(n.a_.MAINNET),
            [s.g.OUTPUT]: void 0,
          },
          [n.a_.MANTA_SEPOLIA]: {
            [s.g.INPUT]: l[n.a_.MANTA_SEPOLIA].fUSD,
            [s.g.OUTPUT]: void 0,
          },
        };
    },
    12272: function (e, t, a) {
      var n = a(19524),
        r = a.n(n),
        s = a(64090),
        l = a(44567),
        i = a(76675);
      t.Z = function () {
        let e = (0, l.C)(),
          t = (0, i.x)();
        return (0, s.useMemo)(() => r().find(e, { id: t }), [e, t]);
      };
    },
    20253: function (e, t, a) {
      a.d(t, {
        x: function () {
          return s;
        },
      });
      var n = a(40204),
        r = a(85590);
      let s = () => (0, n.D)(r.vc);
    },
    98065: function (e, t, a) {
      a.d(t, {
        y: function () {
          return n;
        },
      });
      function n(e) {
        return (e * BigInt(1200)) / BigInt(1e3);
      }
    },
    10380: function (e, t, a) {
      a.d(t, {
        $K: function () {
          return i;
        },
        KE: function () {
          return n;
        },
        e1: function () {
          return r;
        },
        q2: function () {
          return s;
        },
        vB: function () {
          return l;
        },
      });
      let n = () => "/swap",
        r = () => "/liquidity",
        s = (e, t) =>
          e && "undefined" !== e
            ? t && "undefined" !== t
              ? "/liquidity/add/".concat(e, "/").concat(t)
              : "/liquidity/add/".concat(e)
            : "/liquidity/add",
        l = (e, t) => "/liquidity/remove/".concat(e, "/").concat(t),
        i = () => "/liquidity/import";
    },
    18118: function (e, t, a) {
      a.d(t, {
        B: function () {
          return u;
        },
        g: function () {
          return c;
        },
      });
      var n = a(2115),
        r = a(22020),
        s = a(88808),
        l = a(72027),
        i = a(28194),
        d = a(27580),
        o = a(3676);
      let c = (0, r.Ue)()(
          (0, s.n)((e) => ({
            currencyIn: i.NB[(0, d.B)()][o.g.INPUT],
            currencyOut: i.NB[(0, d.B)()][o.g.OUTPUT],
            typeValue: "1.00",
            slippage: l.eL,
            showApprovalFlow: !1,
            setCurrencyIn: (t) =>
              e((e) => {
                e.currencyIn = t;
              }),
            setCurrencyOut: (t) =>
              e((e) => {
                e.currencyOut = t;
              }),
            flipCurrencies: (t) =>
              e((e) => {
                let a = e.currencyIn;
                (e.currencyIn = e.currencyOut),
                  (e.currencyOut = a),
                  t && (e.typeValue = t);
              }),
            setTypedValue: (t) =>
              e((e) => {
                e.typeValue = t;
              }),
            setSlippage: (t) =>
              e((e) => {
                e.slippage = t;
              }),
          }))
        ),
        u = (e) => {
          c.setState((t) =>
            (0, n.Uy)(t, (t) => {
              (t.currencyIn = i.NB[e][o.g.INPUT]),
                (t.currencyOut = i.NB[e][o.g.OUTPUT]);
            })
          );
        };
    },
    65323: function (e, t, a) {
      a.d(t, {
        NY: function () {
          return l;
        },
        P0: function () {
          return r;
        },
        hs: function () {
          return s;
        },
      });
      var n = a(85590);
      let r = 6048e5,
        s = 10,
        l = n.FQ.reduce((e, t) => ((e[t] = {}), e), {});
    },
    64856: function (e, t, a) {
      a.d(t, {
        nB: function () {
          return r;
        },
      });
      var n = a(79949);
      function r() {
        let e = (0, n.Y)((e) => e.addTransaction);
        return {
          addTransaction: e,
          clearAllTransactions: (0, n.Y)((e) => e.clearAllTransactions),
          finalizeTransaction: (0, n.Y)((e) => e.finalizeTransaction),
          updateTransaction: (0, n.Y)((e) => e.updateTransaction),
        };
      }
      a(60953);
    },
    79949: function (e, t, a) {
      a.d(t, {
        Y: function () {
          return m;
        },
      });
      var n = a(2115),
        r = a(73957),
        s = a.n(r),
        l = a(22020),
        i = a(20253),
        d = a(27580),
        o = a(27937),
        c = a(69424),
        u = a(94741),
        A = a(65323),
        f = a(60953);
      let m = (0, l.Ue)()((e, t) => ({
        transactionState: A.NY,
        clearAllTransactions: () =>
          e((e) =>
            (0, n.Uy)(e, (e) => {
              e.transactionState = A.NY;
            })
          ),
        addTransaction: (t) =>
          e((e) =>
            (0, n.Uy)(e, (e) => {
              let a = (0, f.f1)(e),
                n = x(t.id, t.type),
                r = (0, d.B)(),
                s = (0, i.x)();
              if (a[n])
                throw Error(
                  "The transaction ".concat(t.id, " already exists.")
                );
              if (!s.address) throw Error("Cannot find the current account");
              let l = {
                ...t,
                from: s.address,
                addedTime: Date.now(),
                status: u.LN.PENDING,
              };
              a[n] = l;
              let o = Object.entries(a)
                .sort((e, t) => {
                  let [, a] = e,
                    [, n] = t;
                  return n.addedTime - a.addedTime;
                })
                .filter((e, t) => t < A.hs);
              (e.transactionState[r] = Object.fromEntries(o)), b(l);
            })
          ),
        updateTransaction: (t, a, r) => {
          let l = !1;
          return (
            e((e) =>
              (0, n.Uy)(e, (e) => {
                let n = (0, f.f1)(e),
                  i = x(t, a),
                  d = n[i];
                null !== d &&
                  (r.id
                    ? ((n[x(r.id, a)] = s()({}, d, r, { originalId: t })),
                      delete n[i])
                    : (n[i] = s()({}, d, r)),
                  (l = !0));
              })
            ),
            l
          );
        },
        finalizeTransaction: (e, a, n) => {
          var r, s;
          if (!n) return !1;
          let l = h(t(), e, a);
          if (!l) return !1;
          let i = { finalizedTime: Date.now() };
          if (
            (a === u.iU.TX &&
              ((i.receipt = {
                blockHash: n.blockHash,
                blockNumber: n.blockNumber,
                contractAddress: n.contractAddress,
                from: n.from,
                status: n.status,
                to: n.to,
                transactionHash: n.transactionHash,
                transactionIndex: n.transactionIndex,
              }),
              l.replacementReason === u.ob.TX_CANCEL
                ? (i.status = u.LN.CANCELLED)
                : (i.status =
                    (null == n ? void 0 : n.status) === "success"
                      ? u.LN.FULFILLED
                      : u.LN.FAILED)),
            t().updateTransaction(e, a, i))
          ) {
            let n = h(t(), e, a);
            if (!n)
              throw Error("The transaction updated just now cannot be found");
            return (
              b(n),
              n.status === u.LN.FULFILLED
                ? null === (r = n.onSuccess) || void 0 === r || r.call(n)
                : n.status === u.LN.FAILED &&
                  (null === (s = n.onFailure) || void 0 === s || s.call(n)),
              !0
            );
          }
          return !1;
        },
      }));
      function x(e, t) {
        return "".concat(t, "_").concat(e);
      }
      function h(e, t, a) {
        var n;
        return null !== (n = (0, f.f1)(e)[x(t, a)]) && void 0 !== n ? n : null;
      }
      let p = {
          [u.Q6.CLAIM]: "Claim",
          [u.Q6.APPROVE]: "Approve",
          [u.Q6.SWAP]: "Swap",
          [u.Q6.WRAP]: "Wrap",
          [u.Q6.UNWRAP]: "Unwrap",
          [u.Q6.WITHDRAW]: "Withdraw",
          [u.Q6.ADD_LIQUIDITY]: "Add Liquidity",
          [u.Q6.INCREASE_LIQUIDITY]: "Increase Liquidity",
          [u.Q6.REMOVE_LIQUIDITY]: "Remove Liquidity",
          [u.Q6.UNSTAKE]: "Unstake",
          [u.Q6.STAKE]: "Stake",
          [u.Q6.RESTAKE]: "Restake",
          [u.Q6.SYNC]: "Sync",
          [u.Q6.REQUEST_FAUCET]: "Request Faucet",
        },
        g = {
          [u.LN.PENDING]: "In Progress",
          [u.LN.FULFILLED]: "Successfully",
          [u.LN.EXPIRED]: "Expired",
          [u.LN.CANCELLING]: "Cancelling",
          [u.LN.CANCELLED]: "Cancelled",
          [u.LN.FAILED]: "Failed",
        };
      function b(e) {
        let t = (0, f.pc)(e.status)
            ? (0, f.l0)(e)
              ? "success"
              : "error"
            : "default",
          a = "".concat(p[e.action], " ").concat(g[e.status]);
        c.E.getState().addToast({
          type: t,
          title: a,
          description: e.summary,
          autoCloseAfterMs: (0, f.pc)(e.status) ? 15e3 : 864e5,
          transactionMetadata: {
            id: e.id,
            status: e.status,
            explorerLink: (0, o.Q)(e.id),
          },
        });
      }
    },
    60953: function (e, t, a) {
      a.d(t, {
        BI: function () {
          return f;
        },
        ON: function () {
          return A;
        },
        f1: function () {
          return u;
        },
        l0: function () {
          return o;
        },
        pc: function () {
          return c;
        },
      });
      var n = a(48132),
        r = a.n(n),
        s = a(27580),
        l = a(65323),
        i = a(94741);
      function d(e) {
        return Date.now() - e.addedTime < l.P0;
      }
      function o(e) {
        return e.status === i.LN.FULFILLED;
      }
      function c(e) {
        return [
          i.LN.FULFILLED,
          i.LN.CANCELLED,
          i.LN.FAILED,
          i.LN.EXPIRED,
        ].includes(e);
      }
      function u(e) {
        let t = (0, s.B)();
        return e.transactionState[t];
      }
      function A(e) {
        return r()(Object.values(u(e)), "addedTime", "desc")
          .filter(d)
          .filter((e) => !c(e.status));
      }
      function f(e, t) {
        if (c(e.status)) return !1;
        if (!e.lastCheckedBlockNumber) return !0;
        let a = t - e.lastCheckedBlockNumber;
        if (a < 1) return !1;
        let n = (Date.now() - e.addedTime) / 1e3 / 60;
        return n > 60 ? a > 9 : !(n > 5) || a > 2;
      }
    },
    94741: function (e, t, a) {
      var n, r, s, l, i, d, o, c;
      a.d(t, {
        LN: function () {
          return n;
        },
        Q6: function () {
          return r;
        },
        iU: function () {
          return s;
        },
        ob: function () {
          return l;
        },
      }),
        ((i = n || (n = {})).PENDING = "pending"),
        (i.FULFILLED = "fulfilled"),
        (i.EXPIRED = "expired"),
        (i.CANCELLING = "cancelling"),
        (i.CANCELLED = "cancelled"),
        (i.FAILED = "failed"),
        ((d = r || (r = {})).CLAIM = "claim"),
        (d.APPROVE = "approve"),
        (d.SWAP = "swap"),
        (d.WRAP = "wrap"),
        (d.UNWRAP = "unwrap"),
        (d.WITHDRAW = "withdraw"),
        (d.ADD_LIQUIDITY = "add_liquidity"),
        (d.INCREASE_LIQUIDITY = "increase_liquidity"),
        (d.REMOVE_LIQUIDITY = "remove_liquidity"),
        (d.UNSTAKE = "unstake"),
        (d.STAKE = "stake"),
        (d.RESTAKE = "restake"),
        (d.SYNC = "sync"),
        (d.REQUEST_FAUCET = "request_faucet"),
        ((o = s || (s = {})).ORDER = "order"),
        (o.TX = "tx"),
        ((c = l || (l = {})).TX_SPEED_UP = "txSpeedUp"),
        (c.TX_CANCEL = "txCancel");
    },
  },
]);
