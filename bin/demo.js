!function(a, t) {
    function e(a, t, e, n) {
        var r = this;
        r.x = a || 0, r.y = t || 0, r.z = e || 0, r.ib = n || 0;
    }
    function n(a) {
        var t = this;
        t.w = 0, t.x = 0;
    }
    function r(a, t) {
        var e = A.createShader(t);
        return A.shaderSource(e, a), A.compileShader(e), A.getShaderParameter(e, A.COMPILE_STATUS) ? e : void alert(A.getShaderInfoLog(e));
    }
    function o(a, t) {
        var e = A.createProgram();
        return A.attachShader(e, a), A.attachShader(e, t), A.linkProgram(e), A.getProgramParameter(e, A.LINK_STATUS) ? (A.useProgram(e), 
        e.H = function(a) {
            return A.getUniformLocation(e, a);
        }, e.I = function(a) {
            return A.getAttribLocation(e, a);
        }, e) : void 0;
    }
    function i(a) {
        var t = A.createBuffer();
        return A.bindBuffer(A.ARRAY_BUFFER, t), A.bufferData(A.ARRAY_BUFFER, a, A.STATIC_DRAW), 
        A.bindBuffer(A.ARRAY_BUFFER, null), t;
    }
    function u(a) {
        var t = A.createBuffer();
        return A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, t), A.bufferData(A.ELEMENT_ARRAY_BUFFER, new Int16Array(a), A.STATIC_DRAW), 
        A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, null), t;
    }
    function f(a) {
        var t = A.createTexture();
        return A.bindTexture(A.TEXTURE_2D, t), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, !0), 
        A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), A.pixelStorei(A.UNPACK_ALIGNMENT, 4), 
        A.texImage2D(A.TEXTURE_2D, 0, A.RGBA, A.RGBA, A.UNSIGNED_BYTE, a), A.texParameteri(A.TEXTURE_2D, A.TEXTURE_WRAP_S, A.MIRRORED_REPEAT), 
        A.texParameteri(A.TEXTURE_2D, A.TEXTURE_WRAP_T, A.REPEAT), A.texParameteri(A.TEXTURE_2D, A.TEXTURE_MAG_FILTER, A.LINEAR), 
        A.texParameteri(A.TEXTURE_2D, A.TEXTURE_MIN_FILTER, A.LINEAR_MIPMAP_LINEAR), A.generateMipmap(A.TEXTURE_2D), 
        A.bindTexture(A.TEXTURE_2D, null), t;
    }
    function _(a) {
        var t, e, n, c, s, _, l, b, E, m, T, v, x, y = document.body.offsetWidth, S = document.body.offsetHeight;
        g = {
            l: y,
            m: S,
            J: new Y(y / 2, S / 2),
            Wa: a.Wa
        }, g.Wa.Cb(a.Xa), t = new p(g), e = document.createElement("canvas"), e.width = g.l * devicePixelRatio, 
        e.height = g.m * devicePixelRatio, e.style.width = g.l + "px", e.style.height = g.m + "px", 
        document.body.appendChild(e), A = e.getContext("webgl"), g.M = t, A.viewport(0, 0, g.l, g.m), 
        A.clearColor(1, 1, 1, 1), A.clear(A.COLOR_BUFFER_BIT | A.DEPTH_BUFFER_BIT), A.clearDepth(1), 
        A.clearStencil(0), A.enable(A.DEPTH_TEST), A.depthFunc(A.LEQUAL), A.frontFace(A.CCW), 
        A.cullFace(A.BACK), A.enable(A.CULL_FACE), A.enable(A.BLEND), A.blendEquation(A.FUNC_ADD), 
        A.blendFunc(A.SRC_ALPHA, A.ONE_MINUS_SRC_ALPHA), n = A.getExtension("OES_texture_float"), 
        c = A.getExtension("OES_texture_float_linear"), s = A.getExtension("OES_texture_half_float"), 
        _ = A.getExtension("OES_texture_half_float_linear"), l = A.getExtension("OES_standard_derivatives"), 
        b = A.getExtension("WEBGL_draw_buffers"), E = A.getExtension("WEBGL_depth_texture"), 
        m = A.getExtension("EXT_shader_texture_lod"), T = r(a.N, A.VERTEX_SHADER), v = r(a.O, A.FRAGMENT_SHADER), 
        d = o(T, v), T = r(a.P, A.VERTEX_SHADER), v = r(a.Q, A.FRAGMENT_SHADER), M = o(T, v), 
        x = {}, x.R = f(a.S.R), x.T = f(a.S.T), x.Ya = i(a.S.Za), x.$a = u(a.S._a), x.$ = a.S.w, 
        x.ab = a.S.bb, R.push(x), x = {}, x.R = f(a._.R), x.T = f(a._.T), x.Ya = i(a._.Za), 
        x.$a = u(a._._a), x.$ = a._.w, x.ab = a._.bb, R.push(x), x = {}, x.R = f(a.aa.R), 
        x.T = f(a.aa.T), x.Ya = i(a.aa.Za), x.$a = u(a.aa._a), x.$ = a.aa.w, x.ab = a.aa.bb, 
        R.push(x), d.ba = d.H("bumpMap"), d.ca = d.H("bumpScale"), d.da = d.H("map"), d.k = d.H("projectionMatrix"), 
        d.ea = d.H("viewMatrix"), d.o = d.H("modelMatrix"), d.r = d.H("normalMatrix"), d.fa = d.I("position"), 
        d.ga = d.I("uv"), d.ha = d.I("normal"), d.cb = d.I("skinIndex"), d.db = d.I("skinWeight"), 
        d.Ba = d.H("boneMatrices"), d.ia = d.H("ambient"), d.ja = d.H("ambientLightColor"), 
        d.ka = d.H("directionalLightDirection"), d.la = d.H("directionalLightColor"), d.ma = d.H("pointLightDirection"), 
        d.na = d.H("pointLightColor"), d.oa = d.H("pointLightDistance"), d.pa = d.H("opacity"), 
        d.qa = d.H("diffuse"), d.ra = d.H("emissive"), d.sa = d.H("uvTransform"), d.ta = d.H("toonSteps"), 
        M.fa = M.I("position"), M.ha = M.I("normal"), M.cb = M.I("skinIndex"), M.db = M.I("skinWeight"), 
        M.Ba = M.H("boneMatrices"), M.k = M.H("projectionMatrix"), M.ea = M.H("viewMatrix"), 
        M.o = M.H("modelMatrix"), M.r = M.H("normalMatrix"), M.ua = M.H("outline"), A.useProgram(M), 
        A.uniformMatrix4fv(M.k, !1, t.k), A.uniform1f(M.ua, .4), A.useProgram(d), A.uniform3f(d.ka, 1, 1, 1), 
        A.uniform3f(d.la, .8, .8, .8), A.uniform3f(d.ia, .5, .5, .5), A.uniform3f(d.ja, 1, 1, 1), 
        A.uniform4f(d.sa, 2, 1, 0, 0), A.uniform1f(d.ta, 2), A.uniform1f(d.pa, 1), A.uniform3f(d.qa, .5, .5, .5), 
        A.uniform3f(d.ra, .1, .1, .1), A.uniformMatrix4fv(d.k, !1, t.k), h();
    }
    function l() {
        var a, t, e = g.M;
        for (A.clear(A.COLOR_BUFFER_BIT | A.DEPTH_BUFFER_BIT), e.r.d(e.n), A.enable(A.CULL_FACE), 
        a = 0; a < R.length; a++) {
            t = R[a], A.activeTexture(A.TEXTURE0), A.bindTexture(A.TEXTURE_2D, t.T), A.activeTexture(A.TEXTURE1), 
            A.bindTexture(A.TEXTURE_2D, t.R), A.cullFace(A.FRONT), A.useProgram(M), A.uniformMatrix4fv(M.ea, !1, e.n), 
            A.uniformMatrix4fv(M.o, !1, e.o), A.uniformMatrix3fv(M.r, !1, e.r), A.uniformMatrix4fv(M.Ba, !1, O.Wa.Ba), 
            A.bindBuffer(A.ELEMENT_ARRAY_BUFFER, t.$a), A.bindBuffer(A.ARRAY_BUFFER, t.Ya), 
            A.vertexAttribPointer(M.fa, 3, A.FLOAT, !1, t.ab, 0), A.vertexAttribPointer(M.ha, 3, A.FLOAT, !1, t.ab, 12), 
            A.vertexAttribPointer(M.cb, 4, A.BYTE, !1, t.ab, 32), A.vertexAttribPointer(M.db, 4, A.UNSIGNED_SHORT, !1, t.ab, 36), 
            A.enableVertexAttribArray(M.fa), A.enableVertexAttribArray(M.ha), A.enableVertexAttribArray(M.cb), 
            A.enableVertexAttribArray(M.db), A.drawElements(A.TRIANGLES, t.$, A.UNSIGNED_SHORT, 0), 
            A.cullFace(A.BACK), A.useProgram(d), A.uniform1i(d.da, 0), A.uniform1i(d.ba, 1), 
            A.uniform1f(d.ca, 1), A.uniformMatrix4fv(d.ea, !1, e.n), A.uniformMatrix4fv(d.o, !1, e.o), 
            A.uniformMatrix3fv(d.r, !1, e.r), A.uniformMatrix4fv(d.Ba, !1, O.Wa.Ba), A.uniform3f(d.qa, 1, 1, 1), 
            A.bindBuffer(A.ARRAY_BUFFER, t.Ya), A.vertexAttribPointer(d.fa, 3, A.FLOAT, !1, t.ab, 0), 
            A.vertexAttribPointer(d.ha, 3, A.FLOAT, !1, t.ab, 12), A.vertexAttribPointer(d.ga, 2, A.FLOAT, !1, t.ab, 24), 
            A.vertexAttribPointer(d.cb, 4, A.BYTE, !1, t.ab, 32), A.vertexAttribPointer(d.db, 4, A.UNSIGNED_SHORT, !1, t.ab, 36), 
            A.enableVertexAttribArray(d.fa), A.enableVertexAttribArray(d.ga), A.enableVertexAttribArray(d.ha), 
            A.enableVertexAttribArray(d.cb), A.enableVertexAttribArray(d.db), A.drawElements(A.TRIANGLES, t.$, A.UNSIGNED_SHORT, 0);
        }
        A.flush();
    }
    function h() {
        function a(r) {
            var o, i, u = (r - t) * I || 0;
            t = r, g.Wa && g.Wa.Va(u), P && (o = w - H, e.x = L.x - U.x, e.y = L.y - U.y, i = !1, 
            Math.abs(o) > .5 && (n.s += .1 * o, w -= .05 * o, i = !0), (Math.abs(e.x) > .001 || Math.abs(e.y) > .001) && (n.u += .001 * e.x, 
            n.t += .001 * e.y, L.x -= .05 * e.x, L.y -= .05 * e.y, i = !0), i ? n.v() : P = !1, 
            l(u)), requestAnimationFrame(a);
        }
        var t, e = new Y(), n = g.M;
        requestAnimationFrame(a);
    }
    function b(a) {
        var t = a.pageX, e = a.pageY, n = a.target.getBoundingClientRect();
        U.x = t - g.J.x - n.left, U.y = e - g.J.y - n.top, L.from(U), B = !0;
    }
    function E() {
        var a, t, e;
        B && (a = event.pageX, t = event.pageY, e = event.target.getBoundingClientRect(), 
        U.x = a - g.J.x - e.left, U.y = t - g.J.y - e.top, P = !0);
    }
    function m(a) {
        var t = a.pageX, e = a.pageY, n = a.target.getBoundingClientRect();
        U.x = t - g.J.x - n.left, U.y = e - g.J.y - n.top, B = !1;
    }
    function T(a) {
        var t = a.wheelDelta;
        a.wheelDeltaX, a.wheelDeltaY;
        H += t, P = !0, a.preventDefault();
    }
    var v, p, x, A, R, d, M, g, S, F, I, B, P, L, U, H, w, D, C, N, O, X, Y = function() {
        function a(a, t, e) {
            var n = this;
            n.x = a || 0, n.y = t || 0, n.z = e || 0;
        }
        var t = a.prototype;
        return t.from = function(a) {
            var t = this;
            return t.x = a.x, t.y = a.y, t.z = a.z, t;
        }, t.toString = function() {
            var a = this;
            return "(" + a.x + ", " + a.y + ", " + a.z + ")";
        }, a;
    }(), G = 0, k = 4, W = 8, j = 12, V = 1, q = 5, Z = 9, J = 13, K = 2, $ = 6, Q = 10, aa = 14, ta = 3, ea = 7, na = 11, ra = 15, oa = function() {
        function a() {}
        var t = a.prototype, e = a;
        return e.prototype.__proto__ = Float32Array.prototype, e.create = function() {
            var t = new Float32Array(9);
            return t[G] = 1, t[q] = 1, t[Q] = 1, t.__proto__ = a.prototype, t;
        }, t.d = function(a) {
            var t = this, e = a[G], n = a[k], r = a[W], o = a[j], i = a[V], u = a[q], f = a[Z], c = a[J], s = a[K], _ = a[$], l = a[Q], h = a[aa], b = a[ta], E = a[ea], m = a[na], T = a[ra], v = e * u - n * i, p = e * f - r * i, x = e * c - o * i, A = n * f - r * u, R = n * c - o * u, d = r * c - o * f, y = s * E - _ * b, M = s * m - l * b, g = s * T - h * b, S = _ * m - l * E, F = _ * T - h * E, I = l * T - h * m, B = 1 / (v * I - p * F + x * S + A * g - R * M + d * y);
            return t[0] = (u * I - f * F + c * S) * B, t[1] = (-n * I + r * F - o * S) * B, 
            t[2] = (E * d - m * R + T * A) * B, t[3] = (-i * I + f * g - c * M) * B, t[4] = (e * I - r * g + o * M) * B, 
            t[5] = (-b * d + m * x - T * p) * B, t[6] = (i * F - u * g + c * y) * B, t[7] = (-e * F + n * g - o * y) * B, 
            t[8] = (b * R - E * x + T * v) * B, t;
        }, t.log = function() {
        }, a;
    }(), ia = function() {
        function a() {}
        var t = a.prototype, e = a;
        return e.prototype.__proto__ = Float32Array.prototype, e.create = function() {
            var t = new Float32Array(16);
            return t[G] = 1, t[q] = 1, t[Q] = 1, t[ra] = 1, t.__proto__ = a.prototype, t;
        }, t.e = function() {
            var a = this;
            return a[G] = 1, a[k] = 0, a[W] = 0, a[j] = 0, a[V] = 0, a[q] = 1, a[Z] = 0, a[J] = 0, 
            a[K] = 0, a[$] = 0, a[Q] = 1, a[aa] = 0, a[ta] = 0, a[ea] = 0, a[na] = 0, a[ra] = 1, 
            a;
        }, e.f = function(a) {}, t.log = function() {
        }, t.gb = function(a, t) {
            var e = this;
            return a[0 + t] = e[0], a[1 + t] = e[1], a[2 + t] = e[2], a[3 + t] = e[3], a[4 + t] = e[4], 
            a[5 + t] = e[5], a[6 + t] = e[6], a[7 + t] = e[7], a[8 + t] = e[8], a[9 + t] = e[9], 
            a[10 + t] = e[10], a[11 + t] = e[11], a[12 + t] = e[12], a[13 + t] = e[13], a[14 + t] = e[14], 
            a[15 + t] = e[15], e;
        }, t.hb = function(a, t) {
            var e = this, n = a[G], r = a[k], o = a[W], i = a[j], u = a[V], f = a[q], c = a[Z], s = a[J], _ = a[K], l = a[$], h = a[Q], b = a[aa], E = a[ta], m = a[ea], T = a[na], v = a[ra], p = t[G], x = t[k], A = t[W], R = t[j], d = t[V], y = t[q], M = t[Z], g = t[J], S = t[K], F = t[$], I = t[Q], B = t[aa], P = t[ta], L = t[ea], U = t[na], H = t[ra];
            return e[G] = n * p + r * d + o * S + i * P, e[k] = n * x + r * y + o * F + i * L, 
            e[W] = n * A + r * M + o * I + i * U, e[j] = n * R + r * g + o * B + i * H, e[V] = u * p + f * d + c * S + s * P, 
            e[q] = u * x + f * y + c * F + s * L, e[Z] = u * A + f * M + c * I + s * U, e[J] = u * R + f * g + c * B + s * H, 
            e[K] = _ * p + l * d + h * S + b * P, e[$] = _ * x + l * y + h * F + b * L, e[Q] = _ * A + l * M + h * I + b * U, 
            e[aa] = _ * R + l * g + h * B + b * H, e[ta] = E * p + m * d + T * S + v * P, e[ea] = E * x + m * y + T * F + v * L, 
            e[na] = E * A + m * M + T * I + v * U, e[ra] = E * R + m * g + T * B + v * H, e;
        }, t.h = function(a, t, e, n) {
            var r = this, o = 1 / Math.tan(a * Math.PI / 360);
            return r[G] = o / t, r[k] = r[W] = r[j] = r[V] = 0, r[q] = o, r[Z] = r[J] = r[K] = r[$] = 0, 
            r[Q] = (e + n) / (e - n), r[aa] = 2 * e * n / (e - n), r[ta] = r[ea] = r[ra] = 0, 
            r[na] = -1, r;
        }, t.i = function(a) {
            var t = this, e = a[G], n = a[k], r = a[W], o = a[j], i = a[V], u = a[q], f = a[Z], c = a[J], s = a[K], _ = a[$], l = a[Q], h = a[aa], b = a[ta], E = a[ea], m = a[na], T = a[ra];
            return t[G] = e, t[k] = i, t[W] = s, t[j] = b, t[V] = n, t[q] = u, t[Z] = _, t[J] = E, 
            t[K] = r, t[$] = f, t[Q] = l, t[aa] = m, t[ta] = o, t[ea] = c, t[na] = h, t[ra] = T, 
            t;
        }, t.j = function(a) {
            var t = this, e = a[G], n = a[k], r = a[W], o = a[j], i = a[V], u = a[q], f = a[Z], c = a[J], s = a[K], _ = a[$], l = a[Q], h = a[aa], b = a[ta], E = a[ea], m = a[na], T = a[ra], v = e * u - n * i, p = e * f - r * i, x = e * c - o * i, A = n * f - r * u, R = n * c - o * u, d = r * c - o * f, y = s * E - _ * b, M = s * m - l * b, g = s * T - h * b, S = _ * m - l * E, F = _ * T - h * E, I = l * T - h * m, B = 1 / (v * I - p * F + x * S + A * g - R * M + d * y);
            return t[G] = (u * I - f * F + c * S) * B, t[k] = (-n * I + r * F - o * S) * B, 
            t[W] = (E * d - m * R + T * A) * B, t[j] = (-_ * d + l * R - h * A) * B, t[V] = (-i * I + f * g - c * M) * B, 
            t[q] = (e * I - r * g + o * M) * B, t[Z] = (-b * d + m * x - T * p) * B, t[J] = (s * d - l * x + h * p) * B, 
            t[K] = (i * F - u * g + c * y) * B, t[$] = (-e * F + n * g - o * y) * B, t[Q] = (b * R - E * x + T * v) * B, 
            t[aa] = (-s * R + _ * x - h * v) * B, t[ta] = (-i * S + u * M - f * y) * B, t[ea] = (e * S - n * M + r * y) * B, 
            t[na] = (-b * A + E * p - m * v) * B, t[ra] = (s * A - _ * p + l * v) * B, t;
        }, a;
    }();
    e.create = function() {
        return new e();
    }, v = e.prototype, v.log = function(a) {
    }, v.jb = function(a, t, e, n) {
        var r = this, o = Math.cos(a / 2), i = Math.cos(t / 2), u = Math.cos(e / 2), f = Math.sin(a / 2), c = Math.sin(t / 2), s = Math.sin(e / 2);
        return r.x = f * i * u + o * c * s, r.y = o * c * u - f * i * s, r.z = o * i * s + f * c * u, 
        r.ib = o * i * u - f * c * s, r;
    }, v.g = function(a, t) {
        var e = this, n = a.x, r = a.y, o = a.z, i = a.ib, u = t.x, f = t.y, c = t.z, s = t.ib;
        return e.x = n * s + r * c - o * f + i * u, e.y = -n * c + r * s + o * u + i * f, 
        e.z = n * f - r * u + o * s + i * c, e.ib = -n * u - r * f - o * c + i * s, this;
    }, v.kb = function(a, t, e, n) {
        var r = this, o = n / 2, i = Math.sin(o);
        return r.x = a * i, r.y = t * i, r.z = e * i, r.ib = Math.cos(o), r;
    }, v.lb = function(a) {
        var t = this, e = t.ib, n = t.x, r = t.y, o = t.z, i = e * e + n * n + r * r + o * o, u = 0 === i ? 0 : 2 / i, f = u * e * n, c = u * e * r, s = u * e * o, _ = u * n * n, l = u * n * r, h = u * n * o, b = u * r * r, E = u * r * o, m = u * o * o;
        return a[G] = 1 - (b + m), a[k] = l - s, a[W] = h + c, a[j] = 0, a[V] = l + s, a[q] = 1 - (_ + m), 
        a[Z] = E - f, a[J] = 0, a[K] = h - c, a[$] = E + f, a[Q] = 1 - (_ + b), a[aa] = 0, 
        a[ta] = 0, a[ea] = 0, a[na] = 0, a[ra] = 1, a;
    }, p = function() {
        function a(a) {
            var t = this;
            t.k = ia.create(), t.k.h(75, a.l / a.m, .1, 1e3), t.n = ia.create(), t.o = ia.create(), 
            t.o[0] = 3, t.o[5] = 3, t.o[10] = 3, t.p = ia.create(), t.q = ia.create(), t.r = oa.create(), 
            t.s = 500, t.t = 0, t.u = -Math.PI / 2, t.v();
        }
        var t = a.prototype;
        return t.v = function() {
            var a, t, e, n, r, o, i, u, f, c, s = this, _ = s.n, l = Math.cos(s.u), h = Math.sin(s.u), b = Math.cos(s.t), E = Math.sin(s.t), m = s.s * h * b, T = s.s * E, v = s.s * l * b, p = Math.abs(s.t) % (2 * Math.PI), x = p > .5 * Math.PI && p < 1.5 * Math.PI ? -1 : 1;
            new Y(m, T, v);
            s.x = m, s.y = T, s.z = v, a = -h * b, t = -E, e = -l * b, n = 0, r = -x, o = 0, 
            i = t * o - r * e, u = e * n - a * o, f = a * r - t * n, c = Math.sqrt(i * i + u * u + f * f), 
            0 != c && (c = 1 / c), n = i * c, r = u * c, o = f * c, i = t * o - r * e, u = e * n - a * o, 
            f = a * r - t * n, c = Math.sqrt(i * i + u * u + f * f), 0 != c && (c = 1 / c), 
            i *= c, u *= c, f *= c, _[G] = n, _[k] = r, _[W] = o, _[V] = i, _[q] = u, _[Z] = f, 
            _[K] = a, _[$] = t, _[Q] = e, _[j] = -s.s * (a * n + t * r + e * o), _[J] = -s.s * (a * i + t * u + e * f), 
            _[aa] = 1 * -s.s, _[ta] = 0, _[ea] = 0, _[na] = 0, _[ra] = 1, s.p.hb(s.k, s.n);
        }, a;
    }(), v = n.prototype, v.y = function(a, t, e) {
        var n, r = this;
        r.x++, n = new XMLHttpRequest(), n.responseType = t, n.open("POST", a, !0), n.onload = function() {
            e(n.response, n.responseUrl, n.responseType), ++r.w == r.x && r.B();
        }, n.send();
    }, v.C = function(a, t) {
        var e, n = this;
        n.x++, e = new Image(), e.src = a, e.onload = function() {
            t.call(this, e), ++n.w == n.x && n.B();
        };
    }, v.F = function(a) {
        var t = this;
        return t.x++, function(e) {
            a.apply(this, arguments), ++t.w == t.x && t.B();
        };
    }, n.G = function(a) {
        var t = new n();
        return t.B = a, t;
    }, x = function() {
        function a() {}
        function t() {}
        function n(t) {
            var e = this;
            e.Aa = [], e.Ba = new Float32Array(16 * t.length), t.forEach(function(t) {
                var n, r, o = new a();
                o.Ca = t.rotation, o.Da = t.translation, o.Ea = t.parentId, o.Fa = t.name, o.Ga = ia.create(), 
                o.Ha = ia.create(), o.Ia = ia.create(), o.Ia[0] = t.invTransform.M11, o.Ia[1] = t.invTransform.M12, 
                o.Ia[2] = t.invTransform.M13, o.Ia[4] = t.invTransform.M21, o.Ia[5] = t.invTransform.M22, 
                o.Ia[6] = t.invTransform.M23, o.Ia[8] = t.invTransform.M31, o.Ia[9] = t.invTransform.M32, 
                o.Ia[10] = t.invTransform.M33, o.Ia[12] = t.invTransform.M41, o.Ia[13] = t.invTransform.M42, 
                o.Ia[14] = t.invTransform.M43, o.Ea > -1 && (o.Ja = e.Aa[o.Ea]), n = s = c = 0, 
                r = o.Ga, r.e(), r[j] = o.Da.x, r[J] = o.Da.y, r[aa] = o.Da.z, n = o.Ca.z, s = Math.sin(n), 
                c = Math.cos(n), h[G] = c, h[k] = -s, h[V] = s, h[q] = c, n = o.Ca.y, s = Math.sin(n), 
                c = Math.cos(n), l[G] = c, l[W] = s, l[K] = -s, l[Q] = c, n = o.Ca.x, s = Math.sin(n), 
                c = Math.cos(n), _[q] = c, _[Q] = c, _[$] = s, _[Z] = -s, r.hb(r, h), r.hb(r, l), 
                r.hb(r, _), e.Aa.push(o);
            }), e.Ka();
        }
        function r(a, t, e, n, r, o) {
            var i;
            return i = a + (a - t) * (2 * o - 3) * o * o, i += r * (o - 1) * (e * (o - 1) + n * o);
        }
        function o(a, t) {
            var e, n, o, i, u;
            if (1 == a.length) {
                return a[0].Value;
            }
            for (e = 0; e < a.length - 1; e++) {
                if (t >= a[e].Frame && t <= a[e + 1].Frame) {
                    return n = a[e], o = a[e + 1], i = t - n.Frame, u = i / (o.Frame - n.Frame), r(n.Value, o.Value, n.Slope, o.Slope, i, u);
                }
            }
            throw "bad data";
        }
        var i = ia.create(), u = e.create(), f = ia.create(), _ = ia.create(), l = ia.create(), h = ia.create(), b = n.prototype;
        return b.Ka = function() {
            var a, t, e = this, n = e.Aa;
            for (a = 0; a < n.length; a++) {
                t = n[a], t.Ea > -1 && t.Ha.hb(t.Ja.Ha, t.Ga), i.hb(t.Ha, t.Ia), i.gb(e.Ba, 16 * a);
            }
        }, b.Cb = function(a) {
            var e = this;
            e.La = [], e.Ma = 0, e.Na = a.FramesCount, a.Bones.forEach(function(a) {
                var n, r, o = new t();
                for (o.Fa = a.Name, a.TranslationX && (o.Oa = a.TranslationX), a.TranslationY && (o.Pa = a.TranslationY), 
                a.TranslationZ && (o.Qa = a.TranslationZ), a.RotationX && (o.Ra = a.RotationX), 
                a.RotationY && (o.Sa = a.RotationY), a.RotationZ && (o.Ta = a.RotationZ), n = 0, 
                r = e.Aa.length; r > n; n++) {
                    if (e.Aa[n].Fa == o.Fa) {
                        o.Ua = e.Aa[n];
                        break;
                    }
                }
                e.La.push(o);
            });
        }, b.Va = function(a) {
            var t, e = this;
            e.Ma += a, t = .5 * e.Ma % e.Na, e.La && e.La.forEach(function(a) {
                var e, n, r, i = a.Ua, c = i.Ga.e();
                c[j] = i.Da.x, c[J] = i.Da.y, c[aa] = i.Da.z, a.Oa && (c[j] = o(a.Oa, t)), a.Pa && (c[J] = o(a.Pa, t)), 
                a.Qa && (c[aa] = o(a.Qa, t)), e = y = z = 0, a.Ra && (e = o(a.Ra, t)), a.Sa && (y = o(a.Sa, t)), 
                a.Ta && (z = o(a.Ta, t)), n = Math.sqrt(e * e + y * y + z * z), 0 != n && (r = 1 / n, 
                e *= r, y *= r, z *= r, u.kb(e, y, z, 2 * n), u.lb(f), c.hb(c, f));
            }), e.Ka(), P = !0;
        }, n;
    }(), R = [], S = new Y(), F = 30, I = 1 / F, P = !0, L = new Y(), U = new Y(), document.addEventListener("mousedown", b), 
    document.addEventListener("mousemove", E), document.addEventListener("mouseup", m), 
    document.addEventListener("mousewheel", T), H = 0, w = 0, D = [ "pm0001_00_indices.0_0.json", "pm0001_00_indices.0_1.json", "pm0001_00_mesh.0.raw", [ 2, 1, 0, 0 ], "pm0001_00_BodyA1.png", "pm0001_00_BodyA2.png" ], 
    C = [ "pm0001_00_indices.1_0.json", "pm0001_00_mesh.1.raw", [ 2, 1, 0, 0 ], "pm0001_00_Eye1_Merged.png", "pm0001_00_Eye2.png" ], 
    N = [ "pm0001_00_indices.2_0.json", "pm0001_00_mesh.2.raw", [ 2, 1, 0, 0 ], "pm0001_00_BodyB1.png", "pm0001_00_BodyB2.png" ], 
    O = n.G(function() {
        O.S._a = O.S.eb.concat(O.S.fb), delete O.S.fb, delete O.S.eb, O.S.w = O.S._a.length, 
        O.S.sa = D[3], O._.w = O._._a.length, O._.sa = C[2], O.aa.w = O.aa._a.length, O.aa.sa = N[2], 
        _(O);
    }), O.y("./shaders/Outline.glslv", "text", function(a) {
        O.P = a;
    }), O.y("./shaders/Outline.glslf", "text", function(a) {
        O.Q = a;
    }), O.y("./shaders/Pokemon.glslv", "text", function(a) {
        O.N = a;
    }), O.y("./shaders/Pokemon.glslf", "text", function(a) {
        O.O = a;
    }), X = "./pm0001_00_2/", O.S = {}, O.y(X + D[2], "arraybuffer", function(a) {
        var t = 44;
        O.S.Za = a, O.S.bb = t;
    }), O.y(X + D[1], "json", function(a) {
        O.S.fb = a;
    }), O.y(X + D[0], "json", function(a) {
        O.S.eb = a;
    }), O.C(X + D[4], function(a) {
        O.S.T = a;
    }), O.C(X + D[5], function(a) {
        O.S.R = a;
    }), O._ = {}, O.y(X + C[0], "json", function(a) {
        O._._a = a;
    }), O.y(X + C[1], "arraybuffer", function(a) {
        var t = 44;
        O._.Za = a, O._.bb = t;
    }), O.C(X + C[3], function(a) {
        O._.T = a;
    }), O.C(X + C[4], function(a) {
        O._.R = a;
    }), O.aa = {}, O.y(X + N[0], "json", function(a) {
        O.aa._a = a;
    }), O.y(X + N[1], "arraybuffer", function(a) {
        var t = 44;
        O.aa.Za = a, O.aa.bb = t;
    }), O.C(X + N[3], function(a) {
        O.aa.T = a;
    }), O.C(X + N[4], function(a) {
        O.aa.R = a;
    }), O.y(X + "pm0001_00_skeleton.json", "json", function(a) {
        O.Wa = new x(a);
    }), O.y(X + "pm0001_00_motion.6.json", "json", function(a) {
        O.Xa = a;
    }), t.Mb = a;
}({}, function() {
    return this;
}());