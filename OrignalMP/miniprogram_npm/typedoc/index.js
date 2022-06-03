module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1654179213604, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeScript = exports.SerializeEvent = exports.SerializerComponent = exports.Serializer = exports.JSONOutput = exports.EventHooks = exports.EntryPointStrategy = exports.TypeDocReader = exports.TSConfigReader = exports.ParameterType = exports.ParameterHint = exports.Options = exports.Logger = exports.LogLevel = exports.JSX = exports.BindOption = exports.ArgumentsReader = exports.MarkdownEvent = exports.RendererEvent = exports.PageEvent = exports.Theme = exports.UrlMapping = exports.DefaultThemeRenderContext = exports.DefaultTheme = exports.Renderer = exports.Context = exports.Converter = exports.normalizePath = exports.resetReflectionID = exports.Event = exports.EventDispatcher = exports.Application = void 0;
var application_1 = require("./lib/application");
Object.defineProperty(exports, "Application", { enumerable: true, get: function () { return application_1.Application; } });
var events_1 = require("./lib/utils/events");
Object.defineProperty(exports, "EventDispatcher", { enumerable: true, get: function () { return events_1.EventDispatcher; } });
Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return events_1.Event; } });
var abstract_1 = require("./lib/models/reflections/abstract");
Object.defineProperty(exports, "resetReflectionID", { enumerable: true, get: function () { return abstract_1.resetReflectionID; } });
var fs_1 = require("./lib/utils/fs");
Object.defineProperty(exports, "normalizePath", { enumerable: true, get: function () { return fs_1.normalizePath; } });
__exportStar(require("./lib/models"), exports);
var converter_1 = require("./lib/converter");
Object.defineProperty(exports, "Converter", { enumerable: true, get: function () { return converter_1.Converter; } });
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return converter_1.Context; } });
var output_1 = require("./lib/output");
Object.defineProperty(exports, "Renderer", { enumerable: true, get: function () { return output_1.Renderer; } });
Object.defineProperty(exports, "DefaultTheme", { enumerable: true, get: function () { return output_1.DefaultTheme; } });
Object.defineProperty(exports, "DefaultThemeRenderContext", { enumerable: true, get: function () { return output_1.DefaultThemeRenderContext; } });
Object.defineProperty(exports, "UrlMapping", { enumerable: true, get: function () { return output_1.UrlMapping; } });
Object.defineProperty(exports, "Theme", { enumerable: true, get: function () { return output_1.Theme; } });
Object.defineProperty(exports, "PageEvent", { enumerable: true, get: function () { return output_1.PageEvent; } });
Object.defineProperty(exports, "RendererEvent", { enumerable: true, get: function () { return output_1.RendererEvent; } });
Object.defineProperty(exports, "MarkdownEvent", { enumerable: true, get: function () { return output_1.MarkdownEvent; } });
var utils_1 = require("./lib/utils");
Object.defineProperty(exports, "ArgumentsReader", { enumerable: true, get: function () { return utils_1.ArgumentsReader; } });
Object.defineProperty(exports, "BindOption", { enumerable: true, get: function () { return utils_1.BindOption; } });
Object.defineProperty(exports, "JSX", { enumerable: true, get: function () { return utils_1.JSX; } });
Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function () { return utils_1.LogLevel; } });
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return utils_1.Logger; } });
Object.defineProperty(exports, "Options", { enumerable: true, get: function () { return utils_1.Options; } });
Object.defineProperty(exports, "ParameterHint", { enumerable: true, get: function () { return utils_1.ParameterHint; } });
Object.defineProperty(exports, "ParameterType", { enumerable: true, get: function () { return utils_1.ParameterType; } });
Object.defineProperty(exports, "TSConfigReader", { enumerable: true, get: function () { return utils_1.TSConfigReader; } });
Object.defineProperty(exports, "TypeDocReader", { enumerable: true, get: function () { return utils_1.TypeDocReader; } });
Object.defineProperty(exports, "EntryPointStrategy", { enumerable: true, get: function () { return utils_1.EntryPointStrategy; } });
Object.defineProperty(exports, "EventHooks", { enumerable: true, get: function () { return utils_1.EventHooks; } });
var serialization_1 = require("./lib/serialization");
Object.defineProperty(exports, "JSONOutput", { enumerable: true, get: function () { return serialization_1.JSONOutput; } });
Object.defineProperty(exports, "Serializer", { enumerable: true, get: function () { return serialization_1.Serializer; } });
Object.defineProperty(exports, "SerializerComponent", { enumerable: true, get: function () { return serialization_1.SerializerComponent; } });
Object.defineProperty(exports, "SerializeEvent", { enumerable: true, get: function () { return serialization_1.SerializeEvent; } });
const TypeScript = require("typescript");
exports.TypeScript = TypeScript;

}, function(modId) {var map = {"./lib/utils/events":1654179213606,"./lib/models/reflections/abstract":1654179213607,"./lib/utils/fs":1654179213610,"./lib/models":1654179213611,"./lib/converter":1654179213650,"./lib/output":1654179213680,"./lib/utils":1654179213624,"./lib/serialization":1654179213722}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213606, function(require, module, exports) {

// Backbone.js 1.2.3
// (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
// Backbone may be freely distributed under the MIT license.
// For all details and documentation:
// https://backbonejs.org
//
// The Events object is a typesafe conversion of Backbones Events object:
// https://github.com/jashkenas/backbone/blob/05fde9e201f7e2137796663081105cd6dad12a98/backbone.js#L119-L374
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDispatcher = exports.Event = void 0;
const uniqueId = (function () {
    const prefixes = Object.create(null);
    return function (prefix) {
        const unique = prefixes[prefix] || 1;
        prefixes[prefix] = unique + 1;
        return `${prefix}${unique}`;
    };
})();
function once(cb) {
    let hasRun = false;
    let result;
    return function (...args) {
        if (hasRun === false) {
            hasRun = true;
            result = cb.apply(this, args);
        }
        return result;
    };
}
// Regular expression used to split event strings.
const eventSplitter = /\s+/;
/**
 * Iterates over the standard `event, callback` (as well as the fancy multiple
 * space-separated events `"change blur", callback` and jQuery-style event
 * maps `{event: callback}`).
 */
function eventsApi(iteratee, events, name, callback, options) {
    let i = 0, names;
    const anyOptions = options;
    if (name && typeof name === "object") {
        // Handle event maps.
        if (callback !== void 0 &&
            "context" in options &&
            anyOptions["context"] === void 0) {
            anyOptions["context"] = callback;
        }
        for (names = Object.keys(name); i < names.length; i++) {
            events = eventsApi(iteratee, events, names[i], name[names[i]], options);
        }
    }
    else if (name && typeof name === "string" && eventSplitter.test(name)) {
        // Handle space separated event names by delegating them individually.
        for (names = name.split(eventSplitter); i < names.length; i++) {
            events = iteratee(events, names[i], callback, options);
        }
    }
    else {
        // Finally, standard events.
        events = iteratee(events, name, callback, options);
    }
    return events;
}
/**
 * The reducing API that adds a callback to the `events` object.
 */
function onApi(events, name, callback, options) {
    if (callback) {
        const handlers = events[name] || (events[name] = []);
        const context = options.context, ctx = options.ctx, listening = options.listening, priority = options.priority;
        if (listening) {
            listening.count++;
        }
        handlers.push({
            callback: callback,
            context: context,
            ctx: context || ctx,
            listening: listening,
            priority: priority,
        });
        handlers.sort((a, b) => b.priority - a.priority);
    }
    return events;
}
/**
 * The reducing API that removes a callback from the `events` object.
 */
function offApi(events, name, callback, options) {
    if (!events) {
        return;
    }
    let i = 0, listening;
    const context = options.context, listeners = options.listeners;
    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
        const ids = Object.keys(listeners || {});
        for (; i < ids.length; i++) {
            listening = listeners[ids[i]];
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
        }
        return;
    }
    const names = name ? [name] : Object.keys(events || {});
    for (; i < names.length; i++) {
        name = names[i];
        const handlers = events[name];
        // Bail out if there are no events stored.
        if (!handlers) {
            break;
        }
        // Replace events if there are any remaining.  Otherwise, clean up.
        const remaining = [];
        for (let j = 0; j < handlers.length; j++) {
            const handler = handlers[j];
            if ((callback &&
                callback !== handler.callback &&
                callback !== handler.callback._callback) ||
                (context && context !== handler.context)) {
                remaining.push(handler);
            }
            else {
                listening = handler.listening;
                if (listening && --listening.count === 0) {
                    delete listeners[listening.id];
                    delete listening.listeningTo[listening.objId];
                }
            }
        }
        // Update tail event if the list has any events.  Otherwise, clean up.
        if (remaining.length) {
            events[name] = remaining;
        }
        else {
            delete events[name];
        }
    }
    if (Object.keys(events || {}).length !== 0) {
        return events;
    }
}
/**
 * Reduces the event callbacks into a map of `{event: onceWrapper`.}
 * `offer` unbinds the `onceWrapper` after it has been called.
 */
function onceMap(map, name, callback, offer) {
    if (callback) {
        const listener = (map[name] = once(function (...args) {
            offer(name, listener);
            callback.apply(this, args);
        }));
        listener._callback = callback;
    }
    return map;
}
/**
 * Handles triggering the appropriate event callbacks.
 */
function triggerApi(objEvents, name, _callback, args, triggerer = triggerEvents) {
    if (objEvents) {
        const events = objEvents[name];
        let allEvents = objEvents["all"];
        if (events && allEvents) {
            allEvents = allEvents.slice();
        }
        if (events) {
            triggerer(events, args);
        }
        if (allEvents) {
            triggerer(allEvents, [name].concat(args));
        }
    }
    return objEvents;
}
/**
 * A difficult-to-believe, but optimized internal dispatch function for
 * triggering events. Tries to keep the usual cases speedy (most internal
 * Backbone events have 3 arguments).
 */
function triggerEvents(events, args) {
    let ev, i = -1;
    const l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
        case 0:
            while (++i < l) {
                (ev = events[i]).callback.call(ev.ctx);
            }
            return;
        case 1:
            while (++i < l) {
                (ev = events[i]).callback.call(ev.ctx, a1);
            }
            return;
        case 2:
            while (++i < l) {
                (ev = events[i]).callback.call(ev.ctx, a1, a2);
            }
            return;
        case 3:
            while (++i < l) {
                (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
            }
            return;
        default:
            while (++i < l) {
                (ev = events[i]).callback.apply(ev.ctx, args);
            }
            return;
    }
}
/**
 * An event object.
 */
class Event {
    /**
     * Create a new Event instance.
     */
    constructor(name) {
        /**
         * Has {@link Event.stopPropagation} been called?
         */
        this._isPropagationStopped = false;
        /**
         * Has {@link Event.preventDefault} been called?
         */
        this._isDefaultPrevented = false;
        this._name = name;
    }
    /**
     * Stop the propagation of this event. Remaining event handlers will not be executed.
     */
    stopPropagation() {
        this._isPropagationStopped = true;
    }
    /**
     * Prevent the default action associated with this event from being executed.
     */
    preventDefault() {
        this._isDefaultPrevented = true;
    }
    /**
     * Return the event name.
     */
    get name() {
        return this._name;
    }
    /**
     * Has {@link Event.stopPropagation} been called?
     */
    get isPropagationStopped() {
        return this._isPropagationStopped;
    }
    /**
     * Has {@link Event.preventDefault} been called?
     */
    get isDefaultPrevented() {
        return this._isDefaultPrevented;
    }
}
exports.Event = Event;
/**
 * A class that provides a custom event channel.
 *
 * You may bind a callback to an event with `on` or remove with `off`;
 * `trigger`-ing an event fires all callbacks in succession.
 */
class EventDispatcher {
    /**
     * A unique id that identifies this instance.
     */
    get _listenId() {
        return this._savedListenId || (this._savedListenId = uniqueId("l"));
    }
    on(nameOrMap, callback, context, priority) {
        this.internalOn(nameOrMap, callback, context, priority);
        return this;
    }
    /**
     * Guard the `listening` argument from the public API.
     */
    internalOn(name, callback, context, priority = 0, listening) {
        this._events = eventsApi(onApi, this._events || {}, name, callback, {
            context: context,
            ctx: this,
            listening: listening,
            priority: priority,
        });
        if (listening) {
            const listeners = this._listeners || (this._listeners = {});
            listeners[listening.id] = listening;
        }
    }
    once(name, callback, context, priority) {
        // Map the event into a `{event: once}` object.
        const events = eventsApi(onceMap, {}, name, callback, this.off.bind(this));
        return this.on(events, void 0, context, priority);
    }
    off(name, callback, context) {
        if (!this._events) {
            return this;
        }
        this._events = eventsApi(offApi, this._events, name, callback, {
            context: context,
            listeners: this._listeners,
        });
        return this;
    }
    /**
     * Inversion-of-control versions of `on`. Tell *this* object to listen to
     * an event in another object... keeping track of what it's listening to
     * for easier unbinding later.
     */
    listenTo(obj, name, callback, priority) {
        if (!obj) {
            return this;
        }
        const id = obj._listenId;
        const listeningTo = this._listeningTo || (this._listeningTo = {});
        let listening = listeningTo[id];
        // This object is not listening to any other events on `obj` yet.
        // Setup the necessary references to track the listening callbacks.
        if (!listening) {
            const thisId = this._listenId;
            listening = listeningTo[id] = {
                obj: obj,
                objId: id,
                id: thisId,
                listeningTo: listeningTo,
                count: 0,
            };
        }
        // Bind callbacks on obj, and keep track of them on listening.
        obj.internalOn(name, callback, this, priority, listening);
        return this;
    }
    listenToOnce(obj, name, callback, priority) {
        // Map the event into a `{event: once}` object.
        const events = eventsApi(onceMap, {}, name, callback, this.stopListening.bind(this, obj));
        return this.listenTo(obj, events, void 0, priority);
    }
    /**
     * Tell this object to stop listening to either specific events ... or
     * to every object it's currently listening to.
     */
    stopListening(obj, name, callback) {
        const listeningTo = this._listeningTo;
        if (!listeningTo) {
            return this;
        }
        const ids = obj ? [obj._listenId] : Object.keys(listeningTo);
        for (let i = 0; i < ids.length; i++) {
            const listening = listeningTo[ids[i]];
            // If listening doesn't exist, this object is not currently
            // listening to obj. Break out early.
            if (!listening) {
                break;
            }
            listening.obj.off(name, callback, this);
        }
        if (Object.keys(listeningTo).length === 0) {
            this._listeningTo = void 0;
        }
        return this;
    }
    /**
     * Trigger one or many events, firing all bound callbacks. Callbacks are
     * passed the same arguments as `trigger` is, apart from the event name
     * (unless you're listening on `"all"`, which will cause your callback to
     * receive the true name of the event as the first argument).
     */
    trigger(name, ...args) {
        if (!this._events) {
            return this;
        }
        if (name instanceof Event) {
            triggerApi(this._events, name.name, void 0, [name], (events, args) => {
                let ev, i = -1;
                const l = events.length;
                while (++i < l) {
                    if (name.isPropagationStopped) {
                        return;
                    }
                    ev = events[i];
                    ev.callback.apply(ev.ctx, args);
                }
            });
        }
        else {
            eventsApi(triggerApi, this._events, name, void 0, args);
        }
        return this;
    }
}
exports.EventDispatcher = EventDispatcher;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213607, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Reflection = exports.TraverseProperty = exports.ReflectionFlags = exports.ReflectionFlag = exports.resetReflectionID = void 0;
const assert_1 = require("assert");
const utils_1 = require("./utils");
const kind_1 = require("./kind");
/**
 * Holds all data models used by TypeDoc.
 *
 * The {@link BaseReflection} is base class of all reflection models. The subclass {@link ProjectReflection}
 * serves as the root container for the current project while {@link DeclarationReflection} instances
 * form the structure of the project. Most of the other classes in this namespace are referenced by this
 * two base classes.
 *
 * The models {@link NavigationItem} and {@link UrlMapping} are special as they are only used by the {@link Renderer}
 * while creating the final output.
 */
/**
 * Current reflection id.
 */
let REFLECTION_ID = 0;
/**
 * Reset the reflection id.
 *
 * Used by the test cases to ensure the reflection ids won't change between runs.
 */
function resetReflectionID() {
    REFLECTION_ID = 0;
}
exports.resetReflectionID = resetReflectionID;
var ReflectionFlag;
(function (ReflectionFlag) {
    ReflectionFlag[ReflectionFlag["None"] = 0] = "None";
    ReflectionFlag[ReflectionFlag["Private"] = 1] = "Private";
    ReflectionFlag[ReflectionFlag["Protected"] = 2] = "Protected";
    ReflectionFlag[ReflectionFlag["Public"] = 4] = "Public";
    ReflectionFlag[ReflectionFlag["Static"] = 8] = "Static";
    ReflectionFlag[ReflectionFlag["ExportAssignment"] = 16] = "ExportAssignment";
    ReflectionFlag[ReflectionFlag["External"] = 32] = "External";
    ReflectionFlag[ReflectionFlag["Optional"] = 64] = "Optional";
    ReflectionFlag[ReflectionFlag["DefaultValue"] = 128] = "DefaultValue";
    ReflectionFlag[ReflectionFlag["Rest"] = 256] = "Rest";
    ReflectionFlag[ReflectionFlag["Abstract"] = 512] = "Abstract";
    ReflectionFlag[ReflectionFlag["Const"] = 1024] = "Const";
    ReflectionFlag[ReflectionFlag["Let"] = 2048] = "Let";
    ReflectionFlag[ReflectionFlag["Readonly"] = 4096] = "Readonly";
})(ReflectionFlag = exports.ReflectionFlag || (exports.ReflectionFlag = {}));
const relevantFlags = [
    ReflectionFlag.Private,
    ReflectionFlag.Protected,
    ReflectionFlag.Static,
    ReflectionFlag.ExportAssignment,
    ReflectionFlag.Optional,
    ReflectionFlag.DefaultValue,
    ReflectionFlag.Rest,
    ReflectionFlag.Abstract,
    ReflectionFlag.Const,
    ReflectionFlag.Readonly,
];
/**
 * This must extend Array in order to work with Handlebar's each helper.
 */
class ReflectionFlags extends Array {
    constructor() {
        super(...arguments);
        this.flags = ReflectionFlag.None;
    }
    hasFlag(flag) {
        return (flag & this.flags) !== 0;
    }
    /**
     * Is this a private member?
     */
    get isPrivate() {
        return this.hasFlag(ReflectionFlag.Private);
    }
    /**
     * Is this a protected member?
     */
    get isProtected() {
        return this.hasFlag(ReflectionFlag.Protected);
    }
    /**
     * Is this a public member?
     */
    get isPublic() {
        return this.hasFlag(ReflectionFlag.Public);
    }
    /**
     * Is this a static member?
     */
    get isStatic() {
        return this.hasFlag(ReflectionFlag.Static);
    }
    /**
     * Is this a declaration from an external document?
     */
    get isExternal() {
        return this.hasFlag(ReflectionFlag.External);
    }
    /**
     * Whether this reflection is an optional component or not.
     *
     * Applies to function parameters and object members.
     */
    get isOptional() {
        return this.hasFlag(ReflectionFlag.Optional);
    }
    /**
     * Whether it's a rest parameter, like `foo(...params);`.
     */
    get isRest() {
        return this.hasFlag(ReflectionFlag.Rest);
    }
    get hasExportAssignment() {
        return this.hasFlag(ReflectionFlag.ExportAssignment);
    }
    get isAbstract() {
        return this.hasFlag(ReflectionFlag.Abstract);
    }
    get isConst() {
        return this.hasFlag(ReflectionFlag.Const);
    }
    get isReadonly() {
        return this.hasFlag(ReflectionFlag.Readonly);
    }
    setFlag(flag, set) {
        switch (flag) {
            case ReflectionFlag.Private:
                this.setSingleFlag(ReflectionFlag.Private, set);
                if (set) {
                    this.setFlag(ReflectionFlag.Protected, false);
                    this.setFlag(ReflectionFlag.Public, false);
                }
                break;
            case ReflectionFlag.Protected:
                this.setSingleFlag(ReflectionFlag.Protected, set);
                if (set) {
                    this.setFlag(ReflectionFlag.Private, false);
                    this.setFlag(ReflectionFlag.Public, false);
                }
                break;
            case ReflectionFlag.Public:
                this.setSingleFlag(ReflectionFlag.Public, set);
                if (set) {
                    this.setFlag(ReflectionFlag.Private, false);
                    this.setFlag(ReflectionFlag.Protected, false);
                }
                break;
            default:
                this.setSingleFlag(flag, set);
        }
    }
    setSingleFlag(flag, set) {
        const name = ReflectionFlag[flag].replace(/(.)([A-Z])/g, (_m, a, b) => a + " " + b.toLowerCase());
        if (!set && this.hasFlag(flag)) {
            if (relevantFlags.includes(flag)) {
                this.splice(this.indexOf(name), 1);
            }
            this.flags ^= flag;
        }
        else if (set && !this.hasFlag(flag)) {
            if (relevantFlags.includes(flag)) {
                this.push(name);
            }
            this.flags |= flag;
        }
    }
}
exports.ReflectionFlags = ReflectionFlags;
var TraverseProperty;
(function (TraverseProperty) {
    TraverseProperty[TraverseProperty["Children"] = 0] = "Children";
    TraverseProperty[TraverseProperty["Parameters"] = 1] = "Parameters";
    TraverseProperty[TraverseProperty["TypeLiteral"] = 2] = "TypeLiteral";
    TraverseProperty[TraverseProperty["TypeParameter"] = 3] = "TypeParameter";
    TraverseProperty[TraverseProperty["Signatures"] = 4] = "Signatures";
    TraverseProperty[TraverseProperty["IndexSignature"] = 5] = "IndexSignature";
    TraverseProperty[TraverseProperty["GetSignature"] = 6] = "GetSignature";
    TraverseProperty[TraverseProperty["SetSignature"] = 7] = "SetSignature";
})(TraverseProperty = exports.TraverseProperty || (exports.TraverseProperty = {}));
/**
 * Base class for all reflection classes.
 *
 * While generating a documentation, TypeDoc generates an instance of {@link ProjectReflection}
 * as the root for all reflections within the project. All other reflections are represented
 * by the {@link DeclarationReflection} class.
 *
 * This base class exposes the basic properties one may use to traverse the reflection tree.
 * You can use the {@link ContainerReflection.children} and {@link parent} properties to walk the tree. The {@link groups} property
 * contains a list of all children grouped and sorted for being rendered.
 */
class Reflection {
    /**
     * Create a new BaseReflection instance.
     */
    constructor(name, kind, parent) {
        this.flags = new ReflectionFlags();
        this.id = REFLECTION_ID++;
        this.parent = parent;
        this.name = name;
        this.originalName = name;
        this.kind = kind;
        // If our parent is external, we are too.
        if (parent === null || parent === void 0 ? void 0 : parent.flags.isExternal) {
            this.setFlag(ReflectionFlag.External);
        }
    }
    get project() {
        if (this.isProject())
            return this;
        (0, assert_1.ok)(this.parent, "Tried to get the project on a reflection not in a project");
        return this.parent.project;
    }
    /**
     * Test whether this reflection is of the given kind.
     */
    kindOf(kind) {
        const kindArray = Array.isArray(kind) ? kind : [kind];
        return kindArray.some((kind) => (this.kind & kind) !== 0);
    }
    /**
     * Return the full name of this reflection. Intended for use in debugging. For log messages
     * intended to be displayed to the user for them to fix, prefer {@link getFriendlyFullName} instead.
     *
     * The full name contains the name of this reflection and the names of all parent reflections.
     *
     * @param separator  Separator used to join the names of the reflections.
     * @returns The full name of this reflection.
     */
    getFullName(separator = ".") {
        if (this.parent && !this.parent.isProject()) {
            return this.parent.getFullName(separator) + separator + this.name;
        }
        else {
            return this.name;
        }
    }
    /**
     * Return the full name of this reflection, with signature names dropped if possible without
     * introducing ambiguity in the name.
     */
    getFriendlyFullName() {
        if (this.parent && !this.parent.isProject()) {
            if (this.kindOf(kind_1.ReflectionKind.ConstructorSignature |
                kind_1.ReflectionKind.CallSignature |
                kind_1.ReflectionKind.GetSignature |
                kind_1.ReflectionKind.SetSignature)) {
                return this.parent.getFriendlyFullName();
            }
            return this.parent.getFriendlyFullName() + "." + this.name;
        }
        else {
            return this.name;
        }
    }
    /**
     * Set a flag on this reflection.
     */
    setFlag(flag, value = true) {
        this.flags.setFlag(flag, value);
    }
    /**
     * Return an url safe alias for this reflection.
     */
    getAlias() {
        if (!this._alias) {
            let alias = this.name.replace(/[^a-z0-9]/gi, "_");
            if (alias === "") {
                alias = "reflection-" + this.id;
            }
            let target = this;
            while (target.parent &&
                !target.parent.isProject() &&
                !target.hasOwnDocument) {
                target = target.parent;
            }
            if (!target._aliases) {
                target._aliases = new Map();
            }
            let suffix = "";
            if (!target._aliases.has(alias)) {
                target._aliases.set(alias, 1);
            }
            else {
                const count = target._aliases.get(alias);
                suffix = "-" + count.toString();
                target._aliases.set(alias, count + 1);
            }
            alias += suffix;
            this._alias = alias;
        }
        return this._alias;
    }
    /**
     * Has this reflection a visible comment?
     *
     * @returns TRUE when this reflection has a visible comment.
     */
    hasComment() {
        return this.comment ? this.comment.hasVisibleComponent() : false;
    }
    hasGetterOrSetter() {
        return false;
    }
    /**
     * Return a child by its name.
     *
     * @param names The name hierarchy of the child to look for.
     * @returns The found child or undefined.
     */
    getChildByName(arg) {
        const names = Array.isArray(arg)
            ? arg
            : (0, utils_1.splitUnquotedString)(arg, ".");
        const name = names[0];
        let result;
        this.traverse((child) => {
            if (child.name === name) {
                if (names.length <= 1) {
                    result = child;
                }
                else {
                    result = child.getChildByName(names.slice(1));
                }
                return false;
            }
            return true;
        });
        return result;
    }
    /**
     * Return whether this reflection is the root / project reflection.
     */
    isProject() {
        return false;
    }
    /**
     * Try to find a reflection by its name.
     *
     * @return The found reflection or null.
     */
    findReflectionByName(arg) {
        const names = Array.isArray(arg)
            ? arg
            : (0, utils_1.splitUnquotedString)(arg, ".");
        const reflection = this.getChildByName(names);
        if (reflection) {
            return reflection;
        }
        else if (this.parent) {
            return this.parent.findReflectionByName(names);
        }
    }
    /**
     * Traverse all potential child reflections of this reflection.
     *
     * The given callback will be invoked for all children, signatures and type parameters
     * attached to this reflection.
     *
     * @param callback  The callback function that should be applied for each child reflection.
     */
    traverse(_callback) {
        // do nothing here, overridden by child classes
    }
    /**
     * Return a string representation of this reflection.
     */
    toString() {
        return kind_1.ReflectionKind[this.kind] + " " + this.name;
    }
    /**
     * Return a string representation of this reflection and all of its children.
     *
     * @param indent  Used internally to indent child reflections.
     */
    toStringHierarchy(indent = "") {
        const lines = [indent + this.toString()];
        indent += "  ";
        this.traverse((child) => {
            lines.push(child.toStringHierarchy(indent));
            return true;
        });
        return lines.join("\n");
    }
}
exports.Reflection = Reflection;

}, function(modId) { var map = {"./utils":1654179213608,"./kind":1654179213609}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213608, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.splitUnquotedString = void 0;
function splitUnquotedString(input, delimiter) {
    if (input.startsWith(delimiter)) {
        return splitUnquotedString(input.substring(delimiter.length), delimiter);
    }
    if (input.startsWith('"')) {
        // the part inside the quotes should not be split, the rest should
        const closingQuoteIndex = input.indexOf('"', 1);
        if (closingQuoteIndex === -1) {
            // Unmatched quotes, just split it
            return input.split(delimiter);
        }
        if (closingQuoteIndex === input.length - 1) {
            return [input];
        }
        else {
            const remainder = input.substring(closingQuoteIndex + 1);
            const result = [input.substring(0, closingQuoteIndex + 1)];
            result.push(...splitUnquotedString(remainder, delimiter));
            return result;
        }
    }
    else {
        return input.split(delimiter);
    }
}
exports.splitUnquotedString = splitUnquotedString;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213609, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionKind = void 0;
/**
 * Defines the available reflection kinds.
 */
var ReflectionKind;
(function (ReflectionKind) {
    ReflectionKind[ReflectionKind["Project"] = 1] = "Project";
    ReflectionKind[ReflectionKind["Module"] = 2] = "Module";
    ReflectionKind[ReflectionKind["Namespace"] = 4] = "Namespace";
    ReflectionKind[ReflectionKind["Enum"] = 8] = "Enum";
    ReflectionKind[ReflectionKind["EnumMember"] = 16] = "EnumMember";
    ReflectionKind[ReflectionKind["Variable"] = 32] = "Variable";
    ReflectionKind[ReflectionKind["Function"] = 64] = "Function";
    ReflectionKind[ReflectionKind["Class"] = 128] = "Class";
    ReflectionKind[ReflectionKind["Interface"] = 256] = "Interface";
    ReflectionKind[ReflectionKind["Constructor"] = 512] = "Constructor";
    ReflectionKind[ReflectionKind["Property"] = 1024] = "Property";
    ReflectionKind[ReflectionKind["Method"] = 2048] = "Method";
    ReflectionKind[ReflectionKind["CallSignature"] = 4096] = "CallSignature";
    ReflectionKind[ReflectionKind["IndexSignature"] = 8192] = "IndexSignature";
    ReflectionKind[ReflectionKind["ConstructorSignature"] = 16384] = "ConstructorSignature";
    ReflectionKind[ReflectionKind["Parameter"] = 32768] = "Parameter";
    ReflectionKind[ReflectionKind["TypeLiteral"] = 65536] = "TypeLiteral";
    ReflectionKind[ReflectionKind["TypeParameter"] = 131072] = "TypeParameter";
    ReflectionKind[ReflectionKind["Accessor"] = 262144] = "Accessor";
    ReflectionKind[ReflectionKind["GetSignature"] = 524288] = "GetSignature";
    ReflectionKind[ReflectionKind["SetSignature"] = 1048576] = "SetSignature";
    ReflectionKind[ReflectionKind["ObjectLiteral"] = 2097152] = "ObjectLiteral";
    ReflectionKind[ReflectionKind["TypeAlias"] = 4194304] = "TypeAlias";
    ReflectionKind[ReflectionKind["Event"] = 8388608] = "Event";
    ReflectionKind[ReflectionKind["Reference"] = 16777216] = "Reference";
})(ReflectionKind = exports.ReflectionKind || (exports.ReflectionKind = {}));
/** @hidden */
(function (ReflectionKind) {
    ReflectionKind.All = ReflectionKind.Reference * 2 - 1;
    ReflectionKind.ClassOrInterface = ReflectionKind.Class | ReflectionKind.Interface;
    ReflectionKind.VariableOrProperty = ReflectionKind.Variable | ReflectionKind.Property;
    ReflectionKind.FunctionOrMethod = ReflectionKind.Function | ReflectionKind.Method;
    ReflectionKind.ClassMember = ReflectionKind.Accessor |
        ReflectionKind.Constructor |
        ReflectionKind.Method |
        ReflectionKind.Property |
        ReflectionKind.Event;
    ReflectionKind.SomeSignature = ReflectionKind.CallSignature |
        ReflectionKind.IndexSignature |
        ReflectionKind.ConstructorSignature |
        ReflectionKind.GetSignature |
        ReflectionKind.SetSignature;
    ReflectionKind.SomeModule = ReflectionKind.Namespace | ReflectionKind.Module;
    ReflectionKind.SomeType = ReflectionKind.Interface |
        ReflectionKind.TypeLiteral |
        ReflectionKind.TypeParameter |
        ReflectionKind.TypeAlias;
    ReflectionKind.SomeValue = ReflectionKind.Variable |
        ReflectionKind.Function |
        ReflectionKind.ObjectLiteral;
    /** @internal */
    ReflectionKind.Inheritable = ReflectionKind.Accessor |
        ReflectionKind.IndexSignature |
        ReflectionKind.Property |
        ReflectionKind.Method |
        ReflectionKind.Constructor;
})(ReflectionKind = exports.ReflectionKind || (exports.ReflectionKind = {}));

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213610, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.copySync = exports.copy = exports.writeFile = exports.writeFileSync = exports.readFile = exports.normalizePath = exports.getCommonDirectory = void 0;
const fs = require("fs");
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * Get the longest directory path common to all files.
 */
function getCommonDirectory(files) {
    if (!files.length) {
        return "";
    }
    const roots = files.map((f) => f.split(/\\|\//));
    if (roots.length === 1) {
        return roots[0].slice(0, -1).join("/");
    }
    let i = 0;
    while (new Set(roots.map((part) => part[i])).size === 1) {
        i++;
    }
    return roots[0].slice(0, i).join("/");
}
exports.getCommonDirectory = getCommonDirectory;
/**
 * Normalize the given path.
 *
 * @param path  The path that should be normalized.
 * @returns The normalized path.
 */
function normalizePath(path) {
    return path.replace(/\\/g, "/");
}
exports.normalizePath = normalizePath;
/**
 * Load the given file and return its contents.
 *
 * @param file  The path of the file to read.
 * @returns The files contents.
 */
function readFile(file) {
    const buffer = fs.readFileSync(file);
    switch (buffer[0]) {
        case 0xfe:
            if (buffer[1] === 0xff) {
                let i = 0;
                while (i + 1 < buffer.length) {
                    const temp = buffer[i];
                    buffer[i] = buffer[i + 1];
                    buffer[i + 1] = temp;
                    i += 2;
                }
                return buffer.toString("ucs2", 2);
            }
            break;
        case 0xff:
            if (buffer[1] === 0xfe) {
                return buffer.toString("ucs2", 2);
            }
            break;
        case 0xef:
            if (buffer[1] === 0xbb) {
                return buffer.toString("utf8", 3);
            }
    }
    return buffer.toString("utf8", 0);
}
exports.readFile = readFile;
/**
 * Write a file to disc.
 *
 * If the containing directory does not exist it will be created.
 *
 * @param fileName  The name of the file that should be written.
 * @param data  The contents of the file.
 */
function writeFileSync(fileName, data) {
    fs.mkdirSync((0, path_1.dirname)(normalizePath(fileName)), { recursive: true });
    fs.writeFileSync(normalizePath(fileName), data);
}
exports.writeFileSync = writeFileSync;
/**
 * Write a file to disc.
 *
 * If the containing directory does not exist it will be created.
 *
 * @param fileName  The name of the file that should be written.
 * @param data  The contents of the file.
 */
async function writeFile(fileName, data) {
    await fs_1.promises.mkdir((0, path_1.dirname)(normalizePath(fileName)), {
        recursive: true,
    });
    await fs_1.promises.writeFile(normalizePath(fileName), data);
}
exports.writeFile = writeFile;
/**
 * Copy a file or directory recursively.
 */
async function copy(src, dest) {
    const stat = await fs_1.promises.stat(src);
    if (stat.isDirectory()) {
        const contained = await fs_1.promises.readdir(src);
        await Promise.all(contained.map((file) => copy((0, path_1.join)(src, file), (0, path_1.join)(dest, file))));
    }
    else if (stat.isFile()) {
        await fs_1.promises.mkdir((0, path_1.dirname)(dest), { recursive: true });
        await fs_1.promises.copyFile(src, dest);
    }
    else {
        // Do nothing for FIFO, special devices.
    }
}
exports.copy = copy;
function copySync(src, dest) {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
        const contained = fs.readdirSync(src);
        contained.forEach((file) => copySync((0, path_1.join)(src, file), (0, path_1.join)(dest, file)));
    }
    else if (stat.isFile()) {
        fs.mkdirSync((0, path_1.dirname)(dest), { recursive: true });
        fs.copyFileSync(src, dest);
    }
    else {
        // Do nothing for FIFO, special devices.
    }
}
exports.copySync = copySync;
/**
 * Equivalent to rm -rf
 * @param target
 */
async function remove(target) {
    // Since v14.14
    if (fs_1.promises.rm) {
        await fs_1.promises.rm(target, { recursive: true, force: true });
    }
    else if (fs.existsSync(target)) {
        // Ew. We shouldn't need the exists check... Can't wait for Node 14.
        await fs_1.promises.rmdir(target, { recursive: true });
    }
}
exports.remove = remove;

}, function(modId) { var map = {"fs":1654179213610}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213611, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./reflections/index"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./comments/index"), exports);
__exportStar(require("./sources/index"), exports);
__exportStar(require("./ReflectionGroup"), exports);
__exportStar(require("./ReflectionCategory"), exports);

}, function(modId) { var map = {"./reflections/index":1654179213612,"./types":1654179213615,"./comments/index":1654179213645,"./sources/index":1654179213618,"./ReflectionGroup":1654179213648,"./ReflectionCategory":1654179213649}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213612, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.splitUnquotedString = exports.VarianceModifier = exports.TypeParameterReflection = exports.SignatureReflection = exports.ReferenceReflection = exports.ProjectReflection = exports.ParameterReflection = exports.ReflectionKind = exports.DeclarationReflection = exports.ContainerReflection = exports.TraverseProperty = exports.ReflectionFlags = exports.ReflectionFlag = exports.Reflection = void 0;
var abstract_1 = require("./abstract");
Object.defineProperty(exports, "Reflection", { enumerable: true, get: function () { return abstract_1.Reflection; } });
Object.defineProperty(exports, "ReflectionFlag", { enumerable: true, get: function () { return abstract_1.ReflectionFlag; } });
Object.defineProperty(exports, "ReflectionFlags", { enumerable: true, get: function () { return abstract_1.ReflectionFlags; } });
Object.defineProperty(exports, "TraverseProperty", { enumerable: true, get: function () { return abstract_1.TraverseProperty; } });
var container_1 = require("./container");
Object.defineProperty(exports, "ContainerReflection", { enumerable: true, get: function () { return container_1.ContainerReflection; } });
var declaration_1 = require("./declaration");
Object.defineProperty(exports, "DeclarationReflection", { enumerable: true, get: function () { return declaration_1.DeclarationReflection; } });
var kind_1 = require("./kind");
Object.defineProperty(exports, "ReflectionKind", { enumerable: true, get: function () { return kind_1.ReflectionKind; } });
var parameter_1 = require("./parameter");
Object.defineProperty(exports, "ParameterReflection", { enumerable: true, get: function () { return parameter_1.ParameterReflection; } });
var project_1 = require("./project");
Object.defineProperty(exports, "ProjectReflection", { enumerable: true, get: function () { return project_1.ProjectReflection; } });
var reference_1 = require("./reference");
Object.defineProperty(exports, "ReferenceReflection", { enumerable: true, get: function () { return reference_1.ReferenceReflection; } });
var signature_1 = require("./signature");
Object.defineProperty(exports, "SignatureReflection", { enumerable: true, get: function () { return signature_1.SignatureReflection; } });
var type_parameter_1 = require("./type-parameter");
Object.defineProperty(exports, "TypeParameterReflection", { enumerable: true, get: function () { return type_parameter_1.TypeParameterReflection; } });
Object.defineProperty(exports, "VarianceModifier", { enumerable: true, get: function () { return type_parameter_1.VarianceModifier; } });
var utils_1 = require("./utils");
Object.defineProperty(exports, "splitUnquotedString", { enumerable: true, get: function () { return utils_1.splitUnquotedString; } });

}, function(modId) { var map = {"./abstract":1654179213607,"./container":1654179213613,"./declaration":1654179213614,"./kind":1654179213609,"./parameter":1654179213616,"./project":1654179213617,"./reference":1654179213623,"./signature":1654179213643,"./type-parameter":1654179213644,"./utils":1654179213608}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213613, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerReflection = void 0;
const abstract_1 = require("./abstract");
class ContainerReflection extends abstract_1.Reflection {
    /**
     * Return a list of all children of a certain kind.
     *
     * @param kind  The desired kind of children.
     * @returns     An array containing all children with the desired kind.
     */
    getChildrenByKind(kind) {
        return (this.children || []).filter((child) => child.kindOf(kind));
    }
    /**
     * Traverse all potential child reflections of this reflection.
     *
     * The given callback will be invoked for all children, signatures and type parameters
     * attached to this reflection.
     *
     * @param callback  The callback function that should be applied for each child reflection.
     */
    traverse(callback) {
        var _a;
        for (const child of ((_a = this.children) === null || _a === void 0 ? void 0 : _a.slice()) || []) {
            if (callback(child, abstract_1.TraverseProperty.Children) === false) {
                return;
            }
        }
    }
}
exports.ContainerReflection = ContainerReflection;

}, function(modId) { var map = {"./abstract":1654179213607}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213614, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclarationReflection = void 0;
const types_1 = require("../types");
const abstract_1 = require("./abstract");
const container_1 = require("./container");
/**
 * A reflection that represents a single declaration emitted by the TypeScript compiler.
 *
 * All parts of a project are represented by DeclarationReflection instances. The actual
 * kind of a reflection is stored in its ´kind´ member.
 */
class DeclarationReflection extends container_1.ContainerReflection {
    hasGetterOrSetter() {
        return !!this.getSignature || !!this.setSignature;
    }
    getAllSignatures() {
        let result = [];
        if (this.signatures) {
            result = result.concat(this.signatures);
        }
        if (this.indexSignature) {
            result.push(this.indexSignature);
        }
        if (this.getSignature) {
            result.push(this.getSignature);
        }
        if (this.setSignature) {
            result.push(this.setSignature);
        }
        return result;
    }
    /** @internal */
    getNonIndexSignatures() {
        var _a, _b, _c;
        return [].concat((_a = this.signatures) !== null && _a !== void 0 ? _a : [], (_b = this.setSignature) !== null && _b !== void 0 ? _b : [], (_c = this.getSignature) !== null && _c !== void 0 ? _c : []);
    }
    /**
     * Traverse all potential child reflections of this reflection.
     *
     * The given callback will be invoked for all children, signatures and type parameters
     * attached to this reflection.
     *
     * @param callback  The callback function that should be applied for each child reflection.
     */
    traverse(callback) {
        var _a, _b;
        for (const parameter of ((_a = this.typeParameters) === null || _a === void 0 ? void 0 : _a.slice()) || []) {
            if (callback(parameter, abstract_1.TraverseProperty.TypeParameter) === false) {
                return;
            }
        }
        if (this.type instanceof types_1.ReflectionType) {
            if (callback(this.type.declaration, abstract_1.TraverseProperty.TypeLiteral) === false) {
                return;
            }
        }
        for (const signature of ((_b = this.signatures) === null || _b === void 0 ? void 0 : _b.slice()) || []) {
            if (callback(signature, abstract_1.TraverseProperty.Signatures) === false) {
                return;
            }
        }
        if (this.indexSignature) {
            if (callback(this.indexSignature, abstract_1.TraverseProperty.IndexSignature) === false) {
                return;
            }
        }
        if (this.getSignature) {
            if (callback(this.getSignature, abstract_1.TraverseProperty.GetSignature) ===
                false) {
                return;
            }
        }
        if (this.setSignature) {
            if (callback(this.setSignature, abstract_1.TraverseProperty.SetSignature) ===
                false) {
                return;
            }
        }
        super.traverse(callback);
    }
    /**
     * Return a string representation of this reflection.
     */
    toString() {
        let result = super.toString();
        if (this.typeParameters) {
            const parameters = [];
            this.typeParameters.forEach((parameter) => {
                parameters.push(parameter.name);
            });
            result += "<" + parameters.join(", ") + ">";
        }
        if (this.type) {
            result += ":" + this.type.toString();
        }
        return result;
    }
}
exports.DeclarationReflection = DeclarationReflection;

}, function(modId) { var map = {"../types":1654179213615,"./abstract":1654179213607,"./container":1654179213613}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213615, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownType = exports.UnionType = exports.TypeOperatorType = exports.NamedTupleMember = exports.TupleType = exports.TemplateLiteralType = exports.RestType = exports.ReflectionType = exports.ReferenceType = exports.QueryType = exports.PredicateType = exports.OptionalType = exports.MappedType = exports.LiteralType = exports.IntrinsicType = exports.IntersectionType = exports.InferredType = exports.IndexedAccessType = exports.ConditionalType = exports.ArrayType = exports.TypeContext = exports.makeRecursiveVisitor = exports.Type = void 0;
const abstract_1 = require("./reflections/abstract");
/**
 * Base class of all type definitions.
 */
class Type {
    /**
     * Return a string representation of this type.
     */
    toString() {
        return this.stringify(exports.TypeContext.none);
    }
    visit(visitor) {
        var _a;
        return (_a = visitor[this.type]) === null || _a === void 0 ? void 0 : _a.call(visitor, this);
    }
    stringify(context) {
        if (this.needsParenthesis(context)) {
            return `(${this.getTypeString()})`;
        }
        return this.getTypeString();
    }
}
exports.Type = Type;
function makeRecursiveVisitor(visitor) {
    const recursiveVisitor = {
        "named-tuple-member"(type) {
            var _a;
            (_a = visitor["named-tuple-member"]) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.element.visit(recursiveVisitor);
        },
        "template-literal"(type) {
            var _a;
            (_a = visitor["template-literal"]) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            for (const [h] of type.tail) {
                h.visit(recursiveVisitor);
            }
        },
        array(type) {
            var _a;
            (_a = visitor.array) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.elementType.visit(recursiveVisitor);
        },
        conditional(type) {
            var _a;
            (_a = visitor.conditional) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.checkType.visit(recursiveVisitor);
            type.extendsType.visit(recursiveVisitor);
            type.trueType.visit(recursiveVisitor);
            type.falseType.visit(recursiveVisitor);
        },
        indexedAccess(type) {
            var _a;
            (_a = visitor.indexedAccess) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.indexType.visit(recursiveVisitor);
            type.objectType.visit(recursiveVisitor);
        },
        inferred(type) {
            var _a, _b;
            (_a = visitor.inferred) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            (_b = type.constraint) === null || _b === void 0 ? void 0 : _b.visit(recursiveVisitor);
        },
        intersection(type) {
            var _a;
            (_a = visitor.intersection) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.types.forEach((t) => t.visit(recursiveVisitor));
        },
        intrinsic(type) {
            var _a;
            (_a = visitor.intrinsic) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
        },
        literal(type) {
            var _a;
            (_a = visitor.literal) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
        },
        mapped(type) {
            var _a, _b;
            (_a = visitor.mapped) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            (_b = type.nameType) === null || _b === void 0 ? void 0 : _b.visit(recursiveVisitor);
            type.parameterType.visit(recursiveVisitor);
            type.templateType.visit(recursiveVisitor);
        },
        optional(type) {
            var _a;
            (_a = visitor.optional) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.elementType.visit(recursiveVisitor);
        },
        predicate(type) {
            var _a, _b;
            (_a = visitor.predicate) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            (_b = type.targetType) === null || _b === void 0 ? void 0 : _b.visit(recursiveVisitor);
        },
        query(type) {
            var _a;
            (_a = visitor.query) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.queryType.visit(recursiveVisitor);
        },
        reference(type) {
            var _a, _b;
            (_a = visitor.reference) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            (_b = type.typeArguments) === null || _b === void 0 ? void 0 : _b.forEach((t) => t.visit(recursiveVisitor));
        },
        reflection(type) {
            var _a;
            (_a = visitor.reflection) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            // Future: This should maybe recurse too?
            // See the validator in exports.ts for how to do it.
        },
        rest(type) {
            var _a;
            (_a = visitor.rest) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.elementType.visit(recursiveVisitor);
        },
        tuple(type) {
            var _a;
            (_a = visitor.tuple) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.elements.forEach((t) => t.visit(recursiveVisitor));
        },
        typeOperator(type) {
            var _a;
            (_a = visitor.typeOperator) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.target.visit(recursiveVisitor);
        },
        union(type) {
            var _a;
            (_a = visitor.union) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
            type.types.forEach((t) => t.visit(recursiveVisitor));
        },
        unknown(type) {
            var _a;
            (_a = visitor.unknown) === null || _a === void 0 ? void 0 : _a.call(visitor, type);
        },
    };
    return recursiveVisitor;
}
exports.makeRecursiveVisitor = makeRecursiveVisitor;
/**
 * Enumeration that can be used when traversing types to track the location of recursion.
 * Used by TypeDoc internally to track when to output parenthesis when rendering.
 * @enum
 */
exports.TypeContext = {
    none: "none",
    templateLiteralElement: "templateLiteralElement",
    arrayElement: "arrayElement",
    indexedAccessElement: "indexedAccessElement",
    conditionalCheck: "conditionalCheck",
    conditionalExtends: "conditionalExtends",
    conditionalTrue: "conditionalTrue",
    conditionalFalse: "conditionalFalse",
    indexedIndex: "indexedIndex",
    indexedObject: "indexedObject",
    inferredConstraint: "inferredConstraint",
    intersectionElement: "intersectionElement",
    mappedName: "mappedName",
    mappedParameter: "mappedParameter",
    mappedTemplate: "mappedTemplate",
    optionalElement: "optionalElement",
    predicateTarget: "predicateTarget",
    queryTypeTarget: "queryTypeTarget",
    typeOperatorTarget: "typeOperatorTarget",
    referenceTypeArgument: "referenceTypeArgument",
    restElement: "restElement",
    tupleElement: "tupleElement",
    unionElement: "unionElement", // here | 1
};
/**
 * Represents an array type.
 *
 * ```ts
 * let value: string[];
 * ```
 */
class ArrayType extends Type {
    constructor(elementType) {
        super();
        this.type = "array";
        this.elementType = elementType;
    }
    getTypeString() {
        return this.elementType.stringify(exports.TypeContext.arrayElement) + "[]";
    }
    needsParenthesis() {
        return false;
    }
}
exports.ArrayType = ArrayType;
/**
 * Represents a conditional type.
 *
 * ```ts
 * let value: Check extends Extends ? True : False;
 * ```
 */
class ConditionalType extends Type {
    constructor(checkType, extendsType, trueType, falseType) {
        super();
        this.checkType = checkType;
        this.extendsType = extendsType;
        this.trueType = trueType;
        this.falseType = falseType;
        this.type = "conditional";
    }
    getTypeString() {
        return [
            this.checkType.stringify(exports.TypeContext.conditionalCheck),
            "extends",
            this.extendsType.stringify(exports.TypeContext.conditionalExtends),
            "?",
            this.trueType.stringify(exports.TypeContext.conditionalTrue),
            ":",
            this.falseType.stringify(exports.TypeContext.conditionalFalse),
        ].join(" ");
    }
    needsParenthesis(context) {
        const map = {
            none: false,
            templateLiteralElement: false,
            arrayElement: true,
            indexedAccessElement: false,
            conditionalCheck: true,
            conditionalExtends: true,
            conditionalTrue: false,
            conditionalFalse: false,
            indexedIndex: false,
            indexedObject: true,
            inferredConstraint: true,
            intersectionElement: true,
            mappedName: false,
            mappedParameter: false,
            mappedTemplate: false,
            optionalElement: true,
            predicateTarget: false,
            queryTypeTarget: false,
            typeOperatorTarget: true,
            referenceTypeArgument: false,
            restElement: true,
            tupleElement: false,
            unionElement: true,
        };
        return map[context];
    }
}
exports.ConditionalType = ConditionalType;
/**
 * Represents an indexed access type.
 */
class IndexedAccessType extends Type {
    constructor(objectType, indexType) {
        super();
        this.objectType = objectType;
        this.indexType = indexType;
        this.type = "indexedAccess";
    }
    getTypeString() {
        return [
            this.objectType.stringify(exports.TypeContext.indexedObject),
            "[",
            this.indexType.stringify(exports.TypeContext.indexedIndex),
            "]",
        ].join("");
    }
    needsParenthesis() {
        return false;
    }
}
exports.IndexedAccessType = IndexedAccessType;
/**
 * Represents an inferred type, U in the example below.
 *
 * ```ts
 * type Z = Promise<string> extends Promise<infer U> : never
 * ```
 */
class InferredType extends Type {
    constructor(name, constraint) {
        super();
        this.name = name;
        this.constraint = constraint;
        this.type = "inferred";
    }
    getTypeString() {
        if (this.constraint) {
            return `infer ${this.name} extends ${this.constraint.stringify(exports.TypeContext.inferredConstraint)}`;
        }
        return `infer ${this.name}`;
    }
    needsParenthesis(context) {
        const map = {
            none: false,
            templateLiteralElement: false,
            arrayElement: true,
            indexedAccessElement: false,
            conditionalCheck: false,
            conditionalExtends: false,
            conditionalTrue: false,
            conditionalFalse: false,
            indexedIndex: false,
            indexedObject: true,
            inferredConstraint: false,
            intersectionElement: false,
            mappedName: false,
            mappedParameter: false,
            mappedTemplate: false,
            optionalElement: true,
            predicateTarget: false,
            queryTypeTarget: false,
            typeOperatorTarget: false,
            referenceTypeArgument: false,
            restElement: true,
            tupleElement: false,
            unionElement: false,
        };
        return map[context];
    }
}
exports.InferredType = InferredType;
/**
 * Represents an intersection type.
 *
 * ```ts
 * let value: A & B;
 * ```
 */
class IntersectionType extends Type {
    constructor(types) {
        super();
        this.types = types;
        this.type = "intersection";
    }
    getTypeString() {
        return this.types
            .map((t) => t.stringify(exports.TypeContext.intersectionElement))
            .join(" & ");
    }
    needsParenthesis(context) {
        const map = {
            none: false,
            templateLiteralElement: false,
            arrayElement: true,
            indexedAccessElement: false,
            conditionalCheck: true,
            conditionalExtends: false,
            conditionalTrue: false,
            conditionalFalse: false,
            indexedIndex: false,
            indexedObject: true,
            inferredConstraint: false,
            intersectionElement: false,
            mappedName: false,
            mappedParameter: false,
            mappedTemplate: false,
            optionalElement: true,
            predicateTarget: false,
            queryTypeTarget: false,
            typeOperatorTarget: true,
            referenceTypeArgument: false,
            restElement: true,
            tupleElement: false,
            unionElement: false,
        };
        return map[context];
    }
}
exports.IntersectionType = IntersectionType;
/**
 * Represents an intrinsic type like `string` or `boolean`.
 *
 * ```ts
 * let value: number;
 * ```
 */
class IntrinsicType extends Type {
    constructor(name) {
        super();
        this.name = name;
        this.type = "intrinsic";
    }
    getTypeString() {
        return this.name;
    }
    needsParenthesis() {
        return false;
    }
}
exports.IntrinsicType = IntrinsicType;
/**
 * Represents a literal type.
 *
 * ```ts
 * type A = "A"
 * type B = 1
 * ```
 */
class LiteralType extends Type {
    constructor(value) {
        super();
        this.value = value;
        this.type = "literal";
    }
    /**
     * Return a string representation of this type.
     */
    getTypeString() {
        if (typeof this.value === "bigint") {
            return this.value.toString() + "n";
        }
        return JSON.stringify(this.value);
    }
    needsParenthesis() {
        return false;
    }
}
exports.LiteralType = LiteralType;
/**
 * Represents a mapped type.
 *
 * ```ts
 * { -readonly [K in Parameter as Name]?: Template }
 * ```
 */
class MappedType extends Type {
    constructor(parameter, parameterType, templateType, readonlyModifier, optionalModifier, nameType) {
        super();
        this.parameter = parameter;
        this.parameterType = parameterType;
        this.templateType = templateType;
        this.readonlyModifier = readonlyModifier;
        this.optionalModifier = optionalModifier;
        this.nameType = nameType;
        this.type = "mapped";
    }
    getTypeString() {
        var _a, _b;
        const read = {
            "+": "readonly ",
            "-": "-readonly ",
            "": "",
        }[(_a = this.readonlyModifier) !== null && _a !== void 0 ? _a : ""];
        const opt = {
            "+": "?",
            "-": "-?",
            "": "",
        }[(_b = this.optionalModifier) !== null && _b !== void 0 ? _b : ""];
        const parts = [
            "{ ",
            read,
            "[",
            this.parameter,
            " in ",
            this.parameterType.stringify(exports.TypeContext.mappedParameter),
        ];
        if (this.nameType) {
            parts.push(" as ", this.nameType.stringify(exports.TypeContext.mappedName));
        }
        parts.push("]", opt, ": ", this.templateType.stringify(exports.TypeContext.mappedTemplate), " }");
        return parts.join("");
    }
    needsParenthesis() {
        return false;
    }
}
exports.MappedType = MappedType;
/**
 * Represents an optional type
 * ```ts
 * type Z = [1, 2?]
 * //           ^^
 * ```
 */
class OptionalType extends Type {
    constructor(elementType) {
        super();
        this.type = "optional";
        this.elementType = elementType;
    }
    getTypeString() {
        return this.elementType.stringify(exports.TypeContext.optionalElement) + "?";
    }
    needsParenthesis() {
        return false;
    }
}
exports.OptionalType = OptionalType;
/**
 * Represents a type predicate.
 *
 * ```ts
 * function isString(anything: any): anything is string {}
 * function assert(condition: boolean): asserts condition {}
 * ```
 */
class PredicateType extends Type {
    /**
     * Create a new PredicateType instance.
     */
    constructor(name, asserts, targetType) {
        super();
        this.type = "predicate";
        this.name = name;
        this.asserts = asserts;
        this.targetType = targetType;
    }
    /**
     * Return a string representation of this type.
     */
    getTypeString() {
        const out = this.asserts ? ["asserts", this.name] : [this.name];
        if (this.targetType) {
            out.push("is", this.targetType.stringify(exports.TypeContext.predicateTarget));
        }
        return out.join(" ");
    }
    needsParenthesis() {
        return false;
    }
}
exports.PredicateType = PredicateType;
/**
 * Represents a type that is constructed by querying the type of a reflection.
 * ```ts
 * const x = 1
 * type Z = typeof x // query on reflection for x
 * ```
 */
class QueryType extends Type {
    constructor(reference) {
        super();
        this.type = "query";
        this.queryType = reference;
    }
    getTypeString() {
        return `typeof ${this.queryType.stringify(exports.TypeContext.queryTypeTarget)}`;
    }
    /**
     * @privateRemarks
     * An argument could be made that this ought to return true for indexedObject
     * since precedence is different than on the value side... if someone really cares
     * they can easily use a custom theme to change this.
     */
    needsParenthesis() {
        return false;
    }
}
exports.QueryType = QueryType;
/**
 * Represents a type that refers to another reflection like a class, interface or enum.
 *
 * ```ts
 * let value: MyClass<T>;
 * ```
 */
class ReferenceType extends Type {
    constructor(name, target, project) {
        super();
        this.type = "reference";
        this.name = name;
        this._target = target instanceof abstract_1.Reflection ? target.id : target;
        this._project = project;
    }
    /**
     * The resolved reflection.
     */
    get reflection() {
        var _a, _b;
        if (typeof this._target === "number") {
            return (_a = this._project) === null || _a === void 0 ? void 0 : _a.getReflectionById(this._target);
        }
        const resolved = (_b = this._project) === null || _b === void 0 ? void 0 : _b.getReflectionFromSymbol(this._target);
        if (resolved)
            this._target = resolved.id;
        return resolved;
    }
    /**
     * Don't use this if at all possible. It will eventually go away since models may not
     * retain information from the original TS objects to enable documentation generation from
     * previously generated JSON.
     * @internal
     */
    getSymbol() {
        if (typeof this._target === "number") {
            return;
        }
        return this._target;
    }
    static createResolvedReference(name, target, project) {
        return new ReferenceType(name, target, project);
    }
    static createSymbolReference(symbol, context, name) {
        var _a, _b;
        const ref = new ReferenceType(name !== null && name !== void 0 ? name : symbol.name, symbol, context.project);
        const symbolPath = (_b = (_a = symbol === null || symbol === void 0 ? void 0 : symbol.declarations) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.getSourceFile().fileName.replace(/\\/g, "/");
        if (!symbolPath)
            return ref;
        let startIndex = symbolPath.indexOf("node_modules/");
        if (startIndex === -1)
            return ref;
        startIndex += "node_modules/".length;
        let stopIndex = symbolPath.indexOf("/", startIndex);
        // Scoped package, e.g. `@types/node`
        if (symbolPath[startIndex] === "@") {
            stopIndex = symbolPath.indexOf("/", stopIndex + 1);
        }
        const packageName = symbolPath.substring(startIndex, stopIndex);
        ref.package = packageName;
        const qualifiedName = context.checker.getFullyQualifiedName(symbol);
        // I think this is less bad than depending on symbol.parent...
        // https://github.com/microsoft/TypeScript/issues/38344
        // It will break if someone names a directory with a quote in it, but so will lots
        // of other things including other parts of TypeDoc. Until it *actually* breaks someone...
        if (qualifiedName.startsWith('"')) {
            ref.qualifiedName = qualifiedName.substring(qualifiedName.indexOf('".', 1) + 2);
        }
        else {
            ref.qualifiedName = qualifiedName;
        }
        return ref;
    }
    /** @internal this is used for type parameters, which don't actually point to something */
    static createBrokenReference(name, project) {
        return new ReferenceType(name, -1, project);
    }
    getTypeString() {
        const name = this.reflection ? this.reflection.name : this.name;
        let typeArgs = "";
        if (this.typeArguments && this.typeArguments.length > 0) {
            typeArgs += "<";
            typeArgs += this.typeArguments
                .map((arg) => arg.stringify(exports.TypeContext.referenceTypeArgument))
                .join(", ");
            typeArgs += ">";
        }
        return name + typeArgs;
    }
    needsParenthesis() {
        return false;
    }
}
exports.ReferenceType = ReferenceType;
/**
 * Represents a type which has it's own reflection like literal types.
 * This type will likely go away at some point and be replaced by a dedicated
 * `ObjectType`. Allowing reflections to be nested within types causes much
 * pain in the rendering code.
 *
 * ```ts
 * let value: { a: string, b: number };
 * ```
 */
class ReflectionType extends Type {
    constructor(declaration) {
        super();
        this.type = "reflection";
        this.declaration = declaration;
    }
    // This really ought to do better, but I'm putting off investing effort here until
    // I'm fully convinced that keeping this is a good idea. Currently, I'd much rather
    // change object types to not create reflections.
    getTypeString() {
        if (!this.declaration.children && this.declaration.signatures) {
            return "Function";
        }
        else {
            return "Object";
        }
    }
    needsParenthesis() {
        return false;
    }
}
exports.ReflectionType = ReflectionType;
/**
 * Represents a rest type
 * ```ts
 * type Z = [1, ...2[]]
 * //           ^^^^^^
 * ```
 */
class RestType extends Type {
    constructor(elementType) {
        super();
        this.elementType = elementType;
        this.type = "rest";
    }
    getTypeString() {
        return `...${this.elementType.stringify(exports.TypeContext.restElement)}`;
    }
    needsParenthesis() {
        return false;
    }
}
exports.RestType = RestType;
/**
 * TS 4.1 template literal types
 * ```ts
 * type Z = `${'a' | 'b'}${'a' | 'b'}`
 * ```
 */
class TemplateLiteralType extends Type {
    constructor(head, tail) {
        super();
        this.head = head;
        this.tail = tail;
        this.type = "template-literal";
    }
    getTypeString() {
        return [
            "`",
            this.head,
            ...this.tail.map(([type, text]) => {
                return ("${" +
                    type.stringify(exports.TypeContext.templateLiteralElement) +
                    "}" +
                    text);
            }),
            "`",
        ].join("");
    }
    needsParenthesis() {
        return false;
    }
}
exports.TemplateLiteralType = TemplateLiteralType;
/**
 * Represents a tuple type.
 *
 * ```ts
 * let value: [string, boolean];
 * ```
 */
class TupleType extends Type {
    constructor(elements) {
        super();
        this.type = "tuple";
        this.elements = elements;
    }
    getTypeString() {
        return ("[" +
            this.elements
                .map((t) => t.stringify(exports.TypeContext.tupleElement))
                .join(", ") +
            "]");
    }
    needsParenthesis() {
        return false;
    }
}
exports.TupleType = TupleType;
/**
 * Represents a named member of a tuple type.
 *
 * ```ts
 * let value: [name: string];
 * ```
 */
class NamedTupleMember extends Type {
    constructor(name, isOptional, element) {
        super();
        this.name = name;
        this.isOptional = isOptional;
        this.element = element;
        this.type = "named-tuple-member";
    }
    /**
     * Return a string representation of this type.
     */
    getTypeString() {
        return `${this.name}${this.isOptional ? "?" : ""}: ${this.element.stringify(exports.TypeContext.tupleElement)}`;
    }
    needsParenthesis() {
        return false;
    }
}
exports.NamedTupleMember = NamedTupleMember;
/**
 * Represents a type operator type.
 *
 * ```ts
 * class A {}
 * class B<T extends keyof A> {}
 * ```
 */
class TypeOperatorType extends Type {
    constructor(target, operator) {
        super();
        this.target = target;
        this.operator = operator;
        this.type = "typeOperator";
    }
    getTypeString() {
        return `${this.operator} ${this.target.stringify(exports.TypeContext.typeOperatorTarget)}`;
    }
    needsParenthesis(context) {
        const map = {
            none: false,
            templateLiteralElement: false,
            arrayElement: true,
            indexedAccessElement: false,
            conditionalCheck: false,
            conditionalExtends: false,
            conditionalTrue: false,
            conditionalFalse: false,
            indexedIndex: false,
            indexedObject: true,
            inferredConstraint: false,
            intersectionElement: false,
            mappedName: false,
            mappedParameter: false,
            mappedTemplate: false,
            optionalElement: true,
            predicateTarget: false,
            queryTypeTarget: false,
            typeOperatorTarget: false,
            referenceTypeArgument: false,
            restElement: false,
            tupleElement: false,
            unionElement: false,
        };
        return map[context];
    }
}
exports.TypeOperatorType = TypeOperatorType;
/**
 * Represents an union type.
 *
 * ```ts
 * let value: string | string[];
 * ```
 */
class UnionType extends Type {
    constructor(types) {
        super();
        this.types = types;
        this.type = "union";
        this.normalize();
    }
    getTypeString() {
        return this.types
            .map((t) => t.stringify(exports.TypeContext.unionElement))
            .join(" | ");
    }
    needsParenthesis(context) {
        const map = {
            none: false,
            templateLiteralElement: false,
            arrayElement: true,
            indexedAccessElement: false,
            conditionalCheck: true,
            conditionalExtends: false,
            conditionalTrue: false,
            conditionalFalse: false,
            indexedIndex: false,
            indexedObject: true,
            inferredConstraint: false,
            intersectionElement: true,
            mappedName: false,
            mappedParameter: false,
            mappedTemplate: false,
            optionalElement: true,
            predicateTarget: false,
            queryTypeTarget: false,
            typeOperatorTarget: true,
            referenceTypeArgument: false,
            restElement: false,
            tupleElement: false,
            unionElement: false,
        };
        return map[context];
    }
    normalize() {
        let trueIndex = -1;
        let falseIndex = -1;
        for (let i = 0; i < this.types.length && (trueIndex === -1 || falseIndex === -1); i++) {
            const t = this.types[i];
            if (t instanceof LiteralType) {
                if (t.value === true) {
                    trueIndex = i;
                }
                if (t.value === false) {
                    falseIndex = i;
                }
            }
        }
        if (trueIndex !== -1 && falseIndex !== -1) {
            this.types.splice(Math.max(trueIndex, falseIndex), 1);
            this.types.splice(Math.min(trueIndex, falseIndex), 1, new IntrinsicType("boolean"));
        }
    }
}
exports.UnionType = UnionType;
/**
 * Represents all unknown types that cannot be converted by TypeDoc.
 */
class UnknownType extends Type {
    constructor(name) {
        super();
        this.type = "unknown";
        this.name = name;
    }
    getTypeString() {
        return this.name;
    }
    /**
     * Always returns true if not at the root level, we have no idea what's in here, so wrap it in parenthesis
     * to be extra safe.
     */
    needsParenthesis(context) {
        return context !== exports.TypeContext.none;
    }
}
exports.UnknownType = UnknownType;

}, function(modId) { var map = {"./reflections/abstract":1654179213607}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213616, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterReflection = void 0;
const types_1 = require("../types");
const abstract_1 = require("./abstract");
class ParameterReflection extends abstract_1.Reflection {
    /**
     * Traverse all potential child reflections of this reflection.
     *
     * The given callback will be invoked for all children, signatures and type parameters
     * attached to this reflection.
     *
     * @param callback  The callback function that should be applied for each child reflection.
     */
    traverse(callback) {
        if (this.type instanceof types_1.ReflectionType) {
            if (callback(this.type.declaration, abstract_1.TraverseProperty.TypeLiteral) === false) {
                return;
            }
        }
        super.traverse(callback);
    }
    /**
     * Return a string representation of this reflection.
     */
    toString() {
        return super.toString() + (this.type ? ":" + this.type.toString() : "");
    }
}
exports.ParameterReflection = ParameterReflection;

}, function(modId) { var map = {"../types":1654179213615,"./abstract":1654179213607}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213617, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectReflection = void 0;
const index_1 = require("../sources/index");
const abstract_1 = require("./abstract");
const container_1 = require("./container");
const utils_1 = require("./utils");
const reference_1 = require("./reference");
const types_1 = require("../types");
const utils_2 = require("../../utils");
const kind_1 = require("./kind");
/**
 * A reflection that represents the root of the project.
 *
 * The project reflection acts as a global index, one may receive all reflections
 * and source files of the processed project through this reflection.
 */
class ProjectReflection extends container_1.ContainerReflection {
    /**
     * Create a new ProjectReflection instance.
     *
     * @param name  The name of the project.
     */
    constructor(name) {
        super(name, kind_1.ReflectionKind.Project);
        // Used to resolve references.
        this.symbolToReflectionIdMap = new Map();
        this.reflectionIdToSymbolMap = new Map();
        /**
         * A list of all reflections within the project.
         * @deprecated use {@link getReflectionById}, this will eventually be removed.
         *   To iterate over all reflections, prefer {@link getReflectionsByKind}.
         */
        this.reflections = {};
        /**
         * The root directory of the project.
         */
        this.directory = new index_1.SourceDirectory();
        /**
         * A list of all source files within the project.
         */
        this.files = [];
    }
    /**
     * Return whether this reflection is the root / project reflection.
     */
    isProject() {
        return true;
    }
    /**
     * Return a list of all reflections in this project of a certain kind.
     *
     * @param kind  The desired kind of reflection.
     * @returns     An array containing all reflections with the desired kind.
     */
    getReflectionsByKind(kind) {
        return Object.values(this.reflections).filter((reflection) => reflection.kindOf(kind));
    }
    /**
     * Try to find a reflection by its name.
     *
     * @param names The name hierarchy to look for, if a string, the name will be split on "."
     * @return The found reflection or undefined.
     */
    findReflectionByName(arg) {
        const names = Array.isArray(arg)
            ? arg
            : (0, utils_1.splitUnquotedString)(arg, ".");
        const name = names.pop();
        search: for (const key in this.reflections) {
            const reflection = this.reflections[key];
            if (reflection.name !== name) {
                continue;
            }
            let depth = names.length - 1;
            let target = reflection;
            while ((target = target.parent) && depth >= 0) {
                if (target.name !== names[depth]) {
                    continue search;
                }
                depth -= 1;
            }
            return reflection;
        }
        return undefined;
    }
    /**
     * When excludeNotExported is set, if a symbol is exported only under a different name
     * there will be a reference which points to the symbol, but the symbol will not be converted
     * and the rename will point to nothing. Warn the user if this happens.
     */
    removeDanglingReferences() {
        const dangling = new Set();
        for (const ref of Object.values(this.reflections)) {
            if (ref instanceof reference_1.ReferenceReflection) {
                if (!ref.tryGetTargetReflection()) {
                    dangling.add(ref);
                }
            }
        }
        for (const refl of dangling) {
            this.removeReflection(refl);
        }
    }
    /**
     * Registers the given reflection so that it can be quickly looked up by helper methods.
     * Should be called for *every* reflection added to the project.
     */
    registerReflection(reflection, symbol) {
        var _a;
        this.referenceGraph = undefined;
        this.reflections[reflection.id] = reflection;
        if (symbol) {
            this.symbolToReflectionIdMap.set(symbol, (_a = this.symbolToReflectionIdMap.get(symbol)) !== null && _a !== void 0 ? _a : reflection.id);
            this.reflectionIdToSymbolMap.set(reflection.id, symbol);
        }
    }
    /**
     * Removes a reflection from the documentation. Can be used by plugins to filter reflections
     * out of the generated documentation. Has no effect if the reflection is not present in the
     * project.
     */
    removeReflection(reflection) {
        var _a;
        // Remove references
        for (const id of (_a = this.getReferenceGraph().get(reflection.id)) !== null && _a !== void 0 ? _a : []) {
            const ref = this.getReflectionById(id);
            if (ref) {
                this.removeReflection(ref);
            }
        }
        this.getReferenceGraph().delete(reflection.id);
        reflection.traverse((child) => (this.removeReflection(child), true));
        const parent = reflection.parent;
        parent === null || parent === void 0 ? void 0 : parent.traverse((child, property) => {
            if (child !== reflection) {
                return true; // Continue iteration
            }
            if (property === abstract_1.TraverseProperty.Children) {
                (0, utils_2.removeIfPresent)(parent.children, reflection);
            }
            else if (property === abstract_1.TraverseProperty.GetSignature) {
                delete parent.getSignature;
            }
            else if (property === abstract_1.TraverseProperty.IndexSignature) {
                delete parent.indexSignature;
            }
            else if (property === abstract_1.TraverseProperty.Parameters) {
                (0, utils_2.removeIfPresent)(reflection.parent.parameters, reflection);
            }
            else if (property === abstract_1.TraverseProperty.SetSignature) {
                delete parent.setSignature;
            }
            else if (property === abstract_1.TraverseProperty.Signatures) {
                (0, utils_2.removeIfPresent)(parent.signatures, reflection);
            }
            else if (property === abstract_1.TraverseProperty.TypeLiteral) {
                parent.type = new types_1.IntrinsicType("Object");
            }
            else if (property === abstract_1.TraverseProperty.TypeParameter) {
                (0, utils_2.removeIfPresent)(parent.typeParameters, reflection);
            }
            return false; // Stop iteration
        });
        const symbol = this.reflectionIdToSymbolMap.get(reflection.id);
        if (symbol &&
            this.symbolToReflectionIdMap.get(symbol) === reflection.id) {
            this.symbolToReflectionIdMap.delete(symbol);
        }
        delete this.reflections[reflection.id];
    }
    /**
     * Gets the reflection registered for the given reflection ID, or undefined if it is not present
     * in the project.
     */
    getReflectionById(id) {
        return this.reflections[id];
    }
    /**
     * Gets the reflection associated with the given symbol, if it exists.
     * @internal
     */
    getReflectionFromSymbol(symbol) {
        const id = this.symbolToReflectionIdMap.get(symbol);
        if (typeof id === "number") {
            return this.getReflectionById(id);
        }
    }
    /** @internal */
    getSymbolFromReflection(reflection) {
        return this.reflectionIdToSymbolMap.get(reflection.id);
    }
    getReferenceGraph() {
        var _a;
        if (!this.referenceGraph) {
            this.referenceGraph = new Map();
            for (const ref of Object.values(this.reflections)) {
                if (ref instanceof reference_1.ReferenceReflection) {
                    const target = ref.tryGetTargetReflection();
                    if (target) {
                        const refs = (_a = this.referenceGraph.get(target.id)) !== null && _a !== void 0 ? _a : [];
                        refs.push(ref.id);
                        this.referenceGraph.set(target.id, refs);
                    }
                }
            }
        }
        return this.referenceGraph;
    }
}
exports.ProjectReflection = ProjectReflection;

}, function(modId) { var map = {"../sources/index":1654179213618,"./abstract":1654179213607,"./container":1654179213613,"./utils":1654179213608,"./reference":1654179213623,"../types":1654179213615,"../../utils":1654179213624,"./kind":1654179213609}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213618, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryType = exports.SourceFile = exports.SourceDirectory = void 0;
var directory_1 = require("./directory");
Object.defineProperty(exports, "SourceDirectory", { enumerable: true, get: function () { return directory_1.SourceDirectory; } });
var file_1 = require("./file");
Object.defineProperty(exports, "SourceFile", { enumerable: true, get: function () { return file_1.SourceFile; } });
var repository_1 = require("./repository");
Object.defineProperty(exports, "RepositoryType", { enumerable: true, get: function () { return repository_1.RepositoryType; } });

}, function(modId) { var map = {"./directory":1654179213619,"./file":1654179213621,"./repository":1654179213622}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213619, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceDirectory = void 0;
const array_1 = require("../../utils/array");
/**
 * Exposes information about a directory containing source files.
 *
 * One my access the root directory of a project through the {@link ProjectReflection.directory}
 * property. Traverse through directories by utilizing the {@link SourceDirectory.parent} or
 * {@link SourceDirectory.directories} properties.
 */
class SourceDirectory {
    /**
     * Create a new SourceDirectory instance.
     *
     * @param name  The new of directory.
     * @param parent  The parent directory instance.
     */
    constructor(name, parent) {
        /**
         * A list of all subdirectories.
         */
        this.directories = {};
        /**
         * A list of all files in this directory.
         */
        this.files = [];
        if (name && parent) {
            this.name = name;
            this.dirName = (parent.dirName ? parent.dirName + "/" : "") + name;
            this.parent = parent;
        }
    }
    /**
     * Return a string describing this directory and its contents.
     *
     * @param indent  Used internally for indention.
     * @returns A string representing this directory and all of its children.
     */
    toString(indent = "") {
        let res = indent + this.name;
        for (const dir of Object.values(this.directories)) {
            res += "\n" + dir.toString(indent + "  ");
        }
        this.files.forEach((file) => {
            res += "\n" + indent + "  " + file.fileName;
        });
        return res;
    }
    /**
     * Return a list of all reflections exposed by the files within this directory.
     *
     * @returns An aggregated list of all {@link DeclarationReflection} defined in the
     * files of this directory.
     */
    getAllReflections() {
        return (0, array_1.flatMap)(this.files, (file) => file.reflections);
    }
}
exports.SourceDirectory = SourceDirectory;

}, function(modId) { var map = {"../../utils/array":1654179213620}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213620, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMap = exports.filterMap = exports.zip = exports.toArray = exports.partition = exports.unique = exports.removeIf = exports.removeIfPresent = exports.binaryFindPartition = exports.insertOrderSorted = exports.insertPrioritySorted = void 0;
/**
 * Inserts an item into an array sorted by priority. If two items have the same priority,
 * the item will be inserted later will be placed earlier in the array.
 * @param arr modified by inserting item.
 * @param item
 * @deprecated this is confusing, it sorts with lower priority being placed earlier. Prefer insertOrderSorted, which is nearly the same.
 */
function insertPrioritySorted(arr, item) {
    const index = binaryFindPartition(arr, (v) => v.priority >= item.priority);
    arr.splice(index === -1 ? arr.length : index, 0, item);
    return arr;
}
exports.insertPrioritySorted = insertPrioritySorted;
/**
 * Inserts an item into an array sorted by order. If two items have the same order,
 * the item inserted later will be placed later in the array.
 * The array will be sorted with lower order being placed sooner.
 * @param arr modified by inserting item.
 * @param item
 */
function insertOrderSorted(arr, item) {
    const index = binaryFindPartition(arr, (v) => v.order > item.order);
    arr.splice(index === -1 ? arr.length : index, 0, item);
    return arr;
}
exports.insertOrderSorted = insertOrderSorted;
/**
 * Performs a binary search of a given array, returning the index of the first item
 * for which `partition` returns true. Returns the -1 if there are no items in `arr`
 * such that `partition(item)` is true.
 * @param arr
 * @param partition should return true while less than the partition point.
 */
function binaryFindPartition(arr, partition) {
    if (arr.length === 0) {
        return -1;
    }
    let low = 0, high = arr.length - 1;
    while (high > low) {
        const mid = low + Math.floor((high - low) / 2);
        if (partition(arr[mid])) {
            high = mid;
        }
        else {
            low = mid + 1;
        }
    }
    return partition(arr[low]) ? low : -1;
}
exports.binaryFindPartition = binaryFindPartition;
/**
 * Removes an item from the array if the array exists and the item is included
 * within it.
 * @param arr
 * @param item
 */
function removeIfPresent(arr, item) {
    if (!arr) {
        return;
    }
    const index = arr.indexOf(item);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}
exports.removeIfPresent = removeIfPresent;
/**
 * Remove items in an array which match a predicate.
 * @param arr
 * @param predicate
 */
function removeIf(arr, predicate) {
    const indices = filterMap(arr, (item, index) => predicate(item) ? index : void 0);
    for (const index of indices.reverse()) {
        arr.splice(index, 1);
    }
}
exports.removeIf = removeIf;
/**
 * Filters out duplicate values from the given iterable.
 * @param arr
 */
function unique(arr) {
    return Array.from(new Set(arr));
}
exports.unique = unique;
function partition(iter, predicate) {
    const left = [];
    const right = [];
    for (const item of iter) {
        if (predicate(item)) {
            left.push(item);
        }
        else {
            right.push(item);
        }
    }
    return [left, right];
}
exports.partition = partition;
/**
 * Ensures the given item is an array.
 * @param item
 */
function toArray(item) {
    if (item === void 0) {
        return [];
    }
    return Array.isArray(item) ? [...item] : [item];
}
exports.toArray = toArray;
function* zip(...args) {
    const iterators = args.map((x) => x[Symbol.iterator]());
    while (true) {
        const next = iterators.map((i) => i.next());
        if (next.some((v) => v.done)) {
            break;
        }
        yield next.map((v) => v.value);
    }
}
exports.zip = zip;
function filterMap(arr, fn) {
    const result = [];
    arr.forEach((item, index) => {
        const newItem = fn(item, index);
        if (newItem !== void 0) {
            result.push(newItem);
        }
    });
    return result;
}
exports.filterMap = filterMap;
function flatMap(arr, fn) {
    const result = [];
    for (const item of arr) {
        const newItem = fn(item);
        if (newItem instanceof Array) {
            result.push(...newItem);
        }
        else if (newItem != null) {
            result.push(newItem);
        }
    }
    return result;
}
exports.flatMap = flatMap;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213621, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceFile = void 0;
const Path = require("path");
/**
 * Exposes information about a source file.
 *
 * One may access a list of all source files through the {@link ProjectReflection.files} property or as
 * a tree structure through the {@link ProjectReflection.directory} property.
 *
 * Furthermore each reflection carries references to the related SourceFile with their
 * {@link DeclarationReflection.sources} property. It is an array of of {@link SourceReference} instances
 * containing the reference in their {@link SourceReference.file} field.
 */
class SourceFile {
    /**
     * Create a new SourceFile instance.
     *
     * @param fullFileName  The full file name.
     */
    constructor(fullFileName) {
        /**
         * A list of all reflections that are declared in this file.
         */
        this.reflections = [];
        this.fileName = fullFileName;
        this.fullFileName = fullFileName;
        this.name = Path.basename(fullFileName);
    }
}
exports.SourceFile = SourceFile;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213622, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryType = void 0;
var RepositoryType;
(function (RepositoryType) {
    RepositoryType["GitHub"] = "github";
    RepositoryType["Bitbucket"] = "bitbucket";
    RepositoryType["GitLab"] = "gitlab";
})(RepositoryType = exports.RepositoryType || (exports.RepositoryType = {}));

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213623, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceReflection = void 0;
const abstract_1 = require("./abstract");
const declaration_1 = require("./declaration");
const kind_1 = require("./kind");
/**
 * Describes a reflection which does not exist at this location, but is referenced. Used for imported reflections.
 *
 * ```ts
 * // a.ts
 * export const a = 1;
 * // b.ts
 * import { a } from './a';
 * // Here to avoid extra work we create a reference to the original reflection in module a instead
 * // of copying the reflection.
 * export { a };
 * ```
 */
class ReferenceReflection extends declaration_1.DeclarationReflection {
    /**
     * Creates a reference reflection. Should only be used within the factory function.
     * @param name
     * @param state
     * @param parent
     *
     * @internal
     */
    constructor(name, state, parent) {
        super(name, kind_1.ReflectionKind.Reference, parent);
        this._target = state;
    }
    /**
     * Tries to get the reflection that is referenced. This may be another reference reflection.
     * To fully resolve any references, use {@link tryGetTargetReflectionDeep}.
     */
    tryGetTargetReflection() {
        this._ensureProject();
        if (this._target instanceof abstract_1.Reflection) {
            return this._target;
        }
        const target = this._project.getReflectionFromSymbol(this._target);
        if (target)
            this._target = target;
        return target;
    }
    /**
     * Tries to get the reflection that is referenced, this will fully resolve references.
     * To only resolve one reference, use {@link tryGetTargetReflection}.
     */
    tryGetTargetReflectionDeep() {
        let result = this.tryGetTargetReflection();
        while (result instanceof ReferenceReflection) {
            result = result.tryGetTargetReflection();
        }
        return result;
    }
    /**
     * Gets the reflection that is referenced. This may be another reference reflection.
     * To fully resolve any references, use {@link getTargetReflectionDeep}.
     */
    getTargetReflection() {
        this._ensureProject();
        const target = this.tryGetTargetReflection();
        if (!target) {
            throw new Error("Reference was unresolved.");
        }
        return target;
    }
    /**
     * Gets the reflection that is referenced, this will fully resolve references.
     * To only resolve one reference, use {@link getTargetReflection}.
     */
    getTargetReflectionDeep() {
        let result = this.getTargetReflection();
        while (result instanceof ReferenceReflection) {
            result = result.getTargetReflection();
        }
        return result;
    }
    _ensureProject() {
        if (this._project) {
            return;
        }
        let project = this.parent;
        while (project && !project.isProject()) {
            project = project.parent;
        }
        this._project = project;
        if (!this._project) {
            throw new Error("Reference reflection has no project and is unable to resolve.");
        }
    }
}
exports.ReferenceReflection = ReferenceReflection;

}, function(modId) { var map = {"./abstract":1654179213607,"./declaration":1654179213614,"./kind":1654179213609}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213624, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderElement = exports.Raw = exports.Fragment = exports.JSX = exports.EventHooks = exports.sortReflections = exports.loadPlugins = exports.discoverPlugins = exports.TypeDocReader = exports.TSConfigReader = exports.ParameterType = exports.ParameterHint = exports.Options = exports.BindOption = exports.ArgumentsReader = exports.LogLevel = exports.Logger = exports.ConsoleLogger = exports.CallbackLogger = exports.writeFileSync = exports.writeFile = exports.remove = exports.readFile = exports.normalizePath = exports.getCommonDirectory = exports.copySync = exports.copy = exports.EventDispatcher = exports.Event = exports.Component = exports.ChildableComponent = exports.AbstractComponent = exports.unique = exports.removeIfPresent = exports.removeIf = exports.partition = exports.insertPrioritySorted = exports.filterMap = void 0;
var array_1 = require("./array");
Object.defineProperty(exports, "filterMap", { enumerable: true, get: function () { return array_1.filterMap; } });
Object.defineProperty(exports, "insertPrioritySorted", { enumerable: true, get: function () { return array_1.insertPrioritySorted; } });
Object.defineProperty(exports, "partition", { enumerable: true, get: function () { return array_1.partition; } });
Object.defineProperty(exports, "removeIf", { enumerable: true, get: function () { return array_1.removeIf; } });
Object.defineProperty(exports, "removeIfPresent", { enumerable: true, get: function () { return array_1.removeIfPresent; } });
Object.defineProperty(exports, "unique", { enumerable: true, get: function () { return array_1.unique; } });
var component_1 = require("./component");
Object.defineProperty(exports, "AbstractComponent", { enumerable: true, get: function () { return component_1.AbstractComponent; } });
Object.defineProperty(exports, "ChildableComponent", { enumerable: true, get: function () { return component_1.ChildableComponent; } });
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return component_1.Component; } });
var events_1 = require("./events");
Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return events_1.Event; } });
Object.defineProperty(exports, "EventDispatcher", { enumerable: true, get: function () { return events_1.EventDispatcher; } });
var fs_1 = require("./fs");
Object.defineProperty(exports, "copy", { enumerable: true, get: function () { return fs_1.copy; } });
Object.defineProperty(exports, "copySync", { enumerable: true, get: function () { return fs_1.copySync; } });
Object.defineProperty(exports, "getCommonDirectory", { enumerable: true, get: function () { return fs_1.getCommonDirectory; } });
Object.defineProperty(exports, "normalizePath", { enumerable: true, get: function () { return fs_1.normalizePath; } });
Object.defineProperty(exports, "readFile", { enumerable: true, get: function () { return fs_1.readFile; } });
Object.defineProperty(exports, "remove", { enumerable: true, get: function () { return fs_1.remove; } });
Object.defineProperty(exports, "writeFile", { enumerable: true, get: function () { return fs_1.writeFile; } });
Object.defineProperty(exports, "writeFileSync", { enumerable: true, get: function () { return fs_1.writeFileSync; } });
var loggers_1 = require("./loggers");
Object.defineProperty(exports, "CallbackLogger", { enumerable: true, get: function () { return loggers_1.CallbackLogger; } });
Object.defineProperty(exports, "ConsoleLogger", { enumerable: true, get: function () { return loggers_1.ConsoleLogger; } });
Object.defineProperty(exports, "Logger", { enumerable: true, get: function () { return loggers_1.Logger; } });
Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function () { return loggers_1.LogLevel; } });
var options_1 = require("./options");
Object.defineProperty(exports, "ArgumentsReader", { enumerable: true, get: function () { return options_1.ArgumentsReader; } });
Object.defineProperty(exports, "BindOption", { enumerable: true, get: function () { return options_1.BindOption; } });
Object.defineProperty(exports, "Options", { enumerable: true, get: function () { return options_1.Options; } });
Object.defineProperty(exports, "ParameterHint", { enumerable: true, get: function () { return options_1.ParameterHint; } });
Object.defineProperty(exports, "ParameterType", { enumerable: true, get: function () { return options_1.ParameterType; } });
Object.defineProperty(exports, "TSConfigReader", { enumerable: true, get: function () { return options_1.TSConfigReader; } });
Object.defineProperty(exports, "TypeDocReader", { enumerable: true, get: function () { return options_1.TypeDocReader; } });
var plugins_1 = require("./plugins");
Object.defineProperty(exports, "discoverPlugins", { enumerable: true, get: function () { return plugins_1.discoverPlugins; } });
Object.defineProperty(exports, "loadPlugins", { enumerable: true, get: function () { return plugins_1.loadPlugins; } });
var sort_1 = require("./sort");
Object.defineProperty(exports, "sortReflections", { enumerable: true, get: function () { return sort_1.sortReflections; } });
var hooks_1 = require("./hooks");
Object.defineProperty(exports, "EventHooks", { enumerable: true, get: function () { return hooks_1.EventHooks; } });
__exportStar(require("./entry-point"), exports);
const JSX = require("./jsx");
exports.JSX = JSX;
var jsx_1 = require("./jsx");
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return jsx_1.Fragment; } });
Object.defineProperty(exports, "Raw", { enumerable: true, get: function () { return jsx_1.Raw; } });
Object.defineProperty(exports, "renderElement", { enumerable: true, get: function () { return jsx_1.renderElement; } });

}, function(modId) { var map = {"./array":1654179213620,"./component":1654179213625,"./events":1654179213606,"./fs":1654179213610,"./loggers":1654179213626,"./options":1654179213627,"./sort":1654179213632,"./hooks":1654179213639,"./jsx":1654179213641}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213625, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ChildableComponent = exports.AbstractComponent = exports.ComponentEvent = exports.Component = void 0;
const events_1 = require("./events");
const childMappings = [];
/**
 * Class decorator applied to Components
 */
function Component(options) {
    return (target) => {
        const proto = target.prototype;
        if (!(proto instanceof AbstractComponent)) {
            throw new Error("The `Component` decorator can only be used with a subclass of `AbstractComponent`.");
        }
        if (options.childClass) {
            if (!(proto instanceof ChildableComponent)) {
                throw new Error("The `Component` decorator accepts the parameter `childClass` only when used with a subclass of `ChildableComponent`.");
            }
            childMappings.push({
                host: proto,
                child: options.childClass,
            });
        }
        const name = options.name;
        if (name) {
            proto.componentName = name;
        }
        // If not marked internal, and if we are a subclass of another component T's declared
        // childClass, then register ourselves as a _defaultComponents of T.
        const internal = !!options.internal;
        if (name && !internal) {
            for (const childMapping of childMappings) {
                if (!(proto instanceof childMapping.child)) {
                    continue;
                }
                const host = childMapping.host;
                host["_defaultComponents"] = host["_defaultComponents"] || {};
                host["_defaultComponents"][name] = target;
                break;
            }
        }
    };
}
exports.Component = Component;
class ComponentEvent extends events_1.Event {
    constructor(name, owner, component) {
        super(name);
        this.owner = owner;
        this.component = component;
    }
}
exports.ComponentEvent = ComponentEvent;
ComponentEvent.ADDED = "componentAdded";
ComponentEvent.REMOVED = "componentRemoved";
/**
 * Component base class.  Has an owner (unless it's the application root component),
 * can dispatch events to its children, and has access to the root Application component.
 *
 * @template O type of component's owner.
 */
class AbstractComponent extends events_1.EventDispatcher {
    /**
     * Create new Component instance.
     */
    constructor(owner) {
        super();
        this._componentOwner = owner;
        this.initialize();
    }
    /**
     * Initialize this component.
     */
    initialize() {
        // empty default implementation
    }
    bubble(name, ...args) {
        super.trigger(name, ...args);
        if (this.owner instanceof AbstractComponent &&
            this._componentOwner !== null) {
            this.owner.bubble(name, ...args);
        }
        return this;
    }
    /**
     * Return the application / root component instance.
     */
    get application() {
        if (this._componentOwner === null) {
            return this;
        }
        // Temporary hack, Application.application is going away.
        if (this._componentOwner instanceof AbstractComponent &&
            this._componentOwner._componentOwner === null) {
            return this._componentOwner;
        }
        return this._componentOwner.application;
    }
    /**
     * Return the owner of this component.
     */
    get owner() {
        return this._componentOwner === null
            ? this
            : this._componentOwner;
    }
}
exports.AbstractComponent = AbstractComponent;
/**
 * Component that can have child components.
 *
 * @template O type of Component's owner
 * @template C type of Component's children
 */
class ChildableComponent extends AbstractComponent {
    /**
     * Create new Component instance.
     */
    constructor(owner) {
        super(owner);
        Object.entries(this._defaultComponents || {}).forEach(([name, component]) => {
            this.addComponent(name, component);
        });
    }
    /**
     * Retrieve a plugin instance.
     *
     * @returns  The instance of the plugin or undefined if no plugin with the given class is attached.
     */
    getComponent(name) {
        return (this._componentChildren || {})[name];
    }
    getComponents() {
        return Object.values(this._componentChildren || {});
    }
    hasComponent(name) {
        return !!(this._componentChildren || {})[name];
    }
    addComponent(name, componentClass) {
        if (!this._componentChildren) {
            this._componentChildren = {};
        }
        if (this._componentChildren[name]) {
            // Component already added so we will return the existing component
            // TODO: add better logging around this because it could be unexpected but shouldn't be fatal
            // See https://github.com/TypeStrong/typedoc/issues/846
            return this._componentChildren[name];
        }
        else {
            const component = typeof componentClass === "function"
                ? new componentClass(this)
                : componentClass;
            const event = new ComponentEvent(ComponentEvent.ADDED, this, component);
            this.bubble(event);
            this._componentChildren[name] = component;
            return component;
        }
    }
    removeComponent(name) {
        const component = (this._componentChildren || {})[name];
        if (component) {
            delete this._componentChildren[name];
            component.stopListening();
            this.bubble(new ComponentEvent(ComponentEvent.REMOVED, this, component));
            return component;
        }
    }
    removeAllComponents() {
        for (const component of Object.values(this._componentChildren || {})) {
            component.stopListening();
        }
        this._componentChildren = {};
    }
}
exports.ChildableComponent = ChildableComponent;

}, function(modId) { var map = {"./events":1654179213606}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213626, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CallbackLogger = exports.ConsoleLogger = exports.Logger = exports.LogLevel = void 0;
const ts = require("typescript");
const inspector_1 = require("inspector");
const path_1 = require("path");
const isDebugging = () => !!(0, inspector_1.url)();
/**
 * List of known log levels. Used to specify the urgency of a log message.
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Verbose"] = 0] = "Verbose";
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warn"] = 2] = "Warn";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
const Colors = {
    red: "\u001b[91m",
    yellow: "\u001b[93m",
    cyan: "\u001b[96m",
    gray: "\u001b[90m",
    reset: "\u001b[0m",
};
const messagePrefixes = {
    [LogLevel.Error]: "Error: ",
    [LogLevel.Warn]: "Warning: ",
    [LogLevel.Info]: "Info: ",
    [LogLevel.Verbose]: "Debug: ",
};
const coloredMessagePrefixes = {
    [LogLevel.Error]: `${Colors.red}${messagePrefixes[LogLevel.Error]}${Colors.reset}`,
    [LogLevel.Warn]: `${Colors.yellow}${messagePrefixes[LogLevel.Warn]}${Colors.reset}`,
    [LogLevel.Info]: `${Colors.cyan}${messagePrefixes[LogLevel.Info]}${Colors.reset}`,
    [LogLevel.Verbose]: `${Colors.gray}${messagePrefixes[LogLevel.Verbose]}${Colors.reset}`,
};
/**
 * A logger that will not produce any output.
 *
 * This logger also serves as the base class of other loggers as it implements
 * all the required utility functions.
 */
class Logger {
    constructor() {
        /**
         * How many error messages have been logged?
         */
        this.errorCount = 0;
        /**
         * How many warning messages have been logged?
         */
        this.warningCount = 0;
        this.seenErrors = new Set();
        this.seenWarnings = new Set();
        /**
         * The minimum logging level to print.
         */
        this.level = LogLevel.Info;
    }
    /**
     * Has an error been raised through the log method?
     */
    hasErrors() {
        return this.errorCount > 0;
    }
    /**
     * Has a warning been raised through the log method?
     */
    hasWarnings() {
        return this.warningCount > 0;
    }
    /**
     * Reset the error counter.
     */
    resetErrors() {
        this.errorCount = 0;
        this.seenErrors.clear();
    }
    /**
     * Reset the warning counter.
     */
    resetWarnings() {
        this.warningCount = 0;
        this.seenWarnings.clear();
    }
    /**
     * Log the given verbose message.
     *
     * @param text  The message that should be logged.
     * @param args  The arguments that should be printed into the given message.
     */
    verbose(text) {
        this.log(text, LogLevel.Verbose);
    }
    /** Log the given info message. */
    info(text) {
        this.log(text, LogLevel.Info);
    }
    /**
     * Log the given warning.
     *
     * @param text  The warning that should be logged.
     * @param args  The arguments that should be printed into the given warning.
     */
    warn(text) {
        if (this.seenWarnings.has(text))
            return;
        this.seenWarnings.add(text);
        this.log(text, LogLevel.Warn);
    }
    /**
     * Log the given error.
     *
     * @param text  The error that should be logged.
     * @param args  The arguments that should be printed into the given error.
     */
    error(text) {
        if (this.seenErrors.has(text))
            return;
        this.seenErrors.add(text);
        this.log(text, LogLevel.Error);
    }
    /** @internal */
    deprecated(text, addStack = true) {
        var _a;
        if (addStack) {
            const stack = (_a = new Error().stack) === null || _a === void 0 ? void 0 : _a.split("\n");
            if (stack && stack.length >= 4) {
                text = text + "\n" + stack[3];
            }
        }
        this.warn(text);
    }
    /**
     * Print a log message.
     *
     * @param _message  The message itself.
     * @param level  The urgency of the log message.
     */
    log(_message, level) {
        if (level === LogLevel.Error) {
            this.errorCount += 1;
        }
        if (level === LogLevel.Warn) {
            this.warningCount += 1;
        }
    }
    /**
     * Print the given TypeScript log messages.
     *
     * @param diagnostics  The TypeScript messages that should be logged.
     */
    diagnostics(diagnostics) {
        diagnostics.forEach((diagnostic) => {
            this.diagnostic(diagnostic);
        });
    }
    /**
     * Print the given TypeScript log message.
     *
     * @param diagnostic  The TypeScript message that should be logged.
     */
    diagnostic(diagnostic) {
        const output = ts.formatDiagnosticsWithColorAndContext([diagnostic], {
            getCanonicalFileName: path_1.resolve,
            getCurrentDirectory: () => process.cwd(),
            getNewLine: () => ts.sys.newLine,
        });
        switch (diagnostic.category) {
            case ts.DiagnosticCategory.Error:
                this.log(output, LogLevel.Error);
                break;
            case ts.DiagnosticCategory.Warning:
                this.log(output, LogLevel.Warn);
                break;
            case ts.DiagnosticCategory.Message:
                this.log(output, LogLevel.Info);
        }
    }
}
exports.Logger = Logger;
/**
 * A logger that outputs all messages to the console.
 */
class ConsoleLogger extends Logger {
    /**
     * Create a new ConsoleLogger instance.
     */
    constructor() {
        super();
        this.hasColoredOutput = !("NO_COLOR" in process.env);
    }
    /**
     * Print a log message.
     *
     * @param message  The message itself.
     * @param level  The urgency of the log message.
     */
    log(message, level) {
        super.log(message, level);
        if (level < this.level && !isDebugging()) {
            return;
        }
        const method = {
            [LogLevel.Error]: "error",
            [LogLevel.Warn]: "warn",
            [LogLevel.Info]: "info",
            [LogLevel.Verbose]: "log",
        }[level];
        const prefix = this.hasColoredOutput
            ? coloredMessagePrefixes[level]
            : messagePrefixes[level];
        console[method](prefix + message);
    }
}
exports.ConsoleLogger = ConsoleLogger;
/**
 * A logger that calls a callback function.
 */
class CallbackLogger extends Logger {
    /**
     * Create a new CallbackLogger instance.
     *
     * @param callback  The callback that should be used to log messages.
     */
    constructor(callback) {
        super();
        this.callback = callback;
    }
    /**
     * Print a log message.
     *
     * @param message  The message itself.
     * @param level  The urgency of the log message.
     */
    log(message, level) {
        super.log(message, level);
        this.callback(message, level);
    }
}
exports.CallbackLogger = CallbackLogger;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213627, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterHint = exports.ParameterType = exports.EmitStrategy = exports.TSConfigReader = exports.TypeDocReader = exports.ArgumentsReader = exports.BindOption = exports.Options = void 0;
var options_1 = require("./options");
Object.defineProperty(exports, "Options", { enumerable: true, get: function () { return options_1.Options; } });
Object.defineProperty(exports, "BindOption", { enumerable: true, get: function () { return options_1.BindOption; } });
var readers_1 = require("./readers");
Object.defineProperty(exports, "ArgumentsReader", { enumerable: true, get: function () { return readers_1.ArgumentsReader; } });
Object.defineProperty(exports, "TypeDocReader", { enumerable: true, get: function () { return readers_1.TypeDocReader; } });
Object.defineProperty(exports, "TSConfigReader", { enumerable: true, get: function () { return readers_1.TSConfigReader; } });
var declaration_1 = require("./declaration");
Object.defineProperty(exports, "EmitStrategy", { enumerable: true, get: function () { return declaration_1.EmitStrategy; } });
Object.defineProperty(exports, "ParameterType", { enumerable: true, get: function () { return declaration_1.ParameterType; } });
Object.defineProperty(exports, "ParameterHint", { enumerable: true, get: function () { return declaration_1.ParameterHint; } });

}, function(modId) { var map = {"./options":1654179213628,"./readers":1654179213634,"./declaration":1654179213629}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213628, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BindOption = exports.Options = void 0;
const declaration_1 = require("./declaration");
const array_1 = require("../array");
const declaration_2 = require("./declaration");
const sources_1 = require("./sources");
/**
 * Maintains a collection of option declarations split into TypeDoc options
 * and TypeScript options. Ensures options are of the correct type for calling
 * code.
 *
 * ### Option Discovery
 *
 * Since plugins commonly add custom options, and TypeDoc does not permit options which have
 * not been declared to be set, options must be read twice. The first time options are read,
 * a noop logger is passed so that any errors are ignored. Then, after loading plugins, options
 * are read again, this time with the logger specified by the application.
 *
 * Options are read in a specific order.
 * 1. argv (0) - Must be read first since it should change the files read when
 *    passing --options or --tsconfig.
 * 2. typedoc-json (100) - Read next so that it can specify the tsconfig.json file to read.
 * 3. tsconfig-json (200) - Last config file reader, cannot specify the typedoc.json file to read.
 * 4. argv (300) - Read argv again since any options set there should override those set in config
 *    files.
 */
class Options {
    constructor(logger) {
        this._readers = [];
        this._declarations = new Map();
        this._values = {};
        this._setOptions = new Set();
        this._compilerOptions = {};
        this._fileNames = [];
        this._projectReferences = [];
        this._logger = logger;
    }
    /**
     * Marks the options as readonly, enables caching when fetching options, which improves performance.
     */
    freeze() {
        Object.freeze(this._values);
    }
    /**
     * Checks if the options object has been frozen, preventing future changes to option values.
     */
    isFrozen() {
        return Object.isFrozen(this._values);
    }
    /**
     * Sets the logger used when an option declaration fails to be added.
     * @param logger
     */
    setLogger(logger) {
        this._logger = logger;
    }
    /**
     * Adds the option declarations declared by the TypeDoc and all supported TypeScript declarations.
     */
    addDefaultDeclarations() {
        (0, sources_1.addTypeDocOptions)(this);
    }
    reset(name) {
        if (name != null) {
            const declaration = this.getDeclaration(name);
            if (!declaration) {
                throw new Error("Cannot reset an option which has not been declared.");
            }
            this._values[declaration.name] = (0, declaration_2.getDefaultValue)(declaration);
            this._setOptions.delete(declaration.name);
        }
        else {
            for (const declaration of this.getDeclarations()) {
                this._values[declaration.name] = (0, declaration_2.getDefaultValue)(declaration);
            }
            this._setOptions.clear();
            this._compilerOptions = {};
            this._fileNames = [];
        }
    }
    /**
     * Adds an option reader that will be used to read configuration values
     * from the command line, configuration files, or other locations.
     * @param reader
     */
    addReader(reader) {
        (0, array_1.insertPrioritySorted)(this._readers, reader);
    }
    /**
     * Removes all readers of a given name.
     * @param name
     * @deprecated should not be used, will be removed in 0.23
     */
    removeReaderByName(name) {
        this._readers = this._readers.filter((reader) => reader.name !== name);
    }
    read(logger) {
        for (const reader of this._readers) {
            reader.read(this, logger);
        }
    }
    addDeclaration(declaration) {
        const decl = this.getDeclaration(declaration.name);
        if (decl) {
            this._logger.error(`The option ${declaration.name} has already been registered`);
        }
        else {
            this._declarations.set(declaration.name, declaration);
        }
        this._values[declaration.name] = (0, declaration_2.getDefaultValue)(declaration);
    }
    /**
     * Adds the given declarations to the container
     * @param declarations
     * @deprecated will be removed in 0.23.
     */
    addDeclarations(declarations) {
        for (const decl of declarations) {
            this.addDeclaration(decl);
        }
    }
    /**
     * Removes a declared option.
     * WARNING: This is probably a bad idea. If you do this you will probably cause a crash
     * when code assumes that an option that it declared still exists.
     * @param name
     * @deprecated will be removed in 0.23.
     */
    removeDeclarationByName(name) {
        const declaration = this.getDeclaration(name);
        if (declaration) {
            this._declarations.delete(declaration.name);
            delete this._values[declaration.name];
        }
    }
    /**
     * Gets a declaration by one of its names.
     * @param name
     */
    getDeclaration(name) {
        return this._declarations.get(name);
    }
    /**
     * Gets all declared options.
     */
    getDeclarations() {
        return (0, array_1.unique)(this._declarations.values());
    }
    isSet(name) {
        if (!this._declarations.has(name)) {
            throw new Error("Tried to check if an undefined option was set");
        }
        return this._setOptions.has(name);
    }
    /**
     * Gets all of the TypeDoc option values defined in this option container.
     */
    getRawValues() {
        return this._values;
    }
    getValue(name) {
        const declaration = this.getDeclaration(name);
        if (!declaration) {
            throw new Error(`Unknown option '${name}'`);
        }
        return this._values[declaration.name];
    }
    setValue(name, value, configPath) {
        if (this.isFrozen()) {
            throw new Error("Tried to modify an option value after options have been frozen.");
        }
        const declaration = this.getDeclaration(name);
        if (!declaration) {
            throw new Error(`Tried to set an option (${name}) that was not declared.`);
        }
        const converted = (0, declaration_2.convert)(value, declaration, configPath !== null && configPath !== void 0 ? configPath : process.cwd());
        if (declaration.type === declaration_1.ParameterType.Flags) {
            Object.assign(this._values[declaration.name], converted);
        }
        else {
            this._values[declaration.name] = converted;
        }
        this._setOptions.add(name);
    }
    /**
     * Gets the set compiler options.
     */
    getCompilerOptions() {
        return this.fixCompilerOptions(this._compilerOptions);
    }
    /** @internal */
    fixCompilerOptions(options) {
        const overrides = this.getValue("compilerOptions");
        const result = { ...options };
        if (overrides) {
            Object.assign(result, overrides);
        }
        if (this.getValue("emit") !== "both" &&
            this.getValue("emit") !== true) {
            result.noEmit = true;
            delete result.emitDeclarationOnly;
        }
        return result;
    }
    /**
     * Gets the file names discovered through reading a tsconfig file.
     */
    getFileNames() {
        return this._fileNames;
    }
    /**
     * Gets the project references - used in solution style tsconfig setups.
     */
    getProjectReferences() {
        return this._projectReferences;
    }
    /**
     * Sets the compiler options that will be used to get a TS program.
     */
    setCompilerOptions(fileNames, options, projectReferences) {
        if (this.isFrozen()) {
            throw new Error("Tried to modify an option value after options have been sealed.");
        }
        // We do this here instead of in the tsconfig reader so that API consumers which
        // supply a program to `Converter.convert` instead of letting TypeDoc create one
        // can just set the compiler options, and not need to know about this mapping.
        // It feels a bit like a hack... but it's better to have it here than to put it
        // in Application or Converter.
        if (options.stripInternal && !this.isSet("excludeInternal")) {
            this.setValue("excludeInternal", true);
        }
        this._fileNames = fileNames;
        this._compilerOptions = { ...options };
        this._projectReferences = projectReferences !== null && projectReferences !== void 0 ? projectReferences : [];
    }
}
exports.Options = Options;
function BindOption(name) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get() {
                const options = "options" in this ? this.options : this.application.options;
                const value = options.getValue(name);
                if (options.isFrozen()) {
                    Object.defineProperty(this, key, { value });
                }
                return value;
            },
            enumerable: true,
            configurable: true,
        });
    };
}
exports.BindOption = BindOption;

}, function(modId) { var map = {"./declaration":1654179213629,"../array":1654179213620,"./sources":1654179213630}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213629, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultValue = exports.convert = exports.ParameterType = exports.ParameterHint = exports.EmitStrategy = void 0;
const path_1 = require("path");
const kind_1 = require("../../models/reflections/kind");
exports.EmitStrategy = {
    true: true,
    false: false,
    both: "both",
    docs: "docs",
    none: "none", // Emit nothing, just convert and run validation
};
const Kinds = Object.values(kind_1.ReflectionKind);
var ParameterHint;
(function (ParameterHint) {
    ParameterHint[ParameterHint["File"] = 0] = "File";
    ParameterHint[ParameterHint["Directory"] = 1] = "Directory";
})(ParameterHint = exports.ParameterHint || (exports.ParameterHint = {}));
var ParameterType;
(function (ParameterType) {
    ParameterType[ParameterType["String"] = 0] = "String";
    /**
     * Resolved according to the config directory.
     */
    ParameterType[ParameterType["Path"] = 1] = "Path";
    ParameterType[ParameterType["Number"] = 2] = "Number";
    ParameterType[ParameterType["Boolean"] = 3] = "Boolean";
    ParameterType[ParameterType["Map"] = 4] = "Map";
    ParameterType[ParameterType["Mixed"] = 5] = "Mixed";
    ParameterType[ParameterType["Array"] = 6] = "Array";
    /**
     * Resolved according to the config directory.
     */
    ParameterType[ParameterType["PathArray"] = 7] = "PathArray";
    /**
     * Resolved according to the config directory if it starts with `.`
     */
    ParameterType[ParameterType["ModuleArray"] = 8] = "ModuleArray";
    /**
     * Resolved according to the config directory unless it starts with `**`, after skipping any leading `!` and `#` characters.
     */
    ParameterType[ParameterType["GlobArray"] = 9] = "GlobArray";
    /**
     * An object with true/false flags
     */
    ParameterType[ParameterType["Flags"] = 10] = "Flags";
})(ParameterType = exports.ParameterType || (exports.ParameterType = {}));
const converters = {
    [ParameterType.String](value, option) {
        var _a;
        const stringValue = value == null ? "" : String(value);
        (_a = option.validate) === null || _a === void 0 ? void 0 : _a.call(option, stringValue);
        return stringValue;
    },
    [ParameterType.Path](value, option, configPath) {
        var _a;
        const stringValue = value == null ? "" : (0, path_1.resolve)(configPath, String(value));
        (_a = option.validate) === null || _a === void 0 ? void 0 : _a.call(option, stringValue);
        return stringValue;
    },
    [ParameterType.Number](value, option) {
        var _a;
        const numValue = parseInt(String(value), 10) || 0;
        if (!valueIsWithinBounds(numValue, option.minValue, option.maxValue)) {
            throw new Error(getBoundsError(option.name, option.minValue, option.maxValue));
        }
        (_a = option.validate) === null || _a === void 0 ? void 0 : _a.call(option, numValue);
        return numValue;
    },
    [ParameterType.Boolean](value) {
        return !!value;
    },
    [ParameterType.Array](value, option) {
        var _a;
        let strArrValue = new Array();
        if (Array.isArray(value)) {
            strArrValue = value.map(String);
        }
        else if (typeof value === "string") {
            strArrValue = [value];
        }
        (_a = option.validate) === null || _a === void 0 ? void 0 : _a.call(option, strArrValue);
        return strArrValue;
    },
    [ParameterType.PathArray](value, option, configPath) {
        var _a;
        let strArrValue = new Array();
        if (Array.isArray(value)) {
            strArrValue = value.map(String);
        }
        else if (typeof value === "string") {
            strArrValue = [value];
        }
        strArrValue = strArrValue.map((path) => (0, path_1.resolve)(configPath, path));
        (_a = option.validate) === null || _a === void 0 ? void 0 : _a.call(option, strArrValue);
        return strArrValue;
    },
    [ParameterType.ModuleArray](value, option, configPath) {
        var _a;
        let strArrValue = new Array();
        if (Array.isArray(value)) {
            strArrValue = value.map(String);
        }
        else if (typeof value === "string") {
            strArrValue = [value];
        }
        strArrValue = resolveModulePaths(strArrValue, configPath);
        (_a = option.validate) === null || _a === void 0 ? void 0 : _a.call(option, strArrValue);
        return strArrValue;
    },
    [ParameterType.GlobArray](value, option, configPath) {
        var _a;
        let strArrValue = new Array();
        if (Array.isArray(value)) {
            strArrValue = value.map(String);
        }
        else if (typeof value === "string") {
            strArrValue = [value];
        }
        strArrValue = resolveGlobPaths(strArrValue, configPath);
        (_a = option.validate) === null || _a === void 0 ? void 0 : _a.call(option, strArrValue);
        return strArrValue;
    },
    [ParameterType.Map](value, option) {
        var _a;
        const key = String(value);
        if (option.map instanceof Map) {
            if (option.map.has(key)) {
                return option.map.get(key);
            }
            else if ([...option.map.values()].includes(value)) {
                return value;
            }
        }
        else if (key in option.map) {
            if (isTsNumericEnum(option.map) && typeof value === "number") {
                return value;
            }
            return option.map[key];
        }
        else if (Object.values(option.map).includes(value)) {
            return value;
        }
        throw new Error((_a = option.mapError) !== null && _a !== void 0 ? _a : getMapError(option.map, option.name));
    },
    [ParameterType.Mixed](value, option) {
        var _a;
        (_a = option.validate) === null || _a === void 0 ? void 0 : _a.call(option, value);
        return value;
    },
    [ParameterType.Flags](value, option) {
        if (typeof value === "boolean") {
            value = Object.fromEntries(Object.keys(option.defaults).map((key) => [key, value]));
        }
        if (typeof value !== "object" || value == null) {
            throw new Error(`Expected an object with flag values for ${option.name} or true/false`);
        }
        const obj = { ...value };
        for (const key of Object.keys(obj)) {
            if (!Object.prototype.hasOwnProperty.call(option.defaults, key)) {
                throw new Error(`The flag '${key}' is not valid for ${option.name}, expected one of: ${Object.keys(option.defaults).join(", ")}`);
            }
            if (typeof obj[key] !== "boolean") {
                // Explicit null/undefined, switch to default.
                if (obj[key] == null) {
                    obj[key] = option.defaults[key];
                }
                else {
                    throw new Error(`Flag values for ${option.name} must be a boolean.`);
                }
            }
        }
        return obj;
    },
};
/**
 * The default conversion function used by the Options container. Readers may
 * re-use this conversion function or implement their own. The arguments reader
 * implements its own since 'false' should not be converted to true for a boolean option.
 * @param value The value to convert.
 * @param option The option for which the value should be converted.
 * @returns The result of the conversion. Might be the value or an error.
 */
function convert(value, option, configPath) {
    var _a;
    const _converters = converters;
    return _converters[(_a = option.type) !== null && _a !== void 0 ? _a : ParameterType.String](value, option, configPath);
}
exports.convert = convert;
const defaultGetters = {
    [ParameterType.String](option) {
        var _a;
        return (_a = option.defaultValue) !== null && _a !== void 0 ? _a : "";
    },
    [ParameterType.Path](option) {
        var _a;
        const defaultStr = (_a = option.defaultValue) !== null && _a !== void 0 ? _a : "";
        if (defaultStr == "") {
            return "";
        }
        return (0, path_1.isAbsolute)(defaultStr)
            ? defaultStr
            : (0, path_1.join)(process.cwd(), defaultStr);
    },
    [ParameterType.Number](option) {
        var _a;
        return (_a = option.defaultValue) !== null && _a !== void 0 ? _a : 0;
    },
    [ParameterType.Boolean](option) {
        var _a;
        return (_a = option.defaultValue) !== null && _a !== void 0 ? _a : false;
    },
    [ParameterType.Map](option) {
        return option.defaultValue;
    },
    [ParameterType.Mixed](option) {
        return option.defaultValue;
    },
    [ParameterType.Array](option) {
        var _a;
        return (_a = option.defaultValue) !== null && _a !== void 0 ? _a : [];
    },
    [ParameterType.PathArray](option) {
        var _a, _b;
        return ((_b = (_a = option.defaultValue) === null || _a === void 0 ? void 0 : _a.map((value) => (0, path_1.resolve)(process.cwd(), value))) !== null && _b !== void 0 ? _b : []);
    },
    [ParameterType.ModuleArray](option) {
        var _a, _b;
        return ((_b = (_a = option.defaultValue) === null || _a === void 0 ? void 0 : _a.map((value) => value.startsWith(".") ? (0, path_1.resolve)(process.cwd(), value) : value)) !== null && _b !== void 0 ? _b : []);
    },
    [ParameterType.GlobArray](option) {
        var _a;
        return resolveGlobPaths((_a = option.defaultValue) !== null && _a !== void 0 ? _a : [], process.cwd());
    },
    [ParameterType.Flags](option) {
        return { ...option.defaults };
    },
};
function getDefaultValue(option) {
    var _a;
    const getters = defaultGetters;
    return getters[(_a = option.type) !== null && _a !== void 0 ? _a : ParameterType.String](option);
}
exports.getDefaultValue = getDefaultValue;
function resolveGlobPaths(globs, configPath) {
    return globs.map((path) => {
        var _a, _b;
        const start = (_b = (_a = path.match(/^[!#]+/)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : "";
        const remaining = path.substr(start.length);
        if (!remaining.startsWith("**")) {
            return start + (0, path_1.resolve)(configPath, remaining);
        }
        return start + remaining;
    });
}
function resolveModulePaths(modules, configPath) {
    return modules.map((path) => {
        if (path.startsWith(".")) {
            return (0, path_1.resolve)(configPath, path);
        }
        return path;
    });
}
function isTsNumericEnum(map) {
    return Object.values(map).every((key) => map[map[key]] === key);
}
/**
 * Returns an error message for a map option, indicating that a given value was not one of the values within the map.
 * @param map The values for the option.
 * @param name The name of the option.
 * @returns The error message.
 */
function getMapError(map, name) {
    let keys = map instanceof Map ? [...map.keys()] : Object.keys(map);
    // If the map is a TS numeric enum we need to filter out the numeric keys.
    // TS numeric enums have the property that every key maps to a value, which maps back to that key.
    if (!(map instanceof Map) && isTsNumericEnum(map)) {
        // This works because TS enum keys may not be numeric.
        keys = keys.filter((key) => Number.isNaN(parseInt(key, 10)));
    }
    return `${name} must be one of ${keys.join(", ")}`;
}
/**
 * Returns an error message for a value that is out of bounds of the given min and/or max values.
 * @param name The name of the thing the value represents.
 * @param minValue The lower bound of the range of allowed values.
 * @param maxValue The upper bound of the range of allowed values.
 * @returns The error message.
 */
function getBoundsError(name, minValue, maxValue) {
    if (isFiniteNumber(minValue) && isFiniteNumber(maxValue)) {
        return `${name} must be between ${minValue} and ${maxValue}`;
    }
    else if (isFiniteNumber(minValue)) {
        return `${name} must be >= ${minValue}`;
    }
    else {
        return `${name} must be <= ${maxValue}`;
    }
}
/**
 * Checks if the given value is a finite number.
 * @param value The value being checked.
 * @returns True, if the value is a finite number, otherwise false.
 */
function isFiniteNumber(value) {
    return Number.isFinite(value);
}
/**
 * Checks if a value is between the bounds of the given min and/or max values.
 * @param value The value being checked.
 * @param minValue The lower bound of the range of allowed values.
 * @param maxValue The upper bound of the range of allowed values.
 * @returns True, if the value is within the given bounds, otherwise false.
 */
function valueIsWithinBounds(value, minValue, maxValue) {
    if (isFiniteNumber(minValue) && isFiniteNumber(maxValue)) {
        return minValue <= value && value <= maxValue;
    }
    else if (isFiniteNumber(minValue)) {
        return minValue <= value;
    }
    else if (isFiniteNumber(maxValue)) {
        return value <= maxValue;
    }
    else {
        return true;
    }
}

}, function(modId) { var map = {"../../models/reflections/kind":1654179213609}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213630, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.addTypeDocOptions = void 0;
var typedoc_1 = require("./typedoc");
Object.defineProperty(exports, "addTypeDocOptions", { enumerable: true, get: function () { return typedoc_1.addTypeDocOptions; } });

}, function(modId) { var map = {"./typedoc":1654179213631}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213631, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.addTypeDocOptions = void 0;
const loggers_1 = require("../../loggers");
const declaration_1 = require("../declaration");
const shiki_1 = require("shiki");
const sort_1 = require("../../sort");
const entry_point_1 = require("../../entry-point");
const kind_1 = require("../../../models/reflections/kind");
function addTypeDocOptions(options) {
    options.addDeclaration({
        type: declaration_1.ParameterType.Path,
        name: "options",
        help: "Specify a json option file that should be loaded. If not specified TypeDoc will look for 'typedoc.json' in the current directory.",
        hint: declaration_1.ParameterHint.File,
        defaultValue: process.cwd(),
    });
    options.addDeclaration({
        type: declaration_1.ParameterType.Path,
        name: "tsconfig",
        help: "Specify a TypeScript config file that should be loaded. If not specified TypeDoc will look for 'tsconfig.json' in the current directory.",
        hint: declaration_1.ParameterHint.File,
        defaultValue: process.cwd(),
    });
    options.addDeclaration({
        name: "entryPoints",
        help: "The entry points of your documentation.",
        type: declaration_1.ParameterType.PathArray,
    });
    options.addDeclaration({
        name: "entryPointStrategy",
        help: "The strategy to be used to convert entry points into documentation modules.",
        type: declaration_1.ParameterType.Map,
        map: entry_point_1.EntryPointStrategy,
        defaultValue: entry_point_1.EntryPointStrategy.Resolve,
    });
    options.addDeclaration({
        name: "exclude",
        help: "Define patterns to be excluded when expanding a directory that was specified as an entry point.",
        type: declaration_1.ParameterType.GlobArray,
    });
    options.addDeclaration({
        name: "externalPattern",
        help: "Define patterns for files that should be considered being external.",
        type: declaration_1.ParameterType.GlobArray,
        defaultValue: ["**/node_modules/**"],
    });
    options.addDeclaration({
        name: "excludeExternals",
        help: "Prevent externally resolved symbols from being documented.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "excludeNotDocumented",
        help: "Prevent symbols that are not explicitly documented from appearing in the results.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "excludeInternal",
        help: "Prevent symbols that are marked with @internal from being documented.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "excludePrivate",
        help: "Ignore private variables and methods.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "excludeProtected",
        help: "Ignore protected variables and methods.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "searchCategoryBoosts",
        help: "Configure search to give a relevance boost to selected categories",
        type: declaration_1.ParameterType.Mixed,
        validate(value) {
            if (!isObject(value)) {
                throw new Error("The 'searchCategoryBoosts' option must be a non-array object.");
            }
            if (Object.values(value).some((x) => typeof x !== "number")) {
                throw new Error("All values of 'searchCategoryBoosts' must be numbers.");
            }
        },
    });
    options.addDeclaration({
        name: "searchGroupBoosts",
        help: 'Configure search to give a relevance boost to selected kinds (eg "class")',
        type: declaration_1.ParameterType.Mixed,
        validate(value) {
            if (!isObject(value)) {
                throw new Error("The 'searchGroupBoosts' option must be a non-array object.");
            }
            const validValues = Object.values(kind_1.ReflectionKind)
                .filter((v) => typeof v === "string")
                .map((v) => v.toString());
            for (const kindName in value) {
                if (validValues.indexOf(kindName) < 0) {
                    throw new Error(`'${kindName}' is an invalid value for 'searchGroupBoosts'. Must be one of: ${validValues.join(", ")}`);
                }
            }
            if (Object.values(value).some((x) => typeof x !== "number")) {
                throw new Error("All values of 'searchGroupBoosts' must be numbers.");
            }
        },
    });
    options.addDeclaration({
        name: "disableSources",
        help: "Disable setting the source of a reflection when documenting it.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "includes",
        help: "Specify the location to look for included documents (use [[include:FILENAME]] in comments).",
        type: declaration_1.ParameterType.Path,
        hint: declaration_1.ParameterHint.Directory,
    });
    options.addDeclaration({
        name: "media",
        help: "Specify the location with media files that should be copied to the output directory.",
        type: declaration_1.ParameterType.Path,
        hint: declaration_1.ParameterHint.Directory,
    });
    options.addDeclaration({
        name: "watch",
        help: "Watch files for changes and rebuild docs on change.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "preserveWatchOutput",
        help: "If set, TypeDoc will not clear the screen between compilation runs.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "emit",
        help: "Specify what TypeDoc should emit, 'docs', 'both', or 'none'.",
        type: declaration_1.ParameterType.Map,
        map: declaration_1.EmitStrategy,
        defaultValue: "docs",
    });
    options.addDeclaration({
        name: "out",
        help: "Specify the location the documentation should be written to.",
        type: declaration_1.ParameterType.Path,
        hint: declaration_1.ParameterHint.Directory,
    });
    options.addDeclaration({
        name: "json",
        help: "Specify the location and filename a JSON file describing the project is written to.",
        type: declaration_1.ParameterType.Path,
        hint: declaration_1.ParameterHint.File,
    });
    options.addDeclaration({
        name: "pretty",
        help: "Specify whether the output JSON should be formatted with tabs.",
        type: declaration_1.ParameterType.Boolean,
        defaultValue: true,
    });
    options.addDeclaration({
        name: "theme",
        help: "Specify the path to the theme that should be used, or 'default' or 'minimal' to use built-in themes. " +
            "Note: Not resolved according to the config file location, always resolved according to cwd.",
        type: declaration_1.ParameterType.String,
        defaultValue: "default",
    });
    const defaultLightTheme = "light-plus";
    const defaultDarkTheme = "dark-plus";
    options.addDeclaration({
        name: "lightHighlightTheme",
        help: "Specify the code highlighting theme in light mode.",
        type: declaration_1.ParameterType.String,
        defaultValue: defaultLightTheme,
        validate(value) {
            if (!shiki_1.BUNDLED_THEMES.includes(value)) {
                throw new Error(`lightHighlightTheme must be one of the following: ${shiki_1.BUNDLED_THEMES.join(", ")}`);
            }
        },
    });
    options.addDeclaration({
        name: "darkHighlightTheme",
        help: "Specify the code highlighting theme in dark mode.",
        type: declaration_1.ParameterType.String,
        defaultValue: defaultDarkTheme,
        validate(value) {
            if (!shiki_1.BUNDLED_THEMES.includes(value)) {
                throw new Error(`darkHighlightTheme must be one of the following: ${shiki_1.BUNDLED_THEMES.join(", ")}`);
            }
        },
    });
    options.addDeclaration({
        name: "customCss",
        help: "Path to a custom CSS file to for the theme to import.",
        type: declaration_1.ParameterType.Path,
    });
    options.addDeclaration({
        name: "name",
        help: "Set the name of the project that will be used in the header of the template.",
    });
    options.addDeclaration({
        name: "includeVersion",
        help: "Add the package version to the project name.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "excludeTags",
        help: "Remove the listed tags from doc comments.",
        type: declaration_1.ParameterType.Array,
    });
    options.addDeclaration({
        name: "readme",
        help: "Path to the readme file that should be displayed on the index page. Pass `none` to disable the index page and start the documentation on the globals page.",
        type: declaration_1.ParameterType.Path,
    });
    options.addDeclaration({
        name: "defaultCategory",
        help: "Specify the default category for reflections without a category.",
        defaultValue: "Other",
    });
    options.addDeclaration({
        name: "categoryOrder",
        help: "Specify the order in which categories appear. * indicates the relative order for categories not in the list.",
        type: declaration_1.ParameterType.Array,
    });
    options.addDeclaration({
        name: "categorizeByGroup",
        help: "Specify whether categorization will be done at the group level.",
        type: declaration_1.ParameterType.Boolean,
        defaultValue: true,
    });
    options.addDeclaration({
        name: "cname",
        help: "Set the CNAME file text, it's useful for custom domains on GitHub Pages.",
    });
    options.addDeclaration({
        name: "sort",
        help: "Specify the sort strategy for documented values.",
        type: declaration_1.ParameterType.Array,
        defaultValue: ["kind", "instance-first", "alphabetical"],
        validate(value) {
            const invalid = new Set(value);
            for (const v of sort_1.SORT_STRATEGIES) {
                invalid.delete(v);
            }
            if (invalid.size !== 0) {
                throw new Error(`sort may only specify known values, and invalid values were provided (${Array.from(invalid).join(", ")}). The valid sort strategies are:\n${sort_1.SORT_STRATEGIES.join(", ")}`);
            }
        },
    });
    options.addDeclaration({
        name: "gitRevision",
        help: "Use specified revision instead of the last revision for linking to GitHub/Bitbucket source files.",
    });
    options.addDeclaration({
        name: "gitRemote",
        help: "Use the specified remote for linking to GitHub/Bitbucket source files.",
        defaultValue: "origin",
    });
    options.addDeclaration({
        name: "gaID",
        help: "Set the Google Analytics tracking ID and activate tracking code.",
    });
    options.addDeclaration({
        name: "gaSite",
        help: "Set the site name for Google Analytics. Defaults to `auto`.",
        defaultValue: "auto",
    });
    options.addDeclaration({
        name: "githubPages",
        help: "Generate a .nojekyll file to prevent 404 errors in GitHub Pages. Defaults to `true`.",
        type: declaration_1.ParameterType.Boolean,
        defaultValue: true,
    });
    options.addDeclaration({
        name: "hideGenerator",
        help: "Do not print the TypeDoc link at the end of the page.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "hideLegend",
        help: "Do not print the Legend for icons at the end of the page.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "cleanOutputDir",
        help: "If set, TypeDoc will remove the output directory before writing output.",
        type: declaration_1.ParameterType.Boolean,
        defaultValue: true,
    });
    options.addDeclaration({
        name: "help",
        help: "Print this message.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "version",
        help: "Print TypeDoc's version.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "showConfig",
        help: "Print the resolved configuration and exit.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "plugin",
        help: "Specify the npm plugins that should be loaded. Omit to load all installed plugins, set to 'none' to load no plugins.",
        type: declaration_1.ParameterType.ModuleArray,
    });
    options.addDeclaration({
        name: "logger",
        help: "Specify the logger that should be used, 'none' or 'console'.",
        defaultValue: "console",
        type: declaration_1.ParameterType.Mixed,
    });
    options.addDeclaration({
        name: "logLevel",
        help: "Specify what level of logging should be used.",
        type: declaration_1.ParameterType.Map,
        map: loggers_1.LogLevel,
        defaultValue: loggers_1.LogLevel.Info,
    });
    options.addDeclaration({
        name: "markedOptions",
        help: "Specify the options passed to Marked, the Markdown parser used by TypeDoc.",
        type: declaration_1.ParameterType.Mixed,
        validate(value) {
            if (!isObject(value)) {
                throw new Error("The 'markedOptions' option must be a non-array object.");
            }
        },
    });
    options.addDeclaration({
        name: "compilerOptions",
        help: "Selectively override the TypeScript compiler options used by TypeDoc.",
        type: declaration_1.ParameterType.Mixed,
        validate(value) {
            if (!isObject(value)) {
                throw new Error("The 'compilerOptions' option must be a non-array object.");
            }
        },
    });
    options.addDeclaration({
        name: "treatWarningsAsErrors",
        help: "If set, warnings will be treated as errors.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "listInvalidSymbolLinks",
        help: "Emit a list of broken symbol {@link navigation} links after documentation generation, DEPRECATED, prefer validation.invalidLink instead.",
        type: declaration_1.ParameterType.Boolean,
    });
    options.addDeclaration({
        name: "intentionallyNotExported",
        help: "A list of types which should not produce 'referenced but not documented' warnings.",
        type: declaration_1.ParameterType.Array,
    });
    options.addDeclaration({
        name: "requiredToBeDocumented",
        help: "A list of reflection kinds that must be documented",
        type: declaration_1.ParameterType.Array,
        validate(values) {
            // this is good enough because the values of the ReflectionKind enum are all numbers
            const validValues = Object.values(kind_1.ReflectionKind).filter((v) => typeof v === "string");
            for (const kind of values) {
                if (!validValues.includes(kind)) {
                    throw new Error(`'${kind}' is an invalid value for 'requiredToBeDocumented'. Must be one of: ${validValues.join(", ")}`);
                }
            }
        },
        defaultValue: [
            "Enum",
            "EnumMember",
            "Variable",
            "Function",
            "Class",
            "Interface",
            "Property",
            "Method",
            "Accessor",
            "TypeAlias",
        ],
    });
    options.addDeclaration({
        name: "validation",
        help: "Specify which validation steps TypeDoc should perform on your generated documentation.",
        type: declaration_1.ParameterType.Flags,
        defaults: {
            notExported: true,
            invalidLink: false,
            notDocumented: false,
        },
    });
}
exports.addTypeDocOptions = addTypeDocOptions;
function isObject(x) {
    return !!x && typeof x === "object" && !Array.isArray(x);
}

}, function(modId) { var map = {"../../loggers":1654179213626,"../declaration":1654179213629,"../../sort":1654179213632,"../../../models/reflections/kind":1654179213609}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213632, function(require, module, exports) {

/**
 * Module which handles sorting reflections according to a user specified strategy.
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortReflections = exports.SORT_STRATEGIES = void 0;
const kind_1 = require("../models/reflections/kind");
const types_1 = require("../models/types");
exports.SORT_STRATEGIES = [
    "source-order",
    "alphabetical",
    "enum-value-ascending",
    "enum-value-descending",
    "static-first",
    "instance-first",
    "visibility",
    "required-first",
    "kind",
];
// Return true if a < b
const sorts = {
    "source-order"(a, b) {
        var _a, _b;
        const aSymbol = a.project.getSymbolFromReflection(a);
        const bSymbol = b.project.getSymbolFromReflection(b);
        // This is going to be somewhat ambiguous. No way around that. Treat the first
        // declaration of a symbol as its ordering declaration.
        const aDecl = (_a = aSymbol === null || aSymbol === void 0 ? void 0 : aSymbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a[0];
        const bDecl = (_b = bSymbol === null || bSymbol === void 0 ? void 0 : bSymbol.getDeclarations()) === null || _b === void 0 ? void 0 : _b[0];
        if (aDecl && bDecl) {
            const aFile = aDecl.getSourceFile().fileName;
            const bFile = bDecl.getSourceFile().fileName;
            if (aFile < bFile) {
                return true;
            }
            if (aFile == bFile && aDecl.pos < bDecl.pos) {
                return true;
            }
            return false;
        }
        // Someone is doing something weird. Fail to re-order. This *might* be a bug in TD
        // but it could also be TS having some exported symbol without a declaration.
        return false;
    },
    alphabetical(a, b) {
        return a.name < b.name;
    },
    "enum-value-ascending"(a, b) {
        if (a.kind == kind_1.ReflectionKind.EnumMember &&
            b.kind == kind_1.ReflectionKind.EnumMember) {
            const aValue = a.type instanceof types_1.LiteralType ? a.type.value : -Infinity;
            const bValue = b.type instanceof types_1.LiteralType ? b.type.value : -Infinity;
            return aValue < bValue;
        }
        return false;
    },
    "enum-value-descending"(a, b) {
        if (a.kind == kind_1.ReflectionKind.EnumMember &&
            b.kind == kind_1.ReflectionKind.EnumMember) {
            const aValue = a.type instanceof types_1.LiteralType ? a.type.value : -Infinity;
            const bValue = b.type instanceof types_1.LiteralType ? b.type.value : -Infinity;
            return bValue < aValue;
        }
        return false;
    },
    "static-first"(a, b) {
        return a.flags.isStatic && !b.flags.isStatic;
    },
    "instance-first"(a, b) {
        return !a.flags.isStatic && b.flags.isStatic;
    },
    visibility(a, b) {
        // Note: flags.isPublic may not be set on public members. It will only be set
        // if the user explicitly marks members as public. Therefore, we can't use it
        // here to get a reliable sort order.
        if (a.flags.isPrivate) {
            return false; // Not sorted before anything
        }
        if (a.flags.isProtected) {
            return b.flags.isPrivate; // Sorted before privates
        }
        if (b.flags.isPrivate || b.flags.isProtected) {
            return true; // We are public, sort before b if b is less visible
        }
        return false;
    },
    "required-first"(a, b) {
        return !a.flags.isOptional && b.flags.isOptional;
    },
    kind(a, b) {
        const weights = [
            kind_1.ReflectionKind.Reference,
            kind_1.ReflectionKind.Project,
            kind_1.ReflectionKind.Module,
            kind_1.ReflectionKind.Namespace,
            kind_1.ReflectionKind.Enum,
            kind_1.ReflectionKind.EnumMember,
            kind_1.ReflectionKind.Class,
            kind_1.ReflectionKind.Interface,
            kind_1.ReflectionKind.TypeAlias,
            kind_1.ReflectionKind.Constructor,
            kind_1.ReflectionKind.Event,
            kind_1.ReflectionKind.Property,
            kind_1.ReflectionKind.Variable,
            kind_1.ReflectionKind.Function,
            kind_1.ReflectionKind.Accessor,
            kind_1.ReflectionKind.Method,
            kind_1.ReflectionKind.ObjectLiteral,
            kind_1.ReflectionKind.Parameter,
            kind_1.ReflectionKind.TypeParameter,
            kind_1.ReflectionKind.TypeLiteral,
            kind_1.ReflectionKind.CallSignature,
            kind_1.ReflectionKind.ConstructorSignature,
            kind_1.ReflectionKind.IndexSignature,
            kind_1.ReflectionKind.GetSignature,
            kind_1.ReflectionKind.SetSignature,
        ];
        return weights.indexOf(a.kind) < weights.indexOf(b.kind);
    },
};
function sortReflections(reflections, strategies) {
    reflections.sort((a, b) => {
        for (const s of strategies) {
            if (sorts[s](a, b)) {
                return -1;
            }
            if (sorts[s](b, a)) {
                return 1;
            }
        }
        return 0;
    });
}
exports.sortReflections = sortReflections;

}, function(modId) { var map = {"../models/reflections/kind":1654179213609,"../models/types":1654179213615}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213634, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDocReader = exports.TSConfigReader = exports.ArgumentsReader = void 0;
var arguments_1 = require("./arguments");
Object.defineProperty(exports, "ArgumentsReader", { enumerable: true, get: function () { return arguments_1.ArgumentsReader; } });
var tsconfig_1 = require("./tsconfig");
Object.defineProperty(exports, "TSConfigReader", { enumerable: true, get: function () { return tsconfig_1.TSConfigReader; } });
var typedoc_1 = require("./typedoc");
Object.defineProperty(exports, "TypeDocReader", { enumerable: true, get: function () { return typedoc_1.TypeDocReader; } });

}, function(modId) { var map = {"./arguments":1654179213635,"./tsconfig":1654179213636,"./typedoc":1654179213637}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213635, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArgumentsReader = void 0;
const assert_1 = require("assert");
const declaration_1 = require("../declaration");
const ARRAY_OPTION_TYPES = new Set([
    declaration_1.ParameterType.Array,
    declaration_1.ParameterType.PathArray,
    declaration_1.ParameterType.ModuleArray,
    declaration_1.ParameterType.GlobArray,
]);
/**
 * Obtains option values from command-line arguments
 */
class ArgumentsReader {
    constructor(priority, args = process.argv.slice(2)) {
        this.name = "arguments";
        this.priority = priority;
        this.args = args;
    }
    read(container, logger) {
        // Make container's type more lax, we do the appropriate checks manually.
        const options = container;
        const seen = new Set();
        let index = 0;
        const trySet = (name, value) => {
            try {
                options.setValue(name, value);
            }
            catch (err) {
                (0, assert_1.ok)(err instanceof Error);
                logger.error(err.message);
            }
        };
        while (index < this.args.length) {
            const name = this.args[index];
            const decl = name.startsWith("-")
                ? (index++, options.getDeclaration(name.replace(/^--?/, "")))
                : options.getDeclaration("entryPoints");
            if (decl) {
                if (seen.has(decl.name) && ARRAY_OPTION_TYPES.has(decl.type)) {
                    trySet(decl.name, options.getValue(decl.name).concat(this.args[index]));
                }
                else if (decl.type === declaration_1.ParameterType.Boolean ||
                    decl.type === declaration_1.ParameterType.Flags) {
                    const value = String(this.args[index]).toLowerCase();
                    if (value === "true" || value === "false") {
                        trySet(decl.name, value === "true");
                    }
                    else {
                        trySet(decl.name, true);
                        // Bool option didn't consume the next argument as expected.
                        index--;
                    }
                }
                else {
                    if (index === this.args.length) {
                        // Only boolean values have optional values.
                        logger.warn(`--${decl.name} expected a value, but none was given as an argument`);
                    }
                    trySet(decl.name, this.args[index]);
                }
                seen.add(decl.name);
                index++;
                continue;
            }
            if (name.includes(".")) {
                const actualName = name.split(".")[0].replace(/^--?/, "");
                const decl = options.getDeclaration(actualName);
                if (decl && decl.type === declaration_1.ParameterType.Flags) {
                    const flagName = name.split(".", 2)[1];
                    const value = String(this.args[index]).toLowerCase();
                    if (value === "true" || value === "false") {
                        trySet(decl.name, { [flagName]: value === "true" });
                    }
                    else {
                        trySet(decl.name, { [flagName]: true });
                        // Bool option didn't consume the next argument as expected.
                        index--;
                    }
                    index++;
                    continue;
                }
            }
            logger.error(`Unknown option: ${name}`);
            index++;
        }
    }
}
exports.ArgumentsReader = ArgumentsReader;

}, function(modId) { var map = {"../declaration":1654179213629}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213636, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TSConfigReader = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const ts = require("typescript");
const fs_2 = require("../../fs");
const assert_1 = require("assert");
function isFile(file) {
    return (0, fs_1.existsSync)(file) && (0, fs_1.statSync)(file).isFile();
}
function isDir(path) {
    return (0, fs_1.existsSync)(path) && (0, fs_1.statSync)(path).isDirectory();
}
class TSConfigReader {
    constructor() {
        /**
         * Note: Runs after the {@link TypeDocReader}.
         */
        this.priority = 200;
        this.name = "tsconfig-json";
    }
    /**
     * Not considered part of the public API. You can use it, but it might break.
     * @internal
     */
    static findConfigFile(file) {
        let fileToRead = file;
        if (isDir(fileToRead)) {
            fileToRead = ts.findConfigFile(file, isFile);
        }
        if (!fileToRead || !isFile(fileToRead)) {
            return;
        }
        return fileToRead;
    }
    read(container, logger) {
        var _a, _b;
        const file = container.getValue("tsconfig");
        let fileToRead = TSConfigReader.findConfigFile(file);
        if (!fileToRead) {
            // If the user didn't give us this option, we shouldn't complain about not being able to find it.
            if (container.isSet("tsconfig")) {
                logger.error(`The tsconfig file ${file} does not exist`);
            }
            return;
        }
        fileToRead = (0, fs_2.normalizePath)((0, path_1.resolve)(fileToRead));
        let fatalError = false;
        const parsed = ts.getParsedCommandLineOfConfigFile(fileToRead, {}, {
            ...ts.sys,
            onUnRecoverableConfigFileDiagnostic(error) {
                logger.diagnostic(error);
                fatalError = true;
            },
        });
        if (!parsed || fatalError) {
            return;
        }
        logger.diagnostics(parsed.errors);
        const typedocOptions = (_b = (_a = parsed.raw) === null || _a === void 0 ? void 0 : _a.typedocOptions) !== null && _b !== void 0 ? _b : {};
        if (typedocOptions.options) {
            logger.error([
                "typedocOptions in tsconfig file specifies an option file to read but the option",
                "file has already been read. This is likely a misconfiguration.",
            ].join(" "));
            delete typedocOptions.options;
        }
        if (typedocOptions.tsconfig) {
            logger.error("typedocOptions in tsconfig file may not specify a tsconfig file to read");
            delete typedocOptions.tsconfig;
        }
        container.setCompilerOptions(parsed.fileNames, parsed.options, parsed.projectReferences);
        for (const [key, val] of Object.entries(typedocOptions || {})) {
            try {
                // We catch the error, so can ignore the strict type checks
                container.setValue(key, val, (0, path_1.join)(fileToRead, ".."));
            }
            catch (error) {
                (0, assert_1.ok)(error instanceof Error);
                logger.error(error.message);
            }
        }
    }
}
exports.TSConfigReader = TSConfigReader;

}, function(modId) { var map = {"../../fs":1654179213610}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213637, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDocReader = void 0;
const path_1 = require("path");
const FS = require("fs");
const assert_1 = require("assert");
/**
 * Obtains option values from typedoc.json
 * or typedoc.js (discouraged since ~0.14, don't fully deprecate until API has stabilized)
 */
class TypeDocReader {
    constructor() {
        /**
         * Should run before the tsconfig reader so that it can specify a tsconfig file to read.
         */
        this.priority = 100;
        this.name = "typedoc-json";
    }
    /**
     * Read user configuration from a typedoc.json or typedoc.js configuration file.
     * @param container
     * @param logger
     */
    read(container, logger) {
        const path = container.getValue("options");
        const file = this.findTypedocFile(path);
        if (!file) {
            if (container.isSet("options")) {
                logger.error(`The options file could not be found with the given path ${path}`);
            }
            return;
        }
        const seen = new Set();
        this.readFile(file, container, logger, seen);
    }
    /**
     * Read the given options file + any extended files.
     * @param file
     * @param container
     * @param logger
     */
    readFile(file, container, logger, seen) {
        if (seen.has(file)) {
            logger.error(`Tried to load the options file ${file} multiple times.`);
            return;
        }
        seen.add(file);
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const fileContent = require(file);
        if (typeof fileContent !== "object" || !fileContent) {
            logger.error(`The file ${file} is not an object.`);
            return;
        }
        // clone option object to avoid of property changes in re-calling this file
        const data = { ...fileContent };
        delete data["$schema"]; // Useful for better autocompletion, should not be read as a key.
        if ("extends" in data) {
            const extended = getStringArray(data["extends"]);
            for (const extendedFile of extended) {
                // Extends is relative to the file it appears in.
                this.readFile((0, path_1.resolve)((0, path_1.dirname)(file), extendedFile), container, logger, seen);
            }
            delete data["extends"];
        }
        for (const [key, val] of Object.entries(data)) {
            try {
                container.setValue(key, val, (0, path_1.resolve)((0, path_1.dirname)(file)));
            }
            catch (error) {
                (0, assert_1.ok)(error instanceof Error);
                logger.error(error.message);
            }
        }
    }
    /**
     * Search for the typedoc.js or typedoc.json file from the given path
     *
     * @param  path Path to the typedoc.(js|json) file. If path is a directory
     *   typedoc file will be attempted to be found at the root of this path
     * @param logger
     * @return the typedoc.(js|json) file path or undefined
     */
    findTypedocFile(path) {
        path = (0, path_1.resolve)(path);
        return [
            path,
            (0, path_1.join)(path, "typedoc.json"),
            (0, path_1.join)(path, "typedoc.js"),
        ].find((path) => FS.existsSync(path) && FS.statSync(path).isFile());
    }
}
exports.TypeDocReader = TypeDocReader;
function getStringArray(arg) {
    return Array.isArray(arg) ? arg.map(String) : [String(arg)];
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213639, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.EventHooks = void 0;
const array_1 = require("./array");
const momentos = new WeakMap();
/**
 * Event emitter which allows listeners to return a value.
 *
 * This is beneficial for the themes since it allows plugins to modify the HTML output
 * without doing unsafe text replacement.
 *
 * This class is functionally nearly identical to the {@link EventEmitter} class with
 * two exceptions.
 * 1. The {@link EventEmitter} class only `await`s return values from its listeners, it
 *    does not return them to the emitter.
 * 2. This class requires listeners to by synchronous, unless `R` is specified as to be
 *    a promise or other deferred type.
 *
 * @example
 * ```ts
 * const x = new EventHooks<{ a: [string] }, string>()
 * x.on('a', a => a.repeat(123)) // ok, returns a string
 * x.on('b', console.log) // error, 'b' is not assignable to 'a'
 * x.on('a' a => 1) // error, returns a number but expected a string
 * ```
 */
class EventHooks {
    constructor() {
        // Function is *usually* not a good type to use, but here it lets us specify stricter
        // contracts in the methods while not casting everywhere this is used.
        this._listeners = new Map();
    }
    /**
     * Starts listening to an event.
     * @param event the event to listen to.
     * @param listener function to be called when an this event is emitted.
     * @param order optional order to insert this hook with.
     */
    on(event, listener, order = 0) {
        const list = (this._listeners.get(event) || []).slice();
        (0, array_1.insertOrderSorted)(list, { listener, order });
        this._listeners.set(event, list);
    }
    /**
     * Listens to a single occurrence of an event.
     * @param event the event to listen to.
     * @param listener function to be called when an this event is emitted.
     * @param order optional order to insert this hook with.
     */
    once(event, listener, order = 0) {
        const list = (this._listeners.get(event) || []).slice();
        (0, array_1.insertOrderSorted)(list, { listener, once: true, order });
        this._listeners.set(event, list);
    }
    /**
     * Stops listening to an event.
     * @param event the event to stop listening to.
     * @param listener the function to remove from the listener array.
     */
    off(event, listener) {
        const listeners = this._listeners.get(event);
        if (listeners) {
            const index = listeners.findIndex((lo) => lo.listener === listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        }
    }
    /**
     * Emits an event to all currently subscribed listeners.
     * @param event the event to emit.
     * @param args any arguments required for the event.
     */
    emit(event, ...args) {
        var _a;
        const listeners = ((_a = this._listeners.get(event)) === null || _a === void 0 ? void 0 : _a.slice()) || [];
        this._listeners.set(event, listeners.filter(({ once }) => !once));
        return listeners.map(({ listener }) => listener(...args));
    }
    saveMomento() {
        const momento = {};
        const save = new Map();
        for (const [key, val] of this._listeners) {
            save.set(key, [...val]);
        }
        momentos.set(momento, save);
        return momento;
    }
    restoreMomento(momento) {
        const saved = momentos.get(momento);
        if (saved) {
            this._listeners.clear();
            for (const [key, val] of saved) {
                this._listeners.set(key, [...val]);
            }
        }
        else {
            throw new Error("Momento not found.");
        }
    }
}
exports.EventHooks = EventHooks;

}, function(modId) { var map = {"./array":1654179213620}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213641, function(require, module, exports) {

/**
 * Custom JSX module designed specifically for TypeDoc's needs.
 * When overriding a default TypeDoc theme output, your implementation must create valid {@link Element}
 * instances, which can be most easily done by using TypeDoc's JSX implementation. To use it, set up
 * your tsconfig with the following compiler options:
 * ```json
 * {
 *     "jsx": "react",
 *     "jsxFactory": "JSX.createElement",
 *     "jsxFragmentFactory": "JSX.Fragment"
 * }
 * ```
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderElement = exports.createElement = exports.Raw = exports.Fragment = void 0;
const jsx_elements_1 = require("./jsx.elements");
var jsx_elements_2 = require("./jsx.elements");
Object.defineProperty(exports, "Fragment", { enumerable: true, get: function () { return jsx_elements_2.JsxFragment; } });
/**
 * Used to inject HTML directly into the document.
 */
function Raw(_props) {
    // This is handled specially by the renderElement function. Instead of being
    // called, the tag is compared to this function and the `html` prop will be
    // returned directly.
    return null;
}
exports.Raw = Raw;
function escapeHtml(html) {
    return html.replace(/[&<>'"]/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
    }[c]));
}
const voidElements = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * JSX factory function to create an "element" that can later be rendered with {@link renderElement}
 * @param tag
 * @param props
 * @param children
 */
function createElement(tag, props, ...children) {
    return { tag, props, children };
}
exports.createElement = createElement;
function renderElement(element) {
    if (!element) {
        return "";
    }
    const { tag, props, children } = element;
    if (typeof tag === "function") {
        if (tag === Raw) {
            return String(props.html);
        }
        return renderElement(tag(Object.assign({ children }, props)));
    }
    const html = [];
    if (tag !== jsx_elements_1.JsxFragment) {
        html.push("<", tag);
        for (const [key, val] of Object.entries(props !== null && props !== void 0 ? props : {})) {
            if (val == null)
                continue;
            if (typeof val == "boolean") {
                if (val) {
                    html.push(" ", key);
                }
            }
            else {
                html.push(" ", key, "=", JSON.stringify(val));
            }
        }
    }
    let hasChildren = false;
    if (children.length) {
        hasChildren = true;
        if (tag !== jsx_elements_1.JsxFragment)
            html.push(">");
        renderChildren(children);
    }
    if (tag !== jsx_elements_1.JsxFragment) {
        if (!hasChildren) {
            if (voidElements.has(tag)) {
                html.push("/>");
            }
            else {
                html.push("></", tag, ">");
            }
        }
        else {
            html.push("</", tag, ">");
        }
    }
    return html.join("");
    function renderChildren(children) {
        for (const child of children) {
            if (!child)
                continue;
            if (Array.isArray(child)) {
                renderChildren(child);
            }
            else if (typeof child === "string" || typeof child === "number") {
                html.push(escapeHtml(child.toString()));
            }
            else {
                html.push(renderElement(child));
            }
        }
    }
}
exports.renderElement = renderElement;

}, function(modId) { var map = {"./jsx.elements":1654179213642}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213642, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.JsxFragment = void 0;
exports.JsxFragment = Symbol();

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213643, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureReflection = void 0;
const types_1 = require("../types");
const abstract_1 = require("./abstract");
class SignatureReflection extends abstract_1.Reflection {
    /**
     * Create a new SignatureReflection to contain a specific type of signature.
     */
    constructor(name, kind, parent) {
        super(name, kind, parent);
    }
    /**
     * Traverse all potential child reflections of this reflection.
     *
     * The given callback will be invoked for all children, signatures and type parameters
     * attached to this reflection.
     *
     * @param callback  The callback function that should be applied for each child reflection.
     */
    traverse(callback) {
        var _a, _b;
        if (this.type instanceof types_1.ReflectionType) {
            if (callback(this.type.declaration, abstract_1.TraverseProperty.TypeLiteral) === false) {
                return;
            }
        }
        for (const parameter of ((_a = this.typeParameters) === null || _a === void 0 ? void 0 : _a.slice()) || []) {
            if (callback(parameter, abstract_1.TraverseProperty.TypeParameter) === false) {
                return;
            }
        }
        for (const parameter of ((_b = this.parameters) === null || _b === void 0 ? void 0 : _b.slice()) || []) {
            if (callback(parameter, abstract_1.TraverseProperty.Parameters) === false) {
                return;
            }
        }
        super.traverse(callback);
    }
    /**
     * Return a string representation of this reflection.
     */
    toString() {
        let result = super.toString();
        if (this.typeParameters) {
            const parameters = [];
            this.typeParameters.forEach((parameter) => parameters.push(parameter.name));
            result += "<" + parameters.join(", ") + ">";
        }
        if (this.type) {
            result += ":" + this.type.toString();
        }
        return result;
    }
}
exports.SignatureReflection = SignatureReflection;

}, function(modId) { var map = {"../types":1654179213615,"./abstract":1654179213607}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213644, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeParameterReflection = exports.VarianceModifier = void 0;
const abstract_1 = require("./abstract");
const kind_1 = require("./kind");
/**
 * Modifier flags for type parameters, added in TS 4.7
 * @enum
 */
exports.VarianceModifier = {
    in: "in",
    out: "out",
    inOut: "in out",
};
class TypeParameterReflection extends abstract_1.Reflection {
    constructor(name, constraint, defaultType, parent, varianceModifier) {
        super(name, kind_1.ReflectionKind.TypeParameter, parent);
        this.type = constraint;
        this.default = defaultType;
        this.varianceModifier = varianceModifier;
    }
}
exports.TypeParameterReflection = TypeParameterReflection;

}, function(modId) { var map = {"./abstract":1654179213607,"./kind":1654179213609}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213645, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentTag = exports.Comment = void 0;
var comment_1 = require("./comment");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return comment_1.Comment; } });
var tag_1 = require("./tag");
Object.defineProperty(exports, "CommentTag", { enumerable: true, get: function () { return tag_1.CommentTag; } });

}, function(modId) { var map = {"./comment":1654179213646,"./tag":1654179213647}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213646, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const utils_1 = require("../../utils");
const tag_1 = require("./tag");
const COPIED_TAGS = ["remarks"];
/**
 * A model that represents a comment.
 *
 * Instances of this model are created by the CommentPlugin. You can retrieve comments
 * through the {@link DeclarationReflection.comment} property.
 */
class Comment {
    /**
     * Creates a new Comment instance.
     */
    constructor(shortText, text) {
        /**
         * All associated tags.
         */
        this.tags = [];
        this.shortText = shortText || "";
        this.text = text || "";
    }
    /**
     * Has this comment a visible component?
     *
     * @returns TRUE when this comment has a visible component.
     */
    hasVisibleComponent() {
        return !!this.shortText || !!this.text || this.tags.length > 0;
    }
    /**
     * Test whether this comment contains a tag with the given name.
     *
     * @param tagName  The name of the tag to look for.
     * @returns TRUE when this comment contains a tag with the given name, otherwise FALSE.
     */
    hasTag(tagName) {
        return this.tags.some((tag) => tag.tagName === tagName);
    }
    /**
     * Return the first tag with the given name.
     *
     * You can optionally pass a parameter name that should be searched to.
     *
     * @param tagName  The name of the tag to look for.
     * @param paramName  An optional parameter name to look for.
     * @returns The found tag or undefined.
     */
    getTag(tagName, paramName) {
        return this.tags.find((tag) => {
            return (tag.tagName === tagName &&
                (paramName === void 0 || tag.paramName === paramName));
        });
    }
    /**
     * Removes all tags with the given tag name from the comment.
     * @param tagName
     */
    removeTags(tagName) {
        (0, utils_1.removeIf)(this.tags, (tag) => tag.tagName === tagName);
    }
    /**
     * Copy the data of the given comment into this comment.
     *
     * `shortText`, `text`, `returns` and tags from `COPIED_TAGS` are copied;
     * other instance tags left unchanged.
     *
     * @param comment - Source comment to copy from
     */
    copyFrom(comment) {
        this.shortText = comment.shortText;
        this.text = comment.text;
        this.returns = comment.returns;
        const overrideTags = comment.tags
            .filter((tag) => COPIED_TAGS.includes(tag.tagName))
            .map((tag) => new tag_1.CommentTag(tag.tagName, tag.paramName, tag.text));
        this.tags.forEach((tag, index) => {
            const matchingTag = overrideTags.find((matchingOverride) => (matchingOverride === null || matchingOverride === void 0 ? void 0 : matchingOverride.tagName) === tag.tagName);
            if (matchingTag) {
                this.tags[index] = matchingTag;
                overrideTags.splice(overrideTags.indexOf(matchingTag), 1);
            }
        });
        this.tags = [...this.tags, ...overrideTags];
    }
}
exports.Comment = Comment;

}, function(modId) { var map = {"../../utils":1654179213624,"./tag":1654179213647}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213647, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentTag = void 0;
/**
 * A model that represents a single javadoc comment tag.
 *
 * Tags are stored in the {@link Comment.tags} property.
 */
class CommentTag {
    /**
     * Create a new CommentTag instance.
     */
    constructor(tagName, paramName, text) {
        this.tagName = tagName;
        this.paramName = paramName || "";
        this.text = text || "";
    }
}
exports.CommentTag = CommentTag;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213648, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionGroup = void 0;
/**
 * A group of reflections. All reflections in a group are of the same kind.
 *
 * Reflection groups are created by the ´GroupHandler´ in the resolving phase
 * of the dispatcher. The main purpose of groups is to be able to more easily
 * render human readable children lists in templates.
 */
class ReflectionGroup {
    /**
     * Create a new ReflectionGroup instance.
     *
     * @param title The title of this group.
     * @param kind  The original typescript kind of the children of this group.
     */
    constructor(title, kind) {
        /**
         * All reflections of this group.
         */
        this.children = [];
        this.title = title;
        this.kind = kind;
    }
    /**
     * Do all children of this group have a separate document?
     */
    allChildrenHaveOwnDocument() {
        return this.children.every((child) => child.hasOwnDocument);
    }
}
exports.ReflectionGroup = ReflectionGroup;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213649, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionCategory = void 0;
/**
 * A category of reflections.
 *
 * Reflection categories are created by the ´CategoryPlugin´ in the resolving phase
 * of the dispatcher. The main purpose of categories is to be able to more easily
 * render human readable children lists in templates.
 */
class ReflectionCategory {
    /**
     * Create a new ReflectionCategory instance.
     *
     * @param title The title of this category.
     */
    constructor(title) {
        /**
         * All reflections of this category.
         */
        this.children = [];
        this.title = title;
    }
    /**
     * Do all children of this category have a separate document?
     */
    allChildrenHaveOwnDocument() {
        return this.children.every((child) => child.hasOwnDocument);
    }
}
exports.ReflectionCategory = ReflectionCategory;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213650, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertExpression = exports.convertDefaultValue = exports.Converter = exports.Context = void 0;
var context_1 = require("./context");
Object.defineProperty(exports, "Context", { enumerable: true, get: function () { return context_1.Context; } });
var converter_1 = require("./converter");
Object.defineProperty(exports, "Converter", { enumerable: true, get: function () { return converter_1.Converter; } });
var convert_expression_1 = require("./convert-expression");
Object.defineProperty(exports, "convertDefaultValue", { enumerable: true, get: function () { return convert_expression_1.convertDefaultValue; } });
Object.defineProperty(exports, "convertExpression", { enumerable: true, get: function () { return convert_expression_1.convertExpression; } });
require("./plugins/index");

}, function(modId) { var map = {"./converter":1654179213652,"./convert-expression":1654179213659,"./plugins/index":1654179213667}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213652, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Converter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = void 0;
const ts = require("typescript");
const index_1 = require("../models/index");
const context_1 = require("./context");
const components_1 = require("./components");
const component_1 = require("../utils/component");
const utils_1 = require("../utils");
const types_1 = require("./types");
const converter_events_1 = require("./converter-events");
const symbols_1 = require("./symbols");
const paths_1 = require("../utils/paths");
const enum_1 = require("../utils/enum");
const symbols_2 = require("./utils/symbols");
/**
 * Compiles source files using TypeScript and converts compiler symbols to reflections.
 */
let Converter = Converter_1 = class Converter extends component_1.ChildableComponent {
    /**
     * Compile the given source files and create a project reflection for them.
     */
    convert(entryPoints) {
        const programs = entryPoints.map((e) => e.program);
        this.externalPatternCache = void 0;
        const project = new index_1.ProjectReflection(this.name);
        const context = new context_1.Context(this, programs, project);
        this.trigger(Converter_1.EVENT_BEGIN, context);
        this.compile(entryPoints, context);
        this.resolve(context);
        // This should only do anything if a plugin does something bad.
        project.removeDanglingReferences();
        this.trigger(Converter_1.EVENT_END, context);
        return project;
    }
    /** @internal */
    convertSymbol(context, symbol) {
        (0, symbols_1.convertSymbol)(context, symbol);
    }
    /**
     * Convert the given TypeScript type into its TypeDoc type reflection.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param referenceTarget The target to be used to attempt to resolve reference types
     * @returns The TypeDoc type reflection representing the given node and type.
     * @internal
     */
    convertType(context, node) {
        return (0, types_1.convertType)(context, node);
    }
    /** @internal */
    getNodesForSymbol(symbol, kind) {
        var _a;
        const wantedKinds = {
            [index_1.ReflectionKind.Project]: [ts.SyntaxKind.SourceFile],
            [index_1.ReflectionKind.Module]: [ts.SyntaxKind.SourceFile],
            [index_1.ReflectionKind.Namespace]: [
                ts.SyntaxKind.ModuleDeclaration,
                ts.SyntaxKind.SourceFile,
            ],
            [index_1.ReflectionKind.Enum]: [
                ts.SyntaxKind.EnumDeclaration,
                ts.SyntaxKind.VariableDeclaration,
            ],
            [index_1.ReflectionKind.EnumMember]: [
                ts.SyntaxKind.EnumMember,
                ts.SyntaxKind.PropertyAssignment,
                ts.SyntaxKind.PropertySignature,
            ],
            [index_1.ReflectionKind.Variable]: [
                ts.SyntaxKind.VariableDeclaration,
                ts.SyntaxKind.ExportAssignment,
            ],
            [index_1.ReflectionKind.Function]: [
                ts.SyntaxKind.FunctionDeclaration,
                ts.SyntaxKind.VariableDeclaration,
            ],
            [index_1.ReflectionKind.Class]: [ts.SyntaxKind.ClassDeclaration],
            [index_1.ReflectionKind.Interface]: [
                ts.SyntaxKind.InterfaceDeclaration,
                ts.SyntaxKind.JSDocTypedefTag,
            ],
            [index_1.ReflectionKind.Constructor]: [ts.SyntaxKind.Constructor],
            [index_1.ReflectionKind.Property]: [
                ts.SyntaxKind.PropertyDeclaration,
                ts.SyntaxKind.PropertyAssignment,
                ts.SyntaxKind.PropertySignature,
                ts.SyntaxKind.JSDocPropertyTag,
                ts.SyntaxKind.BinaryExpression,
            ],
            [index_1.ReflectionKind.Method]: [
                ts.SyntaxKind.MethodDeclaration,
                ts.SyntaxKind.PropertyDeclaration,
                ts.SyntaxKind.PropertySignature,
            ],
            [index_1.ReflectionKind.CallSignature]: [
                ts.SyntaxKind.FunctionDeclaration,
                ts.SyntaxKind.VariableDeclaration,
                ts.SyntaxKind.MethodDeclaration,
                ts.SyntaxKind.MethodDeclaration,
                ts.SyntaxKind.PropertyDeclaration,
                ts.SyntaxKind.PropertySignature,
                ts.SyntaxKind.CallSignature,
            ],
            [index_1.ReflectionKind.IndexSignature]: [ts.SyntaxKind.IndexSignature],
            [index_1.ReflectionKind.ConstructorSignature]: [
                ts.SyntaxKind.ConstructSignature,
            ],
            [index_1.ReflectionKind.Parameter]: [ts.SyntaxKind.Parameter],
            [index_1.ReflectionKind.TypeLiteral]: [ts.SyntaxKind.TypeLiteral],
            [index_1.ReflectionKind.TypeParameter]: [ts.SyntaxKind.TypeParameter],
            [index_1.ReflectionKind.Accessor]: [
                ts.SyntaxKind.GetAccessor,
                ts.SyntaxKind.SetAccessor,
            ],
            [index_1.ReflectionKind.GetSignature]: [ts.SyntaxKind.GetAccessor],
            [index_1.ReflectionKind.SetSignature]: [ts.SyntaxKind.SetAccessor],
            [index_1.ReflectionKind.ObjectLiteral]: [
                ts.SyntaxKind.ObjectLiteralExpression,
            ],
            [index_1.ReflectionKind.TypeAlias]: [
                ts.SyntaxKind.TypeAliasDeclaration,
                ts.SyntaxKind.JSDocTypedefTag,
            ],
            [index_1.ReflectionKind.Event]: [],
            [index_1.ReflectionKind.Reference]: [
                ts.SyntaxKind.NamespaceExport,
                ts.SyntaxKind.ExportSpecifier,
            ],
        }[kind];
        const declarations = (_a = symbol.getDeclarations()) !== null && _a !== void 0 ? _a : [];
        return declarations.filter((d) => wantedKinds.includes(d.kind));
    }
    /**
     * Compile the files within the given context and convert the compiler symbols to reflections.
     *
     * @param context  The context object describing the current state the converter is in.
     * @returns An array containing all errors generated by the TypeScript compiler.
     */
    compile(entryPoints, context) {
        const entries = entryPoints.map((e) => {
            return {
                entryPoint: e,
                context: undefined,
            };
        });
        entries.forEach((e) => {
            context.setActiveProgram(e.entryPoint.program);
            e.context = this.convertExports(context, e.entryPoint.sourceFile, entries.length === 1, e.entryPoint.displayName);
        });
        for (const { entryPoint, context } of entries) {
            // active program is already set on context
            // if we don't have a context, then this entry point is being ignored
            if (context) {
                this.convertReExports(context, entryPoint.sourceFile);
            }
        }
        context.setActiveProgram(undefined);
    }
    convertExports(context, node, singleEntryPoint, entryName) {
        const symbol = getSymbolForModuleLike(context, node);
        let moduleContext;
        const allExports = getExports(context, node, symbol);
        if (allExports.every((exp) => this.shouldIgnore(exp, context.checker))) {
            this.owner.logger.verbose(`Ignoring entry point ${entryName} since all members will be ignored.`);
            return;
        }
        if (singleEntryPoint) {
            // Special case for when we're giving a single entry point, we don't need to
            // create modules for each entry. Register the project as this module.
            context.project.registerReflection(context.project, symbol);
            context.trigger(Converter_1.EVENT_CREATE_DECLARATION, context.project, node);
            moduleContext = context;
        }
        else {
            const reflection = context.createDeclarationReflection(index_1.ReflectionKind.Module, symbol, void 0, entryName);
            context.finalizeDeclarationReflection(reflection, symbol, void 0, node);
            moduleContext = context.withScope(reflection);
        }
        for (const exp of allExports.filter((exp) => isDirectExport(context.resolveAliasedSymbol(exp), node))) {
            (0, symbols_1.convertSymbol)(moduleContext, exp);
        }
        return moduleContext;
    }
    convertReExports(moduleContext, node) {
        for (const exp of getExports(moduleContext, node, moduleContext.project.getSymbolFromReflection(moduleContext.scope)).filter((exp) => !isDirectExport(moduleContext.resolveAliasedSymbol(exp), node))) {
            (0, symbols_1.convertSymbol)(moduleContext, exp);
        }
    }
    /**
     * Resolve the project within the given context.
     *
     * @param context  The context object describing the current state the converter is in.
     * @returns The final project reflection.
     */
    resolve(context) {
        this.trigger(Converter_1.EVENT_RESOLVE_BEGIN, context);
        const project = context.project;
        for (const reflection of Object.values(project.reflections)) {
            this.trigger(Converter_1.EVENT_RESOLVE, context, reflection);
        }
        this.trigger(Converter_1.EVENT_RESOLVE_END, context);
    }
    /** @internal */
    shouldIgnore(symbol, checker) {
        if (this.excludeNotDocumented &&
            // If the enum is included, we should include members even if not documented.
            !(0, enum_1.hasAllFlags)(symbol.flags, ts.SymbolFlags.EnumMember) &&
            (0, symbols_2.resolveAliasedSymbol)(symbol, checker).getDocumentationComment(checker).length === 0) {
            return true;
        }
        if (this.isExcluded(symbol)) {
            return true;
        }
        if (!this.excludeExternals) {
            return false;
        }
        return this.isExternal(symbol);
    }
    isExcluded(symbol) {
        var _a, _b;
        (_a = this.excludeCache) !== null && _a !== void 0 ? _a : (this.excludeCache = (0, paths_1.createMinimatch)(this.application.options.getValue("exclude")));
        for (const node of (_b = symbol.getDeclarations()) !== null && _b !== void 0 ? _b : []) {
            if ((0, paths_1.matchesAny)(this.excludeCache, node.getSourceFile().fileName)) {
                return true;
            }
        }
        return false;
    }
    /** @internal */
    isExternal(symbol) {
        var _a, _b;
        (_a = this.externalPatternCache) !== null && _a !== void 0 ? _a : (this.externalPatternCache = (0, paths_1.createMinimatch)(this.externalPattern));
        for (const node of (_b = symbol.getDeclarations()) !== null && _b !== void 0 ? _b : []) {
            if ((0, paths_1.matchesAny)(this.externalPatternCache, node.getSourceFile().fileName)) {
                return true;
            }
        }
        return false;
    }
};
/**
 * General events
 */
/**
 * Triggered when the converter begins converting a project.
 * The listener will be given a {@link Context} object.
 * @event
 */
Converter.EVENT_BEGIN = converter_events_1.ConverterEvents.BEGIN;
/**
 * Triggered when the converter has finished converting a project.
 * The listener will be given a {@link Context} object.
 * @event
 */
Converter.EVENT_END = converter_events_1.ConverterEvents.END;
/**
 * Factory events
 */
/**
 * Triggered when the converter has created a declaration reflection.
 * The listener will be given {@link Context}, {@link Reflection} and a `ts.Node?`.
 * @event
 */
Converter.EVENT_CREATE_DECLARATION = converter_events_1.ConverterEvents.CREATE_DECLARATION;
/**
 * Triggered when the converter has created a signature reflection.
 * The listener will be given {@link Context}, {@link SignatureReflection} and a `ts.Node?`
 * @event
 */
Converter.EVENT_CREATE_SIGNATURE = converter_events_1.ConverterEvents.CREATE_SIGNATURE;
/**
 * Triggered when the converter has created a parameter reflection.
 * The listener will be given {@link Context}, {@link ParameterReflection} and a `ts.Node?`
 * @event
 */
Converter.EVENT_CREATE_PARAMETER = converter_events_1.ConverterEvents.CREATE_PARAMETER;
/**
 * Triggered when the converter has created a type parameter reflection.
 * The listener will be given {@link Context}, {@link TypeParameterReflection} and a `ts.Node?`
 * @event
 */
Converter.EVENT_CREATE_TYPE_PARAMETER = converter_events_1.ConverterEvents.CREATE_TYPE_PARAMETER;
/**
 * Resolve events
 */
/**
 * Triggered when the converter begins resolving a project.
 * The listener will be given {@link Context}.
 * @event
 */
Converter.EVENT_RESOLVE_BEGIN = converter_events_1.ConverterEvents.RESOLVE_BEGIN;
/**
 * Triggered when the converter resolves a reflection.
 * The listener will be given {@link Context} and a {@link Reflection}.
 * @event
 */
Converter.EVENT_RESOLVE = converter_events_1.ConverterEvents.RESOLVE;
/**
 * Triggered when the converter has finished resolving a project.
 * The listener will be given {@link Context}.
 * @event
 */
Converter.EVENT_RESOLVE_END = converter_events_1.ConverterEvents.RESOLVE_END;
__decorate([
    (0, utils_1.BindOption)("name")
], Converter.prototype, "name", void 0);
__decorate([
    (0, utils_1.BindOption)("externalPattern")
], Converter.prototype, "externalPattern", void 0);
__decorate([
    (0, utils_1.BindOption)("excludeExternals")
], Converter.prototype, "excludeExternals", void 0);
__decorate([
    (0, utils_1.BindOption)("excludeNotDocumented")
], Converter.prototype, "excludeNotDocumented", void 0);
__decorate([
    (0, utils_1.BindOption)("excludePrivate")
], Converter.prototype, "excludePrivate", void 0);
__decorate([
    (0, utils_1.BindOption)("excludeProtected")
], Converter.prototype, "excludeProtected", void 0);
Converter = Converter_1 = __decorate([
    (0, component_1.Component)({
        name: "converter",
        internal: true,
        childClass: components_1.ConverterComponent,
    })
], Converter);
exports.Converter = Converter;
function getSymbolForModuleLike(context, node) {
    var _a, _b;
    const symbol = (_a = context.checker.getSymbolAtLocation(node)) !== null && _a !== void 0 ? _a : node.symbol;
    if (symbol) {
        return symbol;
    }
    // This is a global file, get all symbols declared in this file...
    // this isn't the best solution, it would be nice to have all globals given to a special
    // "globals" file, but this is uncommon enough that I'm skipping it for now.
    const sourceFile = node.getSourceFile();
    const globalSymbols = context.checker
        .getSymbolsInScope(node, ts.SymbolFlags.ModuleMember)
        .filter((s) => { var _a; return (_a = s.getDeclarations()) === null || _a === void 0 ? void 0 : _a.some((d) => d.getSourceFile() === sourceFile); });
    // Detect declaration files with declare module "foo" as their only export
    // and lift that up one level as the source file symbol
    if (globalSymbols.length === 1 &&
        ((_b = globalSymbols[0]
            .getDeclarations()) === null || _b === void 0 ? void 0 : _b.every((declaration) => ts.isModuleDeclaration(declaration) &&
            ts.isStringLiteral(declaration.name)))) {
        return globalSymbols[0];
    }
}
function getExports(context, node, symbol) {
    var _a;
    let result;
    // The generated docs aren't great, but you really ought not be using
    // this in the first place... so it's better than nothing.
    const exportEq = (_a = symbol === null || symbol === void 0 ? void 0 : symbol.exports) === null || _a === void 0 ? void 0 : _a.get("export=");
    if (exportEq) {
        // JS users might also have exported types here.
        // We need to filter for types because otherwise static methods can show up as both
        // members of the export= class and as functions if a class is directly exported.
        result = [exportEq].concat(context.checker
            .getExportsOfModule(symbol)
            .filter((s) => !(0, enum_1.hasAnyFlag)(s.flags, ts.SymbolFlags.Prototype | ts.SymbolFlags.Value)));
    }
    else if (symbol) {
        result = context.checker
            .getExportsOfModule(symbol)
            .filter((s) => !(0, enum_1.hasAllFlags)(s.flags, ts.SymbolFlags.Prototype));
        if (result.length === 0) {
            const globalDecl = node.statements.find((s) => ts.isModuleDeclaration(s) &&
                s.flags & ts.NodeFlags.GlobalAugmentation);
            if (globalDecl) {
                const globalSymbol = context.getSymbolAtLocation(globalDecl);
                if (globalSymbol) {
                    result = context.checker
                        .getExportsOfModule(globalSymbol)
                        .filter((exp) => {
                        var _a;
                        return (_a = exp.declarations) === null || _a === void 0 ? void 0 : _a.some((d) => d.getSourceFile() === node);
                    });
                }
            }
        }
    }
    else {
        // Global file with no inferred top level symbol, get all symbols declared in this file.
        const sourceFile = node.getSourceFile();
        result = context.checker
            .getSymbolsInScope(node, ts.SymbolFlags.ModuleMember)
            .filter((s) => {
            var _a;
            return (_a = s
                .getDeclarations()) === null || _a === void 0 ? void 0 : _a.some((d) => d.getSourceFile() === sourceFile);
        });
    }
    // Put symbols named "default" last, #1795
    result.sort((a, b) => {
        if (a.name === "default") {
            return 1;
        }
        else if (b.name === "default") {
            return -1;
        }
        return 0;
    });
    return result;
}
function isDirectExport(symbol, file) {
    var _a, _b;
    return ((_b = (_a = symbol
        .getDeclarations()) === null || _a === void 0 ? void 0 : _a.every((decl) => decl.getSourceFile() === file)) !== null && _b !== void 0 ? _b : false);
}

}, function(modId) { var map = {"../models/index":1654179213611,"./components":1654179213654,"../utils/component":1654179213625,"../utils":1654179213624,"./types":1654179213655,"./converter-events":1654179213656,"./symbols":1654179213661,"../utils/paths":1654179213665,"../utils/enum":1654179213662,"./utils/symbols":1654179213666}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213654, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterComponent = exports.Component = void 0;
const component_1 = require("../utils/component");
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return component_1.Component; } });
class ConverterComponent extends component_1.AbstractComponent {
}
exports.ConverterComponent = ConverterComponent;

}, function(modId) { var map = {"../utils/component":1654179213625}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213655, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertType = exports.loadConverters = void 0;
const assert = require("assert");
const ts = require("typescript");
const models_1 = require("../models");
const array_1 = require("../utils/array");
const converter_events_1 = require("./converter-events");
const index_signature_1 = require("./factories/index-signature");
const signature_1 = require("./factories/signature");
const symbols_1 = require("./symbols");
const reflections_1 = require("./utils/reflections");
const converters = new Map();
function loadConverters() {
    if (converters.size)
        return;
    for (const actor of [
        arrayConverter,
        conditionalConverter,
        constructorConverter,
        exprWithTypeArgsConverter,
        functionTypeConverter,
        importType,
        indexedAccessConverter,
        inferredConverter,
        intersectionConverter,
        jsDocVariadicTypeConverter,
        keywordConverter,
        optionalConverter,
        parensConverter,
        predicateConverter,
        queryConverter,
        typeLiteralConverter,
        referenceConverter,
        restConverter,
        namedTupleMemberConverter,
        mappedConverter,
        literalTypeConverter,
        templateLiteralConverter,
        thisConverter,
        tupleConverter,
        typeOperatorConverter,
        unionConverter,
        // Only used if skipLibCheck: true
        jsDocNullableTypeConverter,
        jsDocNonNullableTypeConverter,
    ]) {
        for (const key of actor.kind) {
            if (key === undefined) {
                // Might happen if running on an older TS version.
                continue;
            }
            assert(!converters.has(key));
            converters.set(key, actor);
        }
    }
}
exports.loadConverters = loadConverters;
// This ought not be necessary, but we need some way to discover recursively
// typed symbols which do not have type nodes. See the `recursive` symbol in the variables test.
const seenTypeSymbols = new Set();
function maybeConvertType(context, typeOrNode) {
    if (!typeOrNode) {
        return;
    }
    return convertType(context, typeOrNode);
}
function convertType(context, typeOrNode) {
    if (!typeOrNode) {
        return new models_1.IntrinsicType("any");
    }
    loadConverters();
    if ("kind" in typeOrNode) {
        const converter = converters.get(typeOrNode.kind);
        if (converter) {
            return converter.convert(context, typeOrNode);
        }
        return requestBugReport(context, typeOrNode);
    }
    // IgnoreErrors is important, without it, we can't assert that we will get a node.
    const node = context.checker.typeToTypeNode(typeOrNode, void 0, ts.NodeBuilderFlags.IgnoreErrors);
    assert(node); // According to the TS source of typeToString, this is a bug if it does not hold.
    const symbol = typeOrNode.getSymbol();
    if (symbol) {
        if (node.kind !== ts.SyntaxKind.TypeReference &&
            node.kind !== ts.SyntaxKind.ArrayType &&
            seenTypeSymbols.has(symbol)) {
            const typeString = context.checker.typeToString(typeOrNode);
            context.logger.verbose(`Refusing to recurse when converting type: ${typeString}`);
            return new models_1.UnknownType(typeString);
        }
        seenTypeSymbols.add(symbol);
    }
    const converter = converters.get(node.kind);
    if (converter) {
        const result = converter.convertType(context, typeOrNode, node);
        if (symbol)
            seenTypeSymbols.delete(symbol);
        return result;
    }
    return requestBugReport(context, typeOrNode);
}
exports.convertType = convertType;
const arrayConverter = {
    kind: [ts.SyntaxKind.ArrayType],
    convert(context, node) {
        return new models_1.ArrayType(convertType(context, node.elementType));
    },
    convertType(context, type) {
        const params = context.checker.getTypeArguments(type);
        // This is *almost* always true... except for when this type is in the constraint of a type parameter see GH#1408
        // assert(params.length === 1);
        assert(params.length > 0);
        return new models_1.ArrayType(convertType(context, params[0]));
    },
};
const conditionalConverter = {
    kind: [ts.SyntaxKind.ConditionalType],
    convert(context, node) {
        return new models_1.ConditionalType(convertType(context, node.checkType), convertType(context, node.extendsType), convertType(context, node.trueType), convertType(context, node.falseType));
    },
    convertType(context, type) {
        return new models_1.ConditionalType(convertType(context, type.checkType), convertType(context, type.extendsType), convertType(context, type.resolvedTrueType), convertType(context, type.resolvedFalseType));
    },
};
const constructorConverter = {
    kind: [ts.SyntaxKind.ConstructorType],
    convert(context, node) {
        var _a, _b;
        const symbol = (_a = context.getSymbolAtLocation(node)) !== null && _a !== void 0 ? _a : node.symbol;
        const type = context.getTypeAtLocation(node);
        if (!symbol || !type) {
            return new models_1.IntrinsicType("Function");
        }
        const reflection = new models_1.DeclarationReflection("__type", models_1.ReflectionKind.Constructor, context.scope);
        const rc = context.withScope(reflection);
        rc.setConvertingTypeNode();
        context.registerReflection(reflection, symbol);
        context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, reflection, node);
        const signature = new models_1.SignatureReflection("__type", models_1.ReflectionKind.ConstructorSignature, reflection);
        // This is unfortunate... but seems the obvious place to put this with the current
        // architecture. Ideally, this would be a property on a "ConstructorType"... but that
        // needs to wait until TypeDoc 0.22 when making other breaking changes.
        if ((_b = node.modifiers) === null || _b === void 0 ? void 0 : _b.some((m) => m.kind === ts.SyntaxKind.AbstractKeyword)) {
            signature.setFlag(models_1.ReflectionFlag.Abstract);
        }
        context.registerReflection(signature, void 0);
        const signatureCtx = rc.withScope(signature);
        reflection.signatures = [signature];
        signature.type = convertType(signatureCtx, node.type);
        signature.parameters = (0, signature_1.convertParameterNodes)(signatureCtx, signature, node.parameters);
        signature.typeParameters = (0, signature_1.convertTypeParameterNodes)(signatureCtx, node.typeParameters);
        return new models_1.ReflectionType(reflection);
    },
    convertType(context, type) {
        if (!type.symbol) {
            return new models_1.IntrinsicType("Function");
        }
        const reflection = new models_1.DeclarationReflection("__type", models_1.ReflectionKind.Constructor, context.scope);
        context.registerReflection(reflection, type.symbol);
        context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, reflection);
        (0, signature_1.createSignature)(context.withScope(reflection), models_1.ReflectionKind.ConstructorSignature, type.getConstructSignatures()[0]);
        return new models_1.ReflectionType(reflection);
    },
};
const exprWithTypeArgsConverter = {
    kind: [ts.SyntaxKind.ExpressionWithTypeArguments],
    convert(context, node) {
        var _a, _b;
        const targetSymbol = context.getSymbolAtLocation(node.expression);
        // Mixins... we might not have a symbol here.
        if (!targetSymbol) {
            return convertType(context, context.checker.getTypeAtLocation(node));
        }
        const parameters = (_b = (_a = node.typeArguments) === null || _a === void 0 ? void 0 : _a.map((type) => convertType(context, type))) !== null && _b !== void 0 ? _b : [];
        const ref = models_1.ReferenceType.createSymbolReference(context.resolveAliasedSymbol(targetSymbol), context);
        ref.typeArguments = parameters;
        return ref;
    },
    convertType: requestBugReport,
};
const functionTypeConverter = {
    kind: [ts.SyntaxKind.FunctionType],
    convert(context, node) {
        var _a;
        const symbol = (_a = context.getSymbolAtLocation(node)) !== null && _a !== void 0 ? _a : node.symbol;
        const type = context.getTypeAtLocation(node);
        if (!symbol || !type) {
            return new models_1.IntrinsicType("Function");
        }
        const reflection = new models_1.DeclarationReflection("__type", models_1.ReflectionKind.TypeLiteral, context.scope);
        const rc = context.withScope(reflection);
        context.registerReflection(reflection, symbol);
        context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, reflection, node);
        const signature = new models_1.SignatureReflection("__type", models_1.ReflectionKind.CallSignature, reflection);
        context.registerReflection(signature, void 0);
        const signatureCtx = rc.withScope(signature);
        reflection.signatures = [signature];
        signature.type = convertType(signatureCtx, node.type);
        signature.parameters = (0, signature_1.convertParameterNodes)(signatureCtx, signature, node.parameters);
        signature.typeParameters = (0, signature_1.convertTypeParameterNodes)(signatureCtx, node.typeParameters);
        return new models_1.ReflectionType(reflection);
    },
    convertType(context, type) {
        if (!type.symbol) {
            return new models_1.IntrinsicType("Function");
        }
        const reflection = new models_1.DeclarationReflection("__type", models_1.ReflectionKind.TypeLiteral, context.scope);
        context.registerReflection(reflection, type.symbol);
        context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, reflection);
        (0, signature_1.createSignature)(context.withScope(reflection), models_1.ReflectionKind.CallSignature, type.getCallSignatures()[0]);
        return new models_1.ReflectionType(reflection);
    },
};
const importType = {
    kind: [ts.SyntaxKind.ImportType],
    convert(context, node) {
        var _a, _b;
        const name = (_b = (_a = node.qualifier) === null || _a === void 0 ? void 0 : _a.getText()) !== null && _b !== void 0 ? _b : "__module";
        const symbol = context.checker.getSymbolAtLocation(node);
        assert(symbol, "Missing symbol when converting import type node");
        return models_1.ReferenceType.createSymbolReference(context.resolveAliasedSymbol(symbol), context, name);
    },
    convertType(context, type) {
        const symbol = type.getSymbol();
        assert(symbol, "Missing symbol when converting import type"); // Should be a compiler error
        return models_1.ReferenceType.createSymbolReference(context.resolveAliasedSymbol(symbol), context, "__module");
    },
};
const indexedAccessConverter = {
    kind: [ts.SyntaxKind.IndexedAccessType],
    convert(context, node) {
        return new models_1.IndexedAccessType(convertType(context, node.objectType), convertType(context, node.indexType));
    },
    convertType(context, type) {
        return new models_1.IndexedAccessType(convertType(context, type.objectType), convertType(context, type.indexType));
    },
};
const inferredConverter = {
    kind: [ts.SyntaxKind.InferType],
    convert(context, node) {
        return new models_1.InferredType(node.typeParameter.name.text, maybeConvertType(context, node.typeParameter.constraint));
    },
    convertType(context, type) {
        return new models_1.InferredType(type.symbol.name, maybeConvertType(context, type.getConstraint()));
    },
};
const intersectionConverter = {
    kind: [ts.SyntaxKind.IntersectionType],
    convert(context, node) {
        return new models_1.IntersectionType(node.types.map((type) => convertType(context, type)));
    },
    convertType(context, type) {
        return new models_1.IntersectionType(type.types.map((type) => convertType(context, type)));
    },
};
const jsDocVariadicTypeConverter = {
    kind: [ts.SyntaxKind.JSDocVariadicType],
    convert(context, node) {
        return new models_1.ArrayType(convertType(context, node.type));
    },
    // Should just be an ArrayType
    convertType: requestBugReport,
};
const keywordNames = {
    [ts.SyntaxKind.AnyKeyword]: "any",
    [ts.SyntaxKind.BigIntKeyword]: "bigint",
    [ts.SyntaxKind.BooleanKeyword]: "boolean",
    [ts.SyntaxKind.NeverKeyword]: "never",
    [ts.SyntaxKind.NumberKeyword]: "number",
    [ts.SyntaxKind.ObjectKeyword]: "object",
    [ts.SyntaxKind.StringKeyword]: "string",
    [ts.SyntaxKind.SymbolKeyword]: "symbol",
    [ts.SyntaxKind.UndefinedKeyword]: "undefined",
    [ts.SyntaxKind.UnknownKeyword]: "unknown",
    [ts.SyntaxKind.VoidKeyword]: "void",
    [ts.SyntaxKind.IntrinsicKeyword]: "intrinsic",
};
const keywordConverter = {
    kind: [
        ts.SyntaxKind.AnyKeyword,
        ts.SyntaxKind.BigIntKeyword,
        ts.SyntaxKind.BooleanKeyword,
        ts.SyntaxKind.NeverKeyword,
        ts.SyntaxKind.NumberKeyword,
        ts.SyntaxKind.ObjectKeyword,
        ts.SyntaxKind.StringKeyword,
        ts.SyntaxKind.SymbolKeyword,
        ts.SyntaxKind.UndefinedKeyword,
        ts.SyntaxKind.UnknownKeyword,
        ts.SyntaxKind.VoidKeyword,
    ],
    convert(_context, node) {
        return new models_1.IntrinsicType(keywordNames[node.kind]);
    },
    convertType(_context, _type, node) {
        return new models_1.IntrinsicType(keywordNames[node.kind]);
    },
};
const optionalConverter = {
    kind: [ts.SyntaxKind.OptionalType],
    convert(context, node) {
        return new models_1.OptionalType((0, reflections_1.removeUndefined)(convertType(context, node.type)));
    },
    // Handled by the tuple converter
    convertType: requestBugReport,
};
const parensConverter = {
    kind: [ts.SyntaxKind.ParenthesizedType],
    convert(context, node) {
        return convertType(context, node.type);
    },
    // TS strips these out too... shouldn't run into this.
    convertType: requestBugReport,
};
const predicateConverter = {
    kind: [ts.SyntaxKind.TypePredicate],
    convert(context, node) {
        const name = ts.isThisTypeNode(node.parameterName)
            ? "this"
            : node.parameterName.getText();
        const asserts = !!node.assertsModifier;
        const targetType = node.type ? convertType(context, node.type) : void 0;
        return new models_1.PredicateType(name, asserts, targetType);
    },
    // Never inferred by TS 4.0, could potentially change in a future TS version.
    convertType: requestBugReport,
};
// This is a horrible thing... we're going to want to split this into converters
// for different types at some point.
const typeLiteralConverter = {
    kind: [ts.SyntaxKind.TypeLiteral],
    convert(context, node) {
        var _a;
        const symbol = (_a = context.getSymbolAtLocation(node)) !== null && _a !== void 0 ? _a : node.symbol;
        const type = context.getTypeAtLocation(node);
        if (!symbol || !type) {
            return new models_1.IntrinsicType("Object");
        }
        const reflection = new models_1.DeclarationReflection("__type", models_1.ReflectionKind.TypeLiteral, context.scope);
        const rc = context.withScope(reflection);
        rc.setConvertingTypeNode();
        context.registerReflection(reflection, symbol);
        context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, reflection, node);
        for (const prop of context.checker.getPropertiesOfType(type)) {
            (0, symbols_1.convertSymbol)(rc, prop);
        }
        for (const signature of type.getCallSignatures()) {
            (0, signature_1.createSignature)(rc, models_1.ReflectionKind.CallSignature, signature);
        }
        (0, index_signature_1.convertIndexSignature)(rc, symbol);
        return new models_1.ReflectionType(reflection);
    },
    convertType(context, type) {
        if (!type.symbol) {
            return new models_1.IntrinsicType("Object");
        }
        const reflection = new models_1.DeclarationReflection("__type", models_1.ReflectionKind.TypeLiteral, context.scope);
        context.registerReflection(reflection, type.symbol);
        context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, reflection);
        for (const prop of context.checker.getPropertiesOfType(type)) {
            (0, symbols_1.convertSymbol)(context.withScope(reflection), prop);
        }
        for (const signature of type.getCallSignatures()) {
            (0, signature_1.createSignature)(context.withScope(reflection), models_1.ReflectionKind.CallSignature, signature);
        }
        (0, index_signature_1.convertIndexSignature)(context.withScope(reflection), type.symbol);
        return new models_1.ReflectionType(reflection);
    },
};
const queryConverter = {
    kind: [ts.SyntaxKind.TypeQuery],
    convert(context, node) {
        const querySymbol = context.getSymbolAtLocation(node.exprName);
        if (!querySymbol) {
            // This can happen if someone uses `typeof` on some property
            // on a variable typed as `any` with a name that doesn't exist.
            return new models_1.QueryType(models_1.ReferenceType.createBrokenReference(node.exprName.getText(), context.project));
        }
        return new models_1.QueryType(models_1.ReferenceType.createSymbolReference(context.resolveAliasedSymbol(querySymbol), context, node.exprName.getText()));
    },
    convertType(context, type) {
        const symbol = type.getSymbol();
        assert(symbol, `Query type failed to get a symbol for: ${context.checker.typeToString(type)}. This is a bug.`);
        return new models_1.QueryType(models_1.ReferenceType.createSymbolReference(context.resolveAliasedSymbol(symbol), context));
    },
};
const referenceConverter = {
    kind: [ts.SyntaxKind.TypeReference],
    convert(context, node) {
        var _a, _b, _c;
        const isArray = ((_a = context.checker.typeToTypeNode(context.checker.getTypeAtLocation(node.typeName), void 0, ts.NodeBuilderFlags.IgnoreErrors)) === null || _a === void 0 ? void 0 : _a.kind) === ts.SyntaxKind.ArrayType;
        if (isArray) {
            return new models_1.ArrayType(convertType(context, (_b = node.typeArguments) === null || _b === void 0 ? void 0 : _b[0]));
        }
        const symbol = context.expectSymbolAtLocation(node.typeName);
        const name = node.typeName.getText();
        const type = models_1.ReferenceType.createSymbolReference(context.resolveAliasedSymbol(symbol), context, name);
        type.typeArguments = (_c = node.typeArguments) === null || _c === void 0 ? void 0 : _c.map((type) => convertType(context, type));
        return type;
    },
    convertType(context, type) {
        var _a, _b;
        const symbol = (_a = type.aliasSymbol) !== null && _a !== void 0 ? _a : type.getSymbol();
        if (!symbol) {
            // This happens when we get a reference to a type parameter
            // created within a mapped type, `K` in: `{ [K in T]: string }`
            return models_1.ReferenceType.createBrokenReference(context.checker.typeToString(type), context.project);
        }
        const ref = models_1.ReferenceType.createSymbolReference(context.resolveAliasedSymbol(symbol), context);
        ref.typeArguments = (_b = (type.aliasSymbol ? type.aliasTypeArguments : type.typeArguments)) === null || _b === void 0 ? void 0 : _b.map((ref) => convertType(context, ref));
        return ref;
    },
};
const restConverter = {
    kind: [ts.SyntaxKind.RestType],
    convert(context, node) {
        return new models_1.RestType(convertType(context, node.type));
    },
    // This is handled in the tuple converter
    convertType: requestBugReport,
};
const namedTupleMemberConverter = {
    kind: [ts.SyntaxKind.NamedTupleMember],
    convert(context, node) {
        const innerType = convertType(context, node.type);
        return new models_1.NamedTupleMember(node.name.getText(), !!node.questionToken, innerType);
    },
    // This ought to be impossible.
    convertType: requestBugReport,
};
// { -readonly [K in string]-?: number}
//   ^ readonlyToken
//              ^ typeParameter
//                   ^^^^^^ typeParameter.constraint
//                          ^ questionToken
//                              ^^^^^^ type
const mappedConverter = {
    kind: [ts.SyntaxKind.MappedType],
    convert(context, node) {
        var _a, _b;
        const optionalModifier = kindToModifier((_a = node.questionToken) === null || _a === void 0 ? void 0 : _a.kind);
        const templateType = convertType(context, node.type);
        return new models_1.MappedType(node.typeParameter.name.text, convertType(context, node.typeParameter.constraint), optionalModifier === "+"
            ? (0, reflections_1.removeUndefined)(templateType)
            : templateType, kindToModifier((_b = node.readonlyToken) === null || _b === void 0 ? void 0 : _b.kind), optionalModifier, node.nameType ? convertType(context, node.nameType) : void 0);
    },
    convertType(context, type, node) {
        var _a, _b, _c;
        // This can happen if a generic function does not have a return type annotated.
        const optionalModifier = kindToModifier((_a = node.questionToken) === null || _a === void 0 ? void 0 : _a.kind);
        const templateType = convertType(context, type.templateType);
        return new models_1.MappedType((_b = type.typeParameter.symbol) === null || _b === void 0 ? void 0 : _b.name, convertType(context, type.typeParameter.getConstraint()), optionalModifier === "+"
            ? (0, reflections_1.removeUndefined)(templateType)
            : templateType, kindToModifier((_c = node.readonlyToken) === null || _c === void 0 ? void 0 : _c.kind), optionalModifier, type.nameType ? convertType(context, type.nameType) : void 0);
    },
};
const literalTypeConverter = {
    kind: [ts.SyntaxKind.LiteralType],
    convert(context, node) {
        switch (node.literal.kind) {
            case ts.SyntaxKind.TrueKeyword:
            case ts.SyntaxKind.FalseKeyword:
                return new models_1.LiteralType(node.literal.kind === ts.SyntaxKind.TrueKeyword);
            case ts.SyntaxKind.StringLiteral:
                return new models_1.LiteralType(node.literal.text);
            case ts.SyntaxKind.NumericLiteral:
                return new models_1.LiteralType(Number(node.literal.text));
            case ts.SyntaxKind.NullKeyword:
                return new models_1.LiteralType(null);
            case ts.SyntaxKind.PrefixUnaryExpression: {
                const operand = node.literal
                    .operand;
                switch (operand.kind) {
                    case ts.SyntaxKind.NumericLiteral:
                        return new models_1.LiteralType(Number(node.literal.getText()));
                    case ts.SyntaxKind.BigIntLiteral:
                        return new models_1.LiteralType(BigInt(node.literal.getText().replace("n", "")));
                    default:
                        return requestBugReport(context, node.literal);
                }
            }
            case ts.SyntaxKind.BigIntLiteral:
                return new models_1.LiteralType(BigInt(node.literal.getText().replace("n", "")));
            case ts.SyntaxKind.NoSubstitutionTemplateLiteral:
                return new models_1.LiteralType(node.literal.text);
        }
        return requestBugReport(context, node.literal);
    },
    convertType(_context, type, node) {
        switch (node.literal.kind) {
            case ts.SyntaxKind.StringLiteral:
                return new models_1.LiteralType(node.literal.text);
            case ts.SyntaxKind.NumericLiteral:
                return new models_1.LiteralType(+node.literal.text);
            case ts.SyntaxKind.TrueKeyword:
            case ts.SyntaxKind.FalseKeyword:
                return new models_1.LiteralType(node.literal.kind === ts.SyntaxKind.TrueKeyword);
            case ts.SyntaxKind.NullKeyword:
                return new models_1.LiteralType(null);
        }
        if (typeof type.value === "object") {
            return new models_1.LiteralType(BigInt(`${type.value.negative ? "-" : ""}${type.value.base10Value}`));
        }
        return new models_1.LiteralType(type.value);
    },
};
const templateLiteralConverter = {
    kind: [ts.SyntaxKind.TemplateLiteralType],
    convert(context, node) {
        return new models_1.TemplateLiteralType(node.head.text, node.templateSpans.map((span) => {
            return [convertType(context, span.type), span.literal.text];
        }));
    },
    convertType(context, type) {
        assert(type.texts.length === type.types.length + 1);
        const parts = [];
        for (const [a, b] of (0, array_1.zip)(type.types, type.texts.slice(1))) {
            parts.push([convertType(context, a), b]);
        }
        return new models_1.TemplateLiteralType(type.texts[0], parts);
    },
};
const thisConverter = {
    kind: [ts.SyntaxKind.ThisType],
    convert() {
        return new models_1.IntrinsicType("this");
    },
    convertType() {
        return new models_1.IntrinsicType("this");
    },
};
const tupleConverter = {
    kind: [ts.SyntaxKind.TupleType],
    convert(context, node) {
        const elements = node.elements.map((node) => convertType(context, node));
        return new models_1.TupleType(elements);
    },
    convertType(context, type, node) {
        var _a;
        const types = (_a = type.typeArguments) === null || _a === void 0 ? void 0 : _a.slice(0, node.elements.length);
        let elements = types === null || types === void 0 ? void 0 : types.map((type) => convertType(context, type));
        if (type.target.labeledElementDeclarations) {
            const namedDeclarations = type.target.labeledElementDeclarations;
            elements = elements === null || elements === void 0 ? void 0 : elements.map((el, i) => new models_1.NamedTupleMember(namedDeclarations[i].name.getText(), !!namedDeclarations[i].questionToken, (0, reflections_1.removeUndefined)(el)));
        }
        elements = elements === null || elements === void 0 ? void 0 : elements.map((el, i) => {
            if (type.target.elementFlags[i] & ts.ElementFlags.Variable) {
                // In the node case, we don't need to add the wrapping Array type... but we do here.
                if (el instanceof models_1.NamedTupleMember) {
                    return new models_1.RestType(new models_1.NamedTupleMember(el.name, el.isOptional, new models_1.ArrayType(el.element)));
                }
                return new models_1.RestType(new models_1.ArrayType(el));
            }
            if (type.target.elementFlags[i] & ts.ElementFlags.Optional &&
                !(el instanceof models_1.NamedTupleMember)) {
                return new models_1.OptionalType((0, reflections_1.removeUndefined)(el));
            }
            return el;
        });
        return new models_1.TupleType(elements !== null && elements !== void 0 ? elements : []);
    },
};
const supportedOperatorNames = {
    [ts.SyntaxKind.KeyOfKeyword]: "keyof",
    [ts.SyntaxKind.UniqueKeyword]: "unique",
    [ts.SyntaxKind.ReadonlyKeyword]: "readonly",
};
const typeOperatorConverter = {
    kind: [ts.SyntaxKind.TypeOperator],
    convert(context, node) {
        return new models_1.TypeOperatorType(convertType(context, node.type), supportedOperatorNames[node.operator]);
    },
    convertType(context, type, node) {
        // readonly is only valid on array and tuple literal types.
        if (node.operator === ts.SyntaxKind.ReadonlyKeyword) {
            const resolved = resolveReference(type);
            assert(isObjectType(resolved));
            const args = context.checker
                .getTypeArguments(type)
                .map((type) => convertType(context, type));
            const inner = resolved.objectFlags & ts.ObjectFlags.Tuple
                ? new models_1.TupleType(args)
                : new models_1.ArrayType(args[0]);
            return new models_1.TypeOperatorType(inner, "readonly");
        }
        // keyof will only show up with generic functions, otherwise it gets eagerly
        // resolved to a union of strings.
        if (node.operator === ts.SyntaxKind.KeyOfKeyword) {
            // TS 4.2 added this to enable better tracking of type aliases.
            if (type.isUnion() && type.origin) {
                return convertType(context, type.origin);
            }
            // There's probably an interface for this somewhere... I couldn't find it.
            const targetType = type.type;
            return new models_1.TypeOperatorType(convertType(context, targetType), "keyof");
        }
        // TS drops `unique` in `unique symbol` everywhere. If someone used it, we ought
        // to have a type node. This shouldn't ever happen.
        return requestBugReport(context, type);
    },
};
const unionConverter = {
    kind: [ts.SyntaxKind.UnionType],
    convert(context, node) {
        return new models_1.UnionType(node.types.map((type) => convertType(context, type)));
    },
    convertType(context, type) {
        // TS 4.2 added this to enable better tracking of type aliases.
        if (type.origin) {
            return convertType(context, type.origin);
        }
        return new models_1.UnionType(type.types.map((type) => convertType(context, type)));
    },
};
const jsDocNullableTypeConverter = {
    kind: [ts.SyntaxKind.JSDocNullableType],
    convert(context, node) {
        return new models_1.UnionType([
            convertType(context, node.type),
            new models_1.LiteralType(null),
        ]);
    },
    // Should be a UnionType
    convertType: requestBugReport,
};
const jsDocNonNullableTypeConverter = {
    kind: [ts.SyntaxKind.JSDocNonNullableType],
    convert(context, node) {
        return convertType(context, node.type);
    },
    // Should be a UnionType
    convertType: requestBugReport,
};
function requestBugReport(context, nodeOrType) {
    if ("kind" in nodeOrType) {
        const kindName = ts.SyntaxKind[nodeOrType.kind];
        const { line, character } = ts.getLineAndCharacterOfPosition(nodeOrType.getSourceFile(), nodeOrType.pos);
        context.logger.warn(`Failed to convert type node with kind: ${kindName} and text ${nodeOrType.getText()}. Please report a bug.\n\t` +
            `${nodeOrType.getSourceFile().fileName}:${line + 1}:${character}`);
        return new models_1.UnknownType(nodeOrType.getText());
    }
    else {
        const typeString = context.checker.typeToString(nodeOrType);
        context.logger.warn(`Failed to convert type: ${typeString} when converting ${context.scope.getFullName()}. Please report a bug.`);
        return new models_1.UnknownType(typeString);
    }
}
function isObjectType(type) {
    return typeof type.objectFlags === "number";
}
function resolveReference(type) {
    if (isObjectType(type) && type.objectFlags & ts.ObjectFlags.Reference) {
        return type.target;
    }
    return type;
}
function kindToModifier(kind) {
    switch (kind) {
        case ts.SyntaxKind.ReadonlyKeyword:
        case ts.SyntaxKind.QuestionToken:
        case ts.SyntaxKind.PlusToken:
            return "+";
        case ts.SyntaxKind.MinusToken:
            return "-";
        default:
            return undefined;
    }
}

}, function(modId) { var map = {"../models":1654179213611,"../utils/array":1654179213620,"./converter-events":1654179213656,"./factories/index-signature":1654179213657,"./factories/signature":1654179213658,"./symbols":1654179213661,"./utils/reflections":1654179213660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213656, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConverterEvents = void 0;
exports.ConverterEvents = {
    BEGIN: "begin",
    END: "end",
    CREATE_DECLARATION: "createDeclaration",
    CREATE_SIGNATURE: "createSignature",
    CREATE_PARAMETER: "createParameter",
    CREATE_TYPE_PARAMETER: "createTypeParameter",
    RESOLVE_BEGIN: "resolveBegin",
    RESOLVE: "resolveReflection",
    RESOLVE_END: "resolveEnd",
};

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213657, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertIndexSignature = void 0;
const assert = require("assert");
const ts = require("typescript");
const models_1 = require("../../models");
const converter_events_1 = require("../converter-events");
function convertIndexSignature(context, symbol) {
    var _a, _b;
    assert(context.scope instanceof models_1.DeclarationReflection);
    const indexSymbol = (_a = symbol.members) === null || _a === void 0 ? void 0 : _a.get("__index");
    if (indexSymbol) {
        // Right now TypeDoc models don't have a way to distinguish between string
        // and number index signatures... { [x: string]: 1 | 2; [x: number]: 2 }
        // will be misrepresented.
        const indexDeclaration = (_b = indexSymbol.getDeclarations()) === null || _b === void 0 ? void 0 : _b[0];
        assert(indexDeclaration && ts.isIndexSignatureDeclaration(indexDeclaration));
        const param = indexDeclaration.parameters[0];
        assert(param && ts.isParameter(param));
        const index = new models_1.SignatureReflection("__index", models_1.ReflectionKind.IndexSignature, context.scope);
        index.parameters = [
            new models_1.ParameterReflection(param.name.getText(), models_1.ReflectionKind.Parameter, index),
        ];
        index.parameters[0].type = context.converter.convertType(context.withScope(index.parameters[0]), param.type);
        index.type = context.converter.convertType(context.withScope(index), indexDeclaration.type);
        context.registerReflection(index, indexSymbol);
        context.scope.indexSignature = index;
        context.trigger(converter_events_1.ConverterEvents.CREATE_SIGNATURE, index, indexDeclaration);
    }
}
exports.convertIndexSignature = convertIndexSignature;

}, function(modId) { var map = {"../../models":1654179213611,"../converter-events":1654179213656}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213658, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.createTypeParamReflection = exports.convertTypeParameterNodes = exports.convertParameterNodes = exports.createSignature = void 0;
const ts = require("typescript");
const assert = require("assert");
const models_1 = require("../../models");
const converter_events_1 = require("../converter-events");
const convert_expression_1 = require("../convert-expression");
const reflections_1 = require("../utils/reflections");
function createSignature(context, kind, signature, declaration, commentDeclaration) {
    var _a;
    var _b;
    assert(context.scope instanceof models_1.DeclarationReflection);
    // signature.getDeclaration might return undefined.
    // https://github.com/microsoft/TypeScript/issues/30014
    declaration !== null && declaration !== void 0 ? declaration : (declaration = signature.getDeclaration());
    if (!commentDeclaration &&
        declaration &&
        (ts.isArrowFunction(declaration) ||
            ts.isFunctionExpression(declaration))) {
        commentDeclaration = declaration.parent;
    }
    commentDeclaration !== null && commentDeclaration !== void 0 ? commentDeclaration : (commentDeclaration = declaration);
    const sigRef = new models_1.SignatureReflection(kind == models_1.ReflectionKind.ConstructorSignature
        ? `new ${context.scope.parent.name}`
        : context.scope.name, kind, context.scope);
    sigRef.typeParameters = convertTypeParameters(context, sigRef, signature.typeParameters);
    const parameterSymbols = signature.thisParameter
        ? [signature.thisParameter, ...signature.parameters]
        : signature.parameters;
    sigRef.parameters = convertParameters(context, sigRef, parameterSymbols, declaration === null || declaration === void 0 ? void 0 : declaration.parameters);
    const predicate = context.checker.getTypePredicateOfSignature(signature);
    if (predicate) {
        sigRef.type = convertPredicate(predicate, context.withScope(sigRef));
    }
    else if (kind == models_1.ReflectionKind.SetSignature) {
        sigRef.type = new models_1.IntrinsicType("void");
    }
    else {
        sigRef.type = context.converter.convertType(context.withScope(sigRef), ((declaration === null || declaration === void 0 ? void 0 : declaration.kind) === ts.SyntaxKind.FunctionDeclaration &&
            declaration.type) ||
            signature.getReturnType());
    }
    context.registerReflection(sigRef, undefined);
    switch (kind) {
        case models_1.ReflectionKind.GetSignature:
            context.scope.getSignature = sigRef;
            break;
        case models_1.ReflectionKind.SetSignature:
            context.scope.setSignature = sigRef;
            break;
        case models_1.ReflectionKind.CallSignature:
        case models_1.ReflectionKind.ConstructorSignature:
            (_a = (_b = context.scope).signatures) !== null && _a !== void 0 ? _a : (_b.signatures = []);
            context.scope.signatures.push(sigRef);
            break;
    }
    context.trigger(converter_events_1.ConverterEvents.CREATE_SIGNATURE, sigRef, commentDeclaration);
}
exports.createSignature = createSignature;
function convertParameters(context, sigRef, parameters, parameterNodes) {
    return parameters.map((param, i) => {
        const declaration = param.valueDeclaration;
        assert(!declaration ||
            ts.isParameter(declaration) ||
            ts.isJSDocParameterTag(declaration));
        const paramRefl = new models_1.ParameterReflection(/__\d+/.test(param.name) ? "__namedParameters" : param.name, models_1.ReflectionKind.Parameter, sigRef);
        context.registerReflection(paramRefl, param);
        context.trigger(converter_events_1.ConverterEvents.CREATE_PARAMETER, paramRefl, declaration);
        let type;
        if (declaration) {
            type = context.checker.getTypeOfSymbolAtLocation(param, declaration);
        }
        else {
            type = param.type;
        }
        paramRefl.type = context.converter.convertType(context.withScope(paramRefl), type);
        let isOptional = false;
        if (declaration) {
            isOptional = ts.isParameter(declaration)
                ? !!declaration.questionToken
                : declaration.isBracketed;
        }
        if (isOptional) {
            paramRefl.type = (0, reflections_1.removeUndefined)(paramRefl.type);
        }
        paramRefl.defaultValue = (0, convert_expression_1.convertDefaultValue)(parameterNodes === null || parameterNodes === void 0 ? void 0 : parameterNodes[i]);
        paramRefl.setFlag(models_1.ReflectionFlag.Optional, isOptional);
        // If we have no declaration, then this is an implicitly defined parameter in JS land
        // because the method body uses `arguments`... which is always a rest argument
        let isRest = true;
        if (declaration) {
            isRest = ts.isParameter(declaration)
                ? !!declaration.dotDotDotToken
                : !!declaration.typeExpression &&
                    ts.isJSDocVariadicType(declaration.typeExpression.type);
        }
        paramRefl.setFlag(models_1.ReflectionFlag.Rest, isRest);
        return paramRefl;
    });
}
function convertParameterNodes(context, sigRef, parameters) {
    return parameters.map((param) => {
        var _a;
        const paramRefl = new models_1.ParameterReflection(/__\d+/.test(param.name.getText())
            ? "__namedParameters"
            : param.name.getText(), models_1.ReflectionKind.Parameter, sigRef);
        context.registerReflection(paramRefl, context.getSymbolAtLocation(param));
        paramRefl.type = context.converter.convertType(context.withScope(paramRefl), ts.isParameter(param) ? param.type : (_a = param.typeExpression) === null || _a === void 0 ? void 0 : _a.type);
        const isOptional = ts.isParameter(param)
            ? !!param.questionToken
            : param.isBracketed;
        if (isOptional) {
            paramRefl.type = (0, reflections_1.removeUndefined)(paramRefl.type);
        }
        paramRefl.defaultValue = (0, convert_expression_1.convertDefaultValue)(param);
        paramRefl.setFlag(models_1.ReflectionFlag.Optional, isOptional);
        paramRefl.setFlag(models_1.ReflectionFlag.Rest, ts.isParameter(param)
            ? !!param.dotDotDotToken
            : !!param.typeExpression &&
                ts.isJSDocVariadicType(param.typeExpression.type));
        return paramRefl;
    });
}
exports.convertParameterNodes = convertParameterNodes;
function convertTypeParameters(context, parent, parameters) {
    return parameters === null || parameters === void 0 ? void 0 : parameters.map((param) => {
        var _a, _b, _c;
        const constraintT = param.getConstraint();
        const defaultT = param.getDefault();
        const constraint = constraintT
            ? context.converter.convertType(context, constraintT)
            : void 0;
        const defaultType = defaultT
            ? context.converter.convertType(context, defaultT)
            : void 0;
        // There's no way to determine directly from a ts.TypeParameter what it's variance modifiers are
        // so unfortunately we have to go back to the node for this...
        const variance = getVariance((_c = (_b = (_a = param.getSymbol()) === null || _a === void 0 ? void 0 : _a.declarations) === null || _b === void 0 ? void 0 : _b.find(ts.isTypeParameterDeclaration)) === null || _c === void 0 ? void 0 : _c.modifiers);
        const paramRefl = new models_1.TypeParameterReflection(param.symbol.name, constraint, defaultType, parent, variance);
        context.registerReflection(paramRefl, param.getSymbol());
        context.trigger(converter_events_1.ConverterEvents.CREATE_TYPE_PARAMETER, paramRefl);
        return paramRefl;
    });
}
function convertTypeParameterNodes(context, parameters) {
    return parameters === null || parameters === void 0 ? void 0 : parameters.map((param) => createTypeParamReflection(param, context));
}
exports.convertTypeParameterNodes = convertTypeParameterNodes;
function createTypeParamReflection(param, context) {
    const constraint = param.constraint
        ? context.converter.convertType(context, param.constraint)
        : void 0;
    const defaultType = param.default
        ? context.converter.convertType(context, param.default)
        : void 0;
    const paramRefl = new models_1.TypeParameterReflection(param.name.text, constraint, defaultType, context.scope, getVariance(param.modifiers));
    context.registerReflection(paramRefl, param.symbol);
    context.trigger(converter_events_1.ConverterEvents.CREATE_TYPE_PARAMETER, paramRefl, param);
    return paramRefl;
}
exports.createTypeParamReflection = createTypeParamReflection;
function getVariance(modifiers) {
    const hasIn = modifiers === null || modifiers === void 0 ? void 0 : modifiers.some((mod) => mod.kind === ts.SyntaxKind.InKeyword);
    const hasOut = modifiers === null || modifiers === void 0 ? void 0 : modifiers.some((mod) => mod.kind === ts.SyntaxKind.OutKeyword);
    if (hasIn && hasOut) {
        return models_1.VarianceModifier.inOut;
    }
    if (hasIn) {
        return models_1.VarianceModifier.in;
    }
    if (hasOut) {
        return models_1.VarianceModifier.out;
    }
}
function convertPredicate(predicate, context) {
    let name;
    switch (predicate.kind) {
        case ts.TypePredicateKind.This:
        case ts.TypePredicateKind.AssertsThis:
            name = "this";
            break;
        case ts.TypePredicateKind.Identifier:
        case ts.TypePredicateKind.AssertsIdentifier:
            name = predicate.parameterName;
            break;
    }
    let asserts;
    switch (predicate.kind) {
        case ts.TypePredicateKind.This:
        case ts.TypePredicateKind.Identifier:
            asserts = false;
            break;
        case ts.TypePredicateKind.AssertsThis:
        case ts.TypePredicateKind.AssertsIdentifier:
            asserts = true;
            break;
    }
    return new models_1.PredicateType(name, asserts, predicate.type
        ? context.converter.convertType(context, predicate.type)
        : void 0);
}

}, function(modId) { var map = {"../../models":1654179213611,"../converter-events":1654179213656,"../convert-expression":1654179213659,"../utils/reflections":1654179213660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213659, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertExpression = exports.convertDefaultValue = void 0;
const ts = require("typescript");
/**
 * Return the default value of the given node.
 *
 * @param node  The TypeScript node whose default value should be extracted.
 * @returns The default value as a string.
 */
function convertDefaultValue(node) {
    const anyNode = node;
    if (anyNode === null || anyNode === void 0 ? void 0 : anyNode.initializer) {
        return convertExpression(anyNode.initializer);
    }
    else {
        return undefined;
    }
}
exports.convertDefaultValue = convertDefaultValue;
function convertExpression(expression) {
    switch (expression.kind) {
        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.TrueKeyword:
        case ts.SyntaxKind.FalseKeyword:
        case ts.SyntaxKind.NullKeyword:
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.PrefixUnaryExpression:
        case ts.SyntaxKind.Identifier:
            return expression.getText();
    }
    if (ts.isArrayLiteralExpression(expression) &&
        expression.elements.length === 0) {
        return "[]";
    }
    if (ts.isObjectLiteralExpression(expression) &&
        expression.properties.length === 0) {
        return "{}";
    }
    // a.b.c.d
    if (ts.isPropertyAccessExpression(expression)) {
        const parts = [expression.name.getText()];
        let iter = expression.expression;
        while (ts.isPropertyAccessExpression(iter)) {
            parts.unshift(iter.name.getText());
            iter = iter.expression;
        }
        if (ts.isIdentifier(iter)) {
            parts.unshift(iter.text);
            return parts.join(".");
        }
    }
    // More complex expressions are generally not useful in the documentation.
    // Show that there was a value, but not specifics.
    return "...";
}
exports.convertExpression = convertExpression;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213660, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.copyComment = exports.removeUndefined = void 0;
const models_1 = require("../../models");
function removeUndefined(type) {
    if (type instanceof models_1.UnionType) {
        const types = type.types.filter((t) => {
            if (t instanceof models_1.IntrinsicType) {
                return t.name !== "undefined";
            }
            return true;
        });
        if (types.length === 1) {
            return types[0];
        }
        type.types = types;
        return type;
    }
    return type;
}
exports.removeUndefined = removeUndefined;
/**
 * Copy the comment of the source reflection to the target reflection.
 *
 * @param target - Reflection with comment containing `inheritdoc` tag
 * @param source - Referenced reflection
 */
function copyComment(target, source) {
    var _a;
    if (target.comment &&
        source.comment &&
        target.comment.hasTag("inheritdoc")) {
        if (target instanceof models_1.DeclarationReflection &&
            source instanceof models_1.DeclarationReflection) {
            target.typeParameters = source.typeParameters;
        }
        if (target instanceof models_1.SignatureReflection &&
            source instanceof models_1.SignatureReflection) {
            target.typeParameters = source.typeParameters;
            /**
             * TSDoc overrides existing parameters entirely with inherited ones, while
             * existing implementation merges them.
             * To avoid breaking things, `inheritDoc` tag is additionally checked for the parameter,
             * so the previous behavior will continue to work.
             *
             * TODO: When breaking change becomes acceptable remove legacy implementation
             */
            if ((_a = target.comment.getTag("inheritdoc")) === null || _a === void 0 ? void 0 : _a.paramName) {
                target.parameters = source.parameters;
            }
            else {
                legacyCopyImplementation(target, source);
            }
        }
        target.comment.removeTags("inheritdoc");
        target.comment.copyFrom(source.comment);
    }
    else if (!target.comment && source.comment) {
        if (target instanceof models_1.DeclarationReflection &&
            source instanceof models_1.DeclarationReflection) {
            target.typeParameters = source.typeParameters;
        }
        target.comment = new models_1.Comment();
        target.comment.copyFrom(source.comment);
    }
}
exports.copyComment = copyComment;
/**
 * Copy comments from source reflection to target reflection, parameters are merged.
 *
 * @param target - Reflection with comment containing `inheritdoc` tag
 * @param source - Parent reflection
 */
function legacyCopyImplementation(target, source) {
    if (target.parameters && source.parameters) {
        for (let index = 0, count = target.parameters.length; index < count; index++) {
            const sourceParameter = source.parameters[index];
            if (sourceParameter && sourceParameter.comment) {
                const targetParameter = target.parameters[index];
                if (!targetParameter.comment) {
                    targetParameter.comment = new models_1.Comment();
                    targetParameter.comment.copyFrom(sourceParameter.comment);
                }
            }
        }
    }
}

}, function(modId) { var map = {"../../models":1654179213611}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213661, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSymbol = void 0;
const assert = require("assert");
const ts = require("typescript");
const models_1 = require("../models");
const enum_1 = require("../utils/enum");
const convert_expression_1 = require("./convert-expression");
const converter_events_1 = require("./converter-events");
const index_signature_1 = require("./factories/index-signature");
const signature_1 = require("./factories/signature");
const jsdoc_1 = require("./jsdoc");
const nodes_1 = require("./utils/nodes");
const reflections_1 = require("./utils/reflections");
const symbolConverters = {
    [ts.SymbolFlags.RegularEnum]: convertEnum,
    [ts.SymbolFlags.ConstEnum]: convertEnum,
    [ts.SymbolFlags.EnumMember]: convertEnumMember,
    [ts.SymbolFlags.ValueModule]: convertNamespace,
    [ts.SymbolFlags.NamespaceModule]: convertNamespace,
    [ts.SymbolFlags.TypeAlias]: convertTypeAlias,
    [ts.SymbolFlags.Function]: convertFunctionOrMethod,
    [ts.SymbolFlags.Method]: convertFunctionOrMethod,
    [ts.SymbolFlags.Interface]: convertClassOrInterface,
    [ts.SymbolFlags.Property]: convertProperty,
    [ts.SymbolFlags.Class]: convertClassOrInterface,
    [ts.SymbolFlags.Constructor]: convertConstructor,
    [ts.SymbolFlags.Alias]: convertAlias,
    [ts.SymbolFlags.BlockScopedVariable]: convertVariable,
    [ts.SymbolFlags.FunctionScopedVariable]: convertVariable,
    [ts.SymbolFlags.GetAccessor]: convertAccessor,
    [ts.SymbolFlags.SetAccessor]: convertAccessor,
};
const allConverterFlags = Object.keys(symbolConverters).reduce((v, k) => v | +k, 0);
// This is kind of a hack, born of resolving references by symbols instead
// of by source location.
const conversionOrder = [
    // Do enums before namespaces so that @hidden on a namespace
    // merged with an enum works properly.
    ts.SymbolFlags.RegularEnum,
    ts.SymbolFlags.ConstEnum,
    ts.SymbolFlags.EnumMember,
    // Before type alias
    ts.SymbolFlags.BlockScopedVariable,
    ts.SymbolFlags.FunctionScopedVariable,
    ts.SymbolFlags.TypeAlias,
    ts.SymbolFlags.Function,
    ts.SymbolFlags.Method,
    ts.SymbolFlags.Interface,
    ts.SymbolFlags.Property,
    ts.SymbolFlags.Class,
    ts.SymbolFlags.Constructor,
    ts.SymbolFlags.Alias,
    ts.SymbolFlags.GetAccessor,
    ts.SymbolFlags.SetAccessor,
    ts.SymbolFlags.ValueModule,
    ts.SymbolFlags.NamespaceModule,
];
// Sanity check, if this fails a dev messed up.
for (const key of Object.keys(symbolConverters)) {
    if (!Number.isInteger(Math.log2(+key))) {
        throw new Error(`Symbol converter for key ${ts.SymbolFlags[+key]} does not specify a valid flag value.`);
    }
    if (!conversionOrder.includes(+key)) {
        throw new Error(`Symbol converter for key ${ts.SymbolFlags[+key]} is not specified in conversionOrder`);
    }
}
if (conversionOrder.reduce((a, b) => a | b, 0) !== allConverterFlags) {
    throw new Error("conversionOrder contains a symbol flag that converters do not.");
}
function convertSymbol(context, symbol, exportSymbol) {
    var _a, _b;
    if (context.shouldIgnore(symbol)) {
        return;
    }
    // This check can catch symbols which ought to be documented as references
    // but aren't aliased symbols because `export *` was used.
    const previous = context.project.getReflectionFromSymbol(symbol);
    if (previous &&
        ((_a = previous.parent) === null || _a === void 0 ? void 0 : _a.kindOf(models_1.ReflectionKind.Module | models_1.ReflectionKind.Project))) {
        createAlias(previous, context, symbol, exportSymbol);
        return;
    }
    let flags = (0, enum_1.removeFlag)(symbol.flags, ts.SymbolFlags.Transient |
        ts.SymbolFlags.Assignment |
        ts.SymbolFlags.Optional |
        ts.SymbolFlags.Prototype);
    // Declaration merging - the only type (excluding enum/enum, ns/ns, etc)
    // that TD supports is merging a class and interface. All others are
    // represented as multiple reflections
    if ((0, enum_1.hasAllFlags)(symbol.flags, ts.SymbolFlags.Class)) {
        flags = (0, enum_1.removeFlag)(flags, ts.SymbolFlags.Interface | ts.SymbolFlags.Function);
    }
    // Kind of declaration merging... we treat this as a property with get/set signatures.
    if ((0, enum_1.hasAllFlags)(symbol.flags, ts.SymbolFlags.GetAccessor)) {
        flags = (0, enum_1.removeFlag)(flags, ts.SymbolFlags.SetAccessor);
    }
    if ((0, enum_1.hasAllFlags)(symbol.flags, ts.SymbolFlags.NamespaceModule)) {
        // This might be here if a namespace is declared several times.
        flags = (0, enum_1.removeFlag)(flags, ts.SymbolFlags.ValueModule);
    }
    if ((0, enum_1.hasAnyFlag)(symbol.flags, ts.SymbolFlags.Method |
        ts.SymbolFlags.Interface |
        ts.SymbolFlags.Class |
        ts.SymbolFlags.Variable)) {
        // This happens when someone declares an object with methods:
        // { methodProperty() {} }
        flags = (0, enum_1.removeFlag)(flags, ts.SymbolFlags.Property);
    }
    // A default exported function with no associated variable is a property, but
    // we should really convert it as a variable for documentation purposes
    // export default () => {}
    // export default 123
    if (flags === ts.SymbolFlags.Property &&
        symbol.name === "default" &&
        context.scope.kindOf(models_1.ReflectionKind.Module | models_1.ReflectionKind.Project)) {
        flags = ts.SymbolFlags.BlockScopedVariable;
    }
    for (const flag of (0, enum_1.getEnumFlags)(flags ^ allConverterFlags)) {
        if (!(flag & allConverterFlags)) {
            context.logger.verbose(`Missing converter for symbol: ${symbol.name} with flag ${ts.SymbolFlags[flag]}`);
        }
    }
    // Note: This method does not allow skipping earlier converters.
    // For now, this is fine... might not be flexible enough in the future.
    let skip = 0;
    for (const flag of conversionOrder) {
        if (!(flag & flags))
            continue;
        if (skip & flag)
            continue;
        skip |= ((_b = symbolConverters[flag]) === null || _b === void 0 ? void 0 : _b.call(symbolConverters, context, symbol, exportSymbol)) || 0;
    }
}
exports.convertSymbol = convertSymbol;
function convertSymbols(context, symbols) {
    for (const symbol of symbols) {
        convertSymbol(context, symbol);
    }
}
function convertEnum(context, symbol, exportSymbol) {
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Enum, symbol, exportSymbol);
    if (symbol.flags & ts.SymbolFlags.ConstEnum) {
        reflection.setFlag(models_1.ReflectionFlag.Const);
    }
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    convertSymbols(context.withScope(reflection), context.checker
        .getExportsOfModule(symbol)
        .filter((s) => s.flags & ts.SymbolFlags.EnumMember));
}
function convertEnumMember(context, symbol, exportSymbol) {
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.EnumMember, symbol, exportSymbol);
    const defaultValue = context.checker.getConstantValue(symbol.getDeclarations()[0]);
    reflection.defaultValue = JSON.stringify(defaultValue);
    if (defaultValue !== undefined) {
        reflection.type = new models_1.LiteralType(defaultValue);
    }
    else {
        // We know this has to be a number, because computed values aren't allowed
        // in string enums, so otherwise we would have to have the constant value
        reflection.type = new models_1.IntrinsicType("number");
    }
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
}
function convertNamespace(context, symbol, exportSymbol) {
    var _a;
    let exportFlags = ts.SymbolFlags.ModuleMember;
    // This can happen in JS land where "class" functions get tagged as a namespace too
    if (((_a = symbol
        .getDeclarations()) === null || _a === void 0 ? void 0 : _a.some((d) => ts.isModuleDeclaration(d) || ts.isSourceFile(d))) !==
        true) {
        exportFlags = ts.SymbolFlags.ClassMember;
        if ((0, enum_1.hasAnyFlag)(symbol.flags, ts.SymbolFlags.Class)) {
            return;
        }
    }
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Namespace, symbol, exportSymbol);
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    convertSymbols(context.withScope(reflection), context.checker
        .getExportsOfModule(symbol)
        .filter((s) => s.flags & exportFlags));
}
function convertTypeAlias(context, symbol, exportSymbol) {
    var _a, _b;
    const declaration = (_a = symbol === null || symbol === void 0 ? void 0 : symbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a.find((d) => ts.isTypeAliasDeclaration(d) ||
        ts.isJSDocTypedefTag(d) ||
        ts.isJSDocCallbackTag(d) ||
        ts.isJSDocEnumTag(d));
    assert(declaration);
    if (ts.isTypeAliasDeclaration(declaration)) {
        const reflection = context.createDeclarationReflection(models_1.ReflectionKind.TypeAlias, symbol, exportSymbol);
        reflection.type = context.converter.convertType(context.withScope(reflection), declaration.type);
        context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
        // Do this after finalization so that the CommentPlugin can get @typeParam tags
        // from the parent comment. Ugly, but works for now. Should be cleaned up with TSDoc
        // support.
        reflection.typeParameters = (_b = declaration.typeParameters) === null || _b === void 0 ? void 0 : _b.map((param) => (0, signature_1.createTypeParamReflection)(param, context.withScope(reflection)));
    }
    else if (ts.isJSDocTypedefTag(declaration) ||
        ts.isJSDocEnumTag(declaration)) {
        (0, jsdoc_1.convertJsDocAlias)(context, symbol, declaration, exportSymbol);
    }
    else {
        (0, jsdoc_1.convertJsDocCallback)(context, symbol, declaration, exportSymbol);
    }
}
function convertFunctionOrMethod(context, symbol, exportSymbol) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    // Can't just check method flag because this might be called for properties as well
    // This will *NOT* be called for variables that look like functions, they need a special case.
    const isMethod = !!(symbol.flags &
        (ts.SymbolFlags.Property | ts.SymbolFlags.Method));
    const declarations = (_b = (_a = symbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a.filter(ts.isFunctionLike)) !== null && _b !== void 0 ? _b : [];
    // Don't do anything if we inherited this method and it is private.
    if (isMethod &&
        isInherited(context, symbol) &&
        declarations.length > 0 &&
        (0, enum_1.hasAllFlags)(ts.getCombinedModifierFlags(declarations[0]), ts.ModifierFlags.Private)) {
        return;
    }
    const parentSymbol = context.project.getSymbolFromReflection(context.scope);
    const locationDeclaration = (_g = (_d = (_c = parentSymbol === null || parentSymbol === void 0 ? void 0 : parentSymbol.getDeclarations()) === null || _c === void 0 ? void 0 : _c.find((d) => ts.isClassDeclaration(d) || ts.isInterfaceDeclaration(d))) !== null && _d !== void 0 ? _d : (_f = (_e = parentSymbol === null || parentSymbol === void 0 ? void 0 : parentSymbol.getDeclarations()) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.getSourceFile()) !== null && _g !== void 0 ? _g : (_j = (_h = symbol.getDeclarations()) === null || _h === void 0 ? void 0 : _h[0]) === null || _j === void 0 ? void 0 : _j.getSourceFile();
    assert(locationDeclaration, "Missing declaration context");
    const type = context.checker.getTypeOfSymbolAtLocation(symbol, locationDeclaration);
    // Need to get the non nullable type because interface methods might be declared
    // with a question token. See GH1490.
    const signatures = type.getNonNullableType().getCallSignatures();
    const reflection = context.createDeclarationReflection(context.scope.kindOf(models_1.ReflectionKind.ClassOrInterface |
        models_1.ReflectionKind.VariableOrProperty |
        models_1.ReflectionKind.TypeLiteral)
        ? models_1.ReflectionKind.Method
        : models_1.ReflectionKind.Function, symbol, exportSymbol, void 0);
    if (((_k = symbol.declarations) === null || _k === void 0 ? void 0 : _k.length) && isMethod) {
        // All method signatures must have the same modifier flags.
        setModifiers(symbol, symbol.declarations[0], reflection);
    }
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    const scope = context.withScope(reflection);
    (_l = reflection.signatures) !== null && _l !== void 0 ? _l : (reflection.signatures = []);
    // Can't use zip here. We might have less declarations than signatures
    // or less signatures than declarations.
    for (let i = 0; i < signatures.length; i++) {
        (0, signature_1.createSignature)(scope, models_1.ReflectionKind.CallSignature, signatures[i], declarations[i]);
    }
}
// getDeclaredTypeOfSymbol gets the INSTANCE type
// getTypeOfSymbolAtLocation gets the STATIC type
function convertClassOrInterface(context, symbol, exportSymbol) {
    var _a, _b, _c, _d, _e;
    const reflection = context.createDeclarationReflection(ts.SymbolFlags.Class & symbol.flags
        ? models_1.ReflectionKind.Class
        : models_1.ReflectionKind.Interface, symbol, exportSymbol, void 0);
    const classDeclaration = (_a = symbol
        .getDeclarations()) === null || _a === void 0 ? void 0 : _a.find((d) => ts.isClassDeclaration(d) || ts.isFunctionDeclaration(d));
    if (classDeclaration)
        setModifiers(symbol, classDeclaration, reflection);
    const reflectionContext = context.withScope(reflection);
    const instanceType = context.checker.getDeclaredTypeOfSymbol(symbol);
    assert(instanceType.isClassOrInterface());
    // We might do some inheritance - do this first so that it's set when converting properties
    const declarations = (_c = (_b = symbol
        .getDeclarations()) === null || _b === void 0 ? void 0 : _b.filter((d) => ts.isInterfaceDeclaration(d) || ts.isClassDeclaration(d))) !== null && _c !== void 0 ? _c : [];
    const extendedTypes = (0, nodes_1.getHeritageTypes)(declarations, ts.SyntaxKind.ExtendsKeyword).map((t) => context.converter.convertType(reflectionContext, t));
    if (extendedTypes.length) {
        reflection.extendedTypes = extendedTypes;
    }
    const implementedTypes = (0, nodes_1.getHeritageTypes)(declarations, ts.SyntaxKind.ImplementsKeyword).map((t) => context.converter.convertType(reflectionContext, t));
    if (implementedTypes.length) {
        reflection.implementedTypes = implementedTypes;
    }
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    if (classDeclaration) {
        // Classes can have static props
        const staticType = context.checker.getTypeOfSymbolAtLocation(symbol, classDeclaration);
        reflectionContext.shouldBeStatic = true;
        for (const prop of context.checker.getPropertiesOfType(staticType)) {
            // Don't convert namespace members, or the prototype here.
            if (prop.flags &
                (ts.SymbolFlags.ModuleMember | ts.SymbolFlags.Prototype))
                continue;
            convertSymbol(reflectionContext, prop);
        }
        reflectionContext.shouldBeStatic = false;
        const constructMember = new models_1.DeclarationReflection("constructor", models_1.ReflectionKind.Constructor, reflection);
        reflectionContext.addChild(constructMember);
        const ctors = staticType.getConstructSignatures();
        context.registerReflection(constructMember, (_e = (_d = ctors === null || ctors === void 0 ? void 0 : ctors[0]) === null || _d === void 0 ? void 0 : _d.declaration) === null || _e === void 0 ? void 0 : _e.symbol);
        // Modifiers are the same for all constructors
        if (ctors.length && ctors[0].declaration) {
            setModifiers(symbol, ctors[0].declaration, constructMember);
        }
        context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, constructMember, ts.isClassDeclaration(classDeclaration)
            ? classDeclaration.members.find(ts.isConstructorDeclaration)
            : void 0);
        const constructContext = reflectionContext.withScope(constructMember);
        ctors.forEach((sig) => {
            (0, signature_1.createSignature)(constructContext, models_1.ReflectionKind.ConstructorSignature, sig);
        });
    }
    // Classes/interfaces usually just have properties...
    convertSymbols(reflectionContext, context.checker.getPropertiesOfType(instanceType));
    // And type arguments
    if (instanceType.typeParameters) {
        reflection.typeParameters = instanceType.typeParameters.map((param) => {
            var _a, _b;
            const declaration = (_b = (_a = param.symbol) === null || _a === void 0 ? void 0 : _a.declarations) === null || _b === void 0 ? void 0 : _b[0];
            assert(declaration && ts.isTypeParameterDeclaration(declaration));
            return (0, signature_1.createTypeParamReflection)(declaration, reflectionContext);
        });
    }
    // Interfaces might also have call signatures
    // Classes might too, because of declaration merging
    context.checker
        .getSignaturesOfType(instanceType, ts.SignatureKind.Call)
        .forEach((sig) => (0, signature_1.createSignature)(reflectionContext, models_1.ReflectionKind.CallSignature, sig));
    // We also might have constructor signatures
    // This is potentially a problem with classes having multiple "constructor" members...
    // but nobody has complained yet.
    convertConstructSignatures(reflectionContext, symbol);
    // And finally, index signatures
    (0, index_signature_1.convertIndexSignature)(reflectionContext, symbol);
}
function convertProperty(context, symbol, exportSymbol) {
    var _a, _b, _c;
    const declarations = (_a = symbol.getDeclarations()) !== null && _a !== void 0 ? _a : [];
    // Don't do anything if we inherited this property and it is private.
    if (isInherited(context, symbol) &&
        declarations.length > 0 &&
        (0, enum_1.hasAllFlags)(ts.getCombinedModifierFlags(declarations[0]), ts.ModifierFlags.Private)) {
        return;
    }
    // Special case: We pretend properties are methods if they look like methods.
    // This happens with mixins / weird inheritance.
    if (declarations.length &&
        declarations.every((decl) => ts.isMethodSignature(decl) || ts.isMethodDeclaration(decl))) {
        return convertFunctionOrMethod(context, symbol, exportSymbol);
    }
    if (declarations.length === 1) {
        const declaration = declarations[0];
        // Special case: "arrow methods" should be treated as methods.
        if (ts.isPropertyDeclaration(declaration) &&
            !declaration.type &&
            declaration.initializer &&
            ts.isArrowFunction(declaration.initializer)) {
            return convertArrowAsMethod(context, symbol, declaration.initializer, exportSymbol);
        }
        // Special case: "arrow properties" in type space should be treated as methods.
        if (ts.isPropertySignature(declaration) &&
            declaration.type &&
            ts.isFunctionTypeNode(declaration.type)) {
            return convertArrowAsMethod(context, symbol, declaration.type, exportSymbol);
        }
    }
    const reflection = context.createDeclarationReflection(context.scope.kindOf(models_1.ReflectionKind.Namespace)
        ? models_1.ReflectionKind.Variable
        : models_1.ReflectionKind.Property, symbol, exportSymbol);
    const declaration = (_b = symbol.getDeclarations()) === null || _b === void 0 ? void 0 : _b[0];
    let parameterType;
    if (declaration &&
        (ts.isPropertyDeclaration(declaration) ||
            ts.isPropertySignature(declaration) ||
            ts.isParameter(declaration) ||
            ts.isPropertyAccessExpression(declaration))) {
        if (!ts.isPropertyAccessExpression(declaration)) {
            parameterType = declaration.type;
        }
        setModifiers(symbol, declaration, reflection);
    }
    reflection.defaultValue = declaration && (0, convert_expression_1.convertDefaultValue)(declaration);
    // FIXME: Once we drop support for TS 4.5, we can use context.checker.getTypeOfSymbol(symbol) here.
    reflection.type = context.converter.convertType(context, (_c = (context.isConvertingTypeNode() ? parameterType : void 0)) !== null && _c !== void 0 ? _c : context.checker.getTypeOfSymbolAtLocation(symbol, {
        kind: ts.SyntaxKind.SourceFile,
    }));
    if (reflection.flags.isOptional) {
        reflection.type = (0, reflections_1.removeUndefined)(reflection.type);
    }
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
}
function convertArrowAsMethod(context, symbol, arrow, exportSymbol) {
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Method, symbol, exportSymbol, void 0);
    setModifiers(symbol, arrow.parent, reflection);
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    const rc = context.withScope(reflection);
    const signature = context.checker.getSignatureFromDeclaration(arrow);
    assert(signature);
    (0, signature_1.createSignature)(rc, models_1.ReflectionKind.CallSignature, signature, arrow);
}
function convertConstructor(context, symbol) {
    var _a, _b;
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Constructor, symbol, void 0, "constructor");
    context.finalizeDeclarationReflection(reflection, symbol);
    const reflectionContext = context.withScope(reflection);
    const declarations = (_b = (_a = symbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a.filter(ts.isConstructorDeclaration)) !== null && _b !== void 0 ? _b : [];
    const signatures = declarations.map((decl) => {
        const sig = context.checker.getSignatureFromDeclaration(decl);
        assert(sig);
        return sig;
    });
    for (const sig of signatures) {
        (0, signature_1.createSignature)(reflectionContext, models_1.ReflectionKind.ConstructorSignature, sig);
    }
}
function convertConstructSignatures(context, symbol) {
    const type = context.checker.getDeclaredTypeOfSymbol(symbol);
    // These get added as a "constructor" member of this interface. This is a problem... but nobody
    // has complained yet. We really ought to have a constructSignatures property on the reflection instead.
    const constructSignatures = context.checker.getSignaturesOfType(type, ts.SignatureKind.Construct);
    if (constructSignatures.length) {
        const constructMember = new models_1.DeclarationReflection("constructor", models_1.ReflectionKind.Constructor, context.scope);
        context.addChild(constructMember);
        context.registerReflection(constructMember, undefined);
        context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, constructMember, 
        // FIXME this isn't good enough.
        context.converter.getNodesForSymbol(symbol, models_1.ReflectionKind.Constructor)[0]);
        const constructContext = context.withScope(constructMember);
        constructSignatures.forEach((sig) => (0, signature_1.createSignature)(constructContext, models_1.ReflectionKind.ConstructorSignature, sig));
    }
}
function convertAlias(context, symbol, exportSymbol) {
    const reflection = context.project.getReflectionFromSymbol(context.resolveAliasedSymbol(symbol));
    if (!reflection) {
        // We don't have this, convert it.
        convertSymbol(context, context.resolveAliasedSymbol(symbol), exportSymbol !== null && exportSymbol !== void 0 ? exportSymbol : symbol);
    }
    else {
        createAlias(reflection, context, symbol, exportSymbol);
    }
}
function createAlias(target, context, symbol, exportSymbol) {
    var _a;
    // We already have this. Create a reference.
    const ref = new models_1.ReferenceReflection((_a = exportSymbol === null || exportSymbol === void 0 ? void 0 : exportSymbol.name) !== null && _a !== void 0 ? _a : symbol.name, target, context.scope);
    context.addChild(ref);
    context.registerReflection(ref, symbol);
    context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, ref, 
    // FIXME this isn't good enough.
    context.converter.getNodesForSymbol(symbol, models_1.ReflectionKind.Reference)[0]);
}
function convertVariable(context, symbol, exportSymbol) {
    var _a;
    const declaration = (_a = symbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a[0];
    assert(declaration);
    const type = context.checker.getTypeOfSymbolAtLocation(symbol, declaration);
    if (isEnumLike(context.checker, type, declaration) &&
        symbol.getJsDocTags().some((tag) => tag.name === "enum")) {
        return convertVariableAsEnum(context, symbol, exportSymbol);
    }
    if (type.getCallSignatures().length && !type.getProperties().length) {
        return convertVariableAsFunction(context, symbol, exportSymbol);
    }
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Variable, symbol, exportSymbol);
    let typeNode;
    if (ts.isVariableDeclaration(declaration)) {
        // Otherwise we might have destructuring
        typeNode = declaration.type;
    }
    reflection.type = context.converter.convertType(context.withScope(reflection), typeNode !== null && typeNode !== void 0 ? typeNode : type);
    setModifiers(symbol, declaration, reflection);
    reflection.defaultValue = (0, convert_expression_1.convertDefaultValue)(declaration);
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
}
function isEnumLike(checker, type, location) {
    if (!(0, enum_1.hasAllFlags)(type.flags, ts.TypeFlags.Object)) {
        return false;
    }
    return type.getProperties().every((prop) => {
        const propType = checker.getTypeOfSymbolAtLocation(prop, location);
        return propType.isStringLiteral() || propType.isNumberLiteral();
    });
}
function convertVariableAsEnum(context, symbol, exportSymbol) {
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Enum, symbol, exportSymbol);
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    const rc = context.withScope(reflection);
    const declaration = symbol.declarations[0];
    const type = context.checker.getTypeAtLocation(declaration);
    for (const prop of type.getProperties()) {
        const reflection = rc.createDeclarationReflection(models_1.ReflectionKind.EnumMember, prop, void 0);
        const propType = context.checker.getTypeOfSymbolAtLocation(prop, declaration);
        assert(propType.isStringLiteral() || propType.isNumberLiteral());
        reflection.defaultValue = JSON.stringify(propType.value);
        reflection.type = new models_1.LiteralType(propType.value);
        rc.finalizeDeclarationReflection(reflection, prop, void 0);
    }
    // Skip converting the type alias, if there is one
    return ts.SymbolFlags.TypeAlias;
}
function convertVariableAsFunction(context, symbol, exportSymbol) {
    var _a, _b;
    const declaration = (_a = symbol
        .getDeclarations()) === null || _a === void 0 ? void 0 : _a.find(ts.isVariableDeclaration);
    const accessDeclaration = declaration !== null && declaration !== void 0 ? declaration : symbol.valueDeclaration;
    const type = accessDeclaration
        ? context.checker.getTypeOfSymbolAtLocation(symbol, accessDeclaration)
        : context.checker.getDeclaredTypeOfSymbol(symbol);
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Function, symbol, exportSymbol);
    setModifiers(symbol, accessDeclaration, reflection);
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    const reflectionContext = context.withScope(reflection);
    (_b = reflection.signatures) !== null && _b !== void 0 ? _b : (reflection.signatures = []);
    for (const signature of type.getCallSignatures()) {
        (0, signature_1.createSignature)(reflectionContext, models_1.ReflectionKind.CallSignature, signature, void 0, declaration);
    }
}
function convertAccessor(context, symbol, exportSymbol) {
    var _a, _b, _c;
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Accessor, symbol, exportSymbol);
    const rc = context.withScope(reflection);
    const declaration = (_a = symbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a[0];
    if (declaration) {
        setModifiers(symbol, declaration, reflection);
    }
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    const getDeclaration = (_b = symbol.getDeclarations()) === null || _b === void 0 ? void 0 : _b.find(ts.isGetAccessor);
    if (getDeclaration) {
        const signature = context.checker.getSignatureFromDeclaration(getDeclaration);
        if (signature) {
            (0, signature_1.createSignature)(rc, models_1.ReflectionKind.GetSignature, signature, getDeclaration);
        }
    }
    const setDeclaration = (_c = symbol.getDeclarations()) === null || _c === void 0 ? void 0 : _c.find(ts.isSetAccessor);
    if (setDeclaration) {
        const signature = context.checker.getSignatureFromDeclaration(setDeclaration);
        if (signature) {
            (0, signature_1.createSignature)(rc, models_1.ReflectionKind.SetSignature, signature, setDeclaration);
        }
    }
}
function isInherited(context, symbol) {
    var _a;
    const parentSymbol = context.project.getSymbolFromReflection(context.scope);
    assert(parentSymbol, `No parent symbol found for ${symbol.name} in ${context.scope.name}`);
    return (((_a = parentSymbol
        .getDeclarations()) === null || _a === void 0 ? void 0 : _a.some((d) => { var _a; return (_a = symbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a.some((d2) => d2.parent === d); })) === false);
}
function setModifiers(symbol, declaration, reflection) {
    var _a;
    if (!declaration) {
        return;
    }
    const modifiers = ts.getCombinedModifierFlags(declaration);
    if (ts.isMethodDeclaration(declaration) ||
        ts.isPropertyDeclaration(declaration) ||
        ts.isAccessor(declaration)) {
        if (ts.isPrivateIdentifier(declaration.name)) {
            reflection.setFlag(models_1.ReflectionFlag.Private);
        }
    }
    if ((0, enum_1.hasAllFlags)(modifiers, ts.ModifierFlags.Private)) {
        reflection.setFlag(models_1.ReflectionFlag.Private);
    }
    if ((0, enum_1.hasAllFlags)(modifiers, ts.ModifierFlags.Protected)) {
        reflection.setFlag(models_1.ReflectionFlag.Protected);
    }
    if ((0, enum_1.hasAllFlags)(modifiers, ts.ModifierFlags.Public)) {
        reflection.setFlag(models_1.ReflectionFlag.Public);
    }
    reflection.setFlag(models_1.ReflectionFlag.Optional, (0, enum_1.hasAllFlags)(symbol.flags, ts.SymbolFlags.Optional));
    reflection.setFlag(models_1.ReflectionFlag.Readonly, (0, enum_1.hasAllFlags)((_a = symbol.checkFlags) !== null && _a !== void 0 ? _a : 0, ts.CheckFlags.Readonly) ||
        (0, enum_1.hasAllFlags)(modifiers, ts.ModifierFlags.Readonly));
    reflection.setFlag(models_1.ReflectionFlag.Abstract, (0, enum_1.hasAllFlags)(modifiers, ts.ModifierFlags.Abstract));
    if (reflection.kindOf(models_1.ReflectionKind.Variable) &&
        (0, enum_1.hasAllFlags)(symbol.flags, ts.SymbolFlags.BlockScopedVariable)) {
        reflection.setFlag(models_1.ReflectionFlag.Const, (0, enum_1.hasAllFlags)(declaration.parent.flags, ts.NodeFlags.Const));
    }
    // ReflectionFlag.Static happens when constructing the reflection.
    // We don't have sufficient information here to determine if it ought to be static.
}

}, function(modId) { var map = {"../models":1654179213611,"../utils/enum":1654179213662,"./convert-expression":1654179213659,"./converter-events":1654179213656,"./factories/index-signature":1654179213657,"./factories/signature":1654179213658,"./jsdoc":1654179213663,"./utils/nodes":1654179213664,"./utils/reflections":1654179213660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213662, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAnyFlag = exports.hasAllFlags = exports.removeFlag = exports.getEnumFlags = void 0;
function getEnumFlags(flags) {
    const result = [];
    for (let i = 1; i <= flags; i *= 2) {
        if (flags & i) {
            result.push(i);
        }
    }
    return result;
}
exports.getEnumFlags = getEnumFlags;
// T & {} reduces inference priority
function removeFlag(flag, remove) {
    return ((flag ^ remove) & flag);
}
exports.removeFlag = removeFlag;
function hasAllFlags(flags, check) {
    return (flags & check) === check;
}
exports.hasAllFlags = hasAllFlags;
function hasAnyFlag(flags, check) {
    return (flags & check) !== 0;
}
exports.hasAnyFlag = hasAnyFlag;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213663, function(require, module, exports) {

// Converter functions for JSDoc defined types
// @typedef
// @callback
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertJsDocCallback = exports.convertJsDocAlias = void 0;
const assert_1 = require("assert");
const ts = require("typescript");
const models_1 = require("../models");
const array_1 = require("../utils/array");
const converter_events_1 = require("./converter-events");
const signature_1 = require("./factories/signature");
function convertJsDocAlias(context, symbol, declaration, exportSymbol) {
    var _a;
    if (declaration.typeExpression &&
        ts.isJSDocTypeLiteral(declaration.typeExpression)) {
        convertJsDocInterface(context, declaration, symbol, exportSymbol);
        return;
    }
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.TypeAlias, symbol, exportSymbol);
    reflection.type = context.converter.convertType(context.withScope(reflection), (_a = declaration.typeExpression) === null || _a === void 0 ? void 0 : _a.type);
    convertTemplateParameters(context.withScope(reflection), declaration.parent);
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
}
exports.convertJsDocAlias = convertJsDocAlias;
function convertJsDocCallback(context, symbol, declaration, exportSymbol) {
    const alias = context.createDeclarationReflection(models_1.ReflectionKind.TypeAlias, symbol, exportSymbol);
    context.finalizeDeclarationReflection(alias, symbol, exportSymbol);
    const ac = context.withScope(alias);
    alias.type = convertJsDocSignature(ac, declaration.typeExpression);
    convertTemplateParameters(ac, declaration.parent);
}
exports.convertJsDocCallback = convertJsDocCallback;
function convertJsDocInterface(context, declaration, symbol, exportSymbol) {
    const reflection = context.createDeclarationReflection(models_1.ReflectionKind.Interface, symbol, exportSymbol);
    context.finalizeDeclarationReflection(reflection, symbol, exportSymbol);
    const rc = context.withScope(reflection);
    const type = context.checker.getDeclaredTypeOfSymbol(symbol);
    for (const s of type.getProperties()) {
        context.converter.convertSymbol(rc, s);
    }
    convertTemplateParameters(rc, declaration.parent);
}
function convertJsDocSignature(context, node) {
    var _a, _b, _c;
    const symbol = (_a = context.getSymbolAtLocation(node)) !== null && _a !== void 0 ? _a : node.symbol;
    const type = context.getTypeAtLocation(node);
    if (!symbol || !type) {
        return new models_1.IntrinsicType("Function");
    }
    const reflection = new models_1.DeclarationReflection("__type", models_1.ReflectionKind.TypeLiteral, context.scope);
    context.registerReflection(reflection, symbol);
    context.trigger(converter_events_1.ConverterEvents.CREATE_DECLARATION, reflection, node);
    const signature = new models_1.SignatureReflection("__type", models_1.ReflectionKind.CallSignature, reflection);
    context.registerReflection(signature, void 0);
    const signatureCtx = context.withScope(signature);
    reflection.signatures = [signature];
    signature.type = context.converter.convertType(signatureCtx, (_c = (_b = node.type) === null || _b === void 0 ? void 0 : _b.typeExpression) === null || _c === void 0 ? void 0 : _c.type);
    signature.parameters = (0, signature_1.convertParameterNodes)(signatureCtx, signature, node.parameters);
    signature.typeParameters = convertTemplateParameterNodes(context.withScope(reflection), node.typeParameters);
    return new models_1.ReflectionType(reflection);
}
function convertTemplateParameters(context, node) {
    var _a;
    (0, assert_1.ok)(context.scope instanceof models_1.DeclarationReflection);
    context.scope.typeParameters = convertTemplateParameterNodes(context, (_a = node.tags) === null || _a === void 0 ? void 0 : _a.filter(ts.isJSDocTemplateTag));
}
function convertTemplateParameterNodes(context, nodes) {
    const params = (0, array_1.flatMap)(nodes !== null && nodes !== void 0 ? nodes : [], (tag) => tag.typeParameters);
    return (0, signature_1.convertTypeParameterNodes)(context, params);
}

}, function(modId) { var map = {"../models":1654179213611,"../utils/array":1654179213620,"./converter-events":1654179213656,"./factories/signature":1654179213658}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213664, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeritageTypes = exports.isNamedNode = void 0;
const ts = require("typescript");
const array_1 = require("../../utils/array");
function isNamedNode(node) {
    const name = node.name;
    return (!!name &&
        (ts.isIdentifierOrPrivateIdentifier(name) ||
            ts.isComputedPropertyName(name)));
}
exports.isNamedNode = isNamedNode;
function getHeritageTypes(declarations, kind) {
    const exprs = (0, array_1.flatMap)(declarations, (d) => {
        var _a, _b;
        return (0, array_1.flatMap)((_b = (_a = d.heritageClauses) === null || _a === void 0 ? void 0 : _a.filter((hc) => hc.token === kind)) !== null && _b !== void 0 ? _b : [], (hc) => hc.types);
    });
    const seenTexts = new Set();
    return exprs.filter((expr) => {
        const text = expr.getText();
        if (seenTexts.has(text)) {
            return false;
        }
        seenTexts.add(text);
        return true;
    });
}
exports.getHeritageTypes = getHeritageTypes;

}, function(modId) { var map = {"../../utils/array":1654179213620}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213665, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.nicePath = exports.matchesAny = exports.createMinimatch = void 0;
const minimatch_1 = require("minimatch");
const path_1 = require("path");
const fs_1 = require("./fs");
/**
 * Convert array of glob patterns to array of minimatch instances.
 *
 * Handle a few Windows-Unix path gotchas.
 */
function createMinimatch(patterns) {
    return patterns.map((pattern) => new minimatch_1.Minimatch((0, fs_1.normalizePath)(pattern).replace(/^\w:\//, ""), {
        dot: true,
    }));
}
exports.createMinimatch = createMinimatch;
function matchesAny(patterns, path) {
    const normPath = (0, fs_1.normalizePath)(path).replace(/^\w:\//, "");
    return patterns.some((pat) => pat.match(normPath));
}
exports.matchesAny = matchesAny;
function nicePath(absPath) {
    const relativePath = (0, path_1.relative)(process.cwd(), absPath);
    if (relativePath.startsWith("..")) {
        return (0, fs_1.normalizePath)(absPath);
    }
    return `./${(0, fs_1.normalizePath)(relativePath)}`;
}
exports.nicePath = nicePath;

}, function(modId) { var map = {"./fs":1654179213610}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213666, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAliasedSymbol = void 0;
const ts = require("typescript");
function resolveAliasedSymbol(symbol, checker) {
    while (ts.SymbolFlags.Alias & symbol.flags) {
        symbol = checker.getAliasedSymbol(symbol);
    }
    return symbol;
}
exports.resolveAliasedSymbol = resolveAliasedSymbol;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213667, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.InheritDocPlugin = exports.TypePlugin = exports.SourcePlugin = exports.PackagePlugin = exports.ImplementsPlugin = exports.GroupPlugin = exports.SourceLinkPlugin = exports.DecoratorPlugin = exports.CommentPlugin = exports.CategoryPlugin = void 0;
var CategoryPlugin_1 = require("./CategoryPlugin");
Object.defineProperty(exports, "CategoryPlugin", { enumerable: true, get: function () { return CategoryPlugin_1.CategoryPlugin; } });
var CommentPlugin_1 = require("./CommentPlugin");
Object.defineProperty(exports, "CommentPlugin", { enumerable: true, get: function () { return CommentPlugin_1.CommentPlugin; } });
var DecoratorPlugin_1 = require("./DecoratorPlugin");
Object.defineProperty(exports, "DecoratorPlugin", { enumerable: true, get: function () { return DecoratorPlugin_1.DecoratorPlugin; } });
var SourceLinkPlugin_1 = require("./SourceLinkPlugin");
Object.defineProperty(exports, "SourceLinkPlugin", { enumerable: true, get: function () { return SourceLinkPlugin_1.SourceLinkPlugin; } });
var GroupPlugin_1 = require("./GroupPlugin");
Object.defineProperty(exports, "GroupPlugin", { enumerable: true, get: function () { return GroupPlugin_1.GroupPlugin; } });
var ImplementsPlugin_1 = require("./ImplementsPlugin");
Object.defineProperty(exports, "ImplementsPlugin", { enumerable: true, get: function () { return ImplementsPlugin_1.ImplementsPlugin; } });
var PackagePlugin_1 = require("./PackagePlugin");
Object.defineProperty(exports, "PackagePlugin", { enumerable: true, get: function () { return PackagePlugin_1.PackagePlugin; } });
var SourcePlugin_1 = require("./SourcePlugin");
Object.defineProperty(exports, "SourcePlugin", { enumerable: true, get: function () { return SourcePlugin_1.SourcePlugin; } });
var TypePlugin_1 = require("./TypePlugin");
Object.defineProperty(exports, "TypePlugin", { enumerable: true, get: function () { return TypePlugin_1.TypePlugin; } });
var InheritDocPlugin_1 = require("./InheritDocPlugin");
Object.defineProperty(exports, "InheritDocPlugin", { enumerable: true, get: function () { return InheritDocPlugin_1.InheritDocPlugin; } });

}, function(modId) { var map = {"./CategoryPlugin":1654179213668,"./CommentPlugin":1654179213669,"./DecoratorPlugin":1654179213671,"./SourceLinkPlugin":1654179213672,"./GroupPlugin":1654179213674,"./ImplementsPlugin":1654179213675,"./PackagePlugin":1654179213676,"./SourcePlugin":1654179213677,"./TypePlugin":1654179213678,"./InheritDocPlugin":1654179213679}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213668, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CategoryPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryPlugin = void 0;
const models_1 = require("../../models");
const models_2 = require("../../models");
const components_1 = require("../components");
const converter_1 = require("../converter");
const utils_1 = require("../../utils");
/**
 * A handler that sorts and categorizes the found reflections in the resolving phase.
 *
 * The handler sets the ´category´ property of all reflections.
 */
let CategoryPlugin = CategoryPlugin_1 = class CategoryPlugin extends components_1.ConverterComponent {
    /**
     * Create a new CategoryPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_BEGIN]: this.onBegin,
            [converter_1.Converter.EVENT_RESOLVE]: this.onResolve,
            [converter_1.Converter.EVENT_RESOLVE_END]: this.onEndResolve,
        }, undefined, -200);
    }
    /**
     * Triggered when the converter begins converting a project.
     */
    onBegin(_context) {
        // Set up static properties
        if (this.defaultCategory) {
            CategoryPlugin_1.defaultCategory = this.defaultCategory;
        }
        if (this.categoryOrder) {
            CategoryPlugin_1.WEIGHTS = this.categoryOrder;
        }
    }
    /**
     * Triggered when the converter resolves a reflection.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently resolved.
     */
    onResolve(context, reflection) {
        var _a, _b;
        if (reflection instanceof models_1.ContainerReflection) {
            this.categorize(reflection, (_b = (_a = context.getSearchOptions()) === null || _a === void 0 ? void 0 : _a.searchCategoryBoosts) !== null && _b !== void 0 ? _b : {});
        }
    }
    /**
     * Triggered when the converter has finished resolving a project.
     *
     * @param context  The context object describing the current state the converter is in.
     */
    onEndResolve(context) {
        var _a, _b;
        const project = context.project;
        this.categorize(project, (_b = (_a = context.getSearchOptions()) === null || _a === void 0 ? void 0 : _a.searchCategoryBoosts) !== null && _b !== void 0 ? _b : {});
    }
    categorize(obj, categorySearchBoosts) {
        if (this.categorizeByGroup) {
            this.groupCategorize(obj, categorySearchBoosts);
        }
        else {
            CategoryPlugin_1.lumpCategorize(obj, categorySearchBoosts);
        }
    }
    groupCategorize(obj, categorySearchBoosts) {
        if (!obj.groups || obj.groups.length === 0) {
            return;
        }
        obj.groups.forEach((group) => {
            if (group.categories)
                return;
            group.categories = CategoryPlugin_1.getReflectionCategories(group.children, categorySearchBoosts);
            if (group.categories && group.categories.length > 1) {
                group.categories.sort(CategoryPlugin_1.sortCatCallback);
            }
            else if (group.categories.length === 1 &&
                group.categories[0].title === CategoryPlugin_1.defaultCategory) {
                // no categories if everything is uncategorized
                group.categories = undefined;
            }
        });
    }
    static lumpCategorize(obj, categorySearchBoosts) {
        if (!obj.children || obj.children.length === 0 || obj.categories) {
            return;
        }
        obj.categories = CategoryPlugin_1.getReflectionCategories(obj.children, categorySearchBoosts);
        if (obj.categories && obj.categories.length > 1) {
            obj.categories.sort(CategoryPlugin_1.sortCatCallback);
        }
        else if (obj.categories.length === 1 &&
            obj.categories[0].title === CategoryPlugin_1.defaultCategory) {
            // no categories if everything is uncategorized
            obj.categories = undefined;
        }
    }
    /**
     * Create a categorized representation of the given list of reflections.
     *
     * @param reflections  The reflections that should be categorized.
     * @param categorySearchBoosts A user-supplied map of category titles, for computing a
     *   relevance boost to be used when searching
     * @returns An array containing all children of the given reflection categorized
     */
    static getReflectionCategories(reflections, categorySearchBoosts) {
        const categories = [];
        let defaultCat;
        reflections.forEach((child) => {
            var _a, _b;
            const childCategories = CategoryPlugin_1.getCategories(child);
            if (childCategories.size === 0) {
                if (!defaultCat) {
                    defaultCat = categories.find((category) => category.title === CategoryPlugin_1.defaultCategory);
                    if (!defaultCat) {
                        defaultCat = new models_2.ReflectionCategory(CategoryPlugin_1.defaultCategory);
                        categories.push(defaultCat);
                    }
                }
                defaultCat.children.push(child);
                return;
            }
            for (const childCat of childCategories) {
                let category = categories.find((cat) => cat.title === childCat);
                const catBoost = categorySearchBoosts[(_a = category === null || category === void 0 ? void 0 : category.title) !== null && _a !== void 0 ? _a : -1];
                if (catBoost != undefined) {
                    child.relevanceBoost =
                        ((_b = child.relevanceBoost) !== null && _b !== void 0 ? _b : 1) * catBoost;
                }
                if (category) {
                    category.children.push(child);
                    continue;
                }
                category = new models_2.ReflectionCategory(childCat);
                category.children.push(child);
                categories.push(category);
            }
        });
        return categories;
    }
    /**
     * Return the category of a given reflection.
     *
     * @param reflection The reflection.
     * @returns The category the reflection belongs to
     */
    static getCategories(reflection) {
        var _a, _b, _c;
        function extractCategoryTag(comment) {
            const categories = new Set();
            if (!comment)
                return categories;
            const tags = comment.tags;
            const commentTags = [];
            tags.forEach((tag) => {
                if (tag.tagName !== "category") {
                    commentTags.push(tag);
                    return;
                }
                const text = tag.text.trim();
                if (!text) {
                    return;
                }
                categories.add(text);
            });
            comment.tags = commentTags;
            return categories;
        }
        let categories = new Set();
        if (reflection.comment) {
            categories = extractCategoryTag(reflection.comment);
        }
        else if (reflection.signatures) {
            for (const sig of reflection.signatures) {
                for (const cat of extractCategoryTag(sig.comment)) {
                    categories.add(cat);
                }
            }
        }
        if (((_a = reflection.type) === null || _a === void 0 ? void 0 : _a.type) === "reflection") {
            (_b = reflection.type.declaration.comment) === null || _b === void 0 ? void 0 : _b.removeTags("category");
            (_c = reflection.type.declaration.signatures) === null || _c === void 0 ? void 0 : _c.forEach((s) => { var _a; return (_a = s.comment) === null || _a === void 0 ? void 0 : _a.removeTags("category"); });
        }
        return categories;
    }
    /**
     * Callback used to sort categories by name.
     *
     * @param a The left reflection to sort.
     * @param b The right reflection to sort.
     * @returns The sorting weight.
     */
    static sortCatCallback(a, b) {
        let aWeight = CategoryPlugin_1.WEIGHTS.indexOf(a.title);
        let bWeight = CategoryPlugin_1.WEIGHTS.indexOf(b.title);
        if (aWeight === -1 || bWeight === -1) {
            let asteriskIndex = CategoryPlugin_1.WEIGHTS.indexOf("*");
            if (asteriskIndex === -1) {
                asteriskIndex = CategoryPlugin_1.WEIGHTS.length;
            }
            if (aWeight === -1) {
                aWeight = asteriskIndex;
            }
            if (bWeight === -1) {
                bWeight = asteriskIndex;
            }
        }
        if (aWeight === bWeight) {
            return a.title > b.title ? 1 : -1;
        }
        return aWeight - bWeight;
    }
};
// For use in static methods
CategoryPlugin.defaultCategory = "Other";
CategoryPlugin.WEIGHTS = [];
__decorate([
    (0, utils_1.BindOption)("defaultCategory")
], CategoryPlugin.prototype, "defaultCategory", void 0);
__decorate([
    (0, utils_1.BindOption)("categoryOrder")
], CategoryPlugin.prototype, "categoryOrder", void 0);
__decorate([
    (0, utils_1.BindOption)("categorizeByGroup")
], CategoryPlugin.prototype, "categorizeByGroup", void 0);
CategoryPlugin = CategoryPlugin_1 = __decorate([
    (0, components_1.Component)({ name: "category" })
], CategoryPlugin);
exports.CategoryPlugin = CategoryPlugin;

}, function(modId) { var map = {"../../models":1654179213611,"../components":1654179213654,"../converter":1654179213652,"../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213669, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CommentPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentPlugin = void 0;
const ts = require("typescript");
const index_1 = require("../../models/comments/index");
const index_2 = require("../../models/reflections/index");
const components_1 = require("../components");
const comment_1 = require("../factories/comment");
const converter_1 = require("../converter");
const models_1 = require("../../models");
const utils_1 = require("../../utils");
/**
 * These tags are not useful to display in the generated documentation.
 * They should be ignored when parsing comments. Any relevant type information
 * (for JS users) will be consumed by TypeScript and need not be preserved
 * in the comment.
 *
 * Note that param/arg/argument/return/returns are not present.
 * These tags will have their type information stripped when parsing, but still
 * provide useful information for documentation.
 */
const TAG_BLACKLIST = [
    "augments",
    "callback",
    "class",
    "constructor",
    "enum",
    "extends",
    "this",
    "type",
    "typedef",
];
/**
 * A handler that parses TypeDoc comments and attaches {@link Comment} instances to
 * the generated reflections.
 */
let CommentPlugin = CommentPlugin_1 = class CommentPlugin extends components_1.ConverterComponent {
    /**
     * Create a new CommentPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_CREATE_DECLARATION]: this.onDeclaration,
            [converter_1.Converter.EVENT_CREATE_SIGNATURE]: this.onDeclaration,
            [converter_1.Converter.EVENT_CREATE_TYPE_PARAMETER]: this.onCreateTypeParameter,
            [converter_1.Converter.EVENT_RESOLVE_BEGIN]: this.onBeginResolve,
            [converter_1.Converter.EVENT_RESOLVE]: this.onResolve,
        });
    }
    /**
     * Apply all comment tag modifiers to the given reflection.
     *
     * @param reflection  The reflection the modifiers should be applied to.
     * @param comment  The comment that should be searched for modifiers.
     */
    applyModifiers(reflection, comment) {
        var _a, _b, _c;
        if (comment.hasTag("private")) {
            reflection.setFlag(index_2.ReflectionFlag.Private);
            if (reflection.kindOf(index_2.ReflectionKind.CallSignature)) {
                (_a = reflection.parent) === null || _a === void 0 ? void 0 : _a.setFlag(index_2.ReflectionFlag.Private);
            }
            comment.removeTags("private");
        }
        if (comment.hasTag("protected")) {
            reflection.setFlag(index_2.ReflectionFlag.Protected);
            if (reflection.kindOf(index_2.ReflectionKind.CallSignature)) {
                (_b = reflection.parent) === null || _b === void 0 ? void 0 : _b.setFlag(index_2.ReflectionFlag.Protected);
            }
            comment.removeTags("protected");
        }
        if (comment.hasTag("public")) {
            reflection.setFlag(index_2.ReflectionFlag.Public);
            if (reflection.kindOf(index_2.ReflectionKind.CallSignature)) {
                (_c = reflection.parent) === null || _c === void 0 ? void 0 : _c.setFlag(index_2.ReflectionFlag.Public);
            }
            comment.removeTags("public");
        }
        if (comment.hasTag("event")) {
            if (reflection.kindOf(index_2.ReflectionKind.CallSignature)) {
                if (reflection.parent) {
                    reflection.parent.kind = index_2.ReflectionKind.Event;
                }
            }
            reflection.kind = index_2.ReflectionKind.Event;
            comment.removeTags("event");
        }
        if (reflection.kindOf(index_2.ReflectionKind.Module | index_2.ReflectionKind.Namespace) ||
            reflection.kind === index_2.ReflectionKind.Project) {
            comment.removeTags("module");
            comment.removeTags("packagedocumentation");
        }
    }
    /**
     * Triggered when the converter has created a type parameter reflection.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently processed.
     */
    onCreateTypeParameter(_context, reflection, node) {
        if (node && ts.isJSDocTemplateTag(node.parent)) {
            const comment = (0, comment_1.getJsDocCommentText)(node.parent.comment);
            if (comment) {
                reflection.comment = new index_1.Comment(comment);
            }
        }
        const comment = reflection.parent && reflection.parent.comment;
        if (comment) {
            let tag = comment.getTag("typeparam", reflection.name);
            if (!tag) {
                tag = comment.getTag("template", reflection.name);
            }
            if (!tag) {
                tag = comment.getTag("param", `<${reflection.name}>`);
            }
            if (!tag) {
                tag = comment.getTag("param", reflection.name);
            }
            if (tag) {
                reflection.comment = new index_1.Comment(tag.text);
                (0, utils_1.removeIfPresent)(comment.tags, tag);
            }
        }
    }
    /**
     * Triggered when the converter has created a declaration or signature reflection.
     *
     * Invokes the comment parser.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently processed.
     * @param node  The node that is currently processed if available.
     */
    onDeclaration(context, reflection, node) {
        var _a, _b;
        if (reflection.kindOf(index_2.ReflectionKind.FunctionOrMethod | index_2.ReflectionKind.Constructor)) {
            // We only want a comment on functions/methods if this is a set of overloaded functions.
            // In that case, TypeDoc lets you put a comment on the implementation, and will copy it over to
            // the available signatures so that you can avoid documenting things multiple times.
            // Once TypeDoc has proper support for TSDoc, this will go away since the same thing will be
            // possible by using a @inheritDoc tag to specify that docs should be copied from a specific signature.
            let specialOverloadCase = false;
            if (node &&
                (ts.isFunctionDeclaration(node) ||
                    ts.isMethodDeclaration(node) ||
                    ts.isConstructorDeclaration(node))) {
                const symbol = node.name && context.checker.getSymbolAtLocation(node.name);
                if (symbol && symbol.declarations) {
                    const declarations = symbol.declarations.filter((d) => ts.isFunctionDeclaration(d) ||
                        ts.isMethodDeclaration(d) ||
                        ts.isConstructorDeclaration(d));
                    if (declarations.length > 1 &&
                        "body" in declarations[declarations.length - 1]) {
                        node = declarations[declarations.length - 1];
                        specialOverloadCase = true;
                    }
                }
            }
            if (!specialOverloadCase)
                return;
        }
        // Clean this up in 0.23. We should really accept a ts.Symbol so we don't need exportSymbol on Context
        const exportNode = (_b = (_a = context.exportSymbol) === null || _a === void 0 ? void 0 : _a.getDeclarations()) === null || _b === void 0 ? void 0 : _b[0];
        let rawComment = exportNode && (0, comment_1.getRawComment)(exportNode, this.application.logger);
        rawComment !== null && rawComment !== void 0 ? rawComment : (rawComment = node && (0, comment_1.getRawComment)(node, this.application.logger));
        if (!rawComment) {
            return;
        }
        const comment = (0, comment_1.parseComment)(rawComment, reflection.comment);
        if (reflection.kindOf(index_2.ReflectionKind.Module)) {
            const tag = comment.getTag("module");
            if (tag) {
                // If no name is specified, this is a flag to mark a comment as a module comment
                // and should not result in a reflection rename.
                const newName = tag.text.trim();
                if (newName.length) {
                    reflection.name = newName;
                }
                (0, utils_1.removeIfPresent)(comment.tags, tag);
            }
        }
        this.applyModifiers(reflection, comment);
        this.removeExcludedTags(comment);
        reflection.comment = comment;
    }
    /**
     * Triggered when the converter begins resolving a project.
     *
     * @param context  The context object describing the current state the converter is in.
     */
    onBeginResolve(context) {
        const excludeInternal = this.application.options.getValue("excludeInternal");
        const excludePrivate = this.application.options.getValue("excludePrivate");
        const excludeProtected = this.application.options.getValue("excludeProtected");
        const project = context.project;
        const reflections = Object.values(project.reflections);
        // Remove hidden reflections
        const hidden = reflections.filter((reflection) => CommentPlugin_1.isHidden(reflection, excludeInternal, excludePrivate, excludeProtected));
        hidden.forEach((reflection) => project.removeReflection(reflection));
        // remove functions with empty signatures after their signatures have been removed
        const [allRemoved, someRemoved] = (0, utils_1.partition)((0, utils_1.filterMap)(hidden, (reflection) => {
            var _a;
            return ((_a = reflection.parent) === null || _a === void 0 ? void 0 : _a.kindOf(index_2.ReflectionKind.FunctionOrMethod | index_2.ReflectionKind.Constructor))
                ? reflection.parent
                : void 0;
        }), (method) => { var _a; return ((_a = method.signatures) === null || _a === void 0 ? void 0 : _a.length) === 0; });
        allRemoved.forEach((reflection) => {
            project.removeReflection(reflection);
        });
        someRemoved.forEach((reflection) => {
            reflection.sources = (0, utils_1.unique)(reflection.signatures.reduce((c, s) => c.concat(s.sources || []), []));
        });
    }
    /**
     * Triggered when the converter resolves a reflection.
     *
     * Cleans up comment tags related to signatures like @param or @return
     * and moves their data to the corresponding parameter reflections.
     *
     * This hook also copies over the comment of function implementations to their
     * signatures.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently resolved.
     */
    onResolve(_context, reflection) {
        if (!(reflection instanceof index_2.DeclarationReflection)) {
            return;
        }
        if (reflection.type instanceof models_1.ReflectionType) {
            this.addCommentToSignatures(reflection, reflection.type.declaration.getNonIndexSignatures());
        }
        else {
            this.addCommentToSignatures(reflection, reflection.getNonIndexSignatures());
        }
    }
    addCommentToSignatures(reflection, signatures) {
        if (!signatures.length) {
            return;
        }
        const comment = reflection.comment;
        if (comment && comment.hasTag("returns")) {
            comment.returns = comment.getTag("returns").text;
            comment.removeTags("returns");
        }
        signatures.forEach((signature) => {
            var _a, _b;
            let childComment = signature.comment;
            if (childComment && childComment.hasTag("returns")) {
                childComment.returns = childComment.getTag("returns").text;
                childComment.removeTags("returns");
            }
            if (comment) {
                if (!childComment) {
                    childComment = signature.comment = new index_1.Comment();
                }
                childComment.shortText || (childComment.shortText = comment.shortText);
                childComment.text || (childComment.text = comment.text);
                childComment.returns || (childComment.returns = comment.returns);
                childComment.tags = childComment.tags.length
                    ? childComment.tags
                    : [...comment.tags];
            }
            (_a = signature.parameters) === null || _a === void 0 ? void 0 : _a.forEach((parameter, index) => {
                var _a;
                let tag;
                if (childComment && parameter.name === "__namedParameters") {
                    const commentParams = childComment === null || childComment === void 0 ? void 0 : childComment.tags.filter((tag) => tag.tagName === "param" &&
                        !tag.paramName.includes("."));
                    if (((_a = signature.parameters) === null || _a === void 0 ? void 0 : _a.length) === commentParams.length &&
                        commentParams[index].paramName) {
                        parameter.name = commentParams[index].paramName;
                    }
                }
                if (childComment) {
                    moveNestedParamTags(childComment, parameter);
                    tag = childComment.getTag("param", parameter.name);
                }
                if (comment && !tag) {
                    tag = comment.getTag("param", parameter.name);
                }
                if (tag) {
                    parameter.comment = new index_1.Comment(tag.text);
                }
            });
            (_b = signature.typeParameters) === null || _b === void 0 ? void 0 : _b.forEach((parameter) => {
                let tag;
                if (childComment) {
                    tag =
                        childComment.getTag("typeparam", parameter.name) ||
                            childComment.getTag("template", parameter.name) ||
                            childComment.getTag("param", `<${parameter.name}>`);
                }
                if (comment && !tag) {
                    tag =
                        comment.getTag("typeparam", parameter.name) ||
                            comment.getTag("template", parameter.name) ||
                            comment.getTag("param", `<${parameter.name}>`);
                }
                if (tag) {
                    parameter.comment = new index_1.Comment(tag.text);
                }
            });
            childComment === null || childComment === void 0 ? void 0 : childComment.removeTags("param");
            childComment === null || childComment === void 0 ? void 0 : childComment.removeTags("typeparam");
            childComment === null || childComment === void 0 ? void 0 : childComment.removeTags("template");
        });
        delete reflection.comment;
    }
    removeExcludedTags(comment) {
        for (const tag of TAG_BLACKLIST) {
            comment.removeTags(tag);
        }
        for (const tag of this.excludeTags) {
            comment.removeTags(tag);
        }
    }
    /**
     * Determines whether or not a reflection has been hidden
     *
     * @param reflection Reflection to check if hidden
     */
    static isHidden(reflection, excludeInternal, excludePrivate, excludeProtected) {
        const comment = reflection.comment;
        if (reflection.flags.hasFlag(index_2.ReflectionFlag.Private) &&
            excludePrivate) {
            return true;
        }
        if (reflection.flags.hasFlag(index_2.ReflectionFlag.Protected) &&
            excludeProtected) {
            return true;
        }
        if (!comment) {
            return false;
        }
        return (comment.hasTag("hidden") ||
            comment.hasTag("ignore") ||
            (comment.hasTag("internal") && excludeInternal));
    }
};
__decorate([
    (0, utils_1.BindOption)("excludeTags")
], CommentPlugin.prototype, "excludeTags", void 0);
CommentPlugin = CommentPlugin_1 = __decorate([
    (0, components_1.Component)({ name: "comment" })
], CommentPlugin);
exports.CommentPlugin = CommentPlugin;
// Moves tags like `@param foo.bar docs for bar` into the `bar` property of the `foo` parameter.
function moveNestedParamTags(comment, parameter) {
    var _a;
    const visitor = {
        reflection(target) {
            const tags = comment.tags.filter((t) => t.tagName === "param" &&
                t.paramName.startsWith(`${parameter.name}.`));
            for (const tag of tags) {
                const path = tag.paramName.split(".");
                path.shift();
                const child = target.declaration.getChildByName(path);
                if (child && !child.comment) {
                    child.comment = new index_1.Comment(tag.text);
                }
            }
        },
        // #1876, also do this for unions/intersections.
        union(u) {
            u.types.forEach((t) => t.visit(visitor));
        },
        intersection(i) {
            i.types.forEach((t) => t.visit(visitor));
        },
    };
    (_a = parameter.type) === null || _a === void 0 ? void 0 : _a.visit(visitor);
}

}, function(modId) { var map = {"../../models/comments/index":1654179213645,"../../models/reflections/index":1654179213612,"../components":1654179213654,"../factories/comment":1654179213670,"../converter":1654179213652,"../../models":1654179213611,"../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213670, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.parseComment = exports.getRawComment = exports.getJsDocCommentText = void 0;
const ts = require("typescript");
const index_1 = require("../../models/comments/index");
/**
 * Check whether the given module declaration is the topmost.
 *
 * This function returns TRUE if there is no trailing module defined, in
 * the following example this would be the case only for module <code>C</code>.
 *
 * ```
 * module A.B.C { }
 * ```
 *
 * @param node  The module definition that should be tested.
 * @return TRUE if the given node is the topmost module declaration, FALSE otherwise.
 */
function isTopmostModuleDeclaration(node) {
    return node.getChildren().some(ts.isModuleBlock);
}
/**
 * Return the root module declaration of the given module declaration.
 *
 * In the following example this function would always return module
 * <code>A</code> no matter which of the modules was passed in.
 *
 * ```
 * module A.B.C { }
 * ```
 */
function getRootModuleDeclaration(node) {
    while (node.parent &&
        node.parent.kind === ts.SyntaxKind.ModuleDeclaration) {
        const parent = node.parent;
        if (node.name.pos === parent.name.end + 1) {
            node = parent;
        }
        else {
            break;
        }
    }
    return node;
}
/**
 * Derived from the internal ts utility
 * https://github.com/Microsoft/TypeScript/blob/v3.2.2/src/compiler/utilities.ts#L954
 * @param node
 * @param text
 */
function getJSDocCommentRanges(node, text) {
    var _a, _b;
    const hasTrailingCommentRanges = [
        ts.SyntaxKind.Parameter,
        ts.SyntaxKind.FunctionExpression,
        ts.SyntaxKind.ArrowFunction,
        ts.SyntaxKind.ParenthesizedExpression,
    ].includes(node.kind);
    let commentRanges = (_a = ts.getLeadingCommentRanges(text, node.pos)) !== null && _a !== void 0 ? _a : [];
    if (hasTrailingCommentRanges) {
        commentRanges = ((_b = ts.getTrailingCommentRanges(text, node.pos)) !== null && _b !== void 0 ? _b : []).concat(commentRanges);
    }
    // True if the comment starts with '/**' but not if it is '/**/'
    return commentRanges.filter(({ pos }) => text.substr(pos, 3) === "/**" && text[pos + 4] !== "/");
}
function getJsDocCommentText(comment) {
    if (typeof comment === "string") {
        return comment;
    }
    return comment === null || comment === void 0 ? void 0 : comment.map((val) => val.text).join("");
}
exports.getJsDocCommentText = getJsDocCommentText;
/**
 * Return the raw comment string for the given node.
 *
 * @param node  The node whose comment should be resolved.
 * @returns     The raw comment string or undefined if no comment could be found.
 */
function getRawComment(node, logger) {
    var _a, _b;
    // This happens if we are converting a JS project that has @typedef "interfaces"
    // with an @property tag, a @typedef type alias, a callback with parameters, etc.
    if (ts.isJSDocTypedefTag(node) ||
        ts.isJSDocPropertyTag(node) ||
        ts.isJSDocParameterTag(node) ||
        ts.isJSDocCallbackTag(node)) {
        // Also strip off leading dashes:
        // @property {string} name - docs
        return (_a = getJsDocCommentText(node.comment)) === null || _a === void 0 ? void 0 : _a.replace(/^\s*-\s*/, "");
    }
    if (node.parent &&
        node.parent.kind === ts.SyntaxKind.VariableDeclarationList) {
        node = node.parent.parent;
    }
    else if (node.kind === ts.SyntaxKind.ModuleDeclaration) {
        if (!isTopmostModuleDeclaration(node)) {
            return;
        }
        else {
            node = getRootModuleDeclaration(node);
        }
    }
    else if (node.kind === ts.SyntaxKind.NamespaceExport) {
        node = node.parent;
    }
    else if (node.kind === ts.SyntaxKind.ExportSpecifier) {
        node = node.parent.parent;
    }
    else if (node.kind === ts.SyntaxKind.FunctionType) {
        node = node.parent;
    }
    const sourceFile = node.getSourceFile();
    const comments = getJSDocCommentRanges(node, sourceFile.text);
    if (comments.length) {
        let comment;
        if (node.kind === ts.SyntaxKind.SourceFile) {
            const explicitPackageComment = (_b = comments.find((comment) => sourceFile.text
                .substring(comment.pos, comment.end)
                .includes("@module"))) !== null && _b !== void 0 ? _b : comments.find((comment) => sourceFile.text
                .substring(comment.pos, comment.end)
                .includes("@packageDocumentation"));
            if (explicitPackageComment) {
                comment = explicitPackageComment;
            }
            else if (comments.length > 1) {
                // Legacy behavior, require more than one comment and use the first comment.
                comment = comments[0];
                logger.deprecated(`Specifying multiple comments at the start of a file to use the first comment as the comment for the module has been deprecated. Use @module or @packageDocumentation instead.\n\t${sourceFile.fileName}`, false);
            }
            else {
                // Single comment that may be a license comment, or no comments, bail.
                return;
            }
        }
        else {
            comment = comments[comments.length - 1];
            // If a non-SourceFile node comment has this tag, it should not be attached to the node
            // as it documents the module.
            if (sourceFile.text
                .substring(comment.pos, comment.end)
                .includes("@module") ||
                sourceFile.text
                    .substring(comment.pos, comment.end)
                    .includes("@packageDocumentation")) {
                return;
            }
        }
        return sourceFile.text.substring(comment.pos, comment.end);
    }
    else {
        return;
    }
}
exports.getRawComment = getRawComment;
/**
 * Parse the given doc comment string.
 *
 * @param text     The doc comment string that should be parsed.
 * @param comment  The {@link Comment} instance the parsed results should be stored into.
 * @returns        A populated {@link Comment} instance.
 */
function parseComment(text, comment = new index_1.Comment()) {
    let currentTag;
    let shortText = 0;
    function consumeTypeData(line) {
        line = line.replace(/^\{(?!@)[^}]*\}+/, "");
        line = line.replace(/^\[[^[][^\]]*\]+/, "");
        return line.trim();
    }
    function readBareLine(line) {
        if (currentTag) {
            currentTag.text += "\n" + line;
        }
        else if (line === "" && shortText === 0) {
            // Ignore
        }
        else if (line === "" && shortText === 1) {
            shortText = 2;
        }
        else {
            if (shortText === 2) {
                comment.text += (comment.text === "" ? "" : "\n") + line;
            }
            else {
                comment.shortText +=
                    (comment.shortText === "" ? "" : "\n") + line;
                shortText = 1;
            }
        }
    }
    function readTagLine(line, tag) {
        let tagName = tag[1].toLowerCase();
        let paramName;
        line = tag[2].trim();
        if (tagName === "return") {
            tagName = "returns";
        }
        if (tagName === "example") {
            line = line.replace(/<\/?caption>/g, "");
        }
        if (tagName === "param" ||
            tagName === "typeparam" ||
            tagName === "template" ||
            tagName === "inheritdoc") {
            line = consumeTypeData(line);
            const param = /[^\s]+/.exec(line);
            if (param) {
                paramName = param[0];
                line = line.substr(paramName.length + 1).trim();
            }
            line = consumeTypeData(line);
            line = line.replace(/^-\s+/, "");
        }
        else if (tagName === "returns") {
            line = consumeTypeData(line);
        }
        currentTag = new index_1.CommentTag(tagName, paramName, line);
        comment.tags.push(currentTag);
    }
    const CODE_FENCE = /^\s*```(?!.*```)/;
    let inFencedCode = false;
    function readLine(line) {
        line = line.replace(/^\s*\*? ?/, "");
        const rawLine = line;
        line = line.replace(/\s*$/, "");
        if (CODE_FENCE.test(line)) {
            inFencedCode = !inFencedCode;
        }
        // Four spaces can be used to make code blocks too.
        if (!inFencedCode && !line.startsWith("    ")) {
            const tag = /^\s*@(\S+)(.*)$/.exec(line);
            if (tag) {
                return readTagLine(line, tag);
            }
        }
        if (inFencedCode) {
            // This will not include code blocks declared with four spaces
            readBareLine(rawLine);
        }
        else {
            readBareLine(line);
        }
    }
    text = text.replace(/^\s*\/\*+/, "");
    text = text.replace(/\*+\/\s*$/, "");
    text.split(/\r\n?|\n/).forEach(readLine);
    return comment;
}
exports.parseComment = parseComment;

}, function(modId) { var map = {"../../models/comments/index":1654179213645}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213671, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorPlugin = void 0;
const ts = require("typescript");
const types_1 = require("../../models/types");
const components_1 = require("../components");
const converter_1 = require("../converter");
/**
 * A plugin that detects decorators.
 */
let DecoratorPlugin = class DecoratorPlugin extends components_1.ConverterComponent {
    constructor() {
        super(...arguments);
        this.usages = new Map();
    }
    /**
     * Create a new ImplementsPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_CREATE_DECLARATION]: this.onDeclaration,
            [converter_1.Converter.EVENT_CREATE_PARAMETER]: this.onDeclaration,
            [converter_1.Converter.EVENT_RESOLVE]: this.onBeginResolve,
            [converter_1.Converter.EVENT_END]: () => this.usages.clear(),
        });
    }
    /**
     * Create an object describing the arguments a decorator is set with.
     *
     * @param args  The arguments resolved from the decorator's call expression.
     * @param signature  The signature definition of the decorator being used.
     * @returns An object describing the decorator parameters,
     */
    extractArguments(args, signature) {
        const result = {};
        args.forEach((arg, index) => {
            if (index < signature.parameters.length) {
                const parameter = signature.parameters[index];
                result[parameter.name] = arg.getText();
            }
            else {
                if (!result["..."]) {
                    result["..."] = [];
                }
                result["..."].push(arg.getText());
            }
        });
        return result;
    }
    /**
     * Triggered when the converter has created a declaration or signature reflection.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently processed.
     * @param node  The node that is currently processed if available.
     */
    onDeclaration(context, reflection, node) {
        var _a;
        (_a = node === null || node === void 0 ? void 0 : node.decorators) === null || _a === void 0 ? void 0 : _a.forEach((decorator) => {
            var _a, _b;
            let callExpression;
            let identifier;
            switch (decorator.expression.kind) {
                case ts.SyntaxKind.Identifier:
                    identifier = decorator.expression;
                    break;
                case ts.SyntaxKind.CallExpression:
                    callExpression = decorator.expression;
                    identifier = callExpression.expression;
                    break;
                default:
                    return;
            }
            const info = {
                name: identifier.getText(),
            };
            const type = context.checker.getTypeAtLocation(identifier);
            if (type && type.symbol) {
                info.type = types_1.ReferenceType.createSymbolReference(context.resolveAliasedSymbol(type.symbol), context, info.name);
                if (callExpression && callExpression.arguments) {
                    const signature = context.checker.getResolvedSignature(callExpression);
                    if (signature) {
                        info.arguments = this.extractArguments(callExpression.arguments, signature);
                    }
                }
                const usages = (_a = this.usages.get(type.symbol)) !== null && _a !== void 0 ? _a : [];
                usages.push(types_1.ReferenceType.createResolvedReference(reflection.name, reflection, context.project));
                this.usages.set(type.symbol, usages);
            }
            (_b = reflection.decorators) !== null && _b !== void 0 ? _b : (reflection.decorators = []);
            reflection.decorators.push(info);
        });
    }
    onBeginResolve(context) {
        for (const [symbol, ref] of this.usages) {
            const reflection = context.project.getReflectionFromSymbol(symbol);
            if (reflection) {
                reflection.decorates = ref;
            }
        }
    }
};
DecoratorPlugin = __decorate([
    (0, components_1.Component)({ name: "decorator" })
], DecoratorPlugin);
exports.DecoratorPlugin = DecoratorPlugin;

}, function(modId) { var map = {"../../models/types":1654179213615,"../components":1654179213654,"../converter":1654179213652}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213672, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceLinkPlugin = exports.Repository = void 0;
const Path = require("path");
const child_process_1 = require("child_process");
const components_1 = require("../components");
const base_path_1 = require("../utils/base-path");
const converter_1 = require("../converter");
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const TEN_MEGABYTES = 1024 * 10000;
function git(...args) {
    return (0, child_process_1.spawnSync)("git", args, {
        encoding: "utf-8",
        windowsHide: true,
        maxBuffer: TEN_MEGABYTES,
    });
}
/**
 * Stores data of a repository.
 */
class Repository {
    /**
     * Create a new Repository instance.
     *
     * @param path  The root path of the repository.
     */
    constructor(path, gitRevision, repoLinks) {
        /**
         * A list of all files tracked by the repository.
         */
        this.files = [];
        /**
         * The hostname for this GitHub/Bitbucket/.etc project.
         *
         * Defaults to: `github.com` (for normal, public GitHub instance projects)
         *
         * Can be the hostname for an enterprise version of GitHub, e.g. `github.acme.com`
         * (if found as a match in the list of git remotes).
         */
        this.hostname = "github.com";
        /**
         * Whether this is a GitHub, Bitbucket, or other type of repository.
         */
        this.type = models_1.RepositoryType.GitHub;
        this.path = path;
        this.branch = gitRevision || "master";
        for (let i = 0, c = repoLinks.length; i < c; i++) {
            let match = /(github(?:\.[a-z]+)*\.[a-z]{2,})[:/]([^/]+)\/(.*)/.exec(repoLinks[i]);
            // Github Enterprise
            if (!match) {
                match = /(\w+\.githubprivate.com)[:/]([^/]+)\/(.*)/.exec(repoLinks[i]);
            }
            if (!match) {
                match = /(bitbucket.org)[:/]([^/]+)\/(.*)/.exec(repoLinks[i]);
            }
            if (!match) {
                match = /(gitlab.com)[:/]([^/]+)\/(.*)/.exec(repoLinks[i]);
            }
            if (match) {
                this.hostname = match[1];
                this.user = match[2];
                this.project = match[3];
                if (this.project.substr(-4) === ".git") {
                    this.project = this.project.substr(0, this.project.length - 4);
                }
                break;
            }
        }
        if (this.hostname.includes("bitbucket.org")) {
            this.type = models_1.RepositoryType.Bitbucket;
        }
        else if (this.hostname.includes("gitlab.com")) {
            this.type = models_1.RepositoryType.GitLab;
        }
        else {
            this.type = models_1.RepositoryType.GitHub;
        }
        let out = git("-C", path, "ls-files");
        if (out.status === 0) {
            out.stdout.split("\n").forEach((file) => {
                if (file !== "") {
                    this.files.push(base_path_1.BasePath.normalize(path + "/" + file));
                }
            });
        }
        if (!gitRevision) {
            out = git("-C", path, "rev-parse", "--short", "HEAD");
            if (out.status === 0) {
                this.branch = out.stdout.replace("\n", "");
            }
        }
    }
    /**
     * Check whether the given file is tracked by this repository.
     *
     * @param fileName  The name of the file to test for.
     * @returns TRUE when the file is part of the repository, otherwise FALSE.
     */
    contains(fileName) {
        return this.files.includes(fileName);
    }
    /**
     * Get the URL of the given file on GitHub or Bitbucket.
     *
     * @param fileName  The file whose URL should be determined.
     * @returns A URL pointing to the web preview of the given file or undefined.
     */
    getURL(fileName) {
        if (!this.user || !this.project || !this.contains(fileName)) {
            return;
        }
        return [
            `https://${this.hostname}`,
            this.user,
            this.project,
            this.type === models_1.RepositoryType.GitLab ? "-" : undefined,
            this.type === models_1.RepositoryType.Bitbucket ? "src" : "blob",
            this.branch,
            fileName.substr(this.path.length + 1),
        ]
            .filter((s) => !!s)
            .join("/");
    }
    /**
     * Try to create a new repository instance.
     *
     * Checks whether the given path is the root of a valid repository and if so
     * creates a new instance of {@link Repository}.
     *
     * @param path  The potential repository root.
     * @returns A new instance of {@link Repository} or undefined.
     */
    static tryCreateRepository(path, gitRevision, gitRemote) {
        const out = git("-C", path, "rev-parse", "--show-toplevel");
        const remotesOutput = git("-C", path, "remote", "get-url", gitRemote);
        if (out.status !== 0 || remotesOutput.status !== 0) {
            return;
        }
        return new Repository(base_path_1.BasePath.normalize(out.stdout.replace("\n", "")), gitRevision, remotesOutput.stdout.split("\n"));
    }
    static getLineNumberAnchor(lineNumber, repositoryType) {
        switch (repositoryType) {
            default:
            case models_1.RepositoryType.GitHub:
            case models_1.RepositoryType.GitLab:
                return "L" + lineNumber;
            case models_1.RepositoryType.Bitbucket:
                return "lines-" + lineNumber;
        }
    }
}
exports.Repository = Repository;
/**
 * A handler that watches for repositories with GitHub origin and links
 * their source files to the related GitHub pages.
 */
let SourceLinkPlugin = class SourceLinkPlugin extends components_1.ConverterComponent {
    constructor() {
        super(...arguments);
        /**
         * List of known repositories.
         */
        this.repositories = {};
        /**
         * List of paths known to be not under git control.
         */
        this.ignoredPaths = [];
    }
    /**
     * Create a new GitHubHandler instance.
     *
     * @param converter  The converter this plugin should be attached to.
     */
    initialize() {
        if (git("--version").status === 0) {
            this.listenTo(this.owner, converter_1.Converter.EVENT_RESOLVE_END, this.onEndResolve);
        }
    }
    /**
     * Check whether the given file is placed inside a repository.
     *
     * @param fileName  The name of the file a repository should be looked for.
     * @returns The found repository info or undefined.
     */
    getRepository(fileName) {
        // Check for known non-repositories
        const dirName = Path.dirname(fileName);
        for (let i = 0, c = this.ignoredPaths.length; i < c; i++) {
            if (this.ignoredPaths[i] === dirName) {
                return;
            }
        }
        // Check for known repositories
        for (const path of Object.keys(this.repositories)) {
            if (fileName.substr(0, path.length).toLowerCase() === path) {
                return this.repositories[path];
            }
        }
        // Try to create a new repository
        const repository = Repository.tryCreateRepository(dirName, this.gitRevision, this.gitRemote);
        if (repository) {
            this.repositories[repository.path.toLowerCase()] = repository;
            return repository;
        }
        // No repository found, add path to ignored paths
        const segments = dirName.split("/");
        for (let i = segments.length; i > 0; i--) {
            this.ignoredPaths.push(segments.slice(0, i).join("/"));
        }
    }
    /**
     * Triggered when the converter has finished resolving a project.
     *
     * @param context  The context object describing the current state the converter is in.
     */
    onEndResolve(context) {
        const project = context.project;
        project.files.forEach((sourceFile) => {
            const repository = this.getRepository(sourceFile.fullFileName);
            if (repository) {
                sourceFile.url = repository.getURL(sourceFile.fullFileName);
                sourceFile.repositoryType = repository.type;
            }
        });
        for (const key in project.reflections) {
            const reflection = project.reflections[key];
            if (reflection.sources) {
                reflection.sources.forEach((source) => {
                    if (source.file && source.file.url) {
                        source.url =
                            source.file.url +
                                "#" +
                                Repository.getLineNumberAnchor(source.line, source.file.repositoryType);
                    }
                });
            }
        }
    }
};
__decorate([
    (0, utils_1.BindOption)("gitRevision")
], SourceLinkPlugin.prototype, "gitRevision", void 0);
__decorate([
    (0, utils_1.BindOption)("gitRemote")
], SourceLinkPlugin.prototype, "gitRemote", void 0);
SourceLinkPlugin = __decorate([
    (0, components_1.Component)({ name: "source-link" })
], SourceLinkPlugin);
exports.SourceLinkPlugin = SourceLinkPlugin;

}, function(modId) { var map = {"../components":1654179213654,"../utils/base-path":1654179213673,"../converter":1654179213652,"../../utils":1654179213624,"../../models":1654179213611}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213673, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePath = void 0;
const Path = require("path");
/**
 * Helper class that determines the common base path of a set of files.
 *
 * In the first step all files must be passed to {@link add}. Afterwards {@link trim}
 * can be used to retrieve the shortest path relative to the determined base path.
 */
class BasePath {
    constructor() {
        /**
         * List of known base paths.
         */
        this.basePaths = [];
    }
    /**
     * Add the given file path to this set of base paths.
     *
     * @param fileName  The absolute filename that should be added to the base path.
     */
    add(fileName) {
        const fileDir = Path.dirname(BasePath.normalize(fileName));
        const filePath = fileDir.split("/");
        basePaths: for (let n = 0, c = this.basePaths.length; n < c; n++) {
            const basePath = this.basePaths[n].split("/");
            const mMax = Math.min(basePath.length, filePath.length);
            for (let m = 0; m < mMax; m++) {
                if (basePath[m] === filePath[m]) {
                    continue;
                }
                if (m < 1) {
                    // No match at all, try next known base path
                    continue basePaths;
                }
                else {
                    // Partial match, trim the known base path
                    if (m < basePath.length) {
                        this.basePaths[n] = basePath.slice(0, m).join("/");
                    }
                    return;
                }
            }
            // Complete match, exit
            this.basePaths[n] = basePath.splice(0, mMax).join("/");
            return;
        }
        // Unknown base path, add it
        this.basePaths.push(fileDir);
    }
    /**
     * Trim the given filename by the determined base paths.
     *
     * @param fileName  The absolute filename that should be trimmed.
     * @returns The trimmed version of the filename.
     */
    trim(fileName) {
        fileName = BasePath.normalize(fileName);
        for (let n = 0, c = this.basePaths.length; n < c; n++) {
            const basePath = this.basePaths[n];
            if (fileName.substr(0, basePath.length) === basePath) {
                return fileName.substr(basePath.length + 1);
            }
        }
        return fileName;
    }
    /**
     * Reset this instance, ignore all paths already passed to {@link add}.
     */
    reset() {
        this.basePaths = [];
    }
    /**
     * Normalize the given path.
     *
     * @param path  The path that should be normalized.
     * @returns Normalized version of the given path.
     */
    static normalize(path) {
        // Ensure forward slashes
        path = path.replace(/\\/g, "/");
        // Remove all surrounding quotes
        path = path.replace(/^["']+|["']+$/g, "");
        // Make Windows drive letters lower case
        return path.replace(/^([^:]+):\//, (_m, m1) => m1.toUpperCase() + ":/");
    }
}
exports.BasePath = BasePath;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213674, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GroupPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupPlugin = void 0;
const index_1 = require("../../models/reflections/index");
const ReflectionGroup_1 = require("../../models/ReflectionGroup");
const components_1 = require("../components");
const converter_1 = require("../converter");
const sort_1 = require("../../utils/sort");
const utils_1 = require("../../utils");
/**
 * A handler that sorts and groups the found reflections in the resolving phase.
 *
 * The handler sets the ´groups´ property of all reflections.
 */
let GroupPlugin = GroupPlugin_1 = class GroupPlugin extends components_1.ConverterComponent {
    /**
     * Create a new GroupPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_RESOLVE]: this.onResolve,
            [converter_1.Converter.EVENT_RESOLVE_END]: this.onEndResolve,
        });
    }
    /**
     * Triggered when the converter resolves a reflection.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently resolved.
     */
    onResolve(_context, reflection) {
        reflection.kindString = GroupPlugin_1.getKindSingular(reflection.kind);
        if (reflection instanceof index_1.ContainerReflection) {
            this.group(reflection);
        }
    }
    /**
     * Triggered when the converter has finished resolving a project.
     *
     * @param context  The context object describing the current state the converter is in.
     */
    onEndResolve(context) {
        function walkDirectory(directory) {
            directory.groups = GroupPlugin_1.getReflectionGroups(directory.getAllReflections());
            for (const dir of Object.values(directory.directories)) {
                walkDirectory(dir);
            }
        }
        const project = context.project;
        this.group(project);
        walkDirectory(project.directory);
        project.files.forEach((file) => {
            file.groups = GroupPlugin_1.getReflectionGroups(file.reflections);
        });
    }
    group(reflection) {
        if (reflection.children &&
            reflection.children.length > 0 &&
            !reflection.groups) {
            (0, sort_1.sortReflections)(reflection.children, this.sortStrategies);
            reflection.groups = GroupPlugin_1.getReflectionGroups(reflection.children);
        }
    }
    /**
     * Create a grouped representation of the given list of reflections.
     *
     * Reflections are grouped by kind and sorted by weight and name.
     *
     * @param reflections  The reflections that should be grouped.
     * @returns An array containing all children of the given reflection grouped by their kind.
     */
    static getReflectionGroups(reflections) {
        const groups = [];
        reflections.forEach((child) => {
            for (let i = 0; i < groups.length; i++) {
                const group = groups[i];
                if (group.kind !== child.kind) {
                    continue;
                }
                group.children.push(child);
                return;
            }
            const group = new ReflectionGroup_1.ReflectionGroup(GroupPlugin_1.getKindPlural(child.kind), child.kind);
            group.children.push(child);
            groups.push(group);
        });
        groups.forEach((group) => {
            let allInherited = true;
            let allPrivate = true;
            let allProtected = true;
            let allExternal = true;
            group.children.forEach((child) => {
                allPrivate = child.flags.isPrivate && allPrivate;
                allProtected =
                    (child.flags.isPrivate || child.flags.isProtected) &&
                        allProtected;
                allExternal = child.flags.isExternal && allExternal;
                if (child instanceof index_1.DeclarationReflection) {
                    allInherited = !!child.inheritedFrom && allInherited;
                }
                else {
                    allInherited = false;
                }
            });
            group.allChildrenAreInherited = allInherited;
            group.allChildrenArePrivate = allPrivate;
            group.allChildrenAreProtectedOrPrivate = allProtected;
            group.allChildrenAreExternal = allExternal;
        });
        return groups;
    }
    /**
     * Transform the internal typescript kind identifier into a human readable version.
     *
     * @param kind  The original typescript kind identifier.
     * @returns A human readable version of the given typescript kind identifier.
     */
    static getKindString(kind) {
        let str = index_1.ReflectionKind[kind];
        str = str.replace(/(.)([A-Z])/g, (_m, a, b) => a + " " + b.toLowerCase());
        return str;
    }
    /**
     * Return the singular name of a internal typescript kind identifier.
     *
     * @param kind The original internal typescript kind identifier.
     * @returns The singular name of the given internal typescript kind identifier
     */
    static getKindSingular(kind) {
        if (kind in GroupPlugin_1.SINGULARS) {
            return GroupPlugin_1.SINGULARS[kind];
        }
        else {
            return GroupPlugin_1.getKindString(kind);
        }
    }
    /**
     * Return the plural name of a internal typescript kind identifier.
     *
     * @param kind The original internal typescript kind identifier.
     * @returns The plural name of the given internal typescript kind identifier
     */
    static getKindPlural(kind) {
        if (kind in GroupPlugin_1.PLURALS) {
            return GroupPlugin_1.PLURALS[kind];
        }
        else {
            return this.getKindString(kind) + "s";
        }
    }
};
/**
 * Define the singular name of individual reflection kinds.
 */
GroupPlugin.SINGULARS = {
    [index_1.ReflectionKind.Enum]: "Enumeration",
    [index_1.ReflectionKind.EnumMember]: "Enumeration Member",
};
/**
 * Define the plural name of individual reflection kinds.
 */
GroupPlugin.PLURALS = {
    [index_1.ReflectionKind.Class]: "Classes",
    [index_1.ReflectionKind.Property]: "Properties",
    [index_1.ReflectionKind.Enum]: "Enumerations",
    [index_1.ReflectionKind.EnumMember]: "Enumeration Members",
    [index_1.ReflectionKind.TypeAlias]: "Type Aliases",
};
__decorate([
    (0, utils_1.BindOption)("sort")
], GroupPlugin.prototype, "sortStrategies", void 0);
GroupPlugin = GroupPlugin_1 = __decorate([
    (0, components_1.Component)({ name: "group" })
], GroupPlugin);
exports.GroupPlugin = GroupPlugin;

}, function(modId) { var map = {"../../models/reflections/index":1654179213612,"../../models/ReflectionGroup":1654179213648,"../components":1654179213654,"../converter":1654179213652,"../../utils/sort":1654179213632,"../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213675, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImplementsPlugin = void 0;
const ts = require("typescript");
const index_1 = require("../../models/reflections/index");
const types_1 = require("../../models/types");
const array_1 = require("../../utils/array");
const components_1 = require("../components");
const converter_1 = require("../converter");
const reflections_1 = require("../utils/reflections");
/**
 * A plugin that detects interface implementations of functions and
 * properties on classes and links them.
 */
let ImplementsPlugin = class ImplementsPlugin extends components_1.ConverterComponent {
    constructor() {
        super(...arguments);
        this.resolved = new WeakSet();
        this.postponed = new WeakMap();
    }
    /**
     * Create a new ImplementsPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, converter_1.Converter.EVENT_RESOLVE, this.onResolve, -10);
        this.listenTo(this.owner, converter_1.Converter.EVENT_CREATE_DECLARATION, this.onDeclaration, -1000);
        this.listenTo(this.owner, converter_1.Converter.EVENT_CREATE_SIGNATURE, this.onSignature, 1000);
    }
    /**
     * Mark all members of the given class to be the implementation of the matching interface member.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param classReflection  The reflection of the classReflection class.
     * @param interfaceReflection  The reflection of the interfaceReflection interface.
     */
    analyzeClass(context, classReflection, interfaceReflection) {
        if (!interfaceReflection.children) {
            return;
        }
        interfaceReflection.children.forEach((interfaceMember) => {
            let classMember;
            if (!classReflection.children) {
                return;
            }
            for (let index = 0, count = classReflection.children.length; index < count; index++) {
                const child = classReflection.children[index];
                if (child.name !== interfaceMember.name) {
                    continue;
                }
                if (child.flags.isStatic !== interfaceMember.flags.isStatic) {
                    continue;
                }
                classMember = child;
                break;
            }
            if (!classMember) {
                return;
            }
            const interfaceMemberName = interfaceReflection.name + "." + interfaceMember.name;
            classMember.implementationOf =
                types_1.ReferenceType.createResolvedReference(interfaceMemberName, interfaceMember, context.project);
            (0, reflections_1.copyComment)(classMember, interfaceMember);
            if (interfaceMember.kindOf(index_1.ReflectionKind.Property) &&
                classMember.kindOf(index_1.ReflectionKind.Accessor)) {
                if (classMember.getSignature) {
                    (0, reflections_1.copyComment)(classMember.getSignature, interfaceMember);
                    classMember.getSignature.implementationOf =
                        classMember.implementationOf;
                }
                if (classMember.setSignature) {
                    (0, reflections_1.copyComment)(classMember.setSignature, interfaceMember);
                    classMember.setSignature.implementationOf =
                        classMember.implementationOf;
                }
            }
            if (interfaceMember.kindOf(index_1.ReflectionKind.FunctionOrMethod) &&
                interfaceMember.signatures &&
                classMember.signatures) {
                for (const [clsSig, intSig] of (0, array_1.zip)(classMember.signatures, interfaceMember.signatures)) {
                    if (clsSig.implementationOf) {
                        clsSig.implementationOf =
                            types_1.ReferenceType.createResolvedReference(clsSig.implementationOf.name, intSig, context.project);
                    }
                    (0, reflections_1.copyComment)(clsSig, intSig);
                }
            }
        });
    }
    analyzeInheritance(context, reflection) {
        var _a, _b, _c, _d, _e;
        const extendedTypes = (0, array_1.filterMap)((_a = reflection.extendedTypes) !== null && _a !== void 0 ? _a : [], (type) => {
            return type instanceof types_1.ReferenceType &&
                type.reflection instanceof index_1.DeclarationReflection
                ? type
                : void 0;
        });
        for (const parent of extendedTypes) {
            for (const parentMember of (_b = parent.reflection.children) !== null && _b !== void 0 ? _b : []) {
                const child = (_c = reflection.children) === null || _c === void 0 ? void 0 : _c.find((child) => child.name == parentMember.name &&
                    child.flags.isStatic === parentMember.flags.isStatic);
                if (child) {
                    const key = child.overwrites
                        ? "overwrites"
                        : "inheritedFrom";
                    for (const [childSig, parentSig] of (0, array_1.zip)((_d = child.signatures) !== null && _d !== void 0 ? _d : [], (_e = parentMember.signatures) !== null && _e !== void 0 ? _e : [])) {
                        childSig[key] = types_1.ReferenceType.createResolvedReference(`${parent.name}.${parentMember.name}`, parentSig, context.project);
                        (0, reflections_1.copyComment)(childSig, parentSig);
                    }
                    child[key] = types_1.ReferenceType.createResolvedReference(`${parent.name}.${parentMember.name}`, parentMember, context.project);
                    (0, reflections_1.copyComment)(child, parentMember);
                }
            }
        }
    }
    /**
     * Triggered when the converter resolves a reflection.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently resolved.
     */
    onResolve(context, reflection) {
        this.tryResolve(context, reflection);
    }
    tryResolve(context, reflection) {
        var _a, _b, _c, _d;
        const requirements = (0, array_1.filterMap)([
            ...((_a = reflection.implementedTypes) !== null && _a !== void 0 ? _a : []),
            ...((_b = reflection.extendedTypes) !== null && _b !== void 0 ? _b : []),
        ], (type) => {
            return type instanceof types_1.ReferenceType ? type.reflection : void 0;
        });
        if (requirements.every((req) => this.resolved.has(req))) {
            this.doResolve(context, reflection);
            this.resolved.add(reflection);
            for (const refl of (_c = this.postponed.get(reflection)) !== null && _c !== void 0 ? _c : []) {
                this.tryResolve(context, refl);
            }
            this.postponed.delete(reflection);
        }
        else {
            for (const req of requirements) {
                const future = (_d = this.postponed.get(req)) !== null && _d !== void 0 ? _d : new Set();
                future.add(reflection);
                this.postponed.set(req, future);
            }
        }
    }
    doResolve(context, reflection) {
        if (reflection.kindOf(index_1.ReflectionKind.Class) &&
            reflection.implementedTypes) {
            reflection.implementedTypes.forEach((type) => {
                if (!(type instanceof types_1.ReferenceType)) {
                    return;
                }
                if (type.reflection &&
                    type.reflection.kindOf(index_1.ReflectionKind.Interface)) {
                    this.analyzeClass(context, reflection, type.reflection);
                }
            });
        }
        if (reflection.kindOf([
            index_1.ReflectionKind.Class,
            index_1.ReflectionKind.Interface,
        ]) &&
            reflection.extendedTypes) {
            this.analyzeInheritance(context, reflection);
        }
    }
    getExtensionInfo(context, reflection) {
        var _a;
        if (!reflection || !reflection.kindOf(index_1.ReflectionKind.Inheritable)) {
            return;
        }
        // Need this because we re-use reflections for type literals.
        if (!reflection.parent ||
            !reflection.parent.kindOf(index_1.ReflectionKind.ClassOrInterface)) {
            return;
        }
        const symbol = context.project.getSymbolFromReflection(reflection.parent);
        if (!symbol) {
            return;
        }
        const declaration = (_a = symbol
            .getDeclarations()) === null || _a === void 0 ? void 0 : _a.find((n) => ts.isClassDeclaration(n) || ts.isInterfaceDeclaration(n));
        if (!declaration) {
            return;
        }
        return { symbol, declaration };
    }
    onSignature(context, reflection) {
        this.onDeclaration(context, reflection.parent);
    }
    /**
     * Responsible for setting the {@link DeclarationReflection.inheritedFrom},
     * {@link DeclarationReflection.overwrites}, and {@link DeclarationReflection.implementationOf}
     * properties on the provided reflection temporarily, these links will be replaced
     * during the resolve step with links which actually point to the right place.
     */
    onDeclaration(context, reflection) {
        var _a, _b, _c, _d, _e;
        const info = this.getExtensionInfo(context, reflection);
        if (!info) {
            return;
        }
        if (reflection.kind === index_1.ReflectionKind.Constructor) {
            const ctor = info.declaration.members.find(ts.isConstructorDeclaration);
            constructorInheritance(context, reflection, info.declaration, ctor);
            return;
        }
        const childType = reflection.flags.isStatic
            ? context.checker.getTypeOfSymbolAtLocation(info.symbol, info.declaration)
            : context.checker.getDeclaredTypeOfSymbol(info.symbol);
        const property = findProperty(reflection, childType);
        if (!property) {
            // We're probably broken... but I don't think this should be fatal.
            context.logger.warn(`Failed to retrieve${reflection.flags.isStatic ? " static" : ""} member "${(_a = reflection.escapedName) !== null && _a !== void 0 ? _a : reflection.name}" of "${(_b = reflection.parent) === null || _b === void 0 ? void 0 : _b.name}" for inheritance analysis. Please report a bug.`);
            return;
        }
        // Need to check both extends and implements clauses.
        out: for (const clause of (_c = info.declaration.heritageClauses) !== null && _c !== void 0 ? _c : []) {
            // No point checking implemented types for static members, they won't exist.
            if (reflection.flags.isStatic &&
                clause.token === ts.SyntaxKind.ImplementsKeyword) {
                continue;
            }
            for (const expr of clause.types) {
                const parentType = context.checker.getTypeAtLocation(reflection.flags.isStatic ? expr.expression : expr);
                const parentProperty = findProperty(reflection, parentType);
                if (parentProperty) {
                    const isInherit = (_e = (_d = property
                        .getDeclarations()) === null || _d === void 0 ? void 0 : _d.some((d) => d.parent !== info.declaration)) !== null && _e !== void 0 ? _e : true;
                    createLink(context, reflection, clause, expr, parentProperty, isInherit);
                    // Can't always break because we need to also set `implementationOf` if we
                    // inherit from a base class and also implement an interface.
                    if (clause.token === ts.SyntaxKind.ImplementsKeyword) {
                        break out;
                    }
                }
            }
        }
    }
};
ImplementsPlugin = __decorate([
    (0, components_1.Component)({ name: "implements" })
], ImplementsPlugin);
exports.ImplementsPlugin = ImplementsPlugin;
function constructorInheritance(context, reflection, childDecl, constructorDecl) {
    var _a, _b, _c, _d;
    const extendsClause = (_a = childDecl.heritageClauses) === null || _a === void 0 ? void 0 : _a.find((cl) => cl.token === ts.SyntaxKind.ExtendsKeyword);
    if (!extendsClause)
        return;
    const name = `${extendsClause.types[0].getText()}.constructor`;
    const key = constructorDecl ? "overwrites" : "inheritedFrom";
    (_b = reflection[key]) !== null && _b !== void 0 ? _b : (reflection[key] = types_1.ReferenceType.createBrokenReference(name, context.project));
    for (const sig of (_c = reflection.signatures) !== null && _c !== void 0 ? _c : []) {
        (_d = sig[key]) !== null && _d !== void 0 ? _d : (sig[key] = types_1.ReferenceType.createBrokenReference(name, context.project));
    }
}
function findProperty(reflection, parent) {
    return parent.getProperties().find((prop) => {
        return reflection.escapedName
            ? prop.escapedName === reflection.escapedName
            : prop.name === reflection.escapedName;
    });
}
function createLink(context, reflection, clause, expr, symbol, isOverwrite) {
    var _a;
    const project = context.project;
    const name = `${expr.expression.getText()}.${symbol.name}`;
    link(reflection);
    link(reflection.getSignature);
    link(reflection.setSignature);
    link(reflection.indexSignature);
    for (const sig of (_a = reflection.signatures) !== null && _a !== void 0 ? _a : []) {
        link(sig);
    }
    // Intentionally create broken links here. These will be replaced with real links during
    // resolution if we can do so.
    function link(target) {
        var _a, _b, _c;
        if (!target)
            return;
        if (clause.token === ts.SyntaxKind.ImplementsKeyword) {
            (_a = target.implementationOf) !== null && _a !== void 0 ? _a : (target.implementationOf = types_1.ReferenceType.createBrokenReference(name, project));
            return;
        }
        if (isOverwrite) {
            (_b = target.inheritedFrom) !== null && _b !== void 0 ? _b : (target.inheritedFrom = types_1.ReferenceType.createBrokenReference(name, project));
        }
        else {
            (_c = target.overwrites) !== null && _c !== void 0 ? _c : (target.overwrites = types_1.ReferenceType.createBrokenReference(name, project));
        }
    }
}

}, function(modId) { var map = {"../../models/reflections/index":1654179213612,"../../models/types":1654179213615,"../../utils/array":1654179213620,"../components":1654179213654,"../converter":1654179213652,"../utils/reflections":1654179213660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213676, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagePlugin = void 0;
const Path = require("path");
const FS = require("fs");
const components_1 = require("../components");
const converter_1 = require("../converter");
const utils_1 = require("../../utils");
const fs_1 = require("../../utils/fs");
const paths_1 = require("../../utils/paths");
/**
 * A handler that tries to find the package.json and readme.md files of the
 * current project.
 */
let PackagePlugin = class PackagePlugin extends components_1.ConverterComponent {
    /**
     * Create a new PackageHandler instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_BEGIN]: this.onBegin,
            [converter_1.Converter.EVENT_RESOLVE_BEGIN]: this.onBeginResolve,
            [converter_1.Converter.EVENT_END]: () => {
                delete this.readmeFile;
                delete this.packageFile;
            },
        });
    }
    /**
     * Triggered when the converter begins converting a project.
     */
    onBegin(_context) {
        this.readmeFile = undefined;
        this.packageFile = undefined;
        // Path will be resolved already. This is kind of ugly, but...
        const noReadmeFile = this.readme.endsWith("none");
        if (!noReadmeFile && this.readme) {
            if (FS.existsSync(this.readme)) {
                this.readmeFile = this.readme;
            }
        }
        const packageAndReadmeFound = () => (noReadmeFile || this.readmeFile) && this.packageFile;
        const reachedTopDirectory = (dirName) => dirName === Path.resolve(Path.join(dirName, ".."));
        let dirName = Path.resolve((0, fs_1.getCommonDirectory)(this.application.options.getValue("entryPoints")));
        this.application.logger.verbose(`Begin readme.md/package.json search at ${(0, paths_1.nicePath)(dirName)}`);
        while (!packageAndReadmeFound() && !reachedTopDirectory(dirName)) {
            FS.readdirSync(dirName).forEach((file) => {
                const lowercaseFileName = file.toLowerCase();
                if (!noReadmeFile &&
                    !this.readmeFile &&
                    lowercaseFileName === "readme.md") {
                    this.readmeFile = Path.join(dirName, file);
                }
                if (!this.packageFile && lowercaseFileName === "package.json") {
                    this.packageFile = Path.join(dirName, file);
                }
            });
            dirName = Path.resolve(Path.join(dirName, ".."));
        }
    }
    /**
     * Triggered when the converter begins resolving a project.
     *
     * @param context  The context object describing the current state the converter is in.
     */
    onBeginResolve(context) {
        const project = context.project;
        if (this.readmeFile) {
            project.readme = (0, utils_1.readFile)(this.readmeFile);
        }
        if (this.packageFile) {
            project.packageInfo = JSON.parse((0, utils_1.readFile)(this.packageFile));
            if (!project.name) {
                if (!project.packageInfo.name) {
                    context.logger.warn('The --name option was not specified, and package.json does not have a name field. Defaulting project name to "Documentation".');
                    project.name = "Documentation";
                }
                else {
                    project.name = String(project.packageInfo.name);
                }
            }
            if (this.includeVersion) {
                if (project.packageInfo.version) {
                    project.name = `${project.name} - v${project.packageInfo.version}`;
                }
                else {
                    context.logger.warn("--includeVersion was specified, but package.json does not specify a version.");
                }
            }
        }
        else {
            if (!project.name) {
                context.logger.warn('The --name option was not specified, and no package.json was found. Defaulting project name to "Documentation".');
                project.name = "Documentation";
            }
            if (this.includeVersion) {
                context.logger.warn("--includeVersion was specified, but no package.json was found. Not adding package version to the documentation.");
            }
        }
    }
};
__decorate([
    (0, utils_1.BindOption)("readme")
], PackagePlugin.prototype, "readme", void 0);
__decorate([
    (0, utils_1.BindOption)("includeVersion")
], PackagePlugin.prototype, "includeVersion", void 0);
PackagePlugin = __decorate([
    (0, components_1.Component)({ name: "package" })
], PackagePlugin);
exports.PackagePlugin = PackagePlugin;

}, function(modId) { var map = {"../components":1654179213654,"../converter":1654179213652,"../../utils":1654179213624,"../../utils/fs":1654179213610,"../../utils/paths":1654179213665}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213677, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SourcePlugin = void 0;
const Path = require("path");
const ts = require("typescript");
const index_1 = require("../../models/reflections/index");
const index_2 = require("../../models/sources/index");
const components_1 = require("../components");
const converter_1 = require("../converter");
const utils_1 = require("../../utils");
const nodes_1 = require("../utils/nodes");
const fs_1 = require("../../utils/fs");
const path_1 = require("path");
const assert = require("assert");
/**
 * A handler that attaches source file information to reflections.
 */
let SourcePlugin = class SourcePlugin extends components_1.ConverterComponent {
    constructor() {
        super(...arguments);
        /**
         * A map of all generated {@link SourceFile} instances.
         */
        this.fileMappings = {};
        /**
         * All file names to find the base path from.
         */
        this.fileNames = new Set();
    }
    /**
     * Create a new SourceHandler instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_END]: this.onEnd,
            [converter_1.Converter.EVENT_CREATE_DECLARATION]: this.onDeclaration,
            [converter_1.Converter.EVENT_CREATE_SIGNATURE]: this.onDeclaration,
            [converter_1.Converter.EVENT_RESOLVE_BEGIN]: this.onBeginResolve,
            [converter_1.Converter.EVENT_RESOLVE]: this.onResolve,
            [converter_1.Converter.EVENT_RESOLVE_END]: this.onEndResolve,
        });
    }
    getSourceFile(fileName, project) {
        if (!this.fileMappings[fileName]) {
            const file = new index_2.SourceFile(fileName);
            this.fileMappings[fileName] = file;
            project.files.push(file);
        }
        return this.fileMappings[fileName];
    }
    onEnd() {
        this.fileMappings = {};
        this.fileNames.clear();
        this.basePath = void 0;
    }
    /**
     * Triggered when the converter has created a declaration reflection.
     *
     * Attach the current source file to the {@link DeclarationReflection.sources} array.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently processed.
     * @param node  The node that is currently processed if available.
     */
    onDeclaration(context, reflection, node) {
        if (!node || this.disableSources) {
            return;
        }
        const sourceFile = node.getSourceFile();
        const fileName = sourceFile.fileName;
        this.fileNames.add(fileName);
        const file = this.getSourceFile(fileName, context.project);
        let position;
        if ((0, nodes_1.isNamedNode)(node)) {
            position = ts.getLineAndCharacterOfPosition(sourceFile, node.name.getStart());
        }
        else {
            position = ts.getLineAndCharacterOfPosition(sourceFile, node.getStart());
        }
        if (reflection instanceof index_1.DeclarationReflection) {
            file.reflections.push(reflection);
        }
        if (!reflection.sources) {
            reflection.sources = [];
        }
        reflection.sources.push({
            file: file,
            fileName: fileName,
            line: position.line + 1,
            character: position.character,
        });
    }
    /**
     * Triggered when the converter begins resolving a project.
     *
     * @param context  The context object describing the current state the converter is in.
     */
    onBeginResolve(context) {
        this.basePath = (0, fs_1.getCommonDirectory)([...this.fileNames]);
        for (const file of context.project.files) {
            const fileName = (file.fileName = (0, fs_1.normalizePath)((0, path_1.relative)(this.basePath, file.fileName)));
            this.fileMappings[fileName] = file;
        }
    }
    /**
     * Triggered when the converter resolves a reflection.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently resolved.
     */
    onResolve(_context, reflection) {
        var _a;
        assert(this.basePath != null);
        for (const source of (_a = reflection.sources) !== null && _a !== void 0 ? _a : []) {
            source.fileName = (0, fs_1.normalizePath)((0, path_1.relative)(this.basePath, source.fileName));
        }
    }
    /**
     * Triggered when the converter has finished resolving a project.
     *
     * @param context  The context object describing the current state the converter is in.
     */
    onEndResolve(context) {
        const project = context.project;
        const home = project.directory;
        project.files.forEach((file) => {
            const reflections = [];
            file.reflections.forEach((reflection) => {
                reflections.push(reflection);
            });
            let directory = home;
            const path = Path.dirname(file.fileName);
            if (path !== ".") {
                path.split("/").forEach((pathPiece) => {
                    if (!Object.prototype.hasOwnProperty.call(directory.directories, pathPiece)) {
                        directory.directories[pathPiece] = new index_2.SourceDirectory(pathPiece, directory);
                    }
                    directory = directory.directories[pathPiece];
                });
            }
            directory.files.push(file);
            file.parent = directory;
            file.reflections = reflections;
        });
    }
};
__decorate([
    (0, utils_1.BindOption)("disableSources")
], SourcePlugin.prototype, "disableSources", void 0);
SourcePlugin = __decorate([
    (0, components_1.Component)({ name: "source" })
], SourcePlugin);
exports.SourcePlugin = SourcePlugin;

}, function(modId) { var map = {"../../models/reflections/index":1654179213612,"../../models/sources/index":1654179213618,"../components":1654179213654,"../converter":1654179213652,"../../utils":1654179213624,"../utils/nodes":1654179213664,"../../utils/fs":1654179213610}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213678, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypePlugin = void 0;
const index_1 = require("../../models/reflections/index");
const types_1 = require("../../models/types");
const components_1 = require("../components");
const converter_1 = require("../converter");
/**
 * A handler that converts all instances of {@link LateResolvingType} to their renderable equivalents.
 */
let TypePlugin = class TypePlugin extends components_1.ConverterComponent {
    constructor() {
        super(...arguments);
        this.reflections = new Set();
    }
    /**
     * Create a new TypeHandler instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_RESOLVE]: this.onResolve,
            [converter_1.Converter.EVENT_RESOLVE_END]: this.onResolveEnd,
            [converter_1.Converter.EVENT_END]: () => this.reflections.clear(),
        });
    }
    /**
     * Triggered when the converter resolves a reflection.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently resolved.
     */
    onResolve(context, reflection) {
        if (reflection.kindOf(index_1.ReflectionKind.ClassOrInterface)) {
            this.postpone(reflection);
            walk(reflection.implementedTypes, (target) => {
                this.postpone(target);
                if (!target.implementedBy) {
                    target.implementedBy = [];
                }
                target.implementedBy.push(types_1.ReferenceType.createResolvedReference(reflection.name, reflection, context.project));
            });
            walk(reflection.extendedTypes, (target) => {
                this.postpone(target);
                if (!target.extendedBy) {
                    target.extendedBy = [];
                }
                target.extendedBy.push(types_1.ReferenceType.createResolvedReference(reflection.name, reflection, context.project));
            });
        }
        function walk(types, callback) {
            if (!types) {
                return;
            }
            types.forEach((type) => {
                if (!(type instanceof types_1.ReferenceType)) {
                    return;
                }
                if (!type.reflection ||
                    !(type.reflection instanceof index_1.DeclarationReflection)) {
                    return;
                }
                callback(type.reflection);
            });
        }
    }
    postpone(reflection) {
        this.reflections.add(reflection);
    }
    /**
     * Triggered when the converter has finished resolving a project.
     */
    onResolveEnd(context) {
        this.reflections.forEach((reflection) => {
            if (reflection.implementedBy) {
                reflection.implementedBy.sort((a, b) => {
                    if (a.name === b.name) {
                        return 0;
                    }
                    return a.name > b.name ? 1 : -1;
                });
            }
            let root;
            let hierarchy;
            function push(types) {
                const level = { types: types };
                if (hierarchy) {
                    hierarchy.next = level;
                    hierarchy = level;
                }
                else {
                    root = hierarchy = level;
                }
            }
            if (reflection.extendedTypes) {
                push(reflection.extendedTypes);
            }
            push([
                types_1.ReferenceType.createResolvedReference(reflection.name, reflection, context.project),
            ]);
            hierarchy.isTarget = true;
            if (reflection.extendedBy) {
                push(reflection.extendedBy);
            }
            reflection.typeHierarchy = root;
        });
    }
};
TypePlugin = __decorate([
    (0, components_1.Component)({ name: "type" })
], TypePlugin);
exports.TypePlugin = TypePlugin;

}, function(modId) { var map = {"../../models/reflections/index":1654179213612,"../../models/types":1654179213615,"../components":1654179213654,"../converter":1654179213652}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213679, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InheritDocPlugin = void 0;
const models_1 = require("../../models");
const components_1 = require("../components");
const converter_1 = require("../converter");
const reflections_1 = require("../utils/reflections");
const abstract_1 = require("../../models/reflections/abstract");
/**
 * A plugin that handles `inheritDoc` by copying documentation from another API item.
 *
 * What gets copied:
 * - short text
 * - text
 * - `@remarks` block
 * - `@params` block
 * - `@typeParam` block
 * - `@return` block
 */
let InheritDocPlugin = class InheritDocPlugin extends components_1.ConverterComponent {
    /**
     * Create a new InheritDocPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [converter_1.Converter.EVENT_RESOLVE]: this.onResolve,
        }, undefined, -200);
    }
    /**
     * Triggered when the converter resolves a reflection.
     *
     * Traverse through reflection descendant to check for `inheritDoc` tag.
     * If encountered, the parameter of the tag iss used to determine a source reflection
     * that will provide actual comment.
     *
     * @param context  The context object describing the current state the converter is in.
     * @param reflection  The reflection that is currently resolved.
     */
    onResolve(_context, reflection) {
        if (reflection instanceof models_1.ContainerReflection) {
            const descendantsCallback = (item) => {
                var _a, _b, _c, _d, _e;
                item.traverse(descendantsCallback);
                const inheritDoc = (_b = (_a = item.comment) === null || _a === void 0 ? void 0 : _a.getTag("inheritdoc")) === null || _b === void 0 ? void 0 : _b.paramName;
                const source = inheritDoc && reflection.findReflectionByName(inheritDoc);
                let referencedReflection = source;
                if (source instanceof models_1.DeclarationReflection &&
                    item instanceof models_1.SignatureReflection) {
                    const isFunction = source.kindOf(models_1.ReflectionKind.FunctionOrMethod);
                    if (isFunction) {
                        // Assumes that if there are overloads, they are declared in the same order as the parent.
                        // TS doesn't check this, but if a user messes this up then they are almost
                        // guaranteed to run into bugs where they can't call a method on a child class
                        // but if they assign (without a type assertion) that child to a variable of the parent class
                        // then they can call the method.
                        const itemIndex = (_d = (_c = item.parent.signatures) === null || _c === void 0 ? void 0 : _c.indexOf(item)) !== null && _d !== void 0 ? _d : 0;
                        referencedReflection = (_e = source.signatures) === null || _e === void 0 ? void 0 : _e[itemIndex];
                    }
                }
                if (referencedReflection instanceof abstract_1.Reflection) {
                    (0, reflections_1.copyComment)(item, referencedReflection);
                }
                return true;
            };
            reflection.traverse(descendantsCallback);
        }
    }
};
InheritDocPlugin = __decorate([
    (0, components_1.Component)({ name: "inheritDoc" })
], InheritDocPlugin);
exports.InheritDocPlugin = InheritDocPlugin;

}, function(modId) { var map = {"../../models":1654179213611,"../components":1654179213654,"../converter":1654179213652,"../utils/reflections":1654179213660,"../../models/reflections/abstract":1654179213607}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213680, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultThemeRenderContext = exports.DefaultTheme = exports.Theme = exports.Renderer = exports.UrlMapping = exports.MarkdownEvent = exports.RendererEvent = exports.PageEvent = void 0;
var events_1 = require("./events");
Object.defineProperty(exports, "PageEvent", { enumerable: true, get: function () { return events_1.PageEvent; } });
Object.defineProperty(exports, "RendererEvent", { enumerable: true, get: function () { return events_1.RendererEvent; } });
Object.defineProperty(exports, "MarkdownEvent", { enumerable: true, get: function () { return events_1.MarkdownEvent; } });
var UrlMapping_1 = require("./models/UrlMapping");
Object.defineProperty(exports, "UrlMapping", { enumerable: true, get: function () { return UrlMapping_1.UrlMapping; } });
var renderer_1 = require("./renderer");
Object.defineProperty(exports, "Renderer", { enumerable: true, get: function () { return renderer_1.Renderer; } });
var theme_1 = require("./theme");
Object.defineProperty(exports, "Theme", { enumerable: true, get: function () { return theme_1.Theme; } });
var DefaultTheme_1 = require("./themes/default/DefaultTheme");
Object.defineProperty(exports, "DefaultTheme", { enumerable: true, get: function () { return DefaultTheme_1.DefaultTheme; } });
var DefaultThemeRenderContext_1 = require("./themes/default/DefaultThemeRenderContext");
Object.defineProperty(exports, "DefaultThemeRenderContext", { enumerable: true, get: function () { return DefaultThemeRenderContext_1.DefaultThemeRenderContext; } });

}, function(modId) { var map = {"./events":1654179213681,"./models/UrlMapping":1654179213682,"./renderer":1654179213683,"./theme":1654179213685,"./themes/default/DefaultTheme":1654179213684,"./themes/default/DefaultThemeRenderContext":1654179213687}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213681, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownEvent = exports.PageEvent = exports.RendererEvent = void 0;
const Path = require("path");
const events_1 = require("../utils/events");
/**
 * An event emitted by the {@link Renderer} class at the very beginning and
 * ending of the entire rendering process.
 *
 * @see {@link Renderer.EVENT_BEGIN}
 * @see {@link Renderer.EVENT_END}
 */
class RendererEvent extends events_1.Event {
    constructor(name, outputDirectory, project) {
        super(name);
        this.outputDirectory = outputDirectory;
        this.project = project;
    }
    /**
     * Create an {@link PageEvent} event based on this event and the given url mapping.
     *
     * @internal
     * @param mapping  The mapping that defines the generated {@link PageEvent} state.
     * @returns A newly created {@link PageEvent} instance.
     */
    createPageEvent(mapping) {
        const event = new PageEvent(PageEvent.BEGIN);
        event.project = this.project;
        event.url = mapping.url;
        event.model = mapping.model;
        event.template = mapping.template;
        event.filename = Path.join(this.outputDirectory, mapping.url);
        return event;
    }
}
exports.RendererEvent = RendererEvent;
/**
 * Triggered before the renderer starts rendering a project.
 * @event
 */
RendererEvent.BEGIN = "beginRender";
/**
 * Triggered after the renderer has written all documents.
 * @event
 */
RendererEvent.END = "endRender";
/**
 * An event emitted by the {@link Renderer} class before and after the
 * markup of a page is rendered.
 *
 * @see {@link Renderer.EVENT_BEGIN_PAGE}
 * @see {@link Renderer.EVENT_END_PAGE}
 */
class PageEvent extends events_1.Event {
}
exports.PageEvent = PageEvent;
/**
 * Triggered before a document will be rendered.
 * @event
 */
PageEvent.BEGIN = "beginPage";
/**
 * Triggered after a document has been rendered, just before it is written to disc.
 * @event
 */
PageEvent.END = "endPage";
/**
 * An event emitted by the {@link MarkedPlugin} on the {@link Renderer} after a chunk of
 * markdown has been processed. Allows other plugins to manipulate the result.
 *
 * @see {@link MarkedPlugin.EVENT_PARSE_MARKDOWN}
 */
class MarkdownEvent extends events_1.Event {
    constructor(name, originalText, parsedText) {
        super(name);
        this.originalText = originalText;
        this.parsedText = parsedText;
    }
}
exports.MarkdownEvent = MarkdownEvent;
/**
 * Triggered on the renderer when this plugin parses a markdown string.
 * @event
 */
MarkdownEvent.PARSE = "parseMarkdown";

}, function(modId) { var map = {"../utils/events":1654179213606}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213682, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlMapping = void 0;
class UrlMapping {
    constructor(url, model, template) {
        this.url = url;
        this.model = model;
        this.template = template;
    }
}
exports.UrlMapping = UrlMapping;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213683, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
/**
 * Holds all logic used render and output the final documentation.
 *
 * The {@link Renderer} class is the central controller within this namespace. When invoked it creates
 * an instance of {@link Theme} which defines the layout of the documentation and fires a
 * series of {@link RendererEvent} events. Instances of {@link BasePlugin} can listen to these events and
 * alter the generated output.
 */
const fs = require("fs");
const path = require("path");
const events_1 = require("./events");
const fs_1 = require("../utils/fs");
const DefaultTheme_1 = require("./themes/default/DefaultTheme");
const components_1 = require("./components");
const component_1 = require("../utils/component");
const utils_1 = require("../utils");
const highlighter_1 = require("../utils/highlighter");
const models_1 = require("../models");
/**
 * The renderer processes a {@link ProjectReflection} using a {@link Theme} instance and writes
 * the emitted html documents to a output directory. You can specify which theme should be used
 * using the `--theme <name>` command line argument.
 *
 * {@link Renderer} is a subclass of {@link EventDispatcher} and triggers a series of events while
 * a project is being processed. You can listen to these events to control the flow or manipulate
 * the output.
 *
 *  * {@link Renderer.EVENT_BEGIN}<br>
 *    Triggered before the renderer starts rendering a project. The listener receives
 *    an instance of {@link RendererEvent}. By calling {@link RendererEvent.preventDefault} the entire
 *    render process can be canceled.
 *
 *    * {@link Renderer.EVENT_BEGIN_PAGE}<br>
 *      Triggered before a document will be rendered. The listener receives an instance of
 *      {@link PageEvent}. By calling {@link PageEvent.preventDefault} the generation of the
 *      document can be canceled.
 *
 *    * {@link Renderer.EVENT_END_PAGE}<br>
 *      Triggered after a document has been rendered, just before it is written to disc. The
 *      listener receives an instance of {@link PageEvent}. When calling
 *      {@link PageEvent.preventDefault} the the document will not be saved to disc.
 *
 *  * {@link Renderer.EVENT_END}<br>
 *    Triggered after the renderer has written all documents. The listener receives
 *    an instance of {@link RendererEvent}.
 */
let Renderer = class Renderer extends component_1.ChildableComponent {
    constructor() {
        super(...arguments);
        this.themes = new Map([
            ["default", DefaultTheme_1.DefaultTheme],
        ]);
        this.unknownSymbolResolvers = new Map();
        /**
         * Hooks which will be called when rendering pages.
         * Note:
         * - Hooks added during output will be discarded at the end of rendering.
         * - Hooks added during a page render will be discarded at the end of that page's render.
         *
         * See {@link RendererHooks} for a description of each available hook, and when it will be called.
         */
        this.hooks = new utils_1.EventHooks();
    }
    /**
     * Define a new theme that can be used to render output.
     * This API will likely be changing in TypeDoc 0.23.
     * (sorry... changing as soon as it's introduced)
     * As it is, it provides reasonable flexibility, but doesn't give users a sufficiently
     * easy way to overwrite parts of a theme.
     * @param name
     * @param theme
     */
    defineTheme(name, theme) {
        if (this.themes.has(name)) {
            throw new Error(`The theme "${name}" has already been defined.`);
        }
        this.themes.set(name, theme);
    }
    /**
     * Adds a new resolver that the theme can used to try to figure out how to link to a symbol
     * declared by a third-party library which is not included in the documentation.
     * @param packageName the npm package name that this resolver can handle to limit which files it will be tried on.
     *   If the resolver will create links for Node builtin types, it should be set to `@types/node`.
     *   Links for builtin types live in the default lib files under `typescript`.
     * @param resolver a function that will be called to create links for a given symbol name in the registered path.
     *  If the provided name is not contained within the docs, should return `undefined`.
     * @since 0.22.0
     */
    addUnknownSymbolResolver(packageName, resolver) {
        const existing = this.unknownSymbolResolvers.get(packageName);
        if (existing) {
            existing.push(resolver);
        }
        else {
            this.unknownSymbolResolvers.set(packageName, [resolver]);
        }
    }
    /**
     * Marked as internal for now. Using this requires the internal `getSymbol()` method on ReferenceType.
     * Someday that needs to be fixed so that this can be made public. ReferenceTypes really shouldn't store
     * symbols so that we don't need to keep the program around forever.
     * @internal
     */
    attemptExternalResolution(type) {
        if (!type.qualifiedName || !type.package) {
            return;
        }
        const resolvers = this.unknownSymbolResolvers.get(type.package);
        for (const resolver of resolvers || []) {
            const resolved = resolver(type.qualifiedName);
            if (resolved)
                return resolved;
        }
    }
    /**
     * Render the given project reflection to the specified output directory.
     *
     * @param project  The project that should be rendered.
     * @param outputDirectory  The path of the directory the documentation should be rendered to.
     */
    async render(project, outputDirectory) {
        const momento = this.hooks.saveMomento();
        const start = Date.now();
        await (0, highlighter_1.loadHighlighter)(this.lightTheme, this.darkTheme);
        this.application.logger.verbose(`Renderer: Loading highlighter took ${Date.now() - start}ms`);
        if (!this.prepareTheme() ||
            !(await this.prepareOutputDirectory(outputDirectory))) {
            return;
        }
        const output = new events_1.RendererEvent(events_1.RendererEvent.BEGIN, outputDirectory, project);
        output.urls = this.theme.getUrls(project);
        this.trigger(output);
        if (!output.isDefaultPrevented) {
            output.urls.forEach((mapping) => {
                this.renderDocument(output.createPageEvent(mapping));
            });
            this.trigger(events_1.RendererEvent.END, output);
        }
        this.theme = void 0;
        this.hooks.restoreMomento(momento);
    }
    /**
     * Render a single page.
     *
     * @param page An event describing the current page.
     * @return TRUE if the page has been saved to disc, otherwise FALSE.
     */
    renderDocument(page) {
        const momento = this.hooks.saveMomento();
        this.trigger(events_1.PageEvent.BEGIN, page);
        if (page.isDefaultPrevented) {
            this.hooks.restoreMomento(momento);
            return false;
        }
        if (page.model instanceof models_1.Reflection) {
            page.contents = this.theme.render(page);
        }
        else {
            throw new Error("Should be unreachable");
        }
        this.trigger(events_1.PageEvent.END, page);
        this.hooks.restoreMomento(momento);
        if (page.isDefaultPrevented) {
            return false;
        }
        try {
            (0, fs_1.writeFileSync)(page.filename, page.contents);
        }
        catch (error) {
            this.application.logger.error(`Could not write ${page.filename}`);
            return false;
        }
        return true;
    }
    /**
     * Ensure that a theme has been setup.
     *
     * If a the user has set a theme we try to find and load it. If no theme has
     * been specified we load the default theme.
     *
     * @returns TRUE if a theme has been setup, otherwise FALSE.
     */
    prepareTheme() {
        if (!this.theme) {
            const ctor = this.themes.get(this.themeName);
            if (!ctor) {
                this.application.logger.error(`The theme '${this.themeName}' is not defined. The available themes are: ${[
                    ...this.themes.keys(),
                ].join(", ")}`);
                return false;
            }
            else {
                this.theme = new ctor(this);
            }
        }
        return true;
    }
    /**
     * Prepare the output directory. If the directory does not exist, it will be
     * created. If the directory exists, it will be emptied.
     *
     * @param directory  The path to the directory that should be prepared.
     * @returns TRUE if the directory could be prepared, otherwise FALSE.
     */
    async prepareOutputDirectory(directory) {
        if (this.cleanOutputDir) {
            try {
                await (0, fs_1.remove)(directory);
            }
            catch (error) {
                this.application.logger.warn("Could not empty the output directory.");
                return false;
            }
        }
        try {
            fs.mkdirSync(directory, { recursive: true });
        }
        catch (error) {
            this.application.logger.error(`Could not create output directory ${directory}.`);
            return false;
        }
        if (this.githubPages) {
            try {
                const text = "TypeDoc added this file to prevent GitHub Pages from " +
                    "using Jekyll. You can turn off this behavior by setting " +
                    "the `githubPages` option to false.";
                fs.writeFileSync(path.join(directory, ".nojekyll"), text);
            }
            catch (error) {
                this.application.logger.warn("Could not create .nojekyll file.");
                return false;
            }
        }
        if (this.cname) {
            fs.writeFileSync(path.join(directory, "CNAME"), this.cname);
        }
        return true;
    }
};
/** @event */
Renderer.EVENT_BEGIN_PAGE = events_1.PageEvent.BEGIN;
/** @event */
Renderer.EVENT_END_PAGE = events_1.PageEvent.END;
/** @event */
Renderer.EVENT_BEGIN = events_1.RendererEvent.BEGIN;
/** @event */
Renderer.EVENT_END = events_1.RendererEvent.END;
__decorate([
    (0, utils_1.BindOption)("theme")
], Renderer.prototype, "themeName", void 0);
__decorate([
    (0, utils_1.BindOption)("cleanOutputDir")
], Renderer.prototype, "cleanOutputDir", void 0);
__decorate([
    (0, utils_1.BindOption)("cname")
], Renderer.prototype, "cname", void 0);
__decorate([
    (0, utils_1.BindOption)("gaID")
], Renderer.prototype, "gaID", void 0);
__decorate([
    (0, utils_1.BindOption)("gaSite")
], Renderer.prototype, "gaSite", void 0);
__decorate([
    (0, utils_1.BindOption)("githubPages")
], Renderer.prototype, "githubPages", void 0);
__decorate([
    (0, utils_1.BindOption)("hideGenerator")
], Renderer.prototype, "hideGenerator", void 0);
__decorate([
    (0, utils_1.BindOption)("lightHighlightTheme")
], Renderer.prototype, "lightTheme", void 0);
__decorate([
    (0, utils_1.BindOption)("darkHighlightTheme")
], Renderer.prototype, "darkTheme", void 0);
Renderer = __decorate([
    (0, component_1.Component)({ name: "renderer", internal: true, childClass: components_1.RendererComponent })
], Renderer);
exports.Renderer = Renderer;
// HACK: THIS HAS TO STAY DOWN HERE
// if you try to move it up to the top of the file, then you'll run into stuff being used before it has been defined.
require("./plugins");

}, function(modId) { var map = {"./events":1654179213681,"../utils/fs":1654179213610,"./themes/default/DefaultTheme":1654179213684,"./components":1654179213686,"../utils/component":1654179213625,"../utils":1654179213624,"../utils/highlighter":1654179213715,"../models":1654179213611,"./plugins":1654179213716}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213684, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultTheme = void 0;
const theme_1 = require("../../theme");
const index_1 = require("../../../models/reflections/index");
const UrlMapping_1 = require("../../models/UrlMapping");
const events_1 = require("../../events");
const DefaultThemeRenderContext_1 = require("./DefaultThemeRenderContext");
const utils_1 = require("../../../utils");
/**
 * Default theme implementation of TypeDoc. If a theme does not provide a custom
 * {@link Theme} implementation, this theme class will be used.
 */
class DefaultTheme extends theme_1.Theme {
    /**
     * Create a new DefaultTheme instance.
     *
     * @param renderer  The renderer this theme is attached to.
     * @param basePath  The base path of this theme.
     */
    constructor(renderer) {
        super(renderer);
        this.reflectionTemplate = (pageEvent) => {
            return this.getRenderContext(pageEvent).reflectionTemplate(pageEvent);
        };
        this.indexTemplate = (pageEvent) => {
            return this.getRenderContext(pageEvent).indexTemplate(pageEvent);
        };
        this.defaultLayoutTemplate = (pageEvent) => {
            return this.getRenderContext(pageEvent).defaultLayout(pageEvent);
        };
        /**
         * Mappings of reflections kinds to templates used by this theme.
         */
        this.mappings = [
            {
                kind: [index_1.ReflectionKind.Class],
                isLeaf: false,
                directory: "classes",
                template: this.reflectionTemplate,
            },
            {
                kind: [index_1.ReflectionKind.Interface],
                isLeaf: false,
                directory: "interfaces",
                template: this.reflectionTemplate,
            },
            {
                kind: [index_1.ReflectionKind.Enum],
                isLeaf: false,
                directory: "enums",
                template: this.reflectionTemplate,
            },
            {
                kind: [index_1.ReflectionKind.Namespace, index_1.ReflectionKind.Module],
                isLeaf: false,
                directory: "modules",
                template: this.reflectionTemplate,
            },
        ];
        this.markedPlugin = renderer.getComponent("marked");
        this.listenTo(renderer, events_1.RendererEvent.BEGIN, this.onRendererBegin, 1024);
    }
    getRenderContext(_pageEvent) {
        if (!this._renderContext) {
            this._renderContext = new DefaultThemeRenderContext_1.DefaultThemeRenderContext(this, this.application.options);
        }
        return this._renderContext;
    }
    /**
     * Map the models of the given project to the desired output files.
     *
     * @param project  The project whose urls should be generated.
     * @returns        A list of {@link UrlMapping} instances defining which models
     *                 should be rendered to which files.
     */
    getUrls(project) {
        var _a;
        const urls = [];
        if (false == hasReadme(this.application.options.getValue("readme"))) {
            project.url = "index.html";
            urls.push(new UrlMapping_1.UrlMapping("index.html", project, this.reflectionTemplate));
        }
        else {
            project.url = "modules.html";
            urls.push(new UrlMapping_1.UrlMapping("modules.html", project, this.reflectionTemplate));
            urls.push(new UrlMapping_1.UrlMapping("index.html", project, this.indexTemplate));
        }
        (_a = project.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
            if (child instanceof index_1.DeclarationReflection) {
                this.buildUrls(child, urls);
            }
        });
        return urls;
    }
    /**
     * Triggered before the renderer starts rendering a project.
     *
     * @param event  An event object describing the current render operation.
     */
    onRendererBegin(event) {
        if (event.project.groups) {
            event.project.groups.forEach(DefaultTheme.applyGroupClasses);
        }
        for (const id in event.project.reflections) {
            const reflection = event.project.reflections[id];
            if (reflection instanceof index_1.DeclarationReflection) {
                DefaultTheme.applyReflectionClasses(reflection);
            }
            if (reflection instanceof index_1.ContainerReflection && reflection.groups) {
                reflection.groups.forEach(DefaultTheme.applyGroupClasses);
            }
        }
    }
    /**
     * Return a url for the given reflection.
     *
     * @param reflection  The reflection the url should be generated for.
     * @param relative    The parent reflection the url generation should stop on.
     * @param separator   The separator used to generate the url.
     * @returns           The generated url.
     */
    static getUrl(reflection, relative, separator = ".") {
        let url = reflection.getAlias();
        if (reflection.parent && reflection.parent !== relative && !(reflection.parent instanceof index_1.ProjectReflection)) {
            url = DefaultTheme.getUrl(reflection.parent, relative, separator) + separator + url;
        }
        return url;
    }
    /**
     * Return the template mapping for the given reflection.
     *
     * @param reflection  The reflection whose mapping should be resolved.
     * @returns           The found mapping or undefined if no mapping could be found.
     */
    getMapping(reflection) {
        return this.mappings.find((mapping) => reflection.kindOf(mapping.kind));
    }
    /**
     * Build the url for the the given reflection and all of its children.
     *
     * @param reflection  The reflection the url should be created for.
     * @param urls        The array the url should be appended to.
     * @returns           The altered urls array.
     */
    buildUrls(reflection, urls) {
        const mapping = this.getMapping(reflection);
        if (mapping) {
            if (!reflection.url || !DefaultTheme.URL_PREFIX.test(reflection.url)) {
                const url = [mapping.directory, DefaultTheme.getUrl(reflection) + ".html"].join("/");
                urls.push(new UrlMapping_1.UrlMapping(url, reflection, mapping.template));
                reflection.url = url;
                reflection.hasOwnDocument = true;
            }
            for (const child of reflection.children || []) {
                if (mapping.isLeaf) {
                    DefaultTheme.applyAnchorUrl(child, reflection);
                }
                else {
                    this.buildUrls(child, urls);
                }
            }
        }
        else if (reflection.parent) {
            DefaultTheme.applyAnchorUrl(reflection, reflection.parent);
        }
        return urls;
    }
    render(page) {
        const templateOutput = this.defaultLayoutTemplate(page);
        return "<!DOCTYPE html>" + utils_1.JSX.renderElement(templateOutput);
    }
    /**
     * Generate an anchor url for the given reflection and all of its children.
     *
     * @param reflection  The reflection an anchor url should be created for.
     * @param container   The nearest reflection having an own document.
     */
    static applyAnchorUrl(reflection, container) {
        if (!reflection.url || !DefaultTheme.URL_PREFIX.test(reflection.url)) {
            const anchor = DefaultTheme.getUrl(reflection, container, ".");
            reflection.url = container.url + "#" + anchor;
            reflection.anchor = anchor;
            reflection.hasOwnDocument = false;
        }
        reflection.traverse((child) => {
            if (child instanceof index_1.DeclarationReflection) {
                DefaultTheme.applyAnchorUrl(child, container);
            }
            return true;
        });
    }
    /**
     * Generate the css classes for the given reflection and apply them to the
     * {@link DeclarationReflection.cssClasses} property.
     *
     * @param reflection  The reflection whose cssClasses property should be generated.
     */
    static applyReflectionClasses(reflection) {
        const classes = [];
        let kind;
        if (reflection.kind === index_1.ReflectionKind.Accessor) {
            if (!reflection.getSignature) {
                classes.push("tsd-kind-set-signature");
            }
            else if (!reflection.setSignature) {
                classes.push("tsd-kind-get-signature");
            }
            else {
                classes.push("tsd-kind-accessor");
            }
        }
        else {
            kind = index_1.ReflectionKind[reflection.kind];
            classes.push(DefaultTheme.toStyleClass("tsd-kind-" + kind));
        }
        if (reflection.parent && reflection.parent instanceof index_1.DeclarationReflection) {
            kind = index_1.ReflectionKind[reflection.parent.kind];
            classes.push(DefaultTheme.toStyleClass(`tsd-parent-kind-${kind}`));
        }
        let hasTypeParameters = !!reflection.typeParameters;
        reflection.getAllSignatures().forEach((signature) => {
            hasTypeParameters = hasTypeParameters || !!signature.typeParameters;
        });
        if (hasTypeParameters) {
            classes.push("tsd-has-type-parameter");
        }
        if (reflection.overwrites) {
            classes.push("tsd-is-overwrite");
        }
        if (reflection.inheritedFrom) {
            classes.push("tsd-is-inherited");
        }
        if (reflection.flags.isPrivate) {
            classes.push("tsd-is-private");
        }
        if (reflection.flags.isProtected) {
            classes.push("tsd-is-protected");
        }
        if (reflection.flags.isStatic) {
            classes.push("tsd-is-static");
        }
        if (reflection.flags.isExternal) {
            classes.push("tsd-is-external");
        }
        reflection.cssClasses = classes.join(" ");
    }
    /**
     * Generate the css classes for the given reflection group and apply them to the
     * {@link ReflectionGroup.cssClasses} property.
     *
     * @param group  The reflection group whose cssClasses property should be generated.
     */
    static applyGroupClasses(group) {
        const classes = [];
        if (group.allChildrenAreInherited) {
            classes.push("tsd-is-inherited");
        }
        if (group.allChildrenArePrivate) {
            classes.push("tsd-is-private");
        }
        if (group.allChildrenAreProtectedOrPrivate) {
            classes.push("tsd-is-private-protected");
        }
        if (group.allChildrenAreExternal) {
            classes.push("tsd-is-external");
        }
        group.cssClasses = classes.join(" ");
    }
    /**
     * Transform a space separated string into a string suitable to be used as a
     * css class, e.g. "constructor method" > "Constructor-method".
     */
    static toStyleClass(str) {
        return str.replace(/(\w)([A-Z])/g, (_m, m1, m2) => m1 + "-" + m2).toLowerCase();
    }
}
exports.DefaultTheme = DefaultTheme;
DefaultTheme.URL_PREFIX = /^(http|ftp)s?:\/\//;
function hasReadme(readme) {
    return !readme.endsWith("none");
}

}, function(modId) { var map = {"../../theme":1654179213685,"../../../models/reflections/index":1654179213612,"../../models/UrlMapping":1654179213682,"../../events":1654179213681,"./DefaultThemeRenderContext":1654179213687,"../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213685, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const components_1 = require("./components");
const component_1 = require("../utils/component");
/**
 * Base class of all themes.
 *
 * The theme class controls which files will be created through the {@link Theme.getUrls}
 * function. It returns an array of {@link UrlMapping} instances defining the target files, models
 * and templates to use. Additionally themes can subscribe to the events emitted by
 * {@link Renderer} to control and manipulate the output process.
 */
let Theme = class Theme extends components_1.RendererComponent {
    /**
     * Create a new BaseTheme instance.
     *
     * @param renderer  The renderer this theme is attached to.
     */
    constructor(renderer) {
        super(renderer);
    }
};
Theme = __decorate([
    (0, component_1.Component)({ name: "theme", internal: true })
], Theme);
exports.Theme = Theme;

}, function(modId) { var map = {"./components":1654179213686,"../utils/component":1654179213625}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213686, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextAwareRendererComponent = exports.RendererComponent = exports.Component = void 0;
const Path = require("path");
const component_1 = require("../utils/component");
Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return component_1.Component; } });
const index_1 = require("../models/reflections/index");
const events_1 = require("./events");
class RendererComponent extends component_1.AbstractComponent {
}
exports.RendererComponent = RendererComponent;
/**
 * A plugin for the renderer that reads the current render context.
 */
class ContextAwareRendererComponent extends RendererComponent {
    constructor() {
        super(...arguments);
        /**
         * Regular expression to test if a string looks like an external url.
         */
        this.urlPrefix = /^(http|ftp)s?:\/\//;
    }
    /**
     * Create a new ContextAwareRendererPlugin instance.
     *
     * @param renderer  The renderer this plugin should be attached to.
     */
    initialize() {
        this.listenTo(this.owner, {
            [events_1.RendererEvent.BEGIN]: this.onBeginRenderer,
            [events_1.PageEvent.BEGIN]: this.onBeginPage,
        });
    }
    /**
     * Transform the given absolute path into a relative path.
     *
     * @param absolute  The absolute path to transform.
     * @returns A path relative to the document currently processed.
     */
    getRelativeUrl(absolute) {
        if (this.urlPrefix.test(absolute)) {
            return absolute;
        }
        else {
            const relative = Path.relative(Path.dirname(this.location), Path.dirname(absolute));
            return Path.join(relative, Path.basename(absolute)).replace(/\\/g, "/");
        }
    }
    /**
     * Triggered before the renderer starts rendering a project.
     *
     * @param event  An event object describing the current render operation.
     */
    onBeginRenderer(event) {
        this.project = event.project;
    }
    /**
     * Triggered before a document will be rendered.
     *
     * @param page  An event object describing the current render operation.
     */
    onBeginPage(page) {
        this.location = page.url;
        this.reflection =
            page.model instanceof index_1.DeclarationReflection
                ? page.model
                : undefined;
    }
}
exports.ContextAwareRendererComponent = ContextAwareRendererComponent;

}, function(modId) { var map = {"../utils/component":1654179213625,"../models/reflections/index":1654179213612,"./events":1654179213681}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213687, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultThemeRenderContext = void 0;
const default_1 = require("./layouts/default");
const partials_1 = require("./partials");
const analytics_1 = require("./partials/analytics");
const breadcrumb_1 = require("./partials/breadcrumb");
const comment_1 = require("./partials/comment");
const footer_1 = require("./partials/footer");
const header_1 = require("./partials/header");
const hierarchy_1 = require("./partials/hierarchy");
const member_1 = require("./partials/member");
const member_declaration_1 = require("./partials/member.declaration");
const member_getterSetter_1 = require("./partials/member.getterSetter");
const member_reference_1 = require("./partials/member.reference");
const member_signature_body_1 = require("./partials/member.signature.body");
const member_signature_title_1 = require("./partials/member.signature.title");
const member_signatures_1 = require("./partials/member.signatures");
const member_sources_1 = require("./partials/member.sources");
const members_1 = require("./partials/members");
const members_group_1 = require("./partials/members.group");
const navigation_1 = require("./partials/navigation");
const parameter_1 = require("./partials/parameter");
const type_1 = require("./partials/type");
const typeAndParent_1 = require("./partials/typeAndParent");
const typeParameters_1 = require("./partials/typeParameters");
const templates_1 = require("./templates");
const reflection_1 = require("./templates/reflection");
function bind(fn, first) {
    return (...r) => fn(first, ...r);
}
class DefaultThemeRenderContext {
    constructor(theme, options) {
        this.theme = theme;
        this.hook = (name) => this.theme.owner.hooks.emit(name, this);
        /** Avoid this in favor of urlTo if possible */
        this.relativeURL = (url) => {
            return url ? this.theme.markedPlugin.getRelativeUrl(url) : url;
        };
        this.urlTo = (reflection) => this.relativeURL(reflection.url);
        this.markdown = (md) => {
            return md ? this.theme.markedPlugin.parseMarkdown(md) : "";
        };
        this.attemptExternalResolution = (type) => {
            return this.theme.owner.attemptExternalResolution(type);
        };
        this.reflectionTemplate = bind(reflection_1.reflectionTemplate, this);
        this.indexTemplate = bind(templates_1.indexTemplate, this);
        this.defaultLayout = bind(default_1.defaultLayout, this);
        this.analytics = bind(analytics_1.analytics, this);
        this.breadcrumb = bind(breadcrumb_1.breadcrumb, this);
        this.comment = bind(comment_1.comment, this);
        this.footer = bind(footer_1.footer, this);
        this.header = bind(header_1.header, this);
        this.hierarchy = bind(hierarchy_1.hierarchy, this);
        this.index = bind(partials_1.index, this);
        this.member = bind(member_1.member, this);
        this.memberDeclaration = bind(member_declaration_1.memberDeclaration, this);
        this.memberGetterSetter = bind(member_getterSetter_1.memberGetterSetter, this);
        this.memberReference = bind(member_reference_1.memberReference, this);
        this.memberSignatureBody = bind(member_signature_body_1.memberSignatureBody, this);
        this.memberSignatureTitle = bind(member_signature_title_1.memberSignatureTitle, this);
        this.memberSignatures = bind(member_signatures_1.memberSignatures, this);
        this.memberSources = bind(member_sources_1.memberSources, this);
        this.members = bind(members_1.members, this);
        this.membersGroup = bind(members_group_1.membersGroup, this);
        this.navigation = bind(navigation_1.navigation, this);
        this.parameter = bind(parameter_1.parameter, this);
        this.type = bind(type_1.type, this);
        this.typeAndParent = bind(typeAndParent_1.typeAndParent, this);
        this.typeParameters = bind(typeParameters_1.typeParameters, this);
        this.options = options;
    }
}
exports.DefaultThemeRenderContext = DefaultThemeRenderContext;

}, function(modId) { var map = {"./layouts/default":1654179213688,"./partials":1654179213689,"./partials/analytics":1654179213691,"./partials/breadcrumb":1654179213692,"./partials/comment":1654179213693,"./partials/footer":1654179213694,"./partials/header":1654179213695,"./partials/hierarchy":1654179213696,"./partials/member":1654179213697,"./partials/member.declaration":1654179213699,"./partials/member.getterSetter":1654179213700,"./partials/member.reference":1654179213701,"./partials/member.signature.body":1654179213702,"./partials/member.signature.title":1654179213703,"./partials/member.signatures":1654179213704,"./partials/member.sources":1654179213705,"./partials/members":1654179213706,"./partials/members.group":1654179213707,"./partials/navigation":1654179213708,"./partials/parameter":1654179213709,"./partials/type":1654179213710,"./partials/typeAndParent":1654179213711,"./partials/typeParameters":1654179213712,"./templates":1654179213713,"./templates/reflection":1654179213714}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213688, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLayout = void 0;
const utils_1 = require("../../../../utils");
const defaultLayout = (context, props) => (utils_1.JSX.createElement("html", { class: "default" },
    utils_1.JSX.createElement("head", null,
        utils_1.JSX.createElement("meta", { charSet: "utf-8" }),
        context.hook("head.begin"),
        utils_1.JSX.createElement("meta", { "http-equiv": "x-ua-compatible", content: "IE=edge" }),
        utils_1.JSX.createElement("title", null, props.model.name === props.project.name
            ? props.project.name
            : `${props.model.name} | ${props.project.name}`),
        utils_1.JSX.createElement("meta", { name: "description", content: "Documentation for " + props.project.name }),
        utils_1.JSX.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        utils_1.JSX.createElement("link", { rel: "stylesheet", href: context.relativeURL("assets/style.css") }),
        utils_1.JSX.createElement("link", { rel: "stylesheet", href: context.relativeURL("assets/highlight.css") }),
        context.options.getValue("customCss") && (utils_1.JSX.createElement("link", { rel: "stylesheet", href: context.relativeURL("assets/custom.css") })),
        utils_1.JSX.createElement("script", { async: true, src: context.relativeURL("assets/search.js"), id: "search-script" }),
        context.hook("head.end")),
    utils_1.JSX.createElement("body", null,
        context.hook("body.begin"),
        utils_1.JSX.createElement("script", null,
            utils_1.JSX.createElement(utils_1.Raw, { html: 'document.body.classList.add(localStorage.getItem("tsd-theme") || "os")' })),
        context.header(props),
        utils_1.JSX.createElement("div", { class: "container container-main" },
            utils_1.JSX.createElement("div", { class: "row" },
                utils_1.JSX.createElement("div", { class: "col-8 col-content" },
                    context.hook("content.begin"),
                    props.template(props),
                    context.hook("content.end")),
                utils_1.JSX.createElement("div", { class: "col-4 col-menu menu-sticky-wrap menu-highlight" },
                    context.hook("navigation.begin"),
                    context.navigation(props),
                    context.hook("navigation.end")))),
        context.footer(props),
        utils_1.JSX.createElement("div", { class: "overlay" }),
        utils_1.JSX.createElement("script", { src: context.relativeURL("assets/main.js") }),
        context.analytics(),
        context.hook("body.end"))));
exports.defaultLayout = defaultLayout;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213689, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.index = void 0;
const lib_1 = require("../../lib");
const utils_1 = require("../../../../utils");
function renderCategory({ urlTo }, item, prependName = "") {
    return (utils_1.JSX.createElement("section", { class: "tsd-index-section" },
        utils_1.JSX.createElement("h3", null, prependName ? `${prependName} ${item.title}` : item.title),
        utils_1.JSX.createElement("ul", { class: "tsd-index-list" }, item.children.map((item) => (utils_1.JSX.createElement("li", { class: item.cssClasses },
            utils_1.JSX.createElement("a", { href: urlTo(item), class: "tsd-kind-icon" }, item.name ? (0, lib_1.wbr)(item.name) : utils_1.JSX.createElement("em", null, (0, lib_1.wbr)(item.kindString)))))))));
}
function index(context, props) {
    if (props.categories && props.categories.length) {
        return (utils_1.JSX.createElement("section", { class: "tsd-panel-group tsd-index-group" },
            utils_1.JSX.createElement("h2", null, "Index"),
            utils_1.JSX.createElement("section", { class: "tsd-panel tsd-index-panel" },
                utils_1.JSX.createElement("div", { class: "tsd-index-content" }, props.categories.map((item) => renderCategory(context, item))))));
    }
    if (props.groups && props.groups.length) {
        return (utils_1.JSX.createElement("section", { class: "tsd-panel-group tsd-index-group" },
            utils_1.JSX.createElement("h2", null, "Index"),
            utils_1.JSX.createElement("section", { class: "tsd-panel tsd-index-panel" },
                utils_1.JSX.createElement("div", { class: "tsd-index-content" }, props.groups.map((item) => (utils_1.JSX.createElement("section", { class: "tsd-index-section " + item.cssClasses }, item.categories ? (item.categories.map((item2) => renderCategory(context, item2, item.title))) : (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                    utils_1.JSX.createElement("h3", null, item.title),
                    utils_1.JSX.createElement("ul", { class: "tsd-index-list" }, item.children.map((item) => (utils_1.JSX.createElement("li", { class: item.cssClasses },
                        utils_1.JSX.createElement("a", { href: context.urlTo(item), class: "tsd-kind-icon" }, item.name ? (0, lib_1.wbr)(item.name) : utils_1.JSX.createElement("em", null, (0, lib_1.wbr)(item.kindString))))))))))))))));
    }
}
exports.index = index;

}, function(modId) { var map = {"../../lib":1654179213690,"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213690, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTypeParametersSignature = exports.hasTypeParameters = exports.classNames = exports.renderFlags = exports.join = exports.wbr = exports.stringify = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
function stringify(data) {
    if (typeof data === "bigint") {
        return data.toString() + "n";
    }
    return JSON.stringify(data);
}
exports.stringify = stringify;
/**
 * Insert word break tags ``<wbr>`` into the given string.
 *
 * Breaks the given string at ``_``, ``-`` and capital letters.
 *
 * @param str The string that should be split.
 * @return The original string containing ``<wbr>`` tags where possible.
 */
function wbr(str) {
    // TODO surely there is a better way to do this, but I'm tired.
    const ret = [];
    const re = /[\s\S]*?(?:([^_-][_-])(?=[^_-])|([^A-Z])(?=[A-Z][^A-Z]))/g;
    let match;
    let i = 0;
    while ((match = re.exec(str))) {
        ret.push(match[0]);
        ret.push(utils_1.JSX.createElement("wbr", null));
        i += match[0].length;
    }
    ret.push(str.slice(i));
    return ret;
}
exports.wbr = wbr;
function join(joiner, list, cb) {
    const result = [];
    for (const item of list) {
        if (result.length > 0) {
            result.push(joiner);
        }
        result.push(cb(item));
    }
    return utils_1.JSX.createElement(utils_1.JSX.Fragment, null, result);
}
exports.join = join;
function renderFlags(flags) {
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null, flags.map((item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        utils_1.JSX.createElement("span", { class: "tsd-flag ts-flag" + item }, item),
        " ")))));
}
exports.renderFlags = renderFlags;
function classNames(names) {
    return Object.entries(names)
        .filter(([, include]) => include)
        .map(([key]) => key)
        .join(" ");
}
exports.classNames = classNames;
function hasTypeParameters(reflection) {
    if (reflection instanceof models_1.DeclarationReflection || reflection instanceof models_1.SignatureReflection) {
        return reflection.typeParameters != null;
    }
    return false;
}
exports.hasTypeParameters = hasTypeParameters;
function renderTypeParametersSignature(typeParameters) {
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null, !!typeParameters && typeParameters.length > 0 && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "<"),
        join(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ", "), typeParameters, (item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            item.varianceModifier ? `${item.varianceModifier} ` : "",
            utils_1.JSX.createElement("span", { class: "tsd-signature-type", "data-tsd-kind": item.kindString }, item.name)))),
        utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ">")))));
}
exports.renderTypeParametersSignature = renderTypeParametersSignature;

}, function(modId) { var map = {"../../models":1654179213611,"../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213691, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = void 0;
const utils_1 = require("../../../../utils");
function analytics(context) {
    const gaID = context.options.getValue("gaID");
    const gaSite = context.options.getValue("gaSite");
    if (!gaID)
        return;
    const script = `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', '${gaID}', '${gaSite}');
ga('send', 'pageview');
`.trim();
    return (utils_1.JSX.createElement("script", null,
        utils_1.JSX.createElement(utils_1.JSX.Raw, { html: script })));
}
exports.analytics = analytics;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213692, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.breadcrumb = void 0;
const utils_1 = require("../../../../utils");
const breadcrumb = (context, props) => props.parent ? (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
    context.breadcrumb(props.parent),
    utils_1.JSX.createElement("li", null, props.url ? utils_1.JSX.createElement("a", { href: context.urlTo(props) }, props.name) : utils_1.JSX.createElement("span", null, props.name)))) : props.url ? (utils_1.JSX.createElement("li", null,
    utils_1.JSX.createElement("a", { href: context.urlTo(props) }, props.name))) : undefined;
exports.breadcrumb = breadcrumb;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213693, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = void 0;
const utils_1 = require("../../../../utils");
function comment({ markdown }, props) {
    var _a, _b;
    if (!((_a = props.comment) === null || _a === void 0 ? void 0 : _a.hasVisibleComponent()))
        return;
    return (utils_1.JSX.createElement("div", { class: "tsd-comment tsd-typography" },
        !!props.comment.shortText && (utils_1.JSX.createElement("div", { class: "lead" },
            utils_1.JSX.createElement(utils_1.Raw, { html: "\n" + markdown(props.comment.shortText) }))),
        !!props.comment.text && (utils_1.JSX.createElement("div", null,
            utils_1.JSX.createElement(utils_1.Raw, { html: markdown(props.comment.text) }))),
        ((_b = props.comment.tags) === null || _b === void 0 ? void 0 : _b.length) > 0 && (utils_1.JSX.createElement("dl", { class: "tsd-comment-tags" }, props.comment.tags.map((item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("dt", null,
                item.tagName,
                item.paramName ? ` ${item.paramName}` : ""),
            utils_1.JSX.createElement("dd", null,
                utils_1.JSX.createElement(utils_1.Raw, { html: markdown(item.text) })))))))));
}
exports.comment = comment;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213694, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.footer = void 0;
const utils_1 = require("../../../../utils");
const lib_1 = require("../../lib");
function footer(context, props) {
    var _a;
    const hideLegend = context.options.getValue("hideLegend");
    const hideGenerator = context.options.getValue("hideGenerator");
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        utils_1.JSX.createElement("footer", { class: (0, lib_1.classNames)({
                "with-border-bottom": !hideGenerator,
            }) },
            utils_1.JSX.createElement("div", { class: "container" },
                !hideLegend && ((_a = props.legend) === null || _a === void 0 ? void 0 : _a.length) && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                    utils_1.JSX.createElement("h2", null, "Legend"),
                    utils_1.JSX.createElement("div", { class: "tsd-legend-group" }, props.legend.map((item) => (utils_1.JSX.createElement("ul", { class: "tsd-legend" }, item.map((item) => (utils_1.JSX.createElement("li", { class: item.classes.join(" ") },
                        utils_1.JSX.createElement("span", { class: "tsd-kind-icon" }, item.name)))))))))),
                utils_1.JSX.createElement("h2", null, "Settings"),
                utils_1.JSX.createElement("p", null,
                    "Theme",
                    " ",
                    utils_1.JSX.createElement("select", { id: "theme" },
                        utils_1.JSX.createElement("option", { value: "os" }, "OS"),
                        utils_1.JSX.createElement("option", { value: "light" }, "Light"),
                        utils_1.JSX.createElement("option", { value: "dark" }, "Dark"))))),
        !hideGenerator && (utils_1.JSX.createElement("div", { class: "container tsd-generator" },
            utils_1.JSX.createElement("p", null,
                "Generated using ",
                utils_1.JSX.createElement("a", { href: "https://typedoc.org/", target: "_blank" }, "TypeDoc"))))));
}
exports.footer = footer;

}, function(modId) { var map = {"../../../../utils":1654179213624,"../../lib":1654179213690}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213695, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.header = void 0;
const utils_1 = require("../../../../utils");
const lib_1 = require("../../lib");
const header = (context, props) => {
    var _a;
    return (utils_1.JSX.createElement("header", null,
        utils_1.JSX.createElement("div", { class: "tsd-page-toolbar" },
            utils_1.JSX.createElement("div", { class: "container" },
                utils_1.JSX.createElement("div", { class: "table-wrap" },
                    utils_1.JSX.createElement("div", { class: "table-cell", id: "tsd-search", "data-base": context.relativeURL("./") },
                        utils_1.JSX.createElement("div", { class: "field" },
                            utils_1.JSX.createElement("label", { for: "tsd-search-field", class: "tsd-widget search no-caption" }, "Search"),
                            utils_1.JSX.createElement("input", { type: "text", id: "tsd-search-field" })),
                        utils_1.JSX.createElement("ul", { class: "results" },
                            utils_1.JSX.createElement("li", { class: "state loading" }, "Preparing search index..."),
                            utils_1.JSX.createElement("li", { class: "state failure" }, "The search index is not available")),
                        utils_1.JSX.createElement("a", { href: context.relativeURL("index.html"), class: "title" }, props.project.name)),
                    utils_1.JSX.createElement("div", { class: "table-cell", id: "tsd-widgets" },
                        utils_1.JSX.createElement("div", { id: "tsd-filter" },
                            utils_1.JSX.createElement("a", { href: "#", class: "tsd-widget options no-caption", "data-toggle": "options" }, "Options"),
                            utils_1.JSX.createElement("div", { class: "tsd-filter-group" },
                                utils_1.JSX.createElement("div", { class: "tsd-select", id: "tsd-filter-visibility" },
                                    utils_1.JSX.createElement("span", { class: "tsd-select-label" }, "All"),
                                    utils_1.JSX.createElement("ul", { class: "tsd-select-list" },
                                        utils_1.JSX.createElement("li", { "data-value": "public" }, "Public"),
                                        utils_1.JSX.createElement("li", { "data-value": "protected" }, "Public/Protected"),
                                        utils_1.JSX.createElement("li", { "data-value": "private", class: "selected" }, "All"))),
                                " ",
                                utils_1.JSX.createElement("input", { type: "checkbox", id: "tsd-filter-inherited", checked: true }),
                                utils_1.JSX.createElement("label", { class: "tsd-widget", for: "tsd-filter-inherited" }, "Inherited"),
                                !context.options.getValue("excludeExternals") && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                                    utils_1.JSX.createElement("input", { type: "checkbox", id: "tsd-filter-externals", checked: true }),
                                    utils_1.JSX.createElement("label", { class: "tsd-widget", for: "tsd-filter-externals" }, "Externals"))))),
                        utils_1.JSX.createElement("a", { href: "#", class: "tsd-widget menu no-caption", "data-toggle": "menu" }, "Menu"))))),
        utils_1.JSX.createElement("div", { class: "tsd-page-title" },
            utils_1.JSX.createElement("div", { class: "container" },
                !!props.model.parent && utils_1.JSX.createElement("ul", { class: "tsd-breadcrumb" }, context.breadcrumb(props.model)),
                utils_1.JSX.createElement("h1", null,
                    props.model.kindString !== "Project" && `${(_a = props.model.kindString) !== null && _a !== void 0 ? _a : ""} `,
                    props.model.name,
                    (0, lib_1.hasTypeParameters)(props.model) && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                        "<",
                        (0, lib_1.join)(", ", props.model.typeParameters, (item) => item.name),
                        ">")),
                    " ",
                    (0, lib_1.renderFlags)(props.model.flags))))));
};
exports.header = header;

}, function(modId) { var map = {"../../../../utils":1654179213624,"../../lib":1654179213690}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213696, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.hierarchy = void 0;
const utils_1 = require("../../../../utils");
const hierarchy = (context, props) => (utils_1.JSX.createElement("ul", { class: "tsd-hierarchy" }, props.types.map((item, i, l) => (utils_1.JSX.createElement("li", null,
    props.isTarget ? utils_1.JSX.createElement("span", { class: "target" }, item.toString()) : context.type(item),
    i === l.length - 1 && !!props.next && context.hierarchy(props.next))))));
exports.hierarchy = hierarchy;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213697, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.member = void 0;
const lib_1 = require("../../lib");
const utils_1 = require("../../../../utils");
const models_1 = require("../../../../models");
const anchor_icon_1 = require("./anchor-icon");
const member = (context, props) => {
    var _a;
    return (utils_1.JSX.createElement("section", { class: "tsd-panel tsd-member " + props.cssClasses },
        utils_1.JSX.createElement("a", { id: props.anchor, class: "tsd-anchor" }),
        !!props.name && (utils_1.JSX.createElement("h3", { class: "tsd-anchor-link" },
            (0, lib_1.renderFlags)(props.flags),
            (0, lib_1.wbr)(props.name),
            (0, anchor_icon_1.anchorIcon)(props.anchor))),
        props.signatures
            ? context.memberSignatures(props)
            : props.hasGetterOrSetter()
                ? context.memberGetterSetter(props)
                : props instanceof models_1.ReferenceReflection
                    ? context.memberReference(props)
                    : context.memberDeclaration(props), (_a = props.groups) === null || _a === void 0 ? void 0 :
        _a.map((item) => item.children.map((item) => !item.hasOwnDocument && context.member(item)))));
};
exports.member = member;

}, function(modId) { var map = {"../../lib":1654179213690,"../../../../utils":1654179213624,"../../../../models":1654179213611,"./anchor-icon":1654179213698}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213698, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.anchorIcon = void 0;
const utils_1 = require("../../../../utils");
const anchorIcon = (anchor) => (utils_1.JSX.createElement("a", { href: `#${anchor}`, "aria-label": "Permalink", class: "tsd-anchor-icon" },
    utils_1.JSX.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", class: "icon icon-tabler icon-tabler-link", viewBox: "0 0 24 24", "stroke-width": "2", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" },
        utils_1.JSX.createElement("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
        utils_1.JSX.createElement("path", { d: "M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" }),
        utils_1.JSX.createElement("path", { d: "M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" }))));
exports.anchorIcon = anchorIcon;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213699, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.memberDeclaration = void 0;
const models_1 = require("../../../../models");
const utils_1 = require("../../../../utils");
const lib_1 = require("../../lib");
const memberDeclaration = (context, props) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
    utils_1.JSX.createElement("div", { class: "tsd-signature tsd-kind-icon" },
        (0, lib_1.wbr)(props.name),
        (0, lib_1.renderTypeParametersSignature)(props.typeParameters),
        props.type && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" },
                !!props.flags.isOptional && "?",
                ":"),
            " ",
            context.type(props.type))),
        !!props.defaultValue && props.kind !== models_1.ReflectionKind.EnumMember && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" },
                " = ",
                props.defaultValue)))),
    context.memberSources(props),
    context.comment(props),
    !!props.typeParameters && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        utils_1.JSX.createElement("h4", { class: "tsd-type-parameters-title" }, "Type Parameters"),
        context.typeParameters(props.typeParameters))),
    props.type instanceof models_1.ReflectionType && (utils_1.JSX.createElement("div", { class: "tsd-type-declaration" },
        utils_1.JSX.createElement("h4", null, "Type declaration"),
        context.parameter(props.type.declaration)))));
exports.memberDeclaration = memberDeclaration;

}, function(modId) { var map = {"../../../../models":1654179213611,"../../../../utils":1654179213624,"../../lib":1654179213690}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213700, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.memberGetterSetter = void 0;
const utils_1 = require("../../../../utils");
const memberGetterSetter = (context, props) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
    utils_1.JSX.createElement("ul", { class: "tsd-signatures " + props.cssClasses },
        !!props.getSignature && (utils_1.JSX.createElement("li", { class: "tsd-signature tsd-kind-icon" },
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "get"),
            " ",
            props.name,
            context.memberSignatureTitle(props.getSignature, { hideName: true }))),
        !!props.setSignature && (utils_1.JSX.createElement("li", { class: "tsd-signature tsd-kind-icon" },
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "set"),
            " ",
            props.name,
            context.memberSignatureTitle(props.setSignature, { hideName: true })))),
    utils_1.JSX.createElement("ul", { class: "tsd-descriptions" },
        !!props.getSignature && utils_1.JSX.createElement("li", { class: "tsd-description" }, context.memberSignatureBody(props.getSignature)),
        !!props.setSignature && utils_1.JSX.createElement("li", { class: "tsd-description" }, context.memberSignatureBody(props.setSignature)))));
exports.memberGetterSetter = memberGetterSetter;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213701, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.memberReference = void 0;
const utils_1 = require("../../../../utils");
const memberReference = ({ urlTo }, props) => {
    const referenced = props.tryGetTargetReflectionDeep();
    if (!referenced) {
        return utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            "Re-exports ",
            props.name);
    }
    if (props.name === referenced.name) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            "Re-exports ",
            utils_1.JSX.createElement("a", { href: urlTo(referenced) }, referenced.name)));
    }
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        "Renames and re-exports ",
        utils_1.JSX.createElement("a", { href: urlTo(referenced) }, referenced.name)));
};
exports.memberReference = memberReference;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213702, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.memberSignatureBody = void 0;
const utils_1 = require("../../../../utils");
const models_1 = require("../../../../models");
const lib_1 = require("../../lib");
const memberSignatureBody = (context, props, { hideSources = false } = {}) => {
    var _a;
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        !hideSources && context.memberSources(props),
        context.comment(props),
        !!props.typeParameters && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("h4", { class: "tsd-type-parameters-title" }, "Type Parameters"),
            context.typeParameters(props.typeParameters))),
        props.parameters && props.parameters.length > 0 && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("h4", { class: "tsd-parameters-title" }, "Parameters"),
            utils_1.JSX.createElement("ul", { class: "tsd-parameters" }, props.parameters.map((item) => (utils_1.JSX.createElement("li", null,
                utils_1.JSX.createElement("h5", null,
                    (0, lib_1.renderFlags)(item.flags),
                    !!item.flags.isRest && utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "..."),
                    item.name,
                    ": ",
                    context.type(item.type),
                    item.defaultValue != null && (utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" },
                        " = ",
                        item.defaultValue))),
                context.comment(item),
                item.type instanceof models_1.ReflectionType && context.parameter(item.type.declaration))))))),
        props.type && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("h4", { class: "tsd-returns-title" },
                "Returns ",
                context.type(props.type)),
            !!((_a = props.comment) === null || _a === void 0 ? void 0 : _a.returns) && (utils_1.JSX.createElement("div", null,
                utils_1.JSX.createElement(utils_1.Raw, { html: context.markdown(props.comment.returns) }))),
            props.type instanceof models_1.ReflectionType && context.parameter(props.type.declaration)))));
};
exports.memberSignatureBody = memberSignatureBody;

}, function(modId) { var map = {"../../../../utils":1654179213624,"../../../../models":1654179213611,"../../lib":1654179213690}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213703, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.memberSignatureTitle = void 0;
const lib_1 = require("../../lib");
const utils_1 = require("../../../../utils");
const memberSignatureTitle = (context, props, { hideName = false, arrowStyle = false } = {}) => {
    var _a;
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        !hideName ? ((0, lib_1.wbr)(props.name)) : (utils_1.JSX.createElement(utils_1.JSX.Fragment, null, props.kindString === "Constructor signature" && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            !!props.flags.isAbstract && utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "abstract "),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "new "))))),
        (0, lib_1.renderTypeParametersSignature)(props.typeParameters),
        utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "("),
        (0, lib_1.join)(", ", (_a = props.parameters) !== null && _a !== void 0 ? _a : [], (item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            !!item.flags.isRest && utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "..."),
            item.name,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" },
                !!item.flags.isOptional && "?",
                !!item.defaultValue && "?",
                ": "),
            context.type(item.type)))),
        utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ")"),
        !!props.type && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, arrowStyle ? " => " : ": "),
            context.type(props.type)))));
};
exports.memberSignatureTitle = memberSignatureTitle;

}, function(modId) { var map = {"../../lib":1654179213690,"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213704, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.memberSignatures = void 0;
const utils_1 = require("../../../../utils");
const memberSignatures = (context, props) => {
    var _a, _b;
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        utils_1.JSX.createElement("ul", { class: "tsd-signatures " + props.cssClasses }, (_a = props.signatures) === null || _a === void 0 ? void 0 : _a.map((item) => (utils_1.JSX.createElement("li", { class: "tsd-signature tsd-kind-icon" }, context.memberSignatureTitle(item))))),
        utils_1.JSX.createElement("ul", { class: "tsd-descriptions" }, (_b = props.signatures) === null || _b === void 0 ? void 0 : _b.map((item) => (utils_1.JSX.createElement("li", { class: "tsd-description" }, context.memberSignatureBody(item)))))));
};
exports.memberSignatures = memberSignatures;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213705, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.memberSources = void 0;
const utils_1 = require("../../../../utils");
const memberSources = (context, props) => {
    const sources = [];
    if (props.implementationOf) {
        sources.push(utils_1.JSX.createElement("p", null,
            "Implementation of ",
            context.typeAndParent(props.implementationOf)));
    }
    if (props.inheritedFrom) {
        sources.push(utils_1.JSX.createElement("p", null,
            "Inherited from ",
            context.typeAndParent(props.inheritedFrom)));
    }
    if (props.overwrites) {
        sources.push(utils_1.JSX.createElement("p", null,
            "Overrides ",
            context.typeAndParent(props.overwrites)));
    }
    if (props.sources) {
        sources.push(utils_1.JSX.createElement("ul", null, props.sources.map((item) => item.url ? (utils_1.JSX.createElement("li", null,
            "Defined in ",
            utils_1.JSX.createElement("a", { href: item.url },
                item.fileName,
                ":",
                item.line))) : (utils_1.JSX.createElement("li", null,
            "Defined in ",
            item.fileName,
            ":",
            item.line)))));
    }
    if (sources.length === 0) {
        return utils_1.JSX.createElement(utils_1.JSX.Fragment, null);
    }
    return utils_1.JSX.createElement("aside", { class: "tsd-sources" }, sources);
};
exports.memberSources = memberSources;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213706, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.members = void 0;
const utils_1 = require("../../../../utils");
function members(context, props) {
    var _a;
    if (props.categories && props.categories.length) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null, props.categories.map((item) => !item.allChildrenHaveOwnDocument() && (utils_1.JSX.createElement("section", { class: "tsd-panel-group tsd-member-group " + props.cssClasses },
            utils_1.JSX.createElement("h2", null, item.title),
            item.children.map((item) => !item.hasOwnDocument && context.member(item)))))));
    }
    return utils_1.JSX.createElement(utils_1.JSX.Fragment, null, (_a = props.groups) === null || _a === void 0 ? void 0 : _a.map((item) => !item.allChildrenHaveOwnDocument() && context.membersGroup(item)));
}
exports.members = members;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213707, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.membersGroup = void 0;
const utils_1 = require("../../../../utils");
function membersGroup(context, group) {
    if (group.categories) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null, group.categories.map((item) => (utils_1.JSX.createElement("section", { class: "tsd-panel-group tsd-member-group " + group.cssClasses },
            utils_1.JSX.createElement("h2", null,
                !!item.title && utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                    item.title,
                    " "),
                group.title),
            item.children.map((item) => !item.hasOwnDocument && context.member(item)))))));
    }
    return (utils_1.JSX.createElement("section", { class: "tsd-panel-group tsd-member-group " + group.cssClasses },
        utils_1.JSX.createElement("h2", null, group.title),
        group.children.map((item) => !item.hasOwnDocument && context.member(item))));
}
exports.membersGroup = membersGroup;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213708, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.navigation = void 0;
const models_1 = require("../../../../models");
const utils_1 = require("../../../../utils");
const lib_1 = require("../../lib");
function navigation(context, props) {
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        primaryNavigation(context, props),
        secondaryNavigation(context, props)));
}
exports.navigation = navigation;
function primaryNavigation(context, props) {
    // Create the navigation for the current page:
    // If there are modules marked as "external" then put them in their own group.
    const modules = props.model.project.getChildrenByKind(models_1.ReflectionKind.SomeModule);
    const projectLinkName = modules.some((m) => m.kindOf(models_1.ReflectionKind.Module)) ? "Modules" : "Exports";
    const [ext, int] = (0, utils_1.partition)(modules, (m) => m.flags.isExternal);
    if (ext.length === 0) {
        return (utils_1.JSX.createElement("nav", { class: "tsd-navigation primary" },
            utils_1.JSX.createElement("ul", null,
                utils_1.JSX.createElement("li", { class: (0, lib_1.classNames)({ current: props.model.isProject() }) },
                    utils_1.JSX.createElement("a", { href: context.urlTo(props.model.project) }, projectLinkName)),
                int.map(link))));
    }
    return (utils_1.JSX.createElement("nav", { class: "tsd-navigation primary" },
        utils_1.JSX.createElement("ul", null,
            utils_1.JSX.createElement("li", { class: (0, lib_1.classNames)({ current: props.model.isProject() }) },
                utils_1.JSX.createElement("a", { href: context.urlTo(props.model.project) }, projectLinkName)),
            utils_1.JSX.createElement("li", { class: "label tsd-is-external" },
                utils_1.JSX.createElement("span", null, "Internals")),
            int.map(link),
            utils_1.JSX.createElement("li", { class: "label tsd-is-external" },
                utils_1.JSX.createElement("span", null, "Externals")),
            ext.map(link))));
    function link(mod) {
        var _a;
        const current = inPath(mod, props.model);
        let childNav;
        if (current) {
            const childModules = (_a = mod.children) === null || _a === void 0 ? void 0 : _a.filter((m) => m.kindOf(models_1.ReflectionKind.SomeModule));
            if (childModules === null || childModules === void 0 ? void 0 : childModules.length) {
                childNav = utils_1.JSX.createElement("ul", null, childModules.map(link));
            }
        }
        return (utils_1.JSX.createElement("li", { class: (0, lib_1.classNames)({ current }) + " " + mod.cssClasses },
            utils_1.JSX.createElement("a", { href: context.urlTo(mod) }, (0, lib_1.wbr)(mod.name)),
            childNav));
    }
}
function secondaryNavigation(context, props) {
    const children = props.model instanceof models_1.ContainerReflection ? props.model.children || [] : [];
    // Multiple entry points, and on main project page.
    if (props.model.isProject() && props.model.getChildrenByKind(models_1.ReflectionKind.Module).length) {
        return;
    }
    // TODO: TypeDoc 0.21 did special things here. If there were more than 40
    // children of this page's parent, it only displayed this page's children.
    // Otherwise, it displayed *everything*. For now, only display page children.
    // It seems weird to do this according to a random hardcoded number. At the very
    // least this should be added as a configurable flag, but maybe even the whole
    // behavior should be configurable globally...
    const pageNavigation = (utils_1.JSX.createElement("ul", null, children
        .filter((child) => !child.kindOf(models_1.ReflectionKind.SomeModule))
        .map((child) => {
        return (utils_1.JSX.createElement("li", { class: child.cssClasses },
            utils_1.JSX.createElement("a", { href: context.urlTo(child), class: "tsd-kind-icon" }, (0, lib_1.wbr)(child.name))));
    })));
    if (props.model.kindOf(models_1.ReflectionKind.SomeModule | models_1.ReflectionKind.Project)) {
        return utils_1.JSX.createElement("nav", { class: "tsd-navigation secondary menu-sticky" }, pageNavigation);
    }
    return (utils_1.JSX.createElement("nav", { class: "tsd-navigation secondary menu-sticky" },
        utils_1.JSX.createElement("ul", null,
            utils_1.JSX.createElement("li", { class: "current " + props.model.cssClasses },
                utils_1.JSX.createElement("a", { href: context.urlTo(props.model), class: "tsd-kind-icon" }, (0, lib_1.wbr)(props.model.name)),
                pageNavigation))));
}
function inPath(thisPage, toCheck) {
    while (toCheck) {
        if (toCheck.isProject())
            return false;
        if (thisPage === toCheck)
            return true;
        toCheck = toCheck.parent;
    }
    return false;
}

}, function(modId) { var map = {"../../../../models":1654179213611,"../../../../utils":1654179213624,"../../lib":1654179213690}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213709, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.parameter = void 0;
const lib_1 = require("../../lib");
const utils_1 = require("../../../../utils");
const models_1 = require("../../../../models");
const parameter = (context, props) => {
    var _a, _b, _c;
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        utils_1.JSX.createElement("ul", { class: "tsd-parameters" },
            !!props.signatures && (utils_1.JSX.createElement("li", { class: "tsd-parameter-signature" },
                utils_1.JSX.createElement("ul", { class: "tsd-signatures " + props.cssClasses }, props.signatures.map((item) => (utils_1.JSX.createElement("li", { class: "tsd-signature tsd-kind-icon" }, context.memberSignatureTitle(item, { hideName: true }))))),
                utils_1.JSX.createElement("ul", { class: "tsd-descriptions" }, props.signatures.map((item) => (utils_1.JSX.createElement("li", { class: "tsd-description" }, context.memberSignatureBody(item, { hideSources: true }))))))),
            !!props.indexSignature && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                utils_1.JSX.createElement("li", { class: "tsd-parameter-index-signature" },
                    utils_1.JSX.createElement("h5", null,
                        utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "["), (_b = (_a = props.indexSignature) === null || _a === void 0 ? void 0 : _a.parameters) === null || _b === void 0 ? void 0 :
                        _b.map((item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                            !!item.flags.isRest && utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "..."),
                            item.name,
                            ": ",
                            context.type(item.type)))),
                        utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "]: "),
                        context.type(props.indexSignature.type)),
                    context.comment(props.indexSignature),
                    props.indexSignature.type instanceof models_1.ReflectionType &&
                        context.parameter(props.indexSignature.type.declaration)))), (_c = props.children) === null || _c === void 0 ? void 0 :
            _c.map((item) => {
                var _a;
                return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null, item.signatures ? (utils_1.JSX.createElement("li", { class: "tsd-parameter" },
                    utils_1.JSX.createElement("h5", null,
                        !!item.flags.isRest && utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "..."),
                        (0, lib_1.wbr)(item.name),
                        utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" },
                            !!item.flags.isOptional && "?",
                            ":"),
                        "function"),
                    context.memberSignatures(item))) : item.type ? (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                    utils_1.JSX.createElement("li", { class: "tsd-parameter" },
                        utils_1.JSX.createElement("h5", null,
                            (0, lib_1.renderFlags)(item.flags),
                            !!item.flags.isRest && utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "..."),
                            (0, lib_1.wbr)(item.name),
                            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" },
                                !!item.flags.isOptional && "?",
                                ": "),
                            context.type(item.type)),
                        context.comment(item),
                        !!item.children && context.parameter(item),
                        item.type instanceof models_1.ReflectionType && context.parameter(item.type.declaration)))) : (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                    item.getSignature && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                        utils_1.JSX.createElement("li", { class: "tsd-parameter" },
                            utils_1.JSX.createElement("h5", null,
                                (0, lib_1.renderFlags)(item.getSignature.flags),
                                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "get "),
                                (0, lib_1.wbr)(item.name),
                                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "(): "),
                                context.type(item.getSignature.type)),
                            context.comment(item.getSignature)))),
                    item.setSignature && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                        utils_1.JSX.createElement("li", { class: "tsd-parameter" },
                            utils_1.JSX.createElement("h5", null,
                                (0, lib_1.renderFlags)(item.setSignature.flags),
                                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "set "),
                                (0, lib_1.wbr)(item.name),
                                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "("), (_a = item.setSignature.parameters) === null || _a === void 0 ? void 0 :
                                _a.map((item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                                    item.name,
                                    utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ": "),
                                    context.type(item.type)))),
                                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "): "),
                                context.type(item.setSignature.type)),
                            context.comment(item.setSignature))))))));
            }))));
};
exports.parameter = parameter;

}, function(modId) { var map = {"../../lib":1654179213690,"../../../../utils":1654179213624,"../../../../models":1654179213611}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213710, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.type = void 0;
const models_1 = require("../../../../models");
const utils_1 = require("../../../../utils");
const lib_1 = require("../../lib");
const EXPORTABLE = models_1.ReflectionKind.Class |
    models_1.ReflectionKind.Interface |
    models_1.ReflectionKind.Enum |
    models_1.ReflectionKind.TypeAlias |
    models_1.ReflectionKind.Function |
    models_1.ReflectionKind.Variable;
const nameCollisionCache = new WeakMap();
function getNameCollisionCount(project, name) {
    var _a, _b;
    let collisions = nameCollisionCache.get(project);
    if (collisions === undefined) {
        collisions = {};
        for (const reflection of project.getReflectionsByKind(EXPORTABLE)) {
            collisions[reflection.name] = ((_a = collisions[reflection.name]) !== null && _a !== void 0 ? _a : 0) + 1;
        }
        nameCollisionCache.set(project, collisions);
    }
    return (_b = collisions[name]) !== null && _b !== void 0 ? _b : 0;
}
/**
 * Returns a (hopefully) globally unique path for the given reflection.
 *
 * This only works for exportable symbols, so e.g. methods are not affected by this.
 *
 * If the given reflection has a globally unique name already, then it will be returned as is. If the name is
 * ambiguous (i.e. there are two classes with the same name in different namespaces), then the namespaces path of the
 * reflection will be returned.
 */
function getUniquePath(reflection) {
    if (reflection.kindOf(EXPORTABLE)) {
        if (getNameCollisionCount(reflection.project, reflection.name) >= 2) {
            return getNamespacedPath(reflection);
        }
    }
    return [reflection];
}
function getNamespacedPath(reflection) {
    const path = [reflection];
    let parent = reflection.parent;
    while (parent && parent.kindOf(models_1.ReflectionKind.Namespace)) {
        path.unshift(parent);
        parent = parent.parent;
    }
    return path;
}
function renderUniquePath(context, reflection) {
    return (0, lib_1.join)(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "."), getUniquePath(reflection), (item) => (utils_1.JSX.createElement("a", { href: context.urlTo(item), class: "tsd-signature-type", "data-tsd-kind": item.kindString }, item.name)));
}
// The type helper accepts an optional needsParens parameter that is checked
// if an inner type may result in invalid output without them. For example:
// 1 | 2[] !== (1 | 2)[]
// () => 1 | 2 !== (() => 1) | 2
const typeRenderers = {
    array(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            renderType(context, type.elementType, models_1.TypeContext.arrayElement),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "[]")));
    },
    conditional(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            renderType(context, type.checkType, models_1.TypeContext.conditionalCheck),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " extends "),
            renderType(context, type.extendsType, models_1.TypeContext.conditionalExtends),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " ? "),
            renderType(context, type.trueType, models_1.TypeContext.conditionalTrue),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " : "),
            renderType(context, type.falseType, models_1.TypeContext.conditionalFalse)));
    },
    indexedAccess(context, type) {
        let indexType = renderType(context, type.indexType, models_1.TypeContext.indexedIndex);
        if (type.objectType instanceof models_1.ReferenceType &&
            type.objectType.reflection &&
            type.indexType instanceof models_1.LiteralType &&
            typeof type.indexType.value === "string") {
            const childReflection = type.objectType.reflection.getChildByName([type.indexType.value]);
            if (childReflection) {
                indexType = utils_1.JSX.createElement("a", { href: context.urlTo(childReflection) }, indexType);
            }
        }
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            renderType(context, type.objectType, models_1.TypeContext.indexedObject),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "["),
            indexType,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "]")));
    },
    inferred(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "infer "),
            " ",
            type.name,
            type.constraint && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " extends "),
                renderType(context, type.constraint, models_1.TypeContext.inferredConstraint)))));
    },
    intersection(context, type) {
        return (0, lib_1.join)(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " & "), type.types, (item) => renderType(context, item, models_1.TypeContext.intersectionElement));
    },
    intrinsic(_context, type) {
        return utils_1.JSX.createElement("span", { class: "tsd-signature-type" }, type.name);
    },
    literal(_context, type) {
        return utils_1.JSX.createElement("span", { class: "tsd-signature-type" }, (0, lib_1.stringify)(type.value));
    },
    mapped(context, type) {
        const children = [];
        switch (type.readonlyModifier) {
            case "+":
                children.push(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "readonly "));
                break;
            case "-":
                children.push(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "-readonly "));
                break;
        }
        children.push(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "[ "), utils_1.JSX.createElement("span", { class: "tsd-signature-type" }, type.parameter), utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " in "), renderType(context, type.parameterType, models_1.TypeContext.mappedParameter));
        if (type.nameType) {
            children.push(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " as "), renderType(context, type.nameType, models_1.TypeContext.mappedName));
        }
        children.push(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "]"));
        switch (type.optionalModifier) {
            case "+":
                children.push(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "?: "));
                break;
            case "-":
                children.push(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "-?: "));
                break;
            default:
                children.push(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ": "));
        }
        children.push(renderType(context, type.templateType, models_1.TypeContext.mappedTemplate));
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "{"),
            " ",
            children,
            " ",
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "}")));
    },
    "named-tuple-member"(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            type.name,
            type.isOptional ? (utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "?: ")) : (utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ": ")),
            renderType(context, type.element, models_1.TypeContext.tupleElement)));
    },
    optional(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            renderType(context, type.elementType, models_1.TypeContext.optionalElement),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "?")));
    },
    predicate(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            !!type.asserts && utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "asserts "),
            utils_1.JSX.createElement("span", { class: "tsd-signature-type" }, type.name),
            !!type.targetType && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " is "),
                renderType(context, type.targetType, models_1.TypeContext.predicateTarget)))));
    },
    query(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "typeof "),
            renderType(context, type.queryType, models_1.TypeContext.queryTypeTarget)));
    },
    reference(context, type) {
        var _a;
        const reflection = type.reflection;
        let name;
        if (reflection) {
            if (reflection.kindOf(models_1.ReflectionKind.TypeParameter)) {
                // Don't generate a link will always point to this page, but do set the kind.
                name = (utils_1.JSX.createElement("span", { class: "tsd-signature-type", "data-tsd-kind": reflection.kindString }, reflection.name));
            }
            else {
                name = renderUniquePath(context, reflection);
            }
        }
        else {
            const externalUrl = context.attemptExternalResolution(type);
            if (externalUrl) {
                name = (utils_1.JSX.createElement("a", { href: externalUrl, class: "tsd-signature-type external", target: "_blank" }, type.name));
            }
            else {
                name = utils_1.JSX.createElement("span", { class: "tsd-signature-type" }, type.name);
            }
        }
        if ((_a = type.typeArguments) === null || _a === void 0 ? void 0 : _a.length) {
            return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                name,
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "<"),
                (0, lib_1.join)(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ", "), type.typeArguments, (item) => renderType(context, item, models_1.TypeContext.referenceTypeArgument)),
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ">")));
        }
        return name;
    },
    reflection(context, type) {
        var _a;
        if (type.declaration.children) {
            // Object literal
            return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "{ "),
                (0, lib_1.join)(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "; "), type.declaration.children, (item) => {
                    var _a;
                    if (item.getSignature && item.setSignature) {
                        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                            item.name,
                            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ": "),
                            renderType(context, item.getSignature.type, models_1.TypeContext.none)));
                    }
                    if (item.getSignature) {
                        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "get "),
                            item.name,
                            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "(): "),
                            renderType(context, item.getSignature.type, models_1.TypeContext.none)));
                    }
                    if (item.setSignature) {
                        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "set "),
                            item.name,
                            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "("), (_a = item.setSignature.parameters) === null || _a === void 0 ? void 0 :
                            _a.map((item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                                item.name,
                                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ": "),
                                renderType(context, item.type, models_1.TypeContext.none)))),
                            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ")")));
                    }
                    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                        item.name,
                        utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, item.flags.isOptional ? "?: " : ": "),
                        renderType(context, item.type, models_1.TypeContext.none)));
                }),
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " }")));
        }
        if (((_a = type.declaration.signatures) === null || _a === void 0 ? void 0 : _a.length) === 1) {
            return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "("),
                context.memberSignatureTitle(type.declaration.signatures[0], {
                    hideName: true,
                    arrowStyle: true,
                }),
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ")")));
        }
        if (type.declaration.signatures) {
            return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" },
                    "{",
                    " "),
                (0, lib_1.join)(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "; "), type.declaration.signatures, (item) => context.memberSignatureTitle(item, { hideName: true })),
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " }")));
        }
        return utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "{}");
    },
    rest(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "..."),
            renderType(context, type.elementType, models_1.TypeContext.restElement)));
    },
    "template-literal"(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "`"),
            type.head && utils_1.JSX.createElement("span", { class: "tsd-signature-type" }, type.head),
            type.tail.map((item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "${"),
                renderType(context, item[0], models_1.TypeContext.templateLiteralElement),
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "}"),
                item[1] && utils_1.JSX.createElement("span", { class: "tsd-signature-type" }, item[1])))),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "`")));
    },
    tuple(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "["),
            (0, lib_1.join)(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ", "), type.elements, (item) => renderType(context, item, models_1.TypeContext.tupleElement)),
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "]")));
    },
    typeOperator(context, type) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" },
                type.operator,
                " "),
            renderType(context, type.target, models_1.TypeContext.typeOperatorTarget)));
    },
    union(context, type) {
        return (0, lib_1.join)(utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " | "), type.types, (item) => renderType(context, item, models_1.TypeContext.unionElement));
    },
    unknown(_context, type) {
        return utils_1.JSX.createElement(utils_1.JSX.Fragment, null, type.name);
    },
};
function renderType(context, type, where) {
    if (!type) {
        return utils_1.JSX.createElement("span", { class: "tsd-signature-type" }, "any");
    }
    const renderFn = typeRenderers[type.type];
    const rendered = renderFn(context, type);
    if (type.needsParenthesis(where)) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "("),
            rendered,
            utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, ")")));
    }
    return rendered;
}
function type(context, type) {
    return renderType(context, type, models_1.TypeContext.none);
}
exports.type = type;

}, function(modId) { var map = {"../../../../models":1654179213611,"../../../../utils":1654179213624,"../../lib":1654179213690}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213711, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.typeAndParent = void 0;
const models_1 = require("../../../../models");
const utils_1 = require("../../../../utils");
const typeAndParent = (context, props) => {
    if (!props)
        return utils_1.JSX.createElement(utils_1.JSX.Fragment, null, "void");
    if (props instanceof models_1.ArrayType) {
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            context.typeAndParent(props.elementType),
            "[]"));
    }
    if (props instanceof models_1.ReferenceType && props.reflection) {
        const refl = props.reflection instanceof models_1.SignatureReflection ? props.reflection.parent : props.reflection;
        const parent = refl === null || refl === void 0 ? void 0 : refl.parent;
        return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            (parent === null || parent === void 0 ? void 0 : parent.url) ? utils_1.JSX.createElement("a", { href: context.urlTo(parent) }, parent.name) : parent === null || parent === void 0 ? void 0 : parent.name,
            ".",
            (refl === null || refl === void 0 ? void 0 : refl.url) ? utils_1.JSX.createElement("a", { href: context.urlTo(refl) }, refl.name) : refl === null || refl === void 0 ? void 0 : refl.name));
    }
    return utils_1.JSX.createElement(utils_1.JSX.Fragment, null, props.toString());
};
exports.typeAndParent = typeAndParent;

}, function(modId) { var map = {"../../../../models":1654179213611,"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213712, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.typeParameters = void 0;
const utils_1 = require("../../../../utils");
function typeParameters(context, typeParameters) {
    return (utils_1.JSX.createElement("ul", { class: "tsd-type-parameters" }, typeParameters === null || typeParameters === void 0 ? void 0 : typeParameters.map((item) => (utils_1.JSX.createElement("li", null,
        utils_1.JSX.createElement("h4", null,
            item.varianceModifier ? `${item.varianceModifier} ` : "",
            item.name,
            !!item.type && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, " extends "),
                context.type(item.type))),
            !!item.default && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                " = ",
                context.type(item.default)))),
        context.comment(item))))));
}
exports.typeParameters = typeParameters;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213713, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.indexTemplate = void 0;
const utils_1 = require("../../../../utils");
const indexTemplate = ({ markdown }, props) => (utils_1.JSX.createElement("div", { class: "tsd-panel tsd-typography" },
    utils_1.JSX.createElement(utils_1.Raw, { html: markdown(props.model.readme) })));
exports.indexTemplate = indexTemplate;

}, function(modId) { var map = {"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213714, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.reflectionTemplate = void 0;
const lib_1 = require("../../lib");
const models_1 = require("../../../../models");
const utils_1 = require("../../../../utils");
const reflectionTemplate = (context, props) => {
    var _a;
    return (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
        props.model.hasComment() && utils_1.JSX.createElement("section", { class: "tsd-panel tsd-comment" }, context.comment(props.model)),
        (0, lib_1.hasTypeParameters)(props.model) && (utils_1.JSX.createElement("section", { class: "tsd-panel tsd-type-parameters" },
            utils_1.JSX.createElement("h3", null, "Type Parameters"),
            context.typeParameters(props.model.typeParameters))),
        props.model instanceof models_1.DeclarationReflection && (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
            !!props.model.typeHierarchy && (utils_1.JSX.createElement("section", { class: "tsd-panel tsd-hierarchy" },
                utils_1.JSX.createElement("h3", null, "Hierarchy"),
                context.hierarchy(props.model.typeHierarchy))),
            !!props.model.implementedTypes && (utils_1.JSX.createElement("section", { class: "tsd-panel" },
                utils_1.JSX.createElement("h3", null, "Implements"),
                utils_1.JSX.createElement("ul", { class: "tsd-hierarchy" }, props.model.implementedTypes.map((item) => (utils_1.JSX.createElement("li", null, context.type(item))))))),
            !!props.model.implementedBy && (utils_1.JSX.createElement("section", { class: "tsd-panel" },
                utils_1.JSX.createElement("h3", null, "Implemented by"),
                utils_1.JSX.createElement("ul", { class: "tsd-hierarchy" }, props.model.implementedBy.map((item) => (utils_1.JSX.createElement("li", null, context.type(item))))))),
            !!props.model.signatures && (utils_1.JSX.createElement("section", { class: "tsd-panel" },
                utils_1.JSX.createElement("h3", { class: "tsd-before-signature" }, "Callable"),
                context.memberSignatures(props.model))),
            !!props.model.indexSignature && (utils_1.JSX.createElement("section", { class: "tsd-panel " + props.model.cssClasses },
                utils_1.JSX.createElement("h3", { class: "tsd-before-signature" }, "Indexable"),
                utils_1.JSX.createElement("div", { class: "tsd-signature tsd-kind-icon" },
                    utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "["),
                    props.model.indexSignature.parameters.map((item) => (utils_1.JSX.createElement(utils_1.JSX.Fragment, null,
                        item.name,
                        ": ",
                        context.type(item.type)))),
                    utils_1.JSX.createElement("span", { class: "tsd-signature-symbol" }, "]: "),
                    context.type(props.model.indexSignature.type)),
                context.comment(props.model.indexSignature),
                ((_a = props.model.indexSignature) === null || _a === void 0 ? void 0 : _a.type) instanceof models_1.ReflectionType &&
                    context.parameter(props.model.indexSignature.type.declaration))))),
        context.index(props.model),
        context.members(props.model)));
};
exports.reflectionTemplate = reflectionTemplate;

}, function(modId) { var map = {"../../lib":1654179213690,"../../../../models":1654179213611,"../../../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213715, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyles = exports.highlight = exports.getSupportedLanguages = exports.isSupportedLanguage = exports.loadHighlighter = void 0;
const assert_1 = require("assert");
const shiki_1 = require("shiki");
const array_1 = require("./array");
const JSX = require("./jsx");
const aliases = new Map();
for (const lang of shiki_1.BUNDLED_LANGUAGES) {
    for (const alias of lang.aliases || []) {
        aliases.set(alias, lang.id);
    }
}
const supportedLanguages = (0, array_1.unique)(["text", ...aliases.keys(), ...shiki_1.BUNDLED_LANGUAGES.map((lang) => lang.id)]).sort();
class DoubleHighlighter {
    constructor(highlighter, light, dark) {
        this.highlighter = highlighter;
        this.light = light;
        this.dark = dark;
        this.schemes = new Map();
    }
    highlight(code, lang) {
        const lightTokens = this.highlighter.codeToThemedTokens(code, lang, this.light, { includeExplanation: false });
        const darkTokens = this.highlighter.codeToThemedTokens(code, lang, this.dark, { includeExplanation: false });
        // If this fails... something went *very* wrong.
        (0, assert_1.ok)(lightTokens.length === darkTokens.length);
        const docEls = [];
        for (let line = 0; line < lightTokens.length; line++) {
            const lightLine = lightTokens[line];
            const darkLine = darkTokens[line];
            // Different themes can have different grammars... so unfortunately we have to deal with different
            // sets of tokens.Example: light_plus and dark_plus tokenize " = " differently in the `schemes`
            // declaration for this file.
            const lineEls = [];
            while (lightLine.length && darkLine.length) {
                // Simple case, same token.
                if (lightLine[0].content === darkLine[0].content) {
                    lineEls.push(JSX.createElement("span", { class: this.getClass(lightLine[0].color, darkLine[0].color) }, lightLine[0].content));
                    lightLine.shift();
                    darkLine.shift();
                    continue;
                }
                if (lightLine[0].content.length < darkLine[0].content.length) {
                    lineEls.push(JSX.createElement("span", { class: this.getClass(lightLine[0].color, darkLine[0].color) }, lightLine[0].content));
                    darkLine[0].content = darkLine[0].content.substr(lightLine[0].content.length);
                    lightLine.shift();
                    continue;
                }
                lineEls.push(JSX.createElement("span", { class: this.getClass(lightLine[0].color, darkLine[0].color) }, darkLine[0].content));
                lightLine[0].content = lightLine[0].content.substr(darkLine[0].content.length);
                darkLine.shift();
            }
            if (line + 1 !== lightTokens.length) {
                lineEls.push(JSX.createElement("br", null));
            }
            docEls.push(lineEls);
        }
        return JSX.renderElement(JSX.createElement(JSX.Fragment, null, docEls));
    }
    getStyles() {
        const style = [":root {"];
        const lightRules = [];
        const darkRules = [];
        let i = 0;
        for (const key of this.schemes.keys()) {
            const [light, dark] = key.split(" | ");
            style.push(`    --light-hl-${i}: ${light};`);
            style.push(`    --dark-hl-${i}: ${dark};`);
            lightRules.push(`    --hl-${i}: var(--light-hl-${i});`);
            darkRules.push(`    --hl-${i}: var(--dark-hl-${i});`);
            i++;
        }
        // GH#1836, our page background is white, but it would be nice to be able to see
        // a difference between the code blocks and the background of the page. There's
        // probably a better solution to this... revisit once #1794 is merged.
        let lightBackground = this.highlighter.getTheme(this.light).bg;
        if (isWhite(lightBackground)) {
            lightBackground = "#F5F5F5";
        }
        style.push(`    --light-code-background: ${lightBackground};`);
        style.push(`    --dark-code-background: ${this.highlighter.getTheme(this.dark).bg};`);
        lightRules.push(`    --code-background: var(--light-code-background);`);
        darkRules.push(`    --code-background: var(--dark-code-background);`);
        style.push("}", "");
        style.push("@media (prefers-color-scheme: light) { :root {");
        style.push(...lightRules);
        style.push("} }", "");
        style.push("@media (prefers-color-scheme: dark) { :root {");
        style.push(...darkRules);
        style.push("} }", "");
        style.push("body.light {");
        style.push(...lightRules);
        style.push("}", "");
        style.push("body.dark {");
        style.push(...darkRules);
        style.push("}", "");
        for (i = 0; i < this.schemes.size; i++) {
            style.push(`.hl-${i} { color: var(--hl-${i}); }`);
        }
        style.push("pre, code { background: var(--code-background); }", "");
        return style.join("\n");
    }
    getClass(lightColor, darkColor) {
        const key = `${lightColor} | ${darkColor}`;
        let scheme = this.schemes.get(key);
        if (scheme == null) {
            scheme = `hl-${this.schemes.size}`;
            this.schemes.set(key, scheme);
        }
        return scheme;
    }
}
let highlighter;
async function loadHighlighter(lightTheme, darkTheme) {
    if (highlighter)
        return;
    const hl = await (0, shiki_1.getHighlighter)({ themes: [lightTheme, darkTheme] });
    highlighter = new DoubleHighlighter(hl, lightTheme, darkTheme);
}
exports.loadHighlighter = loadHighlighter;
function isSupportedLanguage(lang) {
    return getSupportedLanguages().includes(lang);
}
exports.isSupportedLanguage = isSupportedLanguage;
function getSupportedLanguages() {
    return supportedLanguages;
}
exports.getSupportedLanguages = getSupportedLanguages;
function highlight(code, lang) {
    var _a;
    (0, assert_1.ok)(highlighter, "Tried to highlight with an uninitialized highlighter");
    if (!isSupportedLanguage(lang)) {
        return code;
    }
    if (lang === "text") {
        return JSX.renderElement(JSX.createElement(JSX.Fragment, null, code));
    }
    return highlighter.highlight(code, (_a = aliases.get(lang)) !== null && _a !== void 0 ? _a : lang);
}
exports.highlight = highlight;
function getStyles() {
    (0, assert_1.ok)(highlighter, "Tried to highlight with an uninitialized highlighter");
    return highlighter.getStyles();
}
exports.getStyles = getStyles;
function isWhite(color) {
    const colors = new Set(color.toLowerCase().replace(/[^a-f0-9]/g, ""));
    return colors.size === 1 && colors.has("f");
}

}, function(modId) { var map = {"./array":1654179213620,"./jsx":1654179213641}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213716, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LegendPlugin = exports.MarkedPlugin = exports.MarkedLinksPlugin = exports.JavascriptIndexPlugin = exports.AssetsPlugin = void 0;
var AssetsPlugin_1 = require("./AssetsPlugin");
Object.defineProperty(exports, "AssetsPlugin", { enumerable: true, get: function () { return AssetsPlugin_1.AssetsPlugin; } });
var JavascriptIndexPlugin_1 = require("./JavascriptIndexPlugin");
Object.defineProperty(exports, "JavascriptIndexPlugin", { enumerable: true, get: function () { return JavascriptIndexPlugin_1.JavascriptIndexPlugin; } });
var MarkedLinksPlugin_1 = require("./MarkedLinksPlugin");
Object.defineProperty(exports, "MarkedLinksPlugin", { enumerable: true, get: function () { return MarkedLinksPlugin_1.MarkedLinksPlugin; } });
var MarkedPlugin_1 = require("../themes/MarkedPlugin");
Object.defineProperty(exports, "MarkedPlugin", { enumerable: true, get: function () { return MarkedPlugin_1.MarkedPlugin; } });
var LegendPlugin_1 = require("./LegendPlugin");
Object.defineProperty(exports, "LegendPlugin", { enumerable: true, get: function () { return LegendPlugin_1.LegendPlugin; } });

}, function(modId) { var map = {"./AssetsPlugin":1654179213717,"./JavascriptIndexPlugin":1654179213718,"./MarkedLinksPlugin":1654179213719,"../themes/MarkedPlugin":1654179213720,"./LegendPlugin":1654179213721}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213717, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsPlugin = void 0;
const components_1 = require("../components");
const events_1 = require("../events");
const fs_1 = require("../../utils/fs");
const DefaultTheme_1 = require("../themes/default/DefaultTheme");
const highlighter_1 = require("../../utils/highlighter");
const utils_1 = require("../../utils");
const fs_2 = require("fs");
const path_1 = require("path");
/**
 * A plugin that copies the subdirectory ´assets´ from the current themes
 * source folder to the output directory.
 */
let AssetsPlugin = class AssetsPlugin extends components_1.RendererComponent {
    /**
     * Create a new AssetsPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [events_1.RendererEvent.END]: this.onRenderEnd,
            [events_1.RendererEvent.BEGIN]: (event) => {
                const dest = (0, path_1.join)(event.outputDirectory, "assets");
                if (this.customCss) {
                    if ((0, fs_2.existsSync)(this.customCss)) {
                        (0, fs_1.copySync)(this.customCss, (0, path_1.join)(dest, "custom.css"));
                    }
                    else {
                        this.application.logger.error(`Custom CSS file at ${this.customCss} does not exist.`);
                        event.preventDefault();
                    }
                }
            },
        });
    }
    /**
     * Triggered before the renderer starts rendering a project.
     *
     * @param event  An event object describing the current render operation.
     */
    onRenderEnd(event) {
        if (this.owner.theme instanceof DefaultTheme_1.DefaultTheme) {
            const src = (0, path_1.join)(__dirname, "..", "..", "..", "..", "static");
            const dest = (0, path_1.join)(event.outputDirectory, "assets");
            (0, fs_1.copySync)(src, dest);
            (0, fs_1.writeFileSync)((0, path_1.join)(dest, "highlight.css"), (0, highlighter_1.getStyles)());
        }
    }
};
__decorate([
    (0, utils_1.BindOption)("customCss")
], AssetsPlugin.prototype, "customCss", void 0);
AssetsPlugin = __decorate([
    (0, components_1.Component)({ name: "assets" })
], AssetsPlugin);
exports.AssetsPlugin = AssetsPlugin;

}, function(modId) { var map = {"../components":1654179213686,"../events":1654179213681,"../../utils/fs":1654179213610,"../themes/default/DefaultTheme":1654179213684,"../../utils/highlighter":1654179213715,"../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213718, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JavascriptIndexPlugin = void 0;
const Path = require("path");
const lunr_1 = require("lunr");
const models_1 = require("../../models");
const plugins_1 = require("../../converter/plugins");
const components_1 = require("../components");
const events_1 = require("../events");
const utils_1 = require("../../utils");
const DefaultTheme_1 = require("../themes/default/DefaultTheme");
/**
 * A plugin that exports an index of the project to a javascript file.
 *
 * The resulting javascript file can be used to build a simple search function.
 */
let JavascriptIndexPlugin = class JavascriptIndexPlugin extends components_1.RendererComponent {
    /**
     * Create a new JavascriptIndexPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, events_1.RendererEvent.BEGIN, this.onRendererBegin);
    }
    /**
     * Triggered after a document has been rendered, just before it is written to disc.
     *
     * @param event  An event object describing the current render operation.
     */
    onRendererBegin(event) {
        var _a, _b, _c;
        if (!(this.owner.theme instanceof DefaultTheme_1.DefaultTheme)) {
            return;
        }
        if (event.isDefaultPrevented) {
            return;
        }
        const rows = [];
        const kinds = {};
        const kindBoosts = (_a = this.application.options.getValue("searchGroupBoosts")) !== null && _a !== void 0 ? _a : {};
        for (const reflection of event.project.getReflectionsByKind(models_1.ReflectionKind.All)) {
            if (!(reflection instanceof models_1.DeclarationReflection)) {
                continue;
            }
            if (!reflection.url ||
                !reflection.name ||
                reflection.flags.isExternal ||
                reflection.name === "") {
                continue;
            }
            let parent = reflection.parent;
            let boost = (_b = reflection.relevanceBoost) !== null && _b !== void 0 ? _b : 1;
            if (parent instanceof models_1.ProjectReflection) {
                parent = undefined;
            }
            if (!kinds[reflection.kind]) {
                kinds[reflection.kind] = plugins_1.GroupPlugin.getKindSingular(reflection.kind);
                const kindBoost = kindBoosts[(_c = kinds[reflection.kind]) !== null && _c !== void 0 ? _c : ""];
                if (kindBoost != undefined) {
                    boost *= kindBoost;
                }
            }
            const row = {
                id: rows.length,
                kind: reflection.kind,
                name: reflection.name,
                url: reflection.url,
                classes: reflection.cssClasses,
            };
            if (boost !== 1) {
                row.boost = boost;
            }
            if (parent) {
                row.parent = parent.getFullName();
            }
            rows.push(row);
        }
        const builder = new lunr_1.Builder();
        builder.pipeline.add(lunr_1.trimmer);
        builder.ref("id");
        builder.field("name", { boost: 10 });
        builder.field("parent");
        rows.forEach((row) => builder.add(row));
        const index = builder.build();
        const jsonFileName = Path.join(event.outputDirectory, "assets", "search.js");
        const jsonData = JSON.stringify({
            kinds,
            rows,
            index,
        });
        (0, utils_1.writeFileSync)(jsonFileName, `window.searchData = JSON.parse(${JSON.stringify(jsonData)});`);
    }
};
JavascriptIndexPlugin = __decorate([
    (0, components_1.Component)({ name: "javascript-index" })
], JavascriptIndexPlugin);
exports.JavascriptIndexPlugin = JavascriptIndexPlugin;

}, function(modId) { var map = {"../../models":1654179213611,"../../converter/plugins":1654179213667,"../components":1654179213686,"../events":1654179213681,"../../utils":1654179213624,"../themes/default/DefaultTheme":1654179213684}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213719, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MarkedLinksPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkedLinksPlugin = void 0;
const Util = require("util");
const components_1 = require("../components");
const events_1 = require("../events");
const utils_1 = require("../../utils");
/**
 * A plugin that builds links in markdown texts.
 */
let MarkedLinksPlugin = MarkedLinksPlugin_1 = class MarkedLinksPlugin extends components_1.ContextAwareRendererComponent {
    constructor() {
        super(...arguments);
        /**
         * Regular expression for detecting bracket links.
         */
        this.brackets = /\[\[([^\]]+)\]\]/g;
        /**
         * Regular expression for detecting inline tags like {&amp;link ...}.
         */
        this.inlineTag = /(?:\[(.+?)\])?\{@(link|linkcode|linkplain)\s+((?:.|\n)+?)\}/gi;
        this.warnings = [];
    }
    /**
     * Create a new MarkedLinksPlugin instance.
     */
    initialize() {
        super.initialize();
        this.listenTo(this.owner, {
            [events_1.MarkdownEvent.PARSE]: this.onParseMarkdown,
            [events_1.RendererEvent.END]: this.onEndRenderer,
        }, undefined, 100);
    }
    /**
     * Find all references to symbols within the given text and transform them into a link.
     *
     * This function is aware of the current context and will try to find the symbol within the
     * current reflection. It will walk up the reflection chain till the symbol is found or the
     * root reflection is reached. As a last resort the function will search the entire project
     * for the given symbol.
     *
     * @param text  The text that should be parsed.
     * @returns The text with symbol references replaced by links.
     */
    replaceBrackets(text) {
        return text.replace(this.brackets, (match, content) => {
            const monospace = content[0] === "`" && content[content.length - 1] === "`";
            const split = MarkedLinksPlugin_1.splitLinkText(monospace ? content.slice(1, -1) : content);
            return this.buildLink(match, split.target, split.caption, monospace);
        });
    }
    /**
     * Find symbol {&amp;link ...} strings in text and turn into html links
     *
     * @param text  The string in which to replace the inline tags.
     * @return      The updated string.
     */
    replaceInlineTags(text) {
        return text.replace(this.inlineTag, (match, leading, tagName, content) => {
            const split = MarkedLinksPlugin_1.splitLinkText(content);
            const target = split.target;
            const caption = leading || split.caption;
            const monospace = tagName === "linkcode";
            return this.buildLink(match, target, caption, monospace);
        });
    }
    /**
     * Format a link with the given text and target.
     *
     * @param original   The original link string, will be returned if the target cannot be resolved..
     * @param target     The link target.
     * @param caption    The caption of the link.
     * @param monospace  Whether to use monospace formatting or not.
     * @returns A html link tag.
     */
    buildLink(original, target, caption, monospace) {
        let attributes = "";
        if (this.urlPrefix.test(target)) {
            attributes = ' class="external"';
        }
        else {
            let reflection;
            if (this.reflection) {
                reflection = this.reflection.findReflectionByName(target);
            }
            else if (this.project) {
                reflection = this.project.findReflectionByName(target);
            }
            if (reflection && reflection.url) {
                if (this.urlPrefix.test(reflection.url)) {
                    target = reflection.url;
                    attributes = ' class="external"';
                }
                else {
                    target = this.getRelativeUrl(reflection.url);
                }
            }
            else {
                const fullName = (this.reflection ||
                    this.project).getFriendlyFullName();
                this.warnings.push(`In ${fullName}: ${original}`);
                return original;
            }
        }
        if (monospace) {
            caption = "<code>" + caption + "</code>";
        }
        return Util.format('<a href="%s"%s>%s</a>', target, attributes, caption);
    }
    /**
     * Triggered when {@link MarkedPlugin} parses a markdown string.
     *
     * @param event
     */
    onParseMarkdown(event) {
        event.parsedText = this.replaceInlineTags(this.replaceBrackets(event.parsedText));
    }
    /**
     * Triggered when {@link Renderer} is finished
     */
    onEndRenderer(_event) {
        const enabled = this.listInvalidSymbolLinks || this.validation.invalidLink;
        if (this.listInvalidSymbolLinks) {
            this.application.logger.warn("listInvalidSymbolLinks is deprecated and will be removed in 0.23, set validation.invalidLink instead.");
        }
        if (enabled && this.warnings.length > 0) {
            this.application.logger.warn("\n[MarkedLinksPlugin]: Found invalid symbol reference(s) in JSDocs, " +
                "they will not render as links in the generated documentation." +
                "\n  " +
                this.warnings.join("\n  "));
        }
        this.warnings = [];
    }
    /**
     * Split the given link into text and target at first pipe or space.
     *
     * @param text  The source string that should be checked for a split character.
     * @returns An object containing the link text and target.
     */
    static splitLinkText(text) {
        let splitIndex = text.indexOf("|");
        if (splitIndex === -1) {
            splitIndex = text.search(/\s/);
        }
        if (splitIndex !== -1) {
            return {
                caption: text
                    .substr(splitIndex + 1)
                    .replace(/\n+/, " ")
                    .trim(),
                target: text.substr(0, splitIndex).trim(),
            };
        }
        else {
            return {
                caption: text,
                target: text,
            };
        }
    }
};
__decorate([
    (0, utils_1.BindOption)("listInvalidSymbolLinks")
], MarkedLinksPlugin.prototype, "listInvalidSymbolLinks", void 0);
__decorate([
    (0, utils_1.BindOption)("validation")
], MarkedLinksPlugin.prototype, "validation", void 0);
MarkedLinksPlugin = MarkedLinksPlugin_1 = __decorate([
    (0, components_1.Component)({ name: "marked-links" })
], MarkedLinksPlugin);
exports.MarkedLinksPlugin = MarkedLinksPlugin;

}, function(modId) { var map = {"../components":1654179213686,"../events":1654179213681,"../../utils":1654179213624}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213720, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkedPlugin = void 0;
const fs = require("fs");
const Path = require("path");
const Marked = require("marked");
const components_1 = require("../components");
const events_1 = require("../events");
const utils_1 = require("../../utils");
const highlighter_1 = require("../../utils/highlighter");
const customMarkedRenderer = new Marked.Renderer();
customMarkedRenderer.heading = (text, level, _, slugger) => {
    const slug = slugger.slug(text);
    return `
<a href="#${slug}" id="${slug}" style="color: inherit; text-decoration: none;">
  <h${level}>${text}</h${level}>
</a>
`;
};
/**
 * Implements markdown and relativeURL helpers for templates.
 * @internal
 */
let MarkedPlugin = class MarkedPlugin extends components_1.ContextAwareRendererComponent {
    constructor() {
        super(...arguments);
        /**
         * The pattern used to find references in markdown.
         */
        this.includePattern = /\[\[include:([^\]]+?)\]\]/g;
        /**
         * The pattern used to find media links.
         */
        this.mediaPattern = /media:\/\/([^ ")\]}]+)/g;
    }
    /**
     * Create a new MarkedPlugin instance.
     */
    initialize() {
        super.initialize();
        this.listenTo(this.owner, events_1.MarkdownEvent.PARSE, this.onParseMarkdown);
    }
    /**
     * Highlight the syntax of the given text using HighlightJS.
     *
     * @param text  The text that should be highlighted.
     * @param lang  The language that should be used to highlight the string.
     * @return A html string with syntax highlighting.
     */
    getHighlighted(text, lang) {
        var _a;
        lang = lang || "typescript";
        lang = lang.toLowerCase();
        if (!(0, highlighter_1.isSupportedLanguage)(lang)) {
            // Extra newline because of the progress bar
            this.application.logger.warn(`
Unsupported highlight language "${lang}" will not be highlighted. Run typedoc --help for a list of supported languages.
target code block :
\t${text.split("\n").join("\n\t")}
source files :${(_a = this.sources) === null || _a === void 0 ? void 0 : _a.map((source) => `\n\t${source.fileName}`).join()}
output file :
\t${this.outputFileName}`);
            return text;
        }
        return (0, highlighter_1.highlight)(text, lang);
    }
    /**
     * Parse the given markdown string and return the resulting html.
     *
     * @param text  The markdown string that should be parsed.
     * @returns The resulting html string.
     */
    parseMarkdown(text) {
        if (this.includes) {
            text = text.replace(this.includePattern, (_match, path) => {
                path = Path.join(this.includes, path.trim());
                if (fs.existsSync(path) && fs.statSync(path).isFile()) {
                    const contents = (0, utils_1.readFile)(path);
                    return contents;
                }
                else {
                    this.application.logger.warn("Could not find file to include: " + path);
                    return "";
                }
            });
        }
        if (this.mediaDirectory) {
            text = text.replace(this.mediaPattern, (match, path) => {
                const fileName = Path.join(this.mediaDirectory, path);
                if (fs.existsSync(fileName) &&
                    fs.statSync(fileName).isFile()) {
                    return this.getRelativeUrl("media") + "/" + path;
                }
                else {
                    this.application.logger.warn("Could not find media file: " + fileName);
                    return match;
                }
            });
        }
        const event = new events_1.MarkdownEvent(events_1.MarkdownEvent.PARSE, text, text);
        this.owner.trigger(event);
        return event.parsedText;
    }
    /**
     * Triggered before the renderer starts rendering a project.
     *
     * @param event  An event object describing the current render operation.
     */
    onBeginRenderer(event) {
        super.onBeginRenderer(event);
        Marked.marked.setOptions(this.createMarkedOptions());
        delete this.includes;
        if (this.includeSource) {
            if (fs.existsSync(this.includeSource) &&
                fs.statSync(this.includeSource).isDirectory()) {
                this.includes = this.includeSource;
            }
            else {
                this.application.logger.warn("Could not find provided includes directory: " +
                    this.includeSource);
            }
        }
        if (this.mediaSource) {
            if (fs.existsSync(this.mediaSource) &&
                fs.statSync(this.mediaSource).isDirectory()) {
                this.mediaDirectory = Path.join(event.outputDirectory, "media");
                (0, utils_1.copySync)(this.mediaSource, this.mediaDirectory);
            }
            else {
                this.mediaDirectory = undefined;
                this.application.logger.warn("Could not find provided media directory: " +
                    this.mediaSource);
            }
        }
    }
    /**
     * Creates an object with options that are passed to the markdown parser.
     *
     * @returns The options object for the markdown parser.
     */
    createMarkedOptions() {
        var _a, _b, _c, _d;
        const markedOptions = ((_a = this.application.options.getValue("markedOptions")) !== null && _a !== void 0 ? _a : {});
        // Set some default values if they are not specified via the TypeDoc option
        (_b = markedOptions.highlight) !== null && _b !== void 0 ? _b : (markedOptions.highlight = (text, lang) => this.getHighlighted(text, lang));
        (_c = markedOptions.renderer) !== null && _c !== void 0 ? _c : (markedOptions.renderer = customMarkedRenderer);
        (_d = markedOptions.mangle) !== null && _d !== void 0 ? _d : (markedOptions.mangle = false); // See https://github.com/TypeStrong/typedoc/issues/1395
        return markedOptions;
    }
    /**
     * Triggered when {@link MarkedPlugin} parses a markdown string.
     *
     * @param event
     */
    onParseMarkdown(event) {
        event.parsedText = Marked.marked(event.parsedText);
    }
};
__decorate([
    (0, utils_1.BindOption)("includes")
], MarkedPlugin.prototype, "includeSource", void 0);
__decorate([
    (0, utils_1.BindOption)("media")
], MarkedPlugin.prototype, "mediaSource", void 0);
__decorate([
    (0, utils_1.BindOption)("lightHighlightTheme")
], MarkedPlugin.prototype, "lightTheme", void 0);
__decorate([
    (0, utils_1.BindOption)("darkHighlightTheme")
], MarkedPlugin.prototype, "darkTheme", void 0);
MarkedPlugin = __decorate([
    (0, components_1.Component)({ name: "marked" })
], MarkedPlugin);
exports.MarkedPlugin = MarkedPlugin;

}, function(modId) { var map = {"../components":1654179213686,"../events":1654179213681,"../../utils":1654179213624,"../../utils/highlighter":1654179213715}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213721, function(require, module, exports) {

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegendPlugin = exports.LegendBuilder = void 0;
const index_1 = require("../../models/reflections/index");
const components_1 = require("../components");
const events_1 = require("../events");
const ignoredClasses = new Set(["tsd-parent-kind-module", "tsd-is-overwrite"]);
const completeLegend = [
    [
        { name: "Namespace", classes: ["tsd-kind-namespace"] },
        { name: "Object literal", classes: ["tsd-kind-object-literal"] },
        { name: "Variable", classes: ["tsd-kind-variable"] },
        { name: "Function", classes: ["tsd-kind-function"] },
        {
            name: "Function with type parameter",
            classes: ["tsd-kind-function", "tsd-has-type-parameter"],
        },
        { name: "Index signature", classes: ["tsd-kind-index-signature"] },
        { name: "Type alias", classes: ["tsd-kind-type-alias"] },
        {
            name: "Type alias with type parameter",
            classes: ["tsd-kind-type-alias", "tsd-has-type-parameter"],
        },
    ],
    [
        { name: "Enumeration", classes: ["tsd-kind-enum"] },
        { name: "Enumeration Member", classes: ["tsd-kind-enum-member"] },
        {
            name: "Property",
            classes: ["tsd-kind-property", "tsd-parent-kind-enum"],
        },
        {
            name: "Method",
            classes: ["tsd-kind-method", "tsd-parent-kind-enum"],
        },
    ],
    [
        { name: "Interface", classes: ["tsd-kind-interface"] },
        {
            name: "Interface with type parameter",
            classes: ["tsd-kind-interface", "tsd-has-type-parameter"],
        },
        {
            name: "Constructor",
            classes: ["tsd-kind-constructor", "tsd-parent-kind-interface"],
        },
        {
            name: "Property",
            classes: ["tsd-kind-property", "tsd-parent-kind-interface"],
        },
        {
            name: "Method",
            classes: ["tsd-kind-method", "tsd-parent-kind-interface"],
        },
        {
            name: "Index signature",
            classes: ["tsd-kind-index-signature", "tsd-parent-kind-interface"],
        },
    ],
    [
        { name: "Class", classes: ["tsd-kind-class"] },
        {
            name: "Class with type parameter",
            classes: ["tsd-kind-class", "tsd-has-type-parameter"],
        },
        {
            name: "Constructor",
            classes: ["tsd-kind-constructor", "tsd-parent-kind-class"],
        },
        {
            name: "Property",
            classes: ["tsd-kind-property", "tsd-parent-kind-class"],
        },
        {
            name: "Method",
            classes: ["tsd-kind-method", "tsd-parent-kind-class"],
        },
        {
            name: "Accessor",
            classes: ["tsd-kind-accessor", "tsd-parent-kind-class"],
        },
        {
            name: "Index signature",
            classes: ["tsd-kind-index-signature", "tsd-parent-kind-class"],
        },
    ],
    [
        {
            name: "Inherited constructor",
            classes: [
                "tsd-kind-constructor",
                "tsd-parent-kind-class",
                "tsd-is-inherited",
            ],
        },
        {
            name: "Inherited property",
            classes: [
                "tsd-kind-property",
                "tsd-parent-kind-class",
                "tsd-is-inherited",
            ],
        },
        {
            name: "Inherited method",
            classes: [
                "tsd-kind-method",
                "tsd-parent-kind-class",
                "tsd-is-inherited",
            ],
        },
        {
            name: "Inherited accessor",
            classes: [
                "tsd-kind-accessor",
                "tsd-parent-kind-class",
                "tsd-is-inherited",
            ],
        },
    ],
    [
        {
            name: "Protected property",
            classes: [
                "tsd-kind-property",
                "tsd-parent-kind-class",
                "tsd-is-protected",
            ],
        },
        {
            name: "Protected method",
            classes: [
                "tsd-kind-method",
                "tsd-parent-kind-class",
                "tsd-is-protected",
            ],
        },
        {
            name: "Protected accessor",
            classes: [
                "tsd-kind-accessor",
                "tsd-parent-kind-class",
                "tsd-is-protected",
            ],
        },
    ],
    [
        {
            name: "Private property",
            classes: [
                "tsd-kind-property",
                "tsd-parent-kind-class",
                "tsd-is-private",
            ],
        },
        {
            name: "Private method",
            classes: [
                "tsd-kind-method",
                "tsd-parent-kind-class",
                "tsd-is-private",
            ],
        },
        {
            name: "Private accessor",
            classes: [
                "tsd-kind-accessor",
                "tsd-parent-kind-class",
                "tsd-is-private",
            ],
        },
    ],
    [
        {
            name: "Static property",
            classes: [
                "tsd-kind-property",
                "tsd-parent-kind-class",
                "tsd-is-static",
            ],
        },
        {
            name: "Static method",
            classes: [
                "tsd-kind-method",
                "tsd-parent-kind-class",
                "tsd-is-static",
            ],
        },
    ],
];
class LegendBuilder {
    constructor() {
        this._classesList = [];
    }
    build() {
        const filteredLegend = completeLegend
            .map((list) => {
            return list.filter((item) => {
                for (const classes of this._classesList) {
                    if (this.isArrayEqualToSet(item.classes, classes)) {
                        return true;
                    }
                }
                return false;
            });
        })
            .filter((list) => list.length);
        return filteredLegend;
    }
    registerCssClasses(classArray) {
        let exists = false;
        const items = classArray.filter((cls) => !ignoredClasses.has(cls));
        for (const classes of this._classesList) {
            if (this.isArrayEqualToSet(items, classes)) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            this._classesList.push(new Set(items));
        }
    }
    isArrayEqualToSet(a, b) {
        if (a.length !== b.size) {
            return false;
        }
        for (const value of a) {
            if (!b.has(value)) {
                return false;
            }
        }
        return true;
    }
}
exports.LegendBuilder = LegendBuilder;
/**
 * A plugin that generates the legend for the current page.
 *
 * This plugin sets the {@link PageEvent.legend} property.
 */
let LegendPlugin = class LegendPlugin extends components_1.RendererComponent {
    /**
     * Create a new LegendPlugin instance.
     */
    initialize() {
        this.listenTo(this.owner, {
            [events_1.RendererEvent.BEGIN]: this.onRenderBegin,
            [events_1.PageEvent.BEGIN]: this.onRendererBeginPage,
            [events_1.RendererEvent.END]: () => (this._project = void 0),
        });
    }
    onRenderBegin(event) {
        this._project = event.project;
    }
    /**
     * Triggered before a document will be rendered.
     *
     * @param page  An event object describing the current render operation.
     */
    onRendererBeginPage(page) {
        var _a, _b;
        const model = page.model;
        const builder = new LegendBuilder();
        // immediate children
        this.buildLegend(model, builder);
        // top level items (as appears in navigation)
        (_b = (_a = this._project) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.forEach((reflection) => {
            if (reflection !== model) {
                this.buildLegend(reflection, builder);
            }
        });
        page.legend = builder.build().sort((a, b) => b.length - a.length);
    }
    buildLegend(model, builder) {
        var _a, _b;
        if (model instanceof index_1.DeclarationReflection) {
            const children = (model.children || [])
                .concat(...(((_a = model.groups) === null || _a === void 0 ? void 0 : _a.map((group) => group.children)) || []))
                .concat(...model.getAllSignatures())
                .concat(model.indexSignature)
                .filter((item) => item);
            for (const child of children) {
                const cssClasses = (_b = child === null || child === void 0 ? void 0 : child.cssClasses) === null || _b === void 0 ? void 0 : _b.split(" ");
                if (cssClasses) {
                    builder.registerCssClasses(cssClasses);
                }
            }
        }
    }
};
LegendPlugin = __decorate([
    (0, components_1.Component)({ name: "legend" })
], LegendPlugin);
exports.LegendPlugin = LegendPlugin;

}, function(modId) { var map = {"../../models/reflections/index":1654179213612,"../components":1654179213686,"../events":1654179213681}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213722, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONOutput = exports.UnknownTypeSerializer = exports.TypeSerializer = exports.TypeParameterReflectionSerializer = exports.TypeOperatorTypeSerializer = exports.TupleTypeSerializer = exports.SourceReferenceWrapper = exports.SourceReferenceContainerSerializer = exports.SignatureReflectionSerializer = exports.ReflectionTypeSerializer = exports.ReflectionSerializer = exports.ReflectionGroupSerializer = exports.ReflectionCategorySerializer = exports.ReferenceTypeSerializer = exports.ParameterReflectionSerializer = exports.LiteralTypeSerializer = exports.IntrinsicTypeSerializer = exports.IntersectionTypeSerializer = exports.DecoratorWrapper = exports.DecoratorContainerSerializer = exports.DeclarationReflectionSerializer = exports.ContainerReflectionSerializer = exports.CommentTagSerializer = exports.CommentSerializer = exports.ArrayTypeSerializer = exports.Serializer = exports.SerializeEvent = exports.TypeSerializerComponent = exports.SerializerComponent = exports.ReflectionSerializerComponent = void 0;
var components_1 = require("./components");
Object.defineProperty(exports, "ReflectionSerializerComponent", { enumerable: true, get: function () { return components_1.ReflectionSerializerComponent; } });
Object.defineProperty(exports, "SerializerComponent", { enumerable: true, get: function () { return components_1.SerializerComponent; } });
Object.defineProperty(exports, "TypeSerializerComponent", { enumerable: true, get: function () { return components_1.TypeSerializerComponent; } });
var events_1 = require("./events");
Object.defineProperty(exports, "SerializeEvent", { enumerable: true, get: function () { return events_1.SerializeEvent; } });
var serializer_1 = require("./serializer");
Object.defineProperty(exports, "Serializer", { enumerable: true, get: function () { return serializer_1.Serializer; } });
var serializers_1 = require("./serializers");
Object.defineProperty(exports, "ArrayTypeSerializer", { enumerable: true, get: function () { return serializers_1.ArrayTypeSerializer; } });
Object.defineProperty(exports, "CommentSerializer", { enumerable: true, get: function () { return serializers_1.CommentSerializer; } });
Object.defineProperty(exports, "CommentTagSerializer", { enumerable: true, get: function () { return serializers_1.CommentTagSerializer; } });
Object.defineProperty(exports, "ContainerReflectionSerializer", { enumerable: true, get: function () { return serializers_1.ContainerReflectionSerializer; } });
Object.defineProperty(exports, "DeclarationReflectionSerializer", { enumerable: true, get: function () { return serializers_1.DeclarationReflectionSerializer; } });
Object.defineProperty(exports, "DecoratorContainerSerializer", { enumerable: true, get: function () { return serializers_1.DecoratorContainerSerializer; } });
Object.defineProperty(exports, "DecoratorWrapper", { enumerable: true, get: function () { return serializers_1.DecoratorWrapper; } });
Object.defineProperty(exports, "IntersectionTypeSerializer", { enumerable: true, get: function () { return serializers_1.IntersectionTypeSerializer; } });
Object.defineProperty(exports, "IntrinsicTypeSerializer", { enumerable: true, get: function () { return serializers_1.IntrinsicTypeSerializer; } });
Object.defineProperty(exports, "LiteralTypeSerializer", { enumerable: true, get: function () { return serializers_1.LiteralTypeSerializer; } });
Object.defineProperty(exports, "ParameterReflectionSerializer", { enumerable: true, get: function () { return serializers_1.ParameterReflectionSerializer; } });
Object.defineProperty(exports, "ReferenceTypeSerializer", { enumerable: true, get: function () { return serializers_1.ReferenceTypeSerializer; } });
Object.defineProperty(exports, "ReflectionCategorySerializer", { enumerable: true, get: function () { return serializers_1.ReflectionCategorySerializer; } });
Object.defineProperty(exports, "ReflectionGroupSerializer", { enumerable: true, get: function () { return serializers_1.ReflectionGroupSerializer; } });
Object.defineProperty(exports, "ReflectionSerializer", { enumerable: true, get: function () { return serializers_1.ReflectionSerializer; } });
Object.defineProperty(exports, "ReflectionTypeSerializer", { enumerable: true, get: function () { return serializers_1.ReflectionTypeSerializer; } });
Object.defineProperty(exports, "SignatureReflectionSerializer", { enumerable: true, get: function () { return serializers_1.SignatureReflectionSerializer; } });
Object.defineProperty(exports, "SourceReferenceContainerSerializer", { enumerable: true, get: function () { return serializers_1.SourceReferenceContainerSerializer; } });
Object.defineProperty(exports, "SourceReferenceWrapper", { enumerable: true, get: function () { return serializers_1.SourceReferenceWrapper; } });
Object.defineProperty(exports, "TupleTypeSerializer", { enumerable: true, get: function () { return serializers_1.TupleTypeSerializer; } });
Object.defineProperty(exports, "TypeOperatorTypeSerializer", { enumerable: true, get: function () { return serializers_1.TypeOperatorTypeSerializer; } });
Object.defineProperty(exports, "TypeParameterReflectionSerializer", { enumerable: true, get: function () { return serializers_1.TypeParameterReflectionSerializer; } });
Object.defineProperty(exports, "TypeSerializer", { enumerable: true, get: function () { return serializers_1.TypeSerializer; } });
Object.defineProperty(exports, "UnknownTypeSerializer", { enumerable: true, get: function () { return serializers_1.UnknownTypeSerializer; } });
const JSONOutput = require("./schema");
exports.JSONOutput = JSONOutput;

}, function(modId) { var map = {"./components":1654179213723,"./events":1654179213724,"./serializer":1654179213725,"./serializers":1654179213726,"./schema":1654179213767}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213723, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSerializerComponent = exports.ReflectionSerializerComponent = exports.SerializerComponent = void 0;
const models_1 = require("../models");
/**
 * Represents Serializer plugin component.
 *
 * Like {@link Converter} plugins each {@link Serializer} plugin defines a predicate that instructs if an
 * object can be serialized by it, this is done dynamically at runtime via a `supports` method.
 *
 * Additionally, each {@link Serializer} plugin must define a predicate that instructs the group
 * it belongs to.
 *
 * Serializers are grouped to improve performance when finding serializers that apply to a node,
 * this makes it possible to skip the `supports` calls for `Type`s when searching for a
 * `Reflection` and vise versa.
 */
class SerializerComponent {
    constructor(owner) {
        this.owner = owner;
    }
    /**
     * The priority this serializer should be executed with.
     * A higher priority means the {@link Serializer} will be applied earlier.
     */
    get priority() {
        return (this.constructor["PRIORITY"] ||
            SerializerComponent.PRIORITY);
    }
}
exports.SerializerComponent = SerializerComponent;
/**
 * The priority this serializer should be executed with.
 * A higher priority means the {@link Serializer} will be applied earlier.
 */
SerializerComponent.PRIORITY = 0;
class ReflectionSerializerComponent extends SerializerComponent {
    /**
     * Filter for instances of {@link Reflection}
     */
    serializeGroup(instance) {
        return instance instanceof models_1.Reflection;
    }
}
exports.ReflectionSerializerComponent = ReflectionSerializerComponent;
class TypeSerializerComponent extends SerializerComponent {
    /**
     * Filter for instances of {@link Type}
     */
    serializeGroup(instance) {
        return instance instanceof models_1.Type;
    }
}
exports.TypeSerializerComponent = TypeSerializerComponent;

}, function(modId) { var map = {"../models":1654179213611}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213724, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SerializeEvent = void 0;
const events_1 = require("../utils/events");
/**
 * An event emitted by the {@link Serializer} class at the very beginning and
 * ending of the a project serialization process.
 *
 * @see {@link Serializer.EVENT_BEGIN}
 * @see {@link Serializer.EVENT_END}
 */
class SerializeEvent extends events_1.Event {
    constructor(name, project, output) {
        super(name);
        this.project = project;
        this.output = output;
    }
}
exports.SerializeEvent = SerializeEvent;

}, function(modId) { var map = {"../utils/events":1654179213606}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213725, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = void 0;
const utils_1 = require("../utils");
const events_1 = require("./events");
const S = require("./serializers");
class Serializer extends utils_1.EventDispatcher {
    constructor() {
        super();
        /**
         * Serializers, sorted by their `serializeGroup` function to enable higher performance.
         */
        this.serializers = new Map();
        addSerializers(this);
    }
    addSerializer(serializer) {
        let group = this.serializers.get(serializer.serializeGroup);
        if (!group) {
            this.serializers.set(serializer.serializeGroup, (group = []));
        }
        group.push(serializer);
        group.sort((a, b) => b.priority - a.priority);
    }
    toObject(value, init = {}) {
        if (value == null || typeof value !== "object") {
            return value; // Serializing some primitive
        }
        if (Array.isArray(value)) {
            if (value.length === 0) {
                return undefined;
            }
            return value.map((val) => this.toObject(val));
        }
        // Note: This type *could* potentially lie, if a serializer declares a partial type but fails to provide
        // the defined property, but the benefit of being mostly typed is probably worth it.
        // TypeScript errors out if init is correctly typed as `Partial<ModelToObject<T>>`
        return this.findSerializers(value).reduce((result, curr) => curr.toObject(value, result), init);
    }
    /**
     * Same as toObject but emits {@link Serializer.EVENT_BEGIN} and {@link Serializer.EVENT_END} events.
     * @param value
     * @param eventData Partial information to set in the event
     */
    projectToObject(value, eventData = {}) {
        const eventBegin = new events_1.SerializeEvent(Serializer.EVENT_BEGIN, value, {});
        if (eventData.begin) {
            eventBegin.outputDirectory = eventData.begin.outputDirectory;
            eventBegin.outputFile = eventData.begin.outputFile;
        }
        this.trigger(eventBegin);
        const project = this.toObject(value, eventBegin.output);
        const eventEnd = new events_1.SerializeEvent(Serializer.EVENT_END, value, project);
        if (eventData.end) {
            eventBegin.outputDirectory = eventData.end.outputDirectory;
            eventBegin.outputFile = eventData.end.outputFile;
        }
        this.trigger(eventEnd);
        return project;
    }
    findSerializers(value) {
        const routes = [];
        for (const [groupSupports, components] of this.serializers.entries()) {
            if (groupSupports(value)) {
                for (const component of components) {
                    if (component.supports(value)) {
                        routes.push(component);
                    }
                }
            }
        }
        return routes;
    }
}
exports.Serializer = Serializer;
/**
 * Triggered when the {@link Serializer} begins transforming a project.
 * @event EVENT_BEGIN
 */
Serializer.EVENT_BEGIN = "begin";
/**
 * Triggered when the {@link Serializer} has finished transforming a project.
 * @event EVENT_END
 */
Serializer.EVENT_END = "end";
const serializerComponents = [
    S.CommentTagSerializer,
    S.CommentSerializer,
    S.ReflectionSerializer,
    S.ReferenceReflectionSerializer,
    S.ContainerReflectionSerializer,
    S.DeclarationReflectionSerializer,
    S.ParameterReflectionSerializer,
    S.SignatureReflectionSerializer,
    S.TypeParameterReflectionSerializer,
    S.SourceReferenceContainerSerializer,
    S.TypeSerializer,
    S.ArrayTypeSerializer,
    S.ConditionalTypeSerializer,
    S.IndexedAccessTypeSerializer,
    S.InferredTypeSerializer,
    S.IntersectionTypeSerializer,
    S.IntrinsicTypeSerializer,
    S.OptionalTypeSerializer,
    S.PredicateTypeSerializer,
    S.QueryTypeSerializer,
    S.ReferenceTypeSerializer,
    S.ReferenceTypeSerializer,
    S.ReflectionTypeSerializer,
    S.RestTypeSerializer,
    S.LiteralTypeSerializer,
    S.TupleTypeSerializer,
    S.TemplateLiteralTypeSerializer,
    S.NamedTupleMemberTypeSerializer,
    S.MappedTypeSerializer,
    S.TypeOperatorTypeSerializer,
    S.UnionTypeSerializer,
    S.UnknownTypeSerializer,
    S.DecoratorContainerSerializer,
    S.ReflectionCategorySerializer,
    S.ReflectionGroupSerializer,
];
function addSerializers(owner) {
    for (const component of serializerComponents) {
        owner.addSerializer(new component(owner));
    }
}

}, function(modId) { var map = {"../utils":1654179213624,"./events":1654179213724,"./serializers":1654179213726}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213726, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./reflections"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./comments"), exports);
__exportStar(require("./sources"), exports);
__exportStar(require("./decorator"), exports);
__exportStar(require("./reflection-group"), exports);
__exportStar(require("./reflection-category"), exports);
__exportStar(require("./models"), exports);

}, function(modId) { var map = {"./reflections":1654179213727,"./types":1654179213738,"./comments":1654179213759,"./sources":1654179213762,"./decorator":1654179213764,"./reflection-group":1654179213765,"./reflection-category":1654179213766,"./models":1654179213729}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213727, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./abstract"), exports);
__exportStar(require("./container"), exports);
__exportStar(require("./declaration"), exports);
__exportStar(require("./parameter"), exports);
__exportStar(require("./reference"), exports);
__exportStar(require("./signature"), exports);
__exportStar(require("./type-parameter"), exports);

}, function(modId) { var map = {"./abstract":1654179213728,"./container":1654179213732,"./declaration":1654179213733,"./parameter":1654179213734,"./reference":1654179213735,"./signature":1654179213736,"./type-parameter":1654179213737}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213728, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
const models_2 = require("../models");
class ReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.Reflection;
    }
    toObject(reflection, obj) {
        var _a;
        const result = {
            ...obj,
            id: reflection.id,
            name: reflection.name,
            kind: reflection.kind,
            kindString: reflection.kindString,
            flags: {},
            comment: this.owner.toObject(reflection.comment),
            decorates: this.owner.toObject(reflection.decorates),
            decorators: this.owner.toObject((_a = reflection.decorators) === null || _a === void 0 ? void 0 : _a.map((d) => new models_2.DecoratorWrapper(d))),
        };
        if (reflection.originalName !== reflection.name) {
            result.originalName = reflection.originalName;
        }
        const flags = [
            "isPrivate",
            "isProtected",
            "isPublic",
            "isStatic",
            "isExternal",
            "isOptional",
            "isRest",
            "hasExportAssignment",
            "isAbstract",
            "isConst",
            "isReadonly",
        ];
        for (const key of flags) {
            if (reflection.flags[key] === true) {
                result.flags[key] = true;
            }
        }
        return result;
    }
}
exports.ReflectionSerializer = ReflectionSerializer;
ReflectionSerializer.PRIORITY = 1000;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723,"../models":1654179213729}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213729, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorWrapper = exports.SourceReferenceWrapper = void 0;
var source_reference_wrapper_1 = require("./source-reference-wrapper");
Object.defineProperty(exports, "SourceReferenceWrapper", { enumerable: true, get: function () { return source_reference_wrapper_1.SourceReferenceWrapper; } });
var decorator_wrapper_1 = require("./decorator-wrapper");
Object.defineProperty(exports, "DecoratorWrapper", { enumerable: true, get: function () { return decorator_wrapper_1.DecoratorWrapper; } });

}, function(modId) { var map = {"./source-reference-wrapper":1654179213730,"./decorator-wrapper":1654179213731}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213730, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceReferenceWrapper = void 0;
/**
 * An internal concrete implementation for the [[ SourceReference ]] interface
 * so it can be identified
 */
class SourceReferenceWrapper {
    constructor(sourceReference) {
        this.sourceReference = sourceReference;
    }
}
exports.SourceReferenceWrapper = SourceReferenceWrapper;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213731, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorWrapper = void 0;
/**
 * An internal concrete implementation for the {@link Decorator} interface
 * so it can be identified
 */
class DecoratorWrapper {
    constructor(decorator) {
        this.decorator = decorator;
    }
}
exports.DecoratorWrapper = DecoratorWrapper;

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213732, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerReflectionSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
const models_2 = require("../models");
class ContainerReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.ContainerReflection;
    }
    /**
     * Will be run after {@link ReflectionSerializer} so will be passed the result of that serialization.
     * @param container
     * @param obj
     */
    toObject(container, obj) {
        var _a;
        return {
            ...obj,
            children: this.owner.toObject(container.children),
            groups: this.owner.toObject(container.groups),
            categories: this.owner.toObject(container.categories),
            sources: this.owner.toObject((_a = container.sources) === null || _a === void 0 ? void 0 : _a.map((s) => new models_2.SourceReferenceWrapper(s))),
        };
    }
}
exports.ContainerReflectionSerializer = ContainerReflectionSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723,"../models":1654179213729}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213733, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DeclarationReflectionSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
const container_1 = require("./container");
class DeclarationReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.DeclarationReflection;
    }
    toObject(d, obj) {
        const result = {
            ...obj,
            typeParameter: this.owner.toObject(d.typeParameters),
            type: this.owner.toObject(d.type),
            signatures: this.owner.toObject(d.signatures),
            indexSignature: this.owner.toObject(d.indexSignature),
        };
        if (d.getSignature) {
            result.getSignature = [this.owner.toObject(d.getSignature)];
        }
        if (d.setSignature) {
            result.setSignature = [this.owner.toObject(d.setSignature)];
        }
        return Object.assign(result, {
            defaultValue: this.owner.toObject(d.defaultValue),
            overwrites: this.owner.toObject(d.overwrites),
            inheritedFrom: this.owner.toObject(d.inheritedFrom),
            implementationOf: this.owner.toObject(d.implementationOf),
            extendedTypes: this.owner.toObject(d.extendedTypes),
            extendedBy: this.owner.toObject(d.extendedBy),
            implementedTypes: this.owner.toObject(d.implementedTypes),
            implementedBy: this.owner.toObject(d.implementedBy),
        });
    }
}
exports.DeclarationReflectionSerializer = DeclarationReflectionSerializer;
DeclarationReflectionSerializer.PRIORITY = container_1.ContainerReflectionSerializer.PRIORITY - 1; // mimic inheritance, run after parent

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723,"./container":1654179213732}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213734, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterReflectionSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ParameterReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.ParameterReflection;
    }
    toObject(parameter, obj) {
        const result = {
            ...obj,
            type: this.owner.toObject(parameter.type),
            defaultValue: this.owner.toObject(parameter.defaultValue),
        };
        return result;
    }
}
exports.ParameterReflectionSerializer = ParameterReflectionSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213735, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceReflectionSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
const declaration_1 = require("./declaration");
class ReferenceReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.ReferenceReflection;
    }
    toObject(ref, obj) {
        var _a, _b;
        return {
            ...obj,
            target: (_b = (_a = ref.tryGetTargetReflection()) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : -1,
        };
    }
}
exports.ReferenceReflectionSerializer = ReferenceReflectionSerializer;
ReferenceReflectionSerializer.PRIORITY = declaration_1.DeclarationReflectionSerializer.PRIORITY - 1;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723,"./declaration":1654179213733}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213736, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SignatureReflectionSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class SignatureReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.SignatureReflection;
    }
    toObject(signature, obj) {
        return {
            ...obj,
            typeParameter: this.owner.toObject(signature.typeParameters),
            parameters: this.owner.toObject(signature.parameters),
            type: this.owner.toObject(signature.type),
            overwrites: this.owner.toObject(signature.overwrites),
            inheritedFrom: this.owner.toObject(signature.inheritedFrom),
            implementationOf: this.owner.toObject(signature.implementationOf),
        };
    }
}
exports.SignatureReflectionSerializer = SignatureReflectionSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213737, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeParameterReflectionSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TypeParameterReflectionSerializer extends components_1.ReflectionSerializerComponent {
    supports(t) {
        return t instanceof models_1.TypeParameterReflection;
    }
    toObject(typeParameter, obj) {
        return {
            ...obj,
            type: this.owner.toObject(typeParameter.type),
            default: this.owner.toObject(typeParameter.default),
            varianceModifier: typeParameter.varianceModifier,
        };
    }
}
exports.TypeParameterReflectionSerializer = TypeParameterReflectionSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213738, function(require, module, exports) {

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./abstract"), exports);
__exportStar(require("./array"), exports);
__exportStar(require("./conditional"), exports);
__exportStar(require("./indexed-access"), exports);
__exportStar(require("./inferred"), exports);
__exportStar(require("./intersection"), exports);
__exportStar(require("./intrinsic"), exports);
__exportStar(require("./literal"), exports);
__exportStar(require("./mapped"), exports);
__exportStar(require("./optional"), exports);
__exportStar(require("./predicate"), exports);
__exportStar(require("./query"), exports);
__exportStar(require("./reference"), exports);
__exportStar(require("./reflection"), exports);
__exportStar(require("./rest"), exports);
__exportStar(require("./template-literal"), exports);
__exportStar(require("./tuple"), exports);
__exportStar(require("./type-operator"), exports);
__exportStar(require("./union"), exports);
__exportStar(require("./unknown"), exports);

}, function(modId) { var map = {"./abstract":1654179213739,"./array":1654179213740,"./conditional":1654179213741,"./indexed-access":1654179213742,"./inferred":1654179213743,"./intersection":1654179213744,"./intrinsic":1654179213745,"./literal":1654179213746,"./mapped":1654179213747,"./optional":1654179213748,"./predicate":1654179213749,"./query":1654179213750,"./reference":1654179213751,"./reflection":1654179213752,"./rest":1654179213753,"./template-literal":1654179213754,"./tuple":1654179213755,"./type-operator":1654179213756,"./union":1654179213757,"./unknown":1654179213758}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213739, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.Type;
    }
    toObject(type, obj) {
        return {
            ...obj,
            type: type.type,
        };
    }
}
exports.TypeSerializer = TypeSerializer;
TypeSerializer.PRIORITY = 1000;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213740, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ArrayTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.ArrayType;
    }
    /**
     * Will be run after {@link TypeSerializer} so `type` will already be set.
     * @param type
     * @param obj
     */
    toObject(type, obj) {
        return {
            ...obj,
            elementType: this.owner.toObject(type.elementType),
        };
    }
}
exports.ArrayTypeSerializer = ArrayTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213741, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionalTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ConditionalTypeSerializer extends components_1.TypeSerializerComponent {
    supports(item) {
        return item instanceof models_1.ConditionalType;
    }
    toObject(conditional, obj) {
        return {
            ...obj,
            checkType: this.owner.toObject(conditional.checkType),
            extendsType: this.owner.toObject(conditional.extendsType),
            trueType: this.owner.toObject(conditional.trueType),
            falseType: this.owner.toObject(conditional.falseType),
        };
    }
}
exports.ConditionalTypeSerializer = ConditionalTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213742, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexedAccessTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class IndexedAccessTypeSerializer extends components_1.TypeSerializerComponent {
    supports(item) {
        return item instanceof models_1.IndexedAccessType;
    }
    toObject(type, obj) {
        return {
            ...obj,
            indexType: this.owner.toObject(type.indexType),
            objectType: this.owner.toObject(type.objectType),
        };
    }
}
exports.IndexedAccessTypeSerializer = IndexedAccessTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213743, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.InferredTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class InferredTypeSerializer extends components_1.TypeSerializerComponent {
    supports(item) {
        return item instanceof models_1.InferredType;
    }
    toObject(inferred, obj) {
        return {
            ...obj,
            name: inferred.name,
            constraint: inferred.constraint
                ? this.owner.toObject(inferred.constraint)
                : undefined,
        };
    }
}
exports.InferredTypeSerializer = InferredTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213744, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntersectionTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class IntersectionTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.IntersectionType;
    }
    /**
     * Will be run after {@link TypeSerializer} so `type` will already be set.
     * @param type
     * @param obj
     */
    toObject(type, obj) {
        return {
            ...obj,
            types: type.types.map((t) => this.owner.toObject(t)),
        };
    }
}
exports.IntersectionTypeSerializer = IntersectionTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213745, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.IntrinsicTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class IntrinsicTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.IntrinsicType;
    }
    /**
     * Will be run after {@link TypeSerializer} so `type` will already be set.
     * @param type
     * @param obj
     */
    toObject(type, obj) {
        return {
            ...obj,
            name: type.name,
        };
    }
}
exports.IntrinsicTypeSerializer = IntrinsicTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213746, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.LiteralTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class LiteralTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.LiteralType;
    }
    toObject(type, obj) {
        if (typeof type.value === "bigint") {
            return {
                ...obj,
                value: {
                    value: type.value.toString().replace("-", ""),
                    negative: type.value < BigInt("0"),
                },
            };
        }
        return {
            ...obj,
            value: type.value,
        };
    }
}
exports.LiteralTypeSerializer = LiteralTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213747, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.MappedTypeSerializer = void 0;
const components_1 = require("../../components");
const models_1 = require("../../../models");
class MappedTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.MappedType;
    }
    toObject(map, obj) {
        return {
            ...obj,
            parameter: map.parameter,
            parameterType: this.owner.toObject(map.parameterType),
            templateType: this.owner.toObject(map.templateType),
            readonlyModifier: map.readonlyModifier,
            optionalModifier: map.optionalModifier,
            nameType: this.owner.toObject(map.nameType),
        };
    }
}
exports.MappedTypeSerializer = MappedTypeSerializer;

}, function(modId) { var map = {"../../components":1654179213723,"../../../models":1654179213611}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213748, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class OptionalTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.OptionalType;
    }
    /**
     * Will be run after {@link TypeSerializer} so `type` will already be set.
     * @param type
     * @param obj
     */
    toObject(type, obj) {
        return {
            ...obj,
            elementType: this.owner.toObject(type.elementType),
        };
    }
}
exports.OptionalTypeSerializer = OptionalTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213749, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.PredicateTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class PredicateTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.PredicateType;
    }
    toObject(type, obj) {
        return {
            ...obj,
            name: type.name,
            asserts: type.asserts,
            targetType: type.targetType
                ? this.owner.toObject(type.targetType)
                : undefined,
        };
    }
}
exports.PredicateTypeSerializer = PredicateTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213750, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class QueryTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.QueryType;
    }
    toObject(type, obj) {
        return {
            ...obj,
            queryType: this.owner.toObject(type.queryType),
        };
    }
}
exports.QueryTypeSerializer = QueryTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213751, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ReferenceTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.ReferenceType;
    }
    toObject(type, obj) {
        if (type.reflection) {
            obj.id = type.reflection.id;
        }
        if (type.typeArguments && type.typeArguments.length > 0) {
            obj.typeArguments = type.typeArguments.map((t) => this.owner.toObject(t));
        }
        if (type.qualifiedName && type.package) {
            obj.qualifiedName = type.qualifiedName;
            obj.package = type.package;
        }
        return {
            ...obj,
            name: type.name,
        };
    }
}
exports.ReferenceTypeSerializer = ReferenceTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213752, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class ReflectionTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.ReflectionType;
    }
    toObject(reference, obj) {
        const result = {
            ...obj,
            declaration: this.owner.toObject(reference.declaration),
        };
        return result;
    }
}
exports.ReflectionTypeSerializer = ReflectionTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213753, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.RestTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class RestTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.RestType;
    }
    /**
     * Will be run after {@link TypeSerializer} so `type` will already be set.
     * @param type
     * @param obj
     */
    toObject(type, obj) {
        return {
            ...obj,
            elementType: this.owner.toObject(type.elementType),
        };
    }
}
exports.RestTypeSerializer = RestTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213754, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateLiteralTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TemplateLiteralTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.TemplateLiteralType;
    }
    toObject(type, obj) {
        return {
            ...obj,
            head: type.head,
            tail: type.tail.map(([type, text]) => [
                this.owner.toObject(type),
                text,
            ]),
        };
    }
}
exports.TemplateLiteralTypeSerializer = TemplateLiteralTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213755, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedTupleMemberTypeSerializer = exports.TupleTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TupleTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.TupleType;
    }
    toObject(tuple, obj) {
        const result = { ...obj };
        if (tuple.elements && tuple.elements.length > 0) {
            result.elements = tuple.elements.map((t) => this.owner.toObject(t));
        }
        return result;
    }
}
exports.TupleTypeSerializer = TupleTypeSerializer;
class NamedTupleMemberTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.NamedTupleMember;
    }
    toObject(tuple, obj) {
        return {
            ...obj,
            name: tuple.name,
            isOptional: tuple.isOptional,
            element: this.owner.toObject(tuple.element),
        };
    }
}
exports.NamedTupleMemberTypeSerializer = NamedTupleMemberTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213756, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOperatorTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class TypeOperatorTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.TypeOperatorType;
    }
    toObject(type, obj) {
        return {
            ...obj,
            operator: type.operator,
            target: this.owner.toObject(type.target),
        };
    }
}
exports.TypeOperatorTypeSerializer = TypeOperatorTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213757, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnionTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class UnionTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.UnionType;
    }
    /**
     * Will be run after {@link TypeSerializer} so `type` will already be set.
     * @param type
     * @param obj
     */
    toObject(type, obj) {
        return {
            ...obj,
            types: type.types.map((t) => this.owner.toObject(t)),
        };
    }
}
exports.UnionTypeSerializer = UnionTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213758, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.UnknownTypeSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class UnknownTypeSerializer extends components_1.TypeSerializerComponent {
    supports(t) {
        return t instanceof models_1.UnknownType;
    }
    /**
     * Will be run after {@link TypeSerializer} so `type` will already be set.
     * @param type
     * @param obj
     */
    toObject(type, obj) {
        return {
            ...obj,
            name: type.name,
        };
    }
}
exports.UnknownTypeSerializer = UnknownTypeSerializer;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213759, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentTagSerializer = exports.CommentSerializer = void 0;
var comment_1 = require("./comment");
Object.defineProperty(exports, "CommentSerializer", { enumerable: true, get: function () { return comment_1.CommentSerializer; } });
var comment_tag_1 = require("./comment-tag");
Object.defineProperty(exports, "CommentTagSerializer", { enumerable: true, get: function () { return comment_tag_1.CommentTagSerializer; } });

}, function(modId) { var map = {"./comment":1654179213760,"./comment-tag":1654179213761}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213760, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class CommentSerializer extends components_1.SerializerComponent {
    /**
     * Filter for instances of {@link Comment}
     */
    serializeGroup(instance) {
        return instance instanceof models_1.Comment;
    }
    supports() {
        return true;
    }
    toObject(comment, obj = {}) {
        if (comment.shortText) {
            obj.shortText = comment.shortText;
        }
        if (comment.text) {
            obj.text = comment.text;
        }
        if (comment.returns) {
            obj.returns = comment.returns;
        }
        if (comment.tags.length) {
            obj.tags = comment.tags.map((tag) => this.owner.toObject(tag));
        }
        return obj;
    }
}
exports.CommentSerializer = CommentSerializer;
CommentSerializer.PRIORITY = 1000;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213761, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentTagSerializer = void 0;
const models_1 = require("../../../models");
const components_1 = require("../../components");
class CommentTagSerializer extends components_1.SerializerComponent {
    /**
     * Filter for instances of {@link CommentTag}
     */
    serializeGroup(instance) {
        return instance instanceof models_1.CommentTag;
    }
    supports(_t) {
        return true;
    }
    toObject(tag, obj = {}) {
        const result = {
            tag: tag.tagName,
            text: tag.text,
        };
        if (tag.paramName) {
            result.param = tag.paramName;
        }
        return { ...obj, ...result };
    }
}
exports.CommentTagSerializer = CommentTagSerializer;
CommentTagSerializer.PRIORITY = 1000;

}, function(modId) { var map = {"../../../models":1654179213611,"../../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213762, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceReferenceContainerSerializer = void 0;
var source_reference_1 = require("./source-reference");
Object.defineProperty(exports, "SourceReferenceContainerSerializer", { enumerable: true, get: function () { return source_reference_1.SourceReferenceContainerSerializer; } });

}, function(modId) { var map = {"./source-reference":1654179213763}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213763, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.SourceReferenceContainerSerializer = void 0;
const components_1 = require("../../components");
const models_1 = require("../models");
class SourceReferenceContainerSerializer extends components_1.SerializerComponent {
    serializeGroup(instance) {
        return instance instanceof models_1.SourceReferenceWrapper;
    }
    supports() {
        return true;
    }
    toObject({ sourceReference: ref }, obj) {
        return {
            ...obj,
            fileName: ref.fileName,
            line: ref.line,
            character: ref.character,
        };
    }
}
exports.SourceReferenceContainerSerializer = SourceReferenceContainerSerializer;
SourceReferenceContainerSerializer.PRIORITY = 1000;

}, function(modId) { var map = {"../../components":1654179213723,"../models":1654179213729}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213764, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.DecoratorContainerSerializer = void 0;
const components_1 = require("../components");
const decorator_wrapper_1 = require("./models/decorator-wrapper");
class DecoratorContainerSerializer extends components_1.SerializerComponent {
    /**
     * Filter for instances of {@link DecoratorWrapper}
     */
    serializeGroup(instance) {
        return instance instanceof decorator_wrapper_1.DecoratorWrapper;
    }
    supports() {
        return true;
    }
    toObject({ decorator }, obj) {
        const result = {
            ...obj,
            name: decorator.name,
        };
        if (decorator.type) {
            result.type = this.owner.toObject(decorator.type);
        }
        if (decorator.arguments) {
            result.arguments = decorator.arguments;
        }
        return result;
    }
}
exports.DecoratorContainerSerializer = DecoratorContainerSerializer;
DecoratorContainerSerializer.PRIORITY = 1000;

}, function(modId) { var map = {"../components":1654179213723,"./models/decorator-wrapper":1654179213731}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213765, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionGroupSerializer = void 0;
const ReflectionGroup_1 = require("../../models/ReflectionGroup");
const components_1 = require("../components");
class ReflectionGroupSerializer extends components_1.SerializerComponent {
    /**
     * Filter for instances of {@link ReflectionGroup}
     */
    serializeGroup(instance) {
        return instance instanceof ReflectionGroup_1.ReflectionGroup;
    }
    supports() {
        return true;
    }
    toObject(group, obj) {
        const result = {
            ...obj,
            title: group.title,
            kind: group.kind,
        };
        if (group.children && group.children.length > 0) {
            result.children = group.children.map((child) => child.id);
        }
        if (group.categories && group.categories.length > 0) {
            result.categories = group.categories.map((category) => this.owner.toObject(category));
        }
        return result;
    }
}
exports.ReflectionGroupSerializer = ReflectionGroupSerializer;
ReflectionGroupSerializer.PRIORITY = 1000;

}, function(modId) { var map = {"../../models/ReflectionGroup":1654179213648,"../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213766, function(require, module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.ReflectionCategorySerializer = void 0;
const ReflectionCategory_1 = require("../../models/ReflectionCategory");
const components_1 = require("../components");
class ReflectionCategorySerializer extends components_1.SerializerComponent {
    /**
     * Filter for instances of {@link ReflectionCategory}
     */
    serializeGroup(instance) {
        return instance instanceof ReflectionCategory_1.ReflectionCategory;
    }
    supports(r) {
        return r instanceof ReflectionCategory_1.ReflectionCategory;
    }
    toObject(category, obj) {
        const result = {
            ...obj,
            title: category.title,
        };
        if (category.children && category.children.length > 0) {
            result.children = category.children.map((child) => child.id);
        }
        return result;
    }
}
exports.ReflectionCategorySerializer = ReflectionCategorySerializer;
ReflectionCategorySerializer.PRIORITY = 1000;

}, function(modId) { var map = {"../../models/ReflectionCategory":1654179213649,"../components":1654179213723}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1654179213767, function(require, module, exports) {

/**
 * Contains interfaces which describe the JSON output. Each interface is related to a specific type of serializer.
 *
 * ## Plugins
 * Plugins which modify the serialization process can use declaration merging
 * to add custom properties to the exported interfaces.
 * For example, if your custom serializer adds a property to all {@link Reflection} objects:
 * ```ts
 * declare module 'typedoc/dist/lib/serialization/schema' {
 *     export interface AbstractReflection {
 *         myCustomProp: boolean
 *     }
 * }
 * ```
 *
 * If a plugin defines a new Model type, {@link ModelToObject} will not pick up the serializer type and
 * the resulting type will not be included in the return type of {@link Serializer.toObject}.
 * To fix this, use declaration merging to augment the {@link Serializer} class.
 * ```ts
 * declare module 'typedoc/dist/lib/serialization/serializer' {
 *     export interface Serializer {
 *         toObject(value: CustomModel, obj?: Partial<CustomModel>): CustomOutput
 *     }
 * }
 * ```
 *
 * For documentation on the JSON output properties, view the corresponding model.
 * @module
 */
Object.defineProperty(exports, "__esModule", { value: true });

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1654179213604);
})()
//miniprogram-npm-outsideDeps=["./lib/application","typescript","assert","path","./plugins","./entry-point","inspector","shiki","../../entry-point","fs","./context","minimatch","child_process","lunr","util","marked"]
//# sourceMappingURL=index.js.map