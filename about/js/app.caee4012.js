(function(e) {
    function t(t) {
        for (var n, o, r = t[0], l = t[1], m = t[2], u = 0, p = []; u < r.length; u++) o = r[u], Object.prototype.hasOwnProperty.call(a, o) && a[o] && p.push(a[o][0]), a[o] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        c && c(t);
        while (p.length) p.shift()();
        return i.push.apply(i, m || []), s()
    }

    function s() {
        for (var e, t = 0; t < i.length; t++) {
            for (var s = i[t], n = !0, r = 1; r < s.length; r++) {
                var l = s[r];
                0 !== a[l] && (n = !1)
            }
            n && (i.splice(t--, 1), e = o(o.s = s[0]))
        }
        return e
    }
    var n = {},
        a = {
            app: 0
        },
        i = [];

    function o(t) {
        if (n[t]) return n[t].exports;
        var s = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(s.exports, s, s.exports, o), s.l = !0, s.exports
    }
    o.m = e, o.c = n, o.d = function(e, t, s) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }, o.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (o.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) o.d(s, n, function(t) {
                return e[t]
            }.bind(null, n));
        return s
    }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "https://cdn.jsdelivr.net/gh/Tomotoes/about@e141b63824bd0/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = t, r = r.slice();
    for (var m = 0; m < r.length; m++) t(r[m]);
    var c = l;
    i.push([0, "chunk-vendors"]), s()
})({
    0: function(e, t, s) {
        e.exports = s("56d7")
    },
    3487: function(e, t, s) {},
    "56d7": function(e, t, s) {
        "use strict";
        s.r(t);
        s("ac6a"), s("cadf"), s("551c"), s("f751"), s("097d");
        var n = s("2b0e"),
            a = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("vue-terminal", {
                    staticStyle: {
                        margin: "0 auto"
                    },
                    attrs: {
                        "task-list": e.taskList,
                        "command-list": e.commandList
                    }
                })
            },
            i = [],
            o = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                    staticClass: "terminal fade"
                }, [s("div", {
                    staticStyle: {
                        position: "relative"
                    }
                }, [s("div", {
                    staticClass: "header"
                }, [s("h4", [e._v("My Profilo")]), e._m(0)]), s("div", {
                    ref: "terminalWindow",
                    staticStyle: {
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        overflow: "auto",
                        "z-index": "1",
                        "margin-top": "30px",
                        "max-height": "643px"
                    },
                    attrs: {
                        id: "terminalWindow"
                    }
                }, [s("div", {
                    staticClass: "terminal-window",
                    on: {
                        click: e.handleFocus
                    }
                }, [s("p", [e._v("Welcome to my profile.")]), s("p", [s("span", {
                    staticClass: "prompt"
                }), s("span", {
                    staticClass: "cmd"
                }, [e._v("cd Link Doan's profile")])]), s("transition-group", {
                    attrs: {
                        name: "component-fade",
                        mode: "out-in"
                    }
                }, e._l(e.messageList, (function(t, n) {
                    return s("p", {
                        key: n
                    }, [t.time ? s("span", {
                        staticClass: "time"
                    }, [e._v(e._s(t.time))]) : e._e(), t.label ? s("span", {
                        class: t.type
                    }, [e._v(e._s(t.label))]) : e._e(), t.message.list ? s("span", {
                        staticClass: "cmd"
                    }, [s("span", [e._v(e._s(t.message.text))]), s("ul", e._l(t.message.list, (function(t, n) {
                        return s("li", {
                            key: n
                        }, [t.label ? s("span", {
                            class: t.type
                        }, [e._v(e._s(t.label) + ":")]) : e._e(), s("pre", [e._v(e._s(t.message))])])
                    })), 0)]) : s("span", {
                        staticClass: "cmd"
                    }, [e._v(e._s(t.message))])])
                })), 0), e.actionResult ? s("p", [s("span", {
                    staticClass: "cmd"
                }, [e._v(e._s(e.actionResult))])]) : e._e(), s("p", {
                    ref: "terminalLastLine",
                    staticClass: "terminal-last-line",
                    on: {
                        click: e.handleFocus
                    }
                }, ["&nbsp" === e.lastLineContent ? s("span", {
                    staticClass: "prompt"
                }, [e._v("Link Doan's profile" + "/")]) : e._e(), s("span", [e._v(e._s(e.inputCommand))]), s("span", {
                    class: e.lastLineClass,
                    domProps: {
                        innerHTML: e._s(e.lastLineContent)
                    }
                }), s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: e.inputCommand,
                        expression: "inputCommand",
                        modifiers: {
                            trim: !0
                        }
                    }],
                    ref: "inputBox",
                    staticClass: "input-box",
                    attrs: {
                        disabled: "." === e.lastLineContent,
                        autofocus: "true",
                        type: "text",
                        "aria-label": "command"
                    },
                    domProps: {
                        value: e.inputCommand
                    },
                    on: {
                        keyup: function(t) {
                            return e.handleCommand(t)
                        },
                        input: function(t) {
                            t.target.composing || (e.inputCommand = t.target.value.trim())
                        },
                        blur: function(t) {
                            return e.$forceUpdate()
                        }
                    }
                })])], 1)])])])
            },
            r = [function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("ul", {
                    staticClass: "shell-dots"
                }, [s("li", {
                    staticClass: "red"
                }), s("li", {
                    staticClass: "yellow"
                }), s("li", {
                    staticClass: "green"
                })])
            }],
            l = (s("28a5"), s("456d"), s("75fc")),
            m = {
                name: "VTerminal",
                data: function() {
                    return {
                        title: "一个坏掉的番茄",
                        messageList: [],
                        actionResult: "",
                        lastLineContent: ".",
                        inputCommand: "",
                        supportingCommandList: "",
                        historyIndex: 0,
                        commandHistory: []
                    }
                },
                props: {
                    restart: {
                        required: !1,
                        default: "restart"
                    },
                    commandList: {
                        required: !1,
                        default: function() {
                            return {}
                        }
                    },
                    taskList: {
                        required: !1,
                        default: function() {
                            return {}
                        }
                    }
                },
                computed: {
                    lastLineClass: function() {
                        return "&nbsp" === this.lastLineContent ? "cursor" : (this.lastLineContent, "loading")
                    }
                },
                created: function() {
                    var e = this;
                    this.supportingCommandList = [].concat(Object(l["a"])(Object.keys(this.commandList)), Object(l["a"])(Object.keys(this.taskList))), this.handleRun(this.restart).then((function() {
                        e.pushToList({
                            type: "system",
                            label: "System",
                            message: 'Type "help" to get a supporting command list.'
                        }), e.pushToList({
                            type: "system",
                            label: "System",
                            message: 'Type "back" to return to the main page.'
                        }), e.handleFocus()
                    }))
                },
                methods: {
                    handleFocus: function() {
                        this.$refs.inputBox.focus()
                    },
                    handleCommand: function(e) {
                        var t = this;
                        if (13 === e.keyCode) {
                            if (this.commandHistory.push(this.inputCommand), this.historyIndex = this.commandHistory.length, this.pushToList({
                                    message: "$ ".concat(this.inputCommand, " ")
                                }), this.inputCommand) {
                                this.inputCommand = this.inputCommand.toLowerCase();
                                var s = this.inputCommand.split(" ");
                                "back" === s[0] ? (this.pushToList({
                                    type: "system",
                                    label: "System",
                                    message: "Jumping page..."
                                }), window.history ? window.history.go(-1) : location.href = "http://lingdev1998.github.io") : "help" === s[0] ? this.printHelp(s[1]) : this.commandList[this.inputCommand] ? this.commandList[this.inputCommand].messages.forEach((function(e) {
                                    t.pushToList(e)
                                })) : this.taskList[this.inputCommand.split(" ")[0]] ? this.handleRun(this.inputCommand.split(" ")[0], this.inputCommand) : (this.pushToList({
                                    type: "system",
                                    label: "System",
                                    message: "Unknown Command."
                                }), this.pushToList({
                                    type: "system",
                                    label: "System",
                                    message: 'Type "help" to get a supporting command list.'
                                })), this.inputCommand = "", this.autoScroll(), this.handleFocus()
                            }
                        } else this.handlekeyEvent(e)
                    },
                    handlekeyEvent: function(e) {
                        switch (e.keyCode) {
                            case 38:
                                this.historyIndex = 0 === this.historyIndex ? 0 : this.historyIndex - 1, this.inputCommand = this.commandHistory[this.historyIndex];
                                break;
                            case 40:
                                this.historyIndex = this.historyIndex === this.commandHistory.length ? this.commandHistory.length : this.historyIndex + 1, this.inputCommand = this.commandHistory[this.historyIndex];
                                break;
                            default:
                                break
                        }
                    },
                    handleRun: function(e, t) {
                        var s = this;
                        return this.lastLineContent = ".", this.taskList[e][e](this.pushToList, t).then((function(e) {
                            s.pushToList(e), s.lastLineContent = "&nbsp"
                        })).catch((function(e) {
                            s.pushToList(e || {
                                type: "error",
                                label: "Error",
                                message: "Something went wrong!"
                            }), s.lastLineContent = "&nbsp"
                        }))
                    },
                    pushToList: function(e) {
                        this.messageList.push(e), this.autoScroll()
                    },
                    printHelp: function(e) {
                        var t = this;
                        if (e) {
                            var s = this.commandList[e] || this.taskList[e];
                            this.pushToList({
                                message: s.description
                            })
                        } else this.pushToList({
                            message: "Here is a list of supporting command."
                        }), this.supportingCommandList.forEach((function(e) {
                            t.commandList[e] ? t.pushToList({
                                type: "success",
                                label: e,
                                message: "// ".concat(t.commandList[e].description)
                            }) : t.pushToList({
                                type: "success",
                                label: e,
                                message: "// ".concat(t.taskList[e].description)
                            })
                        })), this.pushToList({
                            message: 'Type "back" to return to the main page.'
                        });
                        this.autoScroll(), this.handleFocus()
                    },
                    time: function() {
                        return (new Date).toLocaleTimeString().split("").splice(2).join("")
                    },
                    autoScroll: function() {
                        var e = this;
                        this.$nextTick((function() {
                            e.$refs.terminalWindow.scrollTop = e.$refs.terminalLastLine.offsetTop
                        }))
                    }
                }
            },
            c = m,
            u = (s("8ef2"), s("2877")),
            p = Object(u["a"])(c, o, r, !1, null, null, null),
            d = p.exports;
        s("f559");

        function g() {
            var e = new Date,
                t = e.getHours(),
                s = e.getMinutes(),
                n = e.getSeconds(),
                a = "".concat(t);
            return a += (s < 10 ? ":0" : ":") + s, a += (n < 10 ? ":0" : ":") + n, a
        }
        var h = [{
                type: "system",
                label: "System",
                message: "Thanks for your visit, let me introduce myself."
            }, {
                time: g(),
                type: "info",
                label: "Name:",
                message: "Doan Van Linh"
            }, {
                time: g(),
                type: "info",
                label: "Sex:",
                message: "Male"
            }, {
                time: g(),
                type: "info",
                label: "Age:",
                message: "23"
            }, {
                time: g(),
                type: "info",
                label: "Address:",
                message: "Ha Noi, Viet Nam"
            }, {
                time: g(),
                type: "info",
                label: "Degree:",
                message: "Bachelor's degree"
            }, {
                time: g(),
                type: "info",
                label: "Email:",
                message: "vandoan1029i@gmail.com"
            }, {
                time: g(),
                type: "info",
                label: "Aim:",
                message: {
                    text: "Three goals as follows:",
                    list: [{
                        message: "To make outstanding contributions to open source."
                    }, {
                        message: "Make a good product for myself"
                    }, {
                        message: "Find a good job."
                    }]
                }
            }],
            y = {
                echo: {
                    description: "Echoes input.",
                    echo: function(e, t) {
                        return t = t.split(" "), t.splice(0, 1), new Promise((function(s) {
                            e({
                                time: g(),
                                label: "Echo",
                                type: "success",
                                message: t.join(" ")
                            }), s({
                                type: "success",
                                label: "",
                                message: ""
                            })
                        }))
                    }
                },
                open: {
                    description: "Open a specified url in a new tab.",
                    open: function(e, t) {
                        return new Promise((function(s, n) {
                            var a = t.split(" ")[1];
                            a ? (e({
                                type: "success",
                                label: "Success",
                                message: "Opening"
                            }), a.startsWith("http://") || (a = "http://".concat(a)), window.open(a, "_blank"), s({
                                type: "success",
                                label: "Done",
                                message: "Page Opened!"
                            })) : n({
                                type: "error",
                                label: "Error",
                                message: "a url is required!"
                            })
                        }))
                    }
                },
                restart: {
                    description: "Introducting myself again.",
                    restart: function(e) {
                        var t = 0;
                        return new Promise((function(s) {
                            var n = setInterval((function() {
                                e(h[t]), t++, h[t] || (clearInterval(n), s({
                                    type: "success",
                                    label: "Done",
                                    message: "Myself introduction is over!"
                                }))
                            }), 1e3)
                        }))
                    }
                },
                blog: {
                    description: "Open my blog in a new tab.",
                    blog: function(e, t) {
                        return new Promise((function(t, s) {
                            e({
                                type: "success",
                                label: "Success",
                                message: "Opening"
                            }), window.open("https://lingdev1998.github.io/blog", "_blank"), t({
                                type: "success",
                                label: "Done",
                                message: ":)"
                            })
                        }))
                    }
                },
            },
            f = {
                contact: {
                    description: "Return a list of my contact information.",
                    messages: [{
                        type: "contact",
                        label: "Email:",
                        message: "`vandoan1029i@gmail.com`"
                    }, {
                        type: "contact",
                        label: "Github:",
                        message: "`https://github.com/lingdev1998`"
                    }, {
                        type: "contact",
                        label: "Facebook:",
                        message: "`https://fb.com/LinkDoan2511`"
                    }, {
                        type: "contact",
                        label: "Instagram:",
                        message: "`https://www.instagram.com/__inkscape__`"
                    }]
                }, 
                skill: {
                    description: "Return a list of my skills and my rating of them.",
                    messages: [{
                        type: "success",
                        label: "A",
                        message: "· JavaScript 80/100"
                    }, {
                        type: "success",
                        label: "A",
                        message: "· PHP 90/100"
                    }, {
                        type: "success",
                        label: "A",
                        message: "· Java 80/100"
                    }, {
                        type: "success",
                        label: "A",
                        message: "· C++ 80/100"
                    }, //{
                    //     type: "warning",
                    //     label: "B",
                    //     message: "· TypeScript 70/100"
                    // }, {
                    //     type: "warning",
                    //     label: "B",
                    //     message: "· Python 70/100"
                    // }, {
                    //     type: "warning",
                    //     label: "B",
                    //     message: "· C 70/100"
                    // }, {
                    //     type: "warning",
                    //     label: "B",
                    //     message: "· Shell 70/100"
                    // }, {
                    //     type: "error",
                    //     label: "C",
                    //     message: "· C# 60/100"
                    // }, {
                    //     type: "error",
                    //     label: "C",
                    //     message: "· Rust 60/100"
                    // }, {
                    //     type: "error",
                    //     label: "C",
                    //     message: "· Scala 60/100"
                    // }, {
                    //     type: "error",
                    //     label: "C",
                    //     message: "· Lua 60/100"
                    // }, {
                    //     type: "error",
                    //     label: "C",
                    //     message: "· Haskell 60/100"
                    // }, {
                    //     type: "error",
                    //     label: "C",
                    //     message: "· Ruby 60/100"
                    // }, {
                    //     type: "contact",
                    //     label: "D",
                    //     message: "· CSS -999/100"
                    //}
                    ]
                }, 
            },
            b = {
                name: "app",
                data: function() {
                    return {
                        taskList: y,
                        commandList: f
                    }
                },
                components: {
                    VueTerminal: d
                }
            },
            C = b,
            v = (s("5c0b"), Object(u["a"])(C, a, i, !1, null, null, null)),
            w = v.exports;
        n["a"].config.productionTip = !1, new n["a"]({
            render: function(e) {
                return e(w)
            }
        }).$mount("#app");
        var L = document.querySelectorAll(".fade");
        window.addEventListener("load", (function() {
            L.forEach((function(e) {
                return e.classList.add("in")
            }))
        })), window.addEventListener("beforeunload", (function() {
            L.forEach((function(e) {
                return e.classList.remove("in")
            }))
        }))
    },
    "5c0b": function(e, t, s) {
        "use strict";
        var n = s("e332"),
            a = s.n(n);
        a.a
    },
    "8ef2": function(e, t, s) {
        "use strict";
        var n = s("3487"),
            a = s.n(n);
        a.a
    },
    e332: function(e, t, s) {}
});
//# sourceMappingURL=app.caee4012.js.map