!function(t, e) {
    function n(t) {
        var e = this;
        e.w = 0, e.x = 0;
    }
    function a(t, e) {
        var n = p.createShader(e);
        return p.shaderSource(n, t), p.compileShader(n), p.getShaderParameter(n, p.COMPILE_STATUS) ? n : void alert(p.getShaderInfoLog(n));
    }
    function r(t, e) {
        var n = p.createProgram();
        return p.attachShader(n, t), p.attachShader(n, e), p.linkProgram(n), p.getProgramParameter(n, p.LINK_STATUS) ? (p.useProgram(n), 
        n.H = function(t) {
            return p.getUniformLocation(n, t);
        }, n.I = function(t) {
            return p.getAttribLocation(n, t);
        }, n) : void 0;
    }
    function o(t) {
        var e = p.createBuffer();
        return p.bindBuffer(p.ARRAY_BUFFER, e), p.bufferData(p.ARRAY_BUFFER, new Float32Array(t), p.STATIC_DRAW), 
        p.bindBuffer(p.ARRAY_BUFFER, null), e;
    }
    function i(t) {
        var e = p.createTexture();
        return p.bindTexture(p.TEXTURE_2D, e), p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL, !0), 
        p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), p.pixelStorei(p.UNPACK_ALIGNMENT, 4), 
        p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, p.RGBA, p.UNSIGNED_BYTE, t), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.MIRRORED_REPEAT), 
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.REPEAT), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.LINEAR), 
        p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.LINEAR_MIPMAP_LINEAR), p.generateMipmap(p.TEXTURE_2D), 
        p.bindTexture(p.TEXTURE_2D, null), e;
    }
    function u(t) {
        var e, n, u, _, c, s, d, l, h, A, v, g, x, b = document.body.offsetWidth, y = document.body.offsetHeight;
        T = {
            l: b,
            m: y,
            J: new U(b / 2, y / 2)
        }, e = new $(T), n = document.createElement("canvas"), n.width = T.l * devicePixelRatio, 
        n.height = T.m * devicePixelRatio, n.style.width = T.l + "px", n.style.height = T.m + "px", 
        document.body.appendChild(n), p = n.getContext("webgl"), T.M = e, p.viewport(0, 0, T.l, T.m), 
        p.clearColor(1, 1, 1, 1), p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), p.clearDepth(1), 
        p.clearStencil(0), p.enable(p.DEPTH_TEST), p.depthFunc(p.LEQUAL), p.frontFace(p.CCW), 
        p.cullFace(p.BACK), p.enable(p.CULL_FACE), p.enable(p.BLEND), p.blendEquation(p.FUNC_ADD), 
        p.blendFunc(p.SRC_ALPHA, p.ONE_MINUS_SRC_ALPHA), u = p.getExtension("OES_texture_float"), 
        _ = p.getExtension("OES_texture_float_linear"), c = p.getExtension("OES_texture_half_float"), 
        s = p.getExtension("OES_texture_half_float_linear"), d = p.getExtension("OES_standard_derivatives"), 
        l = p.getExtension("WEBGL_draw_buffers"), h = p.getExtension("WEBGL_depth_texture"), 
        A = p.getExtension("EXT_shader_texture_lod"), v = a(t.N, p.VERTEX_SHADER), g = a(t.O, p.FRAGMENT_SHADER), 
        m = r(v, g), v = a(t.P, p.VERTEX_SHADER), g = a(t.Q, p.FRAGMENT_SHADER), R = r(v, g), 
        x = {}, x.R = i(t.S.R), x.T = i(t.S.T), x.U = o(t.S.V), x.W = o(t.S.X), x.Y = o(t.S.Z), 
        x.$ = t.S.w, E.push(x), x = {}, x.R = i(t._.R), x.T = i(t._.T), x.U = o(t._.V), 
        x.W = o(t._.X), x.Y = o(t._.Z), x.$ = t._.w, E.push(x), x = {}, x.R = i(t.aa.R), 
        x.T = i(t.aa.T), x.U = o(t.aa.V), x.W = o(t.aa.X), x.Y = o(t.aa.Z), x.$ = t.aa.w, 
        E.push(x), m.ba = m.H("bumpMap"), m.ca = m.H("bumpScale"), m.da = m.H("map"), m.k = m.H("projectionMatrix"), 
        m.ea = m.H("viewMatrix"), m.o = m.H("modelMatrix"), m.r = m.H("normalMatrix"), m.fa = m.I("position"), 
        m.ga = m.I("uv"), m.ha = m.I("normal"), m.ia = m.H("ambient"), m.ja = m.H("ambientLightColor"), 
        m.ka = m.H("directionalLightDirection"), m.la = m.H("directionalLightColor"), m.ma = m.H("pointLightDirection"), 
        m.na = m.H("pointLightColor"), m.oa = m.H("pointLightDistance"), m.pa = m.H("opacity"), 
        m.qa = m.H("diffuse"), m.ra = m.H("emissive"), m.sa = m.H("uvTransform"), m.ta = m.H("toonSteps"), 
        R.fa = R.I("position"), R.ha = R.I("normal"), R.k = R.H("projectionMatrix"), R.ea = R.H("viewMatrix"), 
        R.o = R.H("modelMatrix"), R.r = R.H("normalMatrix"), R.ua = R.H("outline"), p.useProgram(R), 
        p.uniformMatrix4fv(R.k, !1, e.k), p.uniform1f(R.ua, .4), p.useProgram(m), p.uniform3f(m.ka, 1, 1, 1), 
        p.uniform3f(m.la, .8, .8, .8), p.uniform3f(m.ia, .5, .5, .5), p.uniform3f(m.ja, 1, 1, 1), 
        p.uniform4f(m.sa, 2, 1, 0, 0), p.uniform1f(m.ta, 2), p.uniform1f(m.pa, 1), p.uniform3f(m.qa, .5, .5, .5), 
        p.uniform3f(m.ra, .1, .1, .1), p.uniformMatrix4fv(m.k, !1, e.k), f();
    }
    function _() {
        var t, e, n = T.M;
        for (p.clear(p.COLOR_BUFFER_BIT | p.DEPTH_BUFFER_BIT), n.r.d(n.n), p.enable(p.CULL_FACE), 
        t = 0; t < E.length; t++) {
            e = E[t], p.activeTexture(p.TEXTURE0), p.bindTexture(p.TEXTURE_2D, e.T), p.activeTexture(p.TEXTURE1), 
            p.bindTexture(p.TEXTURE_2D, e.R), p.cullFace(p.FRONT), p.useProgram(R), p.uniformMatrix4fv(R.ea, !1, n.n), 
            p.uniformMatrix4fv(R.o, !1, n.o), p.uniformMatrix3fv(R.r, !1, n.r), p.bindBuffer(p.ARRAY_BUFFER, e.W), 
            p.vertexAttribPointer(R.fa, 3, p.FLOAT, !1, 0, 0), p.bindBuffer(p.ARRAY_BUFFER, e.U), 
            p.vertexAttribPointer(R.ha, 3, p.FLOAT, !1, 0, 0), p.enableVertexAttribArray(R.fa), 
            p.enableVertexAttribArray(R.ha), p.drawArrays(p.TRIANGLES, 0, e.$), p.cullFace(p.BACK), 
            p.useProgram(m), p.uniform1i(m.da, 0), p.uniform1i(m.ba, 1), p.uniform1f(m.ca, 1), 
            p.uniformMatrix4fv(m.ea, !1, n.n), p.uniformMatrix4fv(m.o, !1, n.o), p.uniformMatrix3fv(m.r, !1, n.r), 
            p.uniform3f(m.qa, 1, 1, 1), p.bindBuffer(p.ARRAY_BUFFER, e.W), p.vertexAttribPointer(m.fa, 3, p.FLOAT, !1, 0, 0), 
            p.bindBuffer(p.ARRAY_BUFFER, e.Y), p.vertexAttribPointer(m.ga, 2, p.FLOAT, !1, 0, 0), 
            p.bindBuffer(p.ARRAY_BUFFER, e.U), p.vertexAttribPointer(m.ha, 3, p.FLOAT, !1, 0, 0), 
            p.enableVertexAttribArray(m.fa), p.enableVertexAttribArray(m.ga), p.enableVertexAttribArray(m.ha), 
            p.drawArrays(p.TRIANGLES, 0, e.$);
        }
        p.flush();
    }
    function f() {
        function t(r) {
            var o, i, u = (r - e) * v || 0;
            e = r, x && (o = B - S, n.a = b.a - y.a, n.b = b.b - y.b, i = !1, Math.abs(o) > .5 && (a.s += .1 * o, 
            B -= .05 * o, i = !0), (Math.abs(n.a) > .001 || Math.abs(n.b) > .001) && (a.u += .001 * n.a, 
            a.t += .001 * n.b, b.a -= .05 * n.a, b.b -= .05 * n.b, i = !0), i ? a.v() : x = !1, 
            _(u)), requestAnimationFrame(t);
        }
        var e, n = new U(), a = T.M;
        requestAnimationFrame(t);
    }
    function c(t) {
        var e = t.pageX, n = t.pageY, a = t.target.getBoundingClientRect();
        y.a = e - T.J.a - a.left, y.b = n - T.J.b - a.top, b.from(y), g = !0;
    }
    function s() {
        var t, e, n;
        g && (t = event.pageX, e = event.pageY, n = event.target.getBoundingClientRect(), 
        y.a = t - T.J.a - n.left, y.b = e - T.J.b - n.top, x = !0);
    }
    function d(t) {
        var e = t.pageX, n = t.pageY, a = t.target.getBoundingClientRect();
        y.a = e - T.J.a - a.left, y.b = n - T.J.b - a.top, g = !1;
    }
    function l(t) {
        var e = t.wheelDelta;
        t.wheelDeltaX, t.wheelDeltaY;
        S += e, x = !0, t.preventDefault();
    }
    var p, E, m, R, T, h, A, v, g, x, b, y, S, B, F, M, P, L, U = function() {
        function t(t, e, n) {
            var a = this;
            a.a = t || 0, a.b = e || 0, a.c = n || 0;
        }
        var e = t.prototype;
        return e.from = function(t) {
            var e = this;
            return e.a = t.a, e.b = t.b, e.c = t.c, e;
        }, t;
    }(), w = 0, H = 4, I = 8, C = 12, D = 1, X = 5, j = 9, k = 13, N = 2, O = 6, Y = 10, G = 14, W = 3, V = 7, q = 11, J = 15, K = function() {
        function t() {}
        var e = t.prototype, n = t;
        return n.prototype.__proto__ = Float32Array.prototype, n.D = function() {
            var e = new Float32Array(9);
            return e[w] = 1, e[X] = 1, e[Y] = 1, e.__proto__ = t.prototype, e;
        }, e.d = function(t) {
            var e = this, n = t[w], a = t[H], r = t[I], o = t[C], i = t[D], u = t[X], _ = t[j], f = t[k], c = t[N], s = t[O], d = t[Y], l = t[G], p = t[W], E = t[V], m = t[q], R = t[J], T = n * u - a * i, h = n * _ - r * i, A = n * f - o * i, v = a * _ - r * u, g = a * f - o * u, x = r * f - o * _, b = c * E - s * p, y = c * m - d * p, S = c * R - l * p, B = s * m - d * E, F = s * R - l * E, M = d * R - l * m, P = 1 / (T * M - h * F + A * B + v * S - g * y + x * b);
            return e[0] = (u * M - _ * F + f * B) * P, e[1] = (-a * M + r * F - o * B) * P, 
            e[2] = (E * x - m * g + R * v) * P, e[3] = (-i * M + _ * S - f * y) * P, e[4] = (n * M - r * S + o * y) * P, 
            e[5] = (-p * x + m * A - R * h) * P, e[6] = (i * F - u * S + f * b) * P, e[7] = (-n * F + a * S - o * b) * P, 
            e[8] = (p * g - E * A + R * T) * P, e;
        }, e.log = function() {
        }, t;
    }(), Z = function() {
        function t() {}
        var e = t.prototype, n = t;
        return n.prototype.__proto__ = Float32Array.prototype, n.D = function() {
            var e = new Float32Array(16);
            return e[w] = 1, e[X] = 1, e[Y] = 1, e[J] = 1, e.__proto__ = t.prototype, e;
        }, e.e = function() {
            var t = this;
            return t[w] = 1, t[H] = 0, t[I] = 0, t[C] = 0, t[D] = 0, t[X] = 1, t[j] = 0, t[k] = 0, 
            t[N] = 0, t[O] = 0, t[Y] = 1, t[G] = 0, t[W] = 0, t[V] = 0, t[q] = 0, t[J] = 1, 
            t;
        }, e.g = function(t, e) {
            var n = this, a = t[w], r = t[H], o = t[I], i = t[C], u = t[D], _ = t[X], f = t[j], c = t[k], s = t[N], d = t[O], l = t[Y], p = t[G], E = t[W], m = t[V], R = t[q], T = t[J], h = e[w], A = e[H], v = e[I], g = e[C], x = e[D], b = e[X], y = e[j], S = e[k], B = e[N], F = e[O], M = e[Y], P = e[G], L = e[W], U = e[V], K = e[q], Z = e[J];
            return n[w] = a * h + r * x + o * B + i * L, n[H] = a * A + r * b + o * F + i * U, 
            n[I] = a * v + r * y + o * M + i * K, n[C] = a * g + r * S + o * P + i * Z, n[D] = u * h + _ * x + f * B + c * L, 
            n[X] = u * A + _ * b + f * F + c * U, n[j] = u * v + _ * y + f * M + c * K, n[k] = u * g + _ * S + f * P + c * Z, 
            n[N] = s * h + d * x + l * B + p * L, n[O] = s * A + d * b + l * F + p * U, n[Y] = s * v + d * y + l * M + p * K, 
            n[G] = s * g + d * S + l * P + p * Z, n[W] = E * h + m * x + R * B + T * L, n[V] = E * A + m * b + R * F + T * U, 
            n[q] = E * v + m * y + R * M + T * K, n[J] = E * g + m * S + R * P + T * Z, n;
        }, e.h = function(t, e, n, a) {
            var r = this, o = 1 / Math.tan(t * Math.PI / 360);
            return r[w] = o / e, r[H] = r[I] = r[C] = r[D] = 0, r[X] = o, r[j] = r[k] = r[N] = r[O] = 0, 
            r[Y] = (n + a) / (n - a), r[G] = 2 * n * a / (n - a), r[W] = r[V] = r[J] = 0, r[q] = -1, 
            r;
        }, e.i = function(t) {
            var e = this, n = t[w], a = t[H], r = t[I], o = t[C], i = t[D], u = t[X], _ = t[j], f = t[k], c = t[N], s = t[O], d = t[Y], l = t[G], p = t[W], E = t[V], m = t[q], R = t[J];
            return e[w] = n, e[H] = i, e[I] = c, e[C] = p, e[D] = a, e[X] = u, e[j] = s, e[k] = E, 
            e[N] = r, e[O] = _, e[Y] = d, e[G] = m, e[W] = o, e[V] = f, e[q] = l, e[J] = R, 
            e;
        }, e.j = function(t) {
            var e = this, n = t[w], a = t[H], r = t[I], o = t[C], i = t[D], u = t[X], _ = t[j], f = t[k], c = t[N], s = t[O], d = t[Y], l = t[G], p = t[W], E = t[V], m = t[q], R = t[J], T = n * u - a * i, h = n * _ - r * i, A = n * f - o * i, v = a * _ - r * u, g = a * f - o * u, x = r * f - o * _, b = c * E - s * p, y = c * m - d * p, S = c * R - l * p, B = s * m - d * E, F = s * R - l * E, M = d * R - l * m, P = 1 / (T * M - h * F + A * B + v * S - g * y + x * b);
            return e[w] = (u * M - _ * F + f * B) * P, e[H] = (-a * M + r * F - o * B) * P, 
            e[I] = (E * x - m * g + R * v) * P, e[C] = (-s * x + d * g - l * v) * P, e[D] = (-i * M + _ * S - f * y) * P, 
            e[X] = (n * M - r * S + o * y) * P, e[j] = (-p * x + m * A - R * h) * P, e[k] = (c * x - d * A + l * h) * P, 
            e[N] = (i * F - u * S + f * b) * P, e[O] = (-n * F + a * S - o * b) * P, e[Y] = (p * g - E * A + R * T) * P, 
            e[G] = (-c * g + s * A - l * T) * P, e[W] = (-i * B + u * y - _ * b) * P, e[V] = (n * B - a * y + r * b) * P, 
            e[q] = (-p * v + E * h - m * T) * P, e[J] = (c * v - s * h + d * T) * P, e;
        }, t;
    }(), $ = function() {
        function t(t) {
            var e = this;
            e.k = Z.D(), e.k.h(75, t.l / t.m, .1, 1e3), e.n = Z.D(), e.o = Z.D(), 
            e.o[0] = 3, e.o[5] = 3, e.o[10] = 3, e.p = Z.D(), e.q = Z.D(), e.r = K.D(), 
            e.s = 500, e.t = 0, e.u = -Math.PI / 2, e.v();
        }
        var e = t.prototype;
        return e.v = function() {
            var t, e, n, a, r, o, i, u, _, f, c = this, s = c.n, d = Math.cos(c.u), l = Math.sin(c.u), p = Math.cos(c.t), E = Math.sin(c.t), m = c.s * l * p, R = c.s * E, T = c.s * d * p, h = Math.abs(c.t) % (2 * Math.PI), A = h > .5 * Math.PI && h < 1.5 * Math.PI ? -1 : 1;
            new U(m, R, T);
            c.a = m, c.b = R, c.c = T, t = -l * p, e = -E, n = -d * p, a = 0, r = -A, o = 0, 
            i = e * o - r * n, u = n * a - t * o, _ = t * r - e * a, f = Math.sqrt(i * i + u * u + _ * _), 
            0 != f && (f = 1 / f), a = i * f, r = u * f, o = _ * f, i = e * o - r * n, u = n * a - t * o, 
            _ = t * r - e * a, f = Math.sqrt(i * i + u * u + _ * _), 0 != f && (f = 1 / f), 
            i *= f, u *= f, _ *= f, s[w] = a, s[H] = r, s[I] = o, s[D] = i, s[X] = u, s[j] = _, 
            s[N] = t, s[O] = e, s[Y] = n, s[C] = -c.s * (t * a + e * r + n * o), s[k] = -c.s * (t * i + e * u + n * _), 
            s[G] = 1 * -c.s, s[W] = 0, s[V] = 0, s[q] = 0, s[J] = 1, c.p.g(c.k, c.n);
        }, t;
    }(), Q = n.prototype;
    Q.y = function(t, e, n) {
        var a, r = this;
        r.x++, a = new XMLHttpRequest(), a.responseType = e, a.open("POST", t, !0), a.onload = function() {
            n(a.response, a.responseUrl, a.responseType), ++r.w == r.x && r.B();
        }, a.send();
    }, Q.C = function(t, e) {
        var n, a = this;
        a.x++, n = new Image(), n.src = t, n.onload = function() {
            e.call(this, n), ++a.w == a.x && a.B();
        };
    }, Q.F = function(t) {
        var e = this;
        return e.x++, function(n) {
            t.apply(this, arguments), ++e.w == e.x && e.B();
        };
    }, n.G = function(t) {
        var e = new n();
        return e.B = t, e;
    }, E = [], h = new U(), A = 30, v = 1 / A, x = !0, b = new U(), y = new U(), document.addEventListener("mousedown", c), 
    document.addEventListener("mousemove", s), document.addEventListener("mouseup", d), 
    document.addEventListener("mousewheel", l), S = 0, B = 0, F = [ "dec_0004_0.pm0001_00_BodySkin.0.position.json", "dec_0004_0.pm0001_00_BodySkin.0.normal.json", "dec_0004_0.pm0001_00_BodySkin.0.pm0001_00_BodyA1.texture0.json", "pm0001_00_BodyA1.png", "pm0001_00_BodyA2.png", [ 2, 1, 0, 0 ] ], 
    M = [ "dec_0004_0.pm0001_00_BodySkin.1.position.json", "dec_0004_0.pm0001_00_BodySkin.1.normal.json", "dec_0004_0.pm0001_00_BodySkin.1.pm0001_00_Eye1.texture0.json", "pm0001_00_Eye1_Merged.png", "pm0001_00_Eye2.png" ], 
    P = [ "dec_0004_0.pm0001_00_BodySkin.2.position.json", "dec_0004_0.pm0001_00_BodySkin.2.normal.json", "dec_0004_0.pm0001_00_BodySkin.2.pm0001_00_BodyB1.texture0.json", "pm0001_00_BodyB1.png", "pm0001_00_BodyB2.png" ], 
    L = n.G(function() {
        L.S.w = L.S.X.length / 3, L.S.sa = [ 2, 1, 0, 0 ], L._.w = L._.X.length / 3, L._.sa = [ 2, 1, 0, 0 ], 
        L.aa.w = L.aa.X.length / 3, L.aa.sa = [ 2, 1, 0, 0 ], u(L);
    }), L.y("./shaders/Outline.glslv", "text", function(t) {
        L.P = t;
    }), L.y("./shaders/Outline.glslf", "text", function(t) {
        L.Q = t;
    }), L.y("./shaders/Pokemon.glslv", "text", function(t) {
        L.N = t;
    }), L.y("./shaders/Pokemon.glslf", "text", function(t) {
        L.O = t;
    }), L.S = {}, L.y("./data/" + F[2], "json", function(t) {
        L.S.Z = t;
    }), L.y("./data/" + F[1], "json", function(t) {
        L.S.V = t;
    }), L.y("./data/" + F[0], "json", function(t) {
        L.S.X = t;
    }), L.C("./data/" + F[3], function(t) {
        L.S.T = t;
    }), L.C("./data/" + F[4], function(t) {
        L.S.R = t;
    }), L._ = {}, L.y("./data/" + M[2], "json", function(t) {
        L._.Z = t;
    }), L.y("./data/" + M[1], "json", function(t) {
        L._.V = t;
    }), L.y("./data/" + M[0], "json", function(t) {
        L._.X = t;
    }), L.C("./data/" + M[3], function(t) {
        L._.T = t;
    }), L.C("./data/" + M[4], function(t) {
        L._.R = t;
    }), L.aa = {}, L.y("./data/" + P[2], "json", function(t) {
        L.aa.Z = t;
    }), L.y("./data/" + P[1], "json", function(t) {
        L.aa.V = t;
    }), L.y("./data/" + P[0], "json", function(t) {
        L.aa.X = t;
    }), L.C("./data/" + P[3], function(t) {
        L.aa.T = t;
    }), L.C("./data/" + P[4], function(t) {
        L.aa.R = t;
    });
}({}, function() {
    return this;
}());