/**
 * Glyph Dictionary Extended: Business, Legal, Medical, Scientific
 * 
 * Part 2: Domain-specific vocabularies
 * 
 * @package QuantumCloudSuite
 * @version 7.2.0 - Extended Glyphs Part 2
 */

(function (global) {
    'use strict';

    // =========================================================================
    // BUSINESS & FINANCE (400 entries)
    // =========================================================================

    const BUSINESS = {
        // Core Business (80)
        'company': '⊙c', 'business': '⊙b', 'corporation': '⊙C', 'enterprise': '⊙E', 'organization': '⊙O',
        'startup': '⊕s', 'venture': '⊕v', 'partnership': '⊙⊙', 'merger': '⊔⊙', 'acquisition': '←⊙',
        'revenue': '$↓', 'profit': '$⊕', 'loss': '$⊖', 'income': '$←', 'expense': '$→',
        'cost': '$c', 'price': '$p', 'fee': '$f', 'charge': '$!', 'payment': '$→!',
        'budget': '$⟨⟩', 'forecast': '$→?', 'estimate': '$≈', 'quote': '$"', 'invoice': '$▤',
        'receipt': '$←▤', 'transaction': '$⟳', 'transfer': '$→', 'deposit': '$↓', 'withdrawal': '$↑',
        'balance': '$=', 'credit': '$⊕', 'debit': '$⊖', 'loan': '$←!', 'debt': '$⊖!',
        'interest': '$%', 'rate': '%', 'percentage': '％', 'margin': '%m', 'markup': '%↑',
        'discount': '%↓', 'tax': '$τ', 'vat': '$τv', 'duty': '$τd', 'tariff': '$τt',
        'asset': '$⊕a', 'liability': '$⊖L', 'equity': '$=e', 'capital': '$C', 'investment': '$↓i',
        'portfolio': '$⟦⟧', 'stock': '$s', 'share': '$⊔', 'bond': '$b', 'fund': '$f',
        'dividend': '$⊔→', 'yield': '$%→', 'return': '$←', 'roi': '$←%', 'growth': '$↑g',
        'market': '⊡M', 'industry': '⊡I', 'sector': '⊡S', 'segment': '⊡s', 'niche': '⊡n',
        'customer': '⊙c', 'client': '⊙C', 'consumer': '⊙←', 'buyer': '⊙←b', 'seller': '⊙→s',
        'vendor': '⊙→v', 'supplier': '⊙→S', 'distributor': '⊙→D', 'retailer': '⊙→R', 'wholesaler': '⊙→W',
        'partner': '⊙⊕', 'stakeholder': '⊙⊡', 'shareholder': '⊙$⊔', 'investor': '⊙$↓', 'board': '⊙⊙B',

        // Management (60)
        'management': '⊙M', 'executive': '⊙E', 'director': '⊙D', 'manager': '⊙m', 'supervisor': '⊙s',
        'leader': '⊙L', 'ceo': '⊙E!', 'cto': '⊙T!', 'cfo': '⊙F!', 'coo': '⊙O!',
        'president': '⊙P!', 'chairman': '⊙C!', 'founder': '⊙⊕!', 'cofounder': '⊙⊕⊙', 'owner': '⊙∋',
        'employee': '⊙e', 'staff': '⊙⊙e', 'team': '⊙⊙t', 'department': '⊙⊡d', 'division': '⊙⊡D',
        'branch': '⊙⑂', 'office': '⊙▤', 'headquarters': '⊙⌂!', 'subsidiary': '⊙⊂', 'franchise': '⊙⑂f',
        'strategy': '⊙→S', 'planning': '⊙→P', 'execution': '⊙→E', 'operation': '⊙⟳', 'process': '⊙→p',
        'procedure': '⊙→π', 'policy': '⊙→!', 'guideline': '⊙→g', 'standard': '⊙=', 'benchmark': '⊙=b',
        'metric': '⊙#', 'kpi': '⊙#!', 'objective': '⊙→o', 'goal': '⊙→g', 'target': '⊙→t',
        'milestone': '⊙⊡m', 'deadline': '⊙→!t', 'schedule': '⊙⌚', 'timeline': '⊙⌚→', 'roadmap': '⊙⌚⟿',
        'project': '⊡P', 'program': '⊡π', 'initiative': '⊡i', 'campaign': '⊡c', 'launch': '⊕!→',
        'meeting': '⊙⊙⌚', 'conference': '⊙⊙⊙', 'presentation': '⊙→⎙', 'proposal': '⊙→?', 'report': '⊙→▤',
        'analysis': '⊙⌕', 'research': '⊙⌕R', 'study': '⊙⌕S', 'survey': '⊙⌕?', 'review': '⊙⌕r',

        // Marketing & Sales (60)
        'marketing': '⊙→M', 'advertising': '⊙→A', 'promotion': '⊙→P', 'campaign': '⊙→c', 'brand': '⊙→b',
        'logo': '⊙→L', 'slogan': '⊙→s', 'tagline': '⊙→t', 'message': '⊙→m', 'content': '⊙→⊟',
        'media': '⊡M', 'channel': '⊡c', 'platform': '⊡p', 'social': '⊙⊙s', 'digital': '⊡d',
        'online': '⌂o', 'offline': '⌂¬o', 'website': '⌂w', 'landing': '⌂L', 'funnel': '⌂→',
        'lead': '⊙←L', 'prospect': '⊙←P', 'opportunity': '⊙←O', 'conversion': '⊙←→', 'retention': '⊙←K',
        'acquisition': '⊙←A', 'engagement': '⊙←E', 'loyalty': '⊙←♥', 'satisfaction': '⊙←✓', 'feedback': '⊙←?',
        'sales': '$→', 'revenue': '$↓', 'pipeline': '$→⟿', 'quota': '$→#', 'commission': '$→%',
        'deal': '$⊔', 'contract': '$▤!', 'agreement': '$▤=', 'terms': '$▤t', 'conditions': '$▤c',
        'offer': '$→o', 'bid': '$→b', 'proposal': '$→P', 'negotiation': '$⇌', 'closing': '$→!',
        'order': '$→O', 'purchase': '$←P', 'subscription': '$→⟳', 'renewal': '$→⟳!', 'upgrade': '$→↑',
        'upsell': '$→⊕', 'crosssell': '$→×', 'bundle': '$→⊔', 'package': '$→📦', 'tier': '$→#t',
        'demo': '⊙→D', 'trial': '⊙→T', 'pilot': '⊙→P!', 'beta': '⊙→β', 'launch': '⊙→!→',

        // HR & Legal (100) 
        'employee': '⊙e', 'employer': '⊙E', 'candidate': '⊙?c', 'applicant': '⊙?a', 'hire': '⊙⊕',
        'recruit': '⊙⊕R', 'onboard': '⊙⊕→', 'train': '⊙⊕T', 'develop': '⊙⊕D', 'promote': '⊙↑',
        'transfer': '⊙→', 'relocate': '⊙→L', 'terminate': '⊙⊖', 'resign': '⊙⊖r', 'retire': '⊙⊖R',
        'layoff': '⊙⊖L', 'severance': '⊙⊖$', 'compensation': '⊙$', 'salary': '⊙$s', 'wage': '⊙$w',
        'bonus': '⊙$⊕', 'benefit': '⊙$b', 'insurance': '⊙$i', 'pension': '⊙$p', 'equity': '⊙$e',
        'vacation': '⊙⌚v', 'leave': '⊙⌚L', 'sick': '⊙⌚s', 'maternity': '⊙⌚m', 'paternity': '⊙⌚p',
        'performance': '⊙#P', 'review': '⊙#R', 'evaluation': '⊙#E', 'feedback': '⊙#F', 'rating': '⊙#★',
        'contract': '▤!', 'agreement': '▤=', 'clause': '▤c', 'term': '▤t', 'provision': '▤p',
        'liability': '▤L', 'indemnity': '▤I', 'warranty': '▤W', 'guarantee': '▤G', 'disclaimer': '▤D',
        'intellectual': '▤IP', 'property': '▤P', 'patent': '▤Pa', 'trademark': '▤™', 'copyright': '▤©',
        'license': '▤Li', 'royalty': '▤R', 'confidential': '▤🔒', 'nda': '▤🔒n', 'noncompete': '▤🔒c',
        'compliance': '▤✓', 'regulation': '▤r', 'law': '▤L!', 'statute': '▤s', 'ordinance': '▤o',
        'jurisdiction': '▤J', 'court': '▤C', 'litigation': '▤Li', 'arbitration': '▤Ar', 'mediation': '▤Me',
        'plaintiff': '▤→', 'defendant': '▤←', 'attorney': '▤A', 'lawyer': '▤La', 'counsel': '▤Co',
        'judge': '▤J!', 'verdict': '▤V', 'ruling': '▤R!', 'settlement': '▤S', 'damages': '▤D$',
        'penalty': '▤P!', 'fine': '▤F', 'sanction': '▤Sa', 'injunction': '▤In', 'subpoena': '▤Su',
        'evidence': '▤E', 'testimony': '▤T', 'witness': '▤W!', 'deposition': '▤De', 'discovery': '▤Di',
        'motion': '▤Mo', 'brief': '▤Br', 'filing': '▤Fi', 'appeal': '▤Ap', 'precedent': '▤Pr',
        'rights': '▤R', 'obligation': '▤O', 'duty': '▤Du', 'breach': '▤B!', 'default': '▤D!'
    };

    // =========================================================================
    // MEDICAL & HEALTH (300 entries)
    // =========================================================================

    const MEDICAL = {
        // General Medical (80)
        'patient': '⊙P', 'doctor': '⊙D', 'physician': '⊙Ph', 'nurse': '⊙N', 'surgeon': '⊙S',
        'specialist': '⊙Sp', 'therapist': '⊙Th', 'pharmacist': '⊙Rx', 'dentist': '⊙De', 'psychologist': '⊙ψ',
        'hospital': '⌂H', 'clinic': '⌂C', 'emergency': '⌂E!', 'ward': '⌂W', 'icu': '⌂I!',
        'surgery': '⌂S', 'pharmacy': '⌂Rx', 'laboratory': '⌂L', 'radiology': '⌂R', 'pathology': '⌂Pa',
        'diagnosis': '⌕D', 'prognosis': '⌕P', 'symptom': '⌕s', 'condition': '⌕c', 'disease': '⌕d',
        'illness': '⌕i', 'disorder': '⌕o', 'syndrome': '⌕S', 'injury': '⌕I', 'infection': '⌕In',
        'inflammation': '⌕If', 'pain': '⌕P!', 'fever': '⌕F', 'nausea': '⌕N', 'fatigue': '⌕Fa',
        'treatment': '→T', 'therapy': '→Th', 'medication': '→Rx', 'procedure': '→Pr', 'operation': '→Op',
        'prescription': '▤Rx', 'dosage': '▤D', 'frequency': '▤F', 'duration': '▤⌚', 'contraindication': '▤⊖',
        'sideeffect': '▤Se', 'interaction': '▤In', 'allergy': '▤Al', 'reaction': '▤Re', 'tolerance': '▤To',
        'vital': '⊡V', 'pulse': '⊡P', 'pressure': '⊡Pr', 'temperature': '⊡T', 'respiration': '⊡R',
        'heart': '♥', 'lung': '⊡Lu', 'brain': '⊡Br', 'liver': '⊡Li', 'kidney': '⊡Ki',
        'blood': '⊡Bl', 'bone': '⊡Bo', 'muscle': '⊡Mu', 'nerve': '⊡Ne', 'tissue': '⊡Ti',
        'cell': '⊡Ce', 'organ': '⊡Or', 'system': '⊡Sy', 'body': '⊡Bo', 'immune': '⊡Im',
        'chronic': '⊡Chr', 'acute': '⊡Ac', 'benign': '⊡Be', 'malignant': '⊡Ma', 'terminal': '⊡Te',
        'stable': '⊡St', 'critical': '⊡Cr', 'improving': '⊡↑', 'declining': '⊡↓', 'remission': '⊡Re'
    };

    // =========================================================================
    // SCIENTIFIC & TECHNICAL (300 entries)
    // =========================================================================

    const SCIENTIFIC = {
        // Physics & Math (100)
        'equation': '=E', 'formula': '=F', 'theorem': '=T', 'proof': '=P', 'axiom': '=A',
        'hypothesis': '?H', 'theory': '⊡T', 'law': '⊡L', 'principle': '⊡P', 'constant': '⊡C',
        'variable': '⊡V', 'coefficient': '⊡c', 'exponent': '⊡e', 'logarithm': '⊡log', 'integral': '∫',
        'derivative': '∂', 'differential': 'd', 'limit': '→∞', 'infinity': '∞', 'zero': '0',
        'positive': '⊕', 'negative': '⊖', 'absolute': '|·|', 'relative': '≈', 'approximate': '≃',
        'dimension': '⊡D', 'coordinate': '⊡xy', 'vector': '→v', 'scalar': '·s', 'matrix': '⊞',
        'tensor': '⊠', 'field': '⊡F', 'wave': '∿', 'frequency': 'ƒ', 'amplitude': 'A',
        'wavelength': 'λ', 'period': 'T', 'phase': 'φ', 'spectrum': '⊡Sp', 'resonance': '⊡Re',
        'energy': 'E', 'power': 'P', 'force': 'F', 'mass': 'm', 'velocity': 'v',
        'acceleration': 'a', 'momentum': 'p', 'gravity': 'g', 'friction': 'μ', 'pressure': 'Pa',
        'temperature': 'T°', 'heat': 'Q', 'entropy': 'S', 'enthalpy': 'H', 'conductivity': 'κ',
        'resistance': 'R', 'capacitance': 'C', 'inductance': 'L', 'voltage': 'V', 'current': 'I',
        'magnetic': 'B', 'electric': 'E', 'charge': 'q', 'photon': 'γ', 'electron': 'e⁻',
        'proton': 'p⁺', 'neutron': 'n⁰', 'atom': '⊙a', 'molecule': '⊙m', 'particle': '⊙p',
        'quantum': 'ℏ', 'wave': 'ψ', 'spin': '↻', 'orbit': '○', 'nucleus': '⊙n',

        // Chemistry (50)
        'element': '⊙E', 'compound': '⊙C', 'mixture': '⊙M', 'solution': '⊙S', 'reaction': '→R',
        'catalyst': '→c', 'oxidation': '→O', 'reduction': '→R', 'synthesis': '→S', 'decomposition': '→D',
        'bond': '⊙—', 'ionic': '⊙±', 'covalent': '⊙≡', 'hydrogen': 'H', 'oxygen': 'O',
        'carbon': 'C', 'nitrogen': 'N', 'sulfur': 'S', 'phosphorus': 'P', 'chlorine': 'Cl',
        'acid': 'HA', 'base': 'BOH', 'ph': 'pH', 'molar': 'M', 'concentration': '[·]',
        'precipitate': '↓p', 'dissolve': '↓d', 'crystallize': '⬡', 'evaporate': '↑e', 'condense': '↓c',

        // Biology (50)
        'cell': '⊙c', 'dna': '⧧', 'rna': '⧦', 'gene': '⧧g', 'chromosome': '⧧c',
        'protein': '⊡P', 'enzyme': '⊡E', 'amino': '⊡A', 'lipid': '⊡L', 'carbohydrate': '⊡C',
        'metabolism': '⟳M', 'respiration': '⟳R', 'photosynthesis': '⟳P', 'mitosis': '⟳m', 'meiosis': '⟳M',
        'mutation': '⧧!', 'evolution': '→E', 'species': '⊙s', 'genus': '⊙g', 'family': '⊙f',
        'organism': '⊙o', 'bacteria': '⊙b', 'virus': '⊙v', 'fungus': '⊙f', 'plant': '⊙p',
        'animal': '⊙a', 'ecosystem': '⊡E', 'habitat': '⊡H', 'population': '⊡P', 'community': '⊡C'
    };

    // =========================================================================
    // MERGE WITH EXISTING
    // =========================================================================

    // Get existing dictionary if available
    const existing = (typeof window !== 'undefined' && window.GlyphDictionary)
        ? window.GlyphDictionary.ALL_GLYPHS
        : {};

    const EXTENDED_GLYPHS = {
        ...existing,
        ...BUSINESS,
        ...MEDICAL,
        ...SCIENTIFIC
    };

    // Build reverse lookup
    const EXTENDED_GLYPH_TO_WORD = {};
    for (const [word, glyph] of Object.entries(EXTENDED_GLYPHS)) {
        EXTENDED_GLYPH_TO_WORD[glyph] = word;
    }

    // =========================================================================
    // EXPORTS
    // =========================================================================

    const exports = {
        BUSINESS,
        MEDICAL,
        SCIENTIFIC,
        EXTENDED_GLYPHS,
        EXTENDED_GLYPH_TO_WORD,
        getGlyphCount: () => Object.keys(EXTENDED_GLYPHS).length
    };

    // Merge into existing GlyphDictionary
    if (typeof window !== 'undefined') {
        if (window.GlyphDictionary) {
            Object.assign(window.GlyphDictionary.ALL_GLYPHS, EXTENDED_GLYPHS);
            Object.assign(window.GlyphDictionary.GLYPH_TO_WORD, EXTENDED_GLYPH_TO_WORD);
            window.GlyphDictionary.BUSINESS = BUSINESS;
            window.GlyphDictionary.MEDICAL = MEDICAL;
            window.GlyphDictionary.SCIENTIFIC = SCIENTIFIC;
            window.GlyphDictionary.getGlyphCount = exports.getGlyphCount;
        } else {
            window.GlyphDictionaryExtended = exports;
        }
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = exports;
    }

})(typeof globalThis !== 'undefined' ? globalThis : this);
