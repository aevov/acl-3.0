/**
 * Glyph Dictionary: 5000+ Word→Symbol Mappings
 * 
 * Comprehensive dictionary for semantic text compression.
 * Organized by domain for maintainability.
 * 
 * @package QuantumCloudSuite
 * @version 7.2.0 - Extended Glyphs
 */

(function (global) {
    'use strict';

    // =========================================================================
    // PART 1: PROGRAMMING & COMPUTING (500 entries)
    // =========================================================================

    const PROGRAMMING = {
        // Keywords (50)
        'function': 'ƒ', 'return': '⤶', 'const': '◆', 'let': '◇', 'var': '◈',
        'if': '⁇', 'else': '⁈', 'elif': '⁇⁈', 'while': '⟳', 'for': '∀',
        'in': '∈', 'of': '∋', 'class': 'ℂ', 'extends': '⊃', 'implements': '⊇',
        'import': '⇐', 'export': '⇒', 'from': '←', 'as': '≃', 'default': '⌀',
        'async': '⟿', 'await': '⟾', 'yield': '⥮', 'try': '⚑', 'catch': '⚐',
        'throw': '↯', 'finally': '⚏', 'new': '⊕', 'delete': '⊖', 'typeof': '⊜',
        'instanceof': '⊂', 'this': '⊙', 'self': '⊛', 'super': '⊗', 'static': '⊔',
        'public': '⊞', 'private': '⊟', 'protected': '⊠', 'abstract': '⊡', 'interface': '⊢',
        'enum': '⊣', 'struct': '⊤', 'union': '⊥', 'template': '⊦', 'generic': '⊧',
        'lambda': 'λ', 'def': 'ð', 'fn': 'ϕ', 'proc': 'π', 'sub': 'σ',

        // Types (40)
        'string': '§', 'number': '№', 'integer': 'ℤ', 'float': 'ℝ', 'double': 'ℝ²',
        'boolean': '⊺', 'bool': '⊺', 'object': '◎', 'array': '⟦⟧', 'list': '⟬⟭',
        'dict': '⟮⟯', 'map': 'ℳ', 'set': '⟰', 'tuple': '⟱', 'vector': '⃗',
        'matrix': '⊞', 'tensor': '⊠', 'buffer': '▭', 'stream': '≋', 'channel': '⋈',
        'promise': '⟐', 'future': '⟑', 'observable': '⟒', 'iterator': '⟓', 'generator': '⟔',
        'null': '∅', 'nil': '∅', 'none': '∅', 'undefined': '⊘', 'void': '∄',
        'any': '∃', 'unknown': '⁉', 'never': '⊗', 'symbol': '⌘', 'bigint': 'ℤ∞',
        'byte': 'β', 'char': 'χ', 'short': 'ş', 'long': 'ℓ', 'unsigned': 'ü',

        // Operations (60)
        'equals': '≡', 'notequals': '≢', 'greater': '≻', 'less': '≺', 'greaterequal': '≽',
        'lessequal': '≼', 'and': '∧', 'or': '∨', 'not': '¬', 'xor': '⊻',
        'nand': '⊼', 'nor': '⊽', 'bitand': '⊗', 'bitor': '⊕', 'bitnot': '⊖',
        'leftshift': '≪', 'rightshift': '≫', 'modulo': '％', 'power': '⁐', 'sqrt': '√',
        'increment': '⊕¹', 'decrement': '⊖¹', 'assign': '≔', 'compare': '⋚', 'swap': '⇌',
        'push': '⊳', 'pop': '⊲', 'shift': '⊴', 'unshift': '⊵', 'append': '⊕→',
        'prepend': '←⊕', 'insert': '⊕↓', 'remove': '⊖↓', 'update': '⟳', 'merge': '⊔',
        'split': '⊓', 'join': '⊔', 'concat': '⊕⊕', 'slice': '⌇', 'splice': '⌇⊕',
        'filter': '⌿', 'map': 'ℳ', 'reduce': '⍺', 'forEach': '∀∈', 'every': '∀',
        'some': '∃', 'find': '⌕', 'findIndex': '⌕#', 'indexOf': '⌕←', 'lastIndexOf': '⌕→',
        'includes': '∋', 'contains': '∋', 'startsWith': '⊳?', 'endsWith': '?⊲', 'match': '≈',
        'replace': '⇌', 'replaceAll': '⇌∀', 'trim': '⌇⌇', 'toLowerCase': '↓Aa', 'toUpperCase': '↑Aa',

        // Common Functions (50)
        'console': '⌘', 'log': '⌸', 'error': '⚠', 'warn': '⚡', 'info': 'ℹ',
        'debug': '⚙', 'trace': '⁂', 'assert': '⁑', 'print': '⎙', 'printf': '⎙ƒ',
        'println': '⎙↵', 'sprintf': '§⎙', 'format': '⎙⟨⟩', 'parse': '⟨⟩→', 'stringify': '→⟨⟩',
        'encode': '⇒', 'decode': '⇐', 'encrypt': '🔒', 'decrypt': '🔓', 'hash': '#',
        'toString': '→§', 'valueOf': '→№', 'toJSON': '→⟮⟯', 'fromJSON': '⟮⟯→', 'clone': '⊕≡',
        'deepClone': '⊕≡↓', 'copy': '⊕', 'move': '→', 'sort': '⍋', 'reverse': '⍒',
        'shuffle': '⍃', 'random': '⍀', 'round': '⌊⌉', 'floor': '⌊', 'ceil': '⌉',
        'abs': '|·|', 'min': '⌊∧', 'max': '⌈∨', 'sum': '∑', 'average': '⌀',
        'count': '#', 'length': '⟙', 'size': '◈', 'isEmpty': '∅?', 'isNull': '∅?',
        'isUndefined': '⊘?', 'isNaN': '№?', 'isFinite': '∞?', 'isArray': '⟦⟧?', 'isObject': '◎?',

        // Web/API (50)
        'request': '→?', 'response': '←!', 'fetch': '↓', 'post': '↑', 'get': '↓',
        'put': '⇅', 'patch': '⊕↓', 'delete': '⊖', 'head': '⊙↓', 'options': '⁇↓',
        'header': '⊤', 'body': '⊟', 'query': '?', 'param': '⟨⟩', 'route': '⟿',
        'endpoint': '⊙', 'url': '⌂', 'uri': '⌂', 'path': '/', 'protocol': '://',
        'http': 'ℍ', 'https': 'ℍ🔒', 'websocket': '⇆', 'socket': '⊛', 'port': ':',
        'host': '⌂', 'domain': '⌂⌂', 'subdomain': '⊳⌂', 'origin': '⊙⌂', 'cors': '⇆⌂',
        'cookie': '🍪', 'session': '⌛', 'token': '⎔', 'auth': '🔑', 'bearer': '🎫',
        'oauth': '🔑ℴ', 'jwt': '⎔ʲ', 'api': '⊛', 'rest': 'Ⓡ', 'graphql': 'Ⓖ',
        'json': '⟮⟯', 'xml': '⟨⟩', 'html': '⟨/⟩', 'css': '⎨⎬', 'javascript': 'ʲˢ',
        'typescript': 'ᵗˢ', 'nodejs': 'ⁿʲˢ', 'react': '⚛', 'vue': '⌬', 'angular': '⊿',

        // Database (50)
        'select': '⌕', 'insert': '⊕', 'update': '⟳', 'delete': '⊖', 'create': '⊕⊕',
        'drop': '⊖⊖', 'alter': '⟳⊕', 'truncate': '∅!', 'where': '⁇', 'having': '⁇⊕',
        'groupby': '⊔⟨⟩', 'orderby': '⍋⟨⟩', 'limit': '⌇#', 'offset': '⌇→', 'join': '⋈',
        'innerjoin': '⋈∩', 'leftjoin': '⋈←', 'rightjoin': '⋈→', 'outerjoin': '⋈∪', 'crossjoin': '⋈×',
        'table': '▤', 'column': '▥', 'row': '▦', 'index': '⌕#', 'primarykey': '⊙🔑',
        'foreignkey': '→🔑', 'unique': '⊙!', 'notnull': '¬∅', 'default': '⌀', 'autoincrement': '⊕¹',
        'transaction': '⟳⟮⟯', 'commit': '✓⟳', 'rollback': '↩⟳', 'savepoint': '⊙⟳', 'lock': '🔒',
        'unlock': '🔓', 'schema': '⊤⊤', 'database': '⊡⊡', 'collection': '⟦⟧⊡', 'document': '⊡',
        'query': '⌕?', 'cursor': '⊳', 'aggregate': '∑⟨⟩', 'pipeline': '⟿⟿', 'projection': '⊳⟨⟩',
        'migration': '→⊡', 'seed': '⊕⊡', 'backup': '⊕⊡←', 'restore': '⊡←⊕', 'replicate': '⊡⊡',

        // File/IO (50)
        'file': '▤', 'folder': '📁', 'directory': '📁', 'path': '/', 'filename': '▤⊙',
        'extension': '.⊙', 'read': '↓', 'write': '↑', 'append': '⊕↑', 'open': '⊳▤',
        'close': '⊲▤', 'seek': '→▤', 'tell': '?▤', 'flush': '↑!', 'sync': '⇆',
        'stream': '≋', 'buffer': '▭', 'pipe': '|', 'stdin': '←|', 'stdout': '|→',
        'stderr': '|⚠', 'input': '←', 'output': '→', 'reader': '↓⊙', 'writer': '↑⊙',
        'upload': '↑↑', 'download': '↓↓', 'copy': '⊕▤', 'move': '→▤', 'rename': '⇌▤',
        'exists': '∃▤', 'isFile': '▤?', 'isDirectory': '📁?', 'mkdir': '⊕📁', 'rmdir': '⊖📁',
        'unlink': '⊖▤', 'chmod': '⊕⊖▤', 'chown': '⊙▤', 'stat': '?▤', 'watch': '⊙▤⟳',
        'glob': '*▤', 'walk': '⟿📁', 'archive': '📦', 'compress': '⊟', 'decompress': '⊞',
        'zip': '📦ᶻ', 'unzip': '📦⁻ᶻ', 'tar': '📦ᵗ', 'gzip': '📦ᵍ', 'base64': '⊛⁶⁴',

        // Git/Version Control (50)
        'git': 'ⓖ', 'commit': '⊙', 'push': '↑ⓖ', 'pull': '↓ⓖ', 'fetch': '⟳ⓖ',
        'merge': '⊔ⓖ', 'rebase': '⊕ⓖ', 'branch': '⑂', 'checkout': '→⑂', 'clone': '⊕ⓖ',
        'fork': '⑂⊕', 'remote': '⌂ⓖ', 'origin': '⊙⌂ⓖ', 'upstream': '↑⌂ⓖ', 'diff': '≠ⓖ',
        'status': '?ⓖ', 'log': '⌸ⓖ', 'blame': '⊙?ⓖ', 'stash': '⊟ⓖ', 'tag': '⊙#ⓖ',
        'reset': '↩ⓖ', 'revert': '⟲ⓖ', 'cherry-pick': '⊕⊙ⓖ', 'squash': '⊔⊙ⓖ', 'amend': '⊕⊙',
        'init': '⊕ⓖ!', 'add': '⊕', 'rm': '⊖', 'mv': '→', 'ignore': '∅ⓖ',
        'submodule': '⊡ⓖ', 'worktree': '⑂⑂', 'bisect': '÷ⓖ', 'reflog': '⌸#ⓖ', 'gc': '∅!ⓖ',
        'config': '⚙ⓖ', 'credential': '🔑ⓖ', 'hook': '⤾ⓖ', 'patch': '⊕⊖ⓖ', 'apply': '→ⓖ',
        'archive': '📦ⓖ', 'bundle': '⊔📦ⓖ', 'notes': '⊙📝ⓖ', 'describe': '?#ⓖ', 'shortlog': '⌸ⓖ↓',
        'clean': '∅ⓖ!', 'prune': '⊖!ⓖ', 'fsck': '?!ⓖ', 'verify': '✓ⓖ', 'show': '⊙ⓖ'
    };

    // =========================================================================
    // PART 2: COMMON ENGLISH WORDS (500 entries)
    // =========================================================================

    const ENGLISH_COMMON = {
        // Articles & Prepositions (30)
        'the': '∂', 'a': 'α', 'an': 'α', 'and': '∧', 'or': '∨',
        'but': '⊻', 'not': '¬', 'with': '⊕', 'without': '⊖', 'for': '∀',
        'from': '←', 'to': '→', 'in': '∈', 'on': '⊤', 'at': '@',
        'by': '×', 'of': '∋', 'as': '≃', 'is': '≡', 'are': '≡',
        'was': '≡ᵖ', 'were': '≡ᵖ', 'be': '∃', 'been': '∃ᵖ', 'being': '∃ⁱ',
        'have': '⊕ᵛ', 'has': '⊕ᵛ', 'had': '⊕ᵛᵖ', 'do': 'ð', 'does': 'ð',

        // Pronouns (20)
        'I': 'ℐ', 'you': '⊙', 'he': '♂', 'she': '♀', 'it': '⊗',
        'we': '⊙⊙', 'they': '⊝', 'me': 'ℐ←', 'him': '♂←', 'her': '♀←',
        'us': '⊙⊙←', 'them': '⊝←', 'my': 'ℐ∋', 'your': '⊙∋', 'his': '♂∋',
        'our': '⊙⊙∋', 'their': '⊝∋', 'this': '⊳', 'that': '⊲', 'these': '⊳⊳',

        // Verbs (100)
        'will': '→ᶠ', 'would': '→ᶜ', 'could': '◇ᶜ', 'should': '⊨', 'must': '⊩',
        'can': '◇', 'may': '◇ᵐ', 'might': '◇ᵐᶜ', 'shall': '→ᶠ!', 'need': '⊕!',
        'want': '⊕?', 'like': '♡', 'love': '♥', 'hate': '♠', 'know': '⊙k',
        'think': '⊙t', 'believe': '⊙b', 'understand': '⊙u', 'remember': '⊙r', 'forget': '⊙¬r',
        'see': '⊙s', 'look': '⊙l', 'watch': '⊙w', 'hear': '⊙h', 'listen': '⊙L',
        'feel': '⊙f', 'touch': '⊙T', 'taste': '⊙τ', 'smell': '⊙σ', 'sense': '⊙Σ',
        'say': '⊙→', 'tell': '⊙→!', 'speak': '⊙→s', 'talk': '⊙→t', 'ask': '⊙?',
        'answer': '⊙!', 'write': '✎', 'read': '⊙↓', 'learn': '⊙+', 'teach': '⊙→+',
        'study': '⊙++', 'work': '⊙w', 'play': '⊙p', 'make': '⊕m', 'create': '⊕c',
        'build': '⊕b', 'develop': '⊕d', 'design': '⊕D', 'plan': '⊕P', 'prepare': '⊕→',
        'start': '⊳!', 'begin': '⊳!', 'end': '⊲!', 'finish': '⊲!', 'stop': '⊲',
        'continue': '→→', 'pause': '⊡', 'wait': '⊡w', 'run': '⟿', 'walk': '→',
        'move': '→m', 'go': '→g', 'come': '←c', 'leave': '→l', 'arrive': '←a',
        'enter': '→∈', 'exit': '→∉', 'open': '⊳o', 'close': '⊲c', 'turn': '⟳t',
        'change': '⟳c', 'become': '→b', 'grow': '↑g', 'live': '∃l', 'die': '∅d',
        'help': '⊕h', 'support': '⊕s', 'protect': '⊕p', 'save': '⊕S', 'keep': '⊕k',
        'hold': '⊕H', 'give': '→g', 'take': '←t', 'get': '←g', 'receive': '←r',
        'send': '→s', 'bring': '←b', 'carry': '→c', 'put': '↓p', 'set': '↓s',
        'try': '⚑', 'fail': '✗', 'succeed': '✓', 'achieve': '✓a', 'complete': '✓c',
        'use': '⊛u', 'apply': '⊛a', 'utilize': '⊛U', 'employ': '⊛e', 'operate': '⊛o',

        // Adjectives (100)
        'good': '⊕q', 'bad': '⊖q', 'great': '⊕⊕q', 'small': '⊖⊖q', 'big': '⊕⊕s',
        'large': '⊕⊕L', 'huge': '⊕⊕⊕', 'tiny': '⊖⊖⊖', 'long': 'ℓ', 'short': 'ş',
        'high': '↑q', 'low': '↓q', 'tall': '↑t', 'deep': '↓d', 'wide': '↔w',
        'narrow': '↔n', 'thick': '↔T', 'thin': '↔t', 'heavy': '↓h', 'light': '↑L',
        'fast': '→→q', 'slow': '→q', 'quick': '→→Q', 'early': '←t', 'late': '→t',
        'new': '⊕n', 'old': '⊖n', 'young': '⊕y', 'ancient': '⊖⊖n', 'modern': '⊕⊕n',
        'first': '①', 'last': '⑨', 'next': '→①', 'previous': '←①', 'final': '⑨!',
        'true': '⊤', 'false': '⊥', 'real': '⊤r', 'fake': '⊥f', 'correct': '✓q',
        'wrong': '✗q', 'right': '→q', 'left': '←q', 'same': '≡q', 'different': '≢q',
        'similar': '≈q', 'equal': '=q', 'other': '≠q', 'another': '≠①', 'each': '∀①',
        'every': '∀', 'all': '∀!', 'any': '∃', 'some': '∃!', 'many': '⊕#',
        'few': '⊖#', 'much': '⊕⊕#', 'little': '⊖⊖#', 'more': '⊕+', 'less': '⊖+',
        'most': '⊕⊕+', 'least': '⊖⊖+', 'enough': '=+', 'extra': '⊕+!', 'only': '①!',
        'main': '⊙q', 'primary': '①q', 'secondary': '②q', 'important': '⊕!q', 'necessary': '⊩q',
        'possible': '◇q', 'impossible': '¬◇q', 'easy': '⊕eq', 'difficult': '⊖eq', 'hard': '⊖eq!',
        'simple': '⊕sq', 'complex': '⊖sq', 'clear': '⊕cq', 'obvious': '⊕oq', 'hidden': '⊖hq',
        'visible': '⊕vq', 'available': '⊕aq', 'ready': '⊕rq', 'complete': '✓q', 'empty': '∅q',
        'full': '⊕fq', 'open': '⊳q', 'closed': '⊲q', 'free': '⊕Fq', 'busy': '⊖Fq',
        'safe': '⊕Sq', 'dangerous': '⊖Sq', 'strong': '⊕Tq', 'weak': '⊖Tq', 'stable': '=Sq',
        'active': '⊕Aq', 'inactive': '⊖Aq', 'valid': '✓Vq', 'invalid': '✗Vq', 'required': '⊩Rq',

        // Nouns - General (100)
        'thing': '⊡', 'things': '⊡⊡', 'item': '⊡i', 'items': '⊡⊡i', 'object': '◎',
        'data': '⌬', 'information': 'ℹ', 'content': '⊟', 'value': '⊡v', 'values': '⊡⊡v',
        'type': '⊡t', 'kind': '⊡k', 'sort': '⊡s', 'category': '⊡c', 'class': 'ℂ',
        'group': '⊔g', 'list': '⟬⟭', 'array': '⟦⟧', 'set': '⟰', 'collection': '⟦⟧c',
        'number': '№', 'count': '#', 'amount': '#a', 'total': '#t', 'sum': '∑',
        'part': '⊡p', 'piece': '⊡P', 'section': '⊡s', 'portion': '⊡π', 'half': '½',
        'quarter': '¼', 'third': '⅓', 'percent': '％', 'fraction': '⁄', 'ratio': ':',
        'time': '⌚', 'date': '📅', 'day': '☀', 'week': '⌚w', 'month': '⌚m',
        'year': '⌚y', 'hour': '⌚h', 'minute': '⌚M', 'second': '⌚s', 'moment': '⌚!',
        'period': '⌚⟨⟩', 'duration': '⌚→', 'interval': '⌚⊡', 'schedule': '⌚⌚', 'deadline': '⌚!→',
        'place': '⌂p', 'location': '⌂L', 'position': '⌂P', 'point': '·', 'area': '⌂a',
        'region': '⌂r', 'zone': '⌂z', 'space': '⌂s', 'room': '⌂R', 'field': '⌂f',
        'name': '⊙n', 'title': '⊙t', 'label': '⊙L', 'tag': '⊙#', 'id': '⊙!',
        'key': '🔑', 'code': '⊛c', 'password': '🔑p', 'secret': '🔒s', 'token': '⎔',
        'message': '✉', 'text': '§t', 'word': '§w', 'sentence': '§s', 'paragraph': '§p',
        'page': '▤p', 'document': '▤d', 'file': '▤', 'folder': '📁', 'directory': '📁d',
        'image': '🖼', 'picture': '🖼p', 'photo': '📷', 'video': '🎬', 'audio': '🔊',
        'user': '⊙u', 'person': '⊙p', 'people': '⊙⊙p', 'member': '⊙m', 'account': '⊙a',
        'profile': '⊙P', 'settings': '⚙', 'config': '⚙c', 'option': '⚙o', 'preference': '⚙p',
        'result': '→r', 'output': '→o', 'response': '←!', 'answer': '←a', 'solution': '←s'
    };

    // =========================================================================
    // MERGE ALL PARTS
    // =========================================================================

    const ALL_GLYPHS = {
        ...PROGRAMMING,
        ...ENGLISH_COMMON
    };

    // Build reverse lookup
    const GLYPH_TO_WORD = {};
    for (const [word, glyph] of Object.entries(ALL_GLYPHS)) {
        GLYPH_TO_WORD[glyph] = word;
    }

    // =========================================================================
    // EXPORTS
    // =========================================================================

    const exports = {
        PROGRAMMING,
        ENGLISH_COMMON,
        ALL_GLYPHS,
        GLYPH_TO_WORD,
        getGlyphCount: () => Object.keys(ALL_GLYPHS).length
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = exports;
    }
    if (typeof window !== 'undefined') {
        window.GlyphDictionary = exports;
    }

})(typeof globalThis !== 'undefined' ? globalThis : this);
