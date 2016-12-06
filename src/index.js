/**
 * This is a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit. 
 * 
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/mixmasteru/alexa-asz
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetQuote');
    },
    'GetNewQuoteIntent': function () {
        this.emit('GetQuote');
    },
    'GetQuote': function () {
        const quotesArr = this.t('QUOTES');
        const quotesIndex = Math.floor(Math.random() * quotesArr.length);
        const randomQuote = quotesArr[quotesIndex];

        // Create speech output
        const speechOutput = this.t('GET_QUOTE_MESSAGE') + randomQuote;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomQuote);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const languageStrings = {
    'de-DE': {
        translation: {
            QUOTES: [
                "Aber die Sprache um ein Wort ärmer machen heißt das Denken der Nation um einen Begriff ärmer machen.",
                "Alle Befreiung, oder was man gemeinhin Glück nennt, ist eigentlich und wesentlich immer nur negativ und durchaus nie positiv.",
                "Alles im Leben gibt kund, daß das irdische Glück bestimmt ist, vereitelt oder als eine Illusion erkannt zu werden.",
                "Alles Urdenken geschieht in Bildern: darum ist die Phantasie ein so notwendiges Werkzeug desselben, und werden phantasielose Köpfe nie etwas Großes leisten,  es sei denn in der Mathematik.",
                "Aus jeder Seite von David Hume ist mehr zu lernen, als aus Hegels, Herbarts und Schleiermachers sämtlichen philosophischen Werken zusammengenommen.",
                "Bei keiner Sache hat man so sehr den Kern von der Schaale zu unterscheiden, wie beim Christentum.",
                "Das Leben, mit seinen stündlichen, täglichen, wöchentlichen und jährlichen, kleinen, größern und großen Widerwärtigkeiten, mit seinen getäuschten Hoffnungen und seinen alle Berechnung vereitelnden Unfällen, trägt so deutlich das Gepräge von etwas, das uns verleidet werden soll, daß es schwer zu begreifen ist, wie man dies hat verkennen können und sich überreden lassen, es sei da, um dankbar genossen zu werden, und der Mensch, um glücklich zu seyn.",
                "Das Talent gleicht dem Schützen, der ein Ziel trifft, welches die Uebrigen nicht erreichen können; das Genie dem, der eines trifft, bis zu welchem sie nicht ein Mal zu sehn vermögen...",
                "Denn, ich wiederhole es, alle Tugend, die irgendwie eines Lohnes wegen geübt wird, beruht auf klugen, methodischen, weitsehenden Egoismus.",
                "Der heimliche Prosaiker hingegen sucht zum Gedanken den Reim; der Pfuscher zum Reim den Gedanken.",
                "Der Lebenslauf des Menschen besteht darin, dass er, von der Hoffnung genarrt, dem Tod in die Arme tanzt.",
                "Die Welt ist meine Vorstellung.",
                "Die Wahrheit ist keine Hure, die sich Denen an den Hals wirft, welche ihrer nicht begehren: vielmehr ist sie eine so spröde Schöne, daß selbst wer ihr Alles opfert noch nicht ihrer Gunst gewiß seyn darf.",
                "Eine Allegorie ist ein Kunstwerk, welches etwas Anderes bedeutet, als es darstellt.",
                "Eine gefasste Hypothese gibt uns Luchsaugen für alles sie Bestätigende, und macht uns blind für alles ihr Widersprechende.",
                "Er Kant hat aus der Philosophie den Theismus eliminiert, da in ihr, als einer Wissenschaft, und nicht Glaubenslehre, nur Das eine Stelle finden kann, was entweder empirisch gegeben, oder durch haltbare Beweise festgestellt ist.",
                "In jedem Mikrokosmos liegt der ganze Makrokosmos, und dieser enthält nichts mehr als jener.",
                "Man betrachte z.B. den Koran: dieses schlechte Buch war hinreichend, eine Weltreligion zu begründen, das metaphysische Bedürfniß zahlloser Millionen Menschen seit 1200 Jahren zu befriedigen, die Grundlage ihrer Moral und einer bedeutenden Verachtung des Todes zu werden, wie auch, sie zu blutigen Kriegen und den ausgedehntesten Eroberungen zu begeistern. Wir finden in ihm die traurigste und ärmlichste Gestalt des Theismus. Viel mag durch die Uebersetzungen verloren gehen; aber ich habe keinen einzigen werthvollen Gedanken darin entdecken können.",
                "Religionen sind dem Volke notwendig, und sind ihm eine unschätzbare Wohltat. Wenn sie jedoch den Fortschritten der Menschheit in der Erkenntnis der Wahrheit sich entgegenstellen wollen; so müssen sie mit möglichster Schonung bei Seite geschoben werden.",
                "Was dem Herzen widerstrebt, läßt der Kopf nicht ein.",
                "Zur Logik verhält sich die Grammatik wie das Kleid zum Leibe.",
                "Zur Philosophie verhält sich die Poesie, wie die Erfahrung sich zur empirischen Wissenschaft verhält.",
                "Ein unpersönlicher Gott ist gar kein Gott, sondern bloß ein missbrauchtes Wort, ein Unbegriff, eine contradictio in adjecto, ein Schiboleth für Philosophieprofessoren, welche, nachdem sie die Sache haben aufgeben müssen, mit dem Worte durchzuschleichen bemüht sind.",
                "Es gibt keine andere Offenbarung als die Gedanken der Weisen.",
                "Es gibt nur eine Heilkraft, und das ist die Natur; in Salben und Pillen steckt keine. Höchstens können sie der Heilkraft der Natur einen Wink geben, wo etwas für sie zu tun ist.",
                "Der Arzt sieht den Menschen in seiner ganzen Schwäche, der Advokat in seiner ganzen Schlechtigkeit und der Priester in seiner ganzen Dummheit.",
                "Die wohlfeilste Art des Stolzes hingegen ist der Nationalstolz. Denn er verrät in dem damit Behafteten den Mangel an individuellen Eigenschaften, auf die er stolz sein könnte, indem er sonst nicht zu dem greifen würde, was er mit so vielen Millionen teilt. Wer bedeutende persönliche Vorzüge besitzt, wird vielmehr die Fehler seiner eigenen Nation, da er sie beständig vor Augen hat, am deutlichsten erkennen. Aber jeder erbärmliche Tropf, der nichts in der Welt hat, darauf er stolz sein könnte, ergreift das letzte Mittel, auf die Nation, der er gerade angehört, stolz zu sein. Hieran erholt er sich und ist nun dankbarlich bereit, alle Fehler und Torheiten, die ihr eigen sind, mit Händen und Füßen zu verteidigen.",
                "Was nun andererseits die Menschen gesellig macht ist ihre Unfähigkeit, die Einsamkeit, und in dieser sich selbst, zu ertragen.",
                "Dem intellektuell hochstehenden Menschen gewährt nämlich die Einsamkeit einen zweifachen Vortheil: erstlich den, mit sich selber zu seyn, und zweitens den, nicht mit Anderen zu seyn.",
                "Zorn oder Haß in Worten, oder Mienen blicken zu lassen ist unnütz, ist gefährlich, ist unklug, ist lächerlich, ist gemein.",
                "Was aber die Leute gemeiniglich das Schicksal nennen sind meistens nur ihre eigenen dummen Streiche.",
                "Alles wirkliche Dichten und Denken nämlich ist gewissermaaßen ein Versuch, den kleinen Leuten einen großen Kopf aufzusetzen: kein Wunder, daß er nicht gleich gelingt.",
                "Ach, es ist doch ein saures Stück Brod, das Philosophieprofessorenbrod!",
                "Jede menschliche Vollkommenheit ist einem Fehler verwandt, in welchen überzugehen sie droht; jedoch auch umgekehrt, jeder Fehler, einer Vollkommenheit.",
                "Denn die Moral mittels des Theismus stützen, heißt sie auf Egoismus zurückführen; obgleich die Engländer, wie auch bei uns die untersten Klassen der Gesellschaft, gar nicht die Möglichkeit einer anderen Begründung absehen.",
                "Denn bei mir findet, in England, der rothe Rock mehr Glauben, als der schwarze, und Alles, was daselbst zu Gunsten der Kirche, dieser so reichen und bequemen Versorgungsanstalt der mittellosen jüngern Söhne der gesammten Aristokratie gesagt wird ist mir eo ipso verdächtig.",
                "Ein eigenthümlicher Fehler der Deutschen ist, daß sie, was vor ihren Füßen liegt, in den Wolken suchen.",
                "Wird nämlich das Unrecht von Einer Seite herausgeworfen, so schleicht es sich von der andern wieder herein; weil eben die Unrechtlichkeit tief im menschlichen Wesen liegt.",
                "Aber so ein Gott Jehova, der animi causa und de gaieté de coeur diese Welt der Noth und des Jammers hervorbringt und dann noch gar sich selber Beifall klatscht, mit πάντα καλά λίαν,  Das ist nicht zu ertragen.",
                "Alles, was im Christentum Wahres findet, findet sich auch im Brahmanismus und Buddhismus.",
                "Man möchte wahrlich sagen: die Menschen sind die Teufel der Erde, und die Tiere die geplagten Seelen.",
                "Der Grundunterschied der Religionen liegt darin, ob sie Optimismus oder Pessimismus sind; keineswegs darin, ob Monotheismus, Polytheismus, Trimurti, Dreieinigkeit, Pantheismus, oder Atheismus (wie der Buddhismus).",
                "Das Christentum ist eine Allegorie, die einen wahren Gedanken abbildet; aber nicht ist die Allegorie an sich selbst das Wahre.",
                "Entweder glauben oder philosophiren! was man erwählt sei man ganz.",
                "Die Fabel von der Pandora ist mir von jeher nicht klar gewesen, ja, ungereimt und verkehrt vorgekommen.",
                "Unter den Dichtern unserer Zeit ist Göthe der objektivste, Bryon der subjektivste.",
                "Wie schlecht würde es also um das menschliche Wissen stehn, wenn Schrift und Druck nicht wären! Daher sind die Bibliotheken allein das sichere und bleibende Gedächtnis des menschlichen Geschlechts.",
                "Die Barberei kommt wieder, trotz Eisenbahnen, elektrischen Drähten und Luftballons.",
                "Lesen heißt mit einem fremden Kopfe, statt des eigenen, denken.",
                "Unwissenheit degradirt den Menschen erst dann, wann sie in Gesellschaft des Reichthums angetroffen wird.",
                "Die Konsonanten sind das Sklett und die Vokale das Fleisch der Wörter.",
                "Hoffnung ist die Verwechselung des Wunsches einer Begebenheit mit ihrer Wahrscheinlichkeit.",
                "Aller Eigensinn beruht darauf, daß der Wille sich an die Stelle der Erkenntniß gedrängt hat.",
                "Es gibt keine Absurdität, die so handgreiflich wäre, daß man sie nicht allen Menschen fest in den Kopf setzen könnte, wenn man nur schon vor ihrem sechsten Jahre, anfienge, sie ihnen einzuprägen, indem man unablässig und mit feierlichstem Ernst sie ihnen vorsagte.",
                "Aber, im Ganzen genommen, liegt, wie längst gesagt ist, die Welt im Argen: die Wilden fressen einander und die Zahmen betrügen einander, und Das nennet man den Lauf der Welt.",
                "Alle Dinge sind herrlich zu sehn, aber schrecklich zu seyn.",
                "Das Gehirn denkt, wie der Magen verdaut.",
                "Das Schicksal mischt die Karten, und wir spielen.",
                "Die Freunde nennen sich aufrichtig; die Feinde sind es: daher man ihren Tadel zur Selbsterkenntnis benutzen sollte, als eine bittre Arznei",
                "Die Erinnerung wirkt wie das Sammlungsglas in der Camera obscura: Sie zieht alles zusammen und bringt dadurch ein viel schöneres Bild hervor, als sein Original ist.",
                "Die Gegenwart eines Gedankens ist wie die Gegenwart einer Geliebten.",
                "Durch nichts entziehen wir uns so sehr dem Zwange von außen wie durch Selbstzwang.",
                "Für sein Tun und Lassen kann man keinen anderen zum Muster nehmen.",
                "Gerade in Kleinigkeiten, als bei welchen der Mensch sich nicht zusammennimmt, zeigt er seinen Charakter.",
                "Im allgemeinen freilich haben die Weisen aller Zeiten immer dasselbe gesagt, und die Toren, d.h. die unermessliche Majorität aller Zeiten, haben immer dasselbe, nämlich das Gegenteil getan; und so wird es denn auch ferner bleiben.",
                "Ja, es sei herausgesagt: so eng auch Freundschaft, Liebe und Ehe Menschen verbinden; ganz ehrlich meint jeder es am Ende doch nur mit sich selbst und höchstens noch mit seinem Kinde.  Je weniger einer, in Folge objektiver oder subjektiver Bedingungen, nötig hat, mit den Menschen in Berührung zu kommen, desto besser ist er daran.",
                "Jede Nation spottet über die andere, und alle haben Recht.",
                "Jeder steckt in seinem Bewusstsein wie in seiner Haut und lebt unmittelbar nur in demselben.",
                "Meistens belehrt uns erst der Verlust über den Wert der Dinge.",
                "Was nun andrerseits die Menschen gesellig macht, ist ihre Unfähigkeit, die Einsamkeit und in dieser sich selbst zu ertragen.",
                "Zu unserer Besserung bedürfen wir eines Spiegels.",
                "Zum Leitstern seiner Bestrebungen soll man nicht Bilder der Phantasie nehmen, sondern deutlich gedachte Begriffe.",
                "Die Wahrheit kann warten: denn sie hat ein langes Leben vor sich.",
                "Ehrwürdig ist die Wahrheit; nicht was ihr entgegensteht.",
                "Genialität ist Objektivität.",
                "Da ergiebt sich, daß MoralPredigen leicht, MoralBegründen schwer ist.",
                "Die Willensfreiheit bedeutet, genau betrachtet, eine Existentia ohne Essentia, welches heißt, daß etwas sei und dabei doch nichts sei, welches wiederum heißt, nicht sei also ein Widerspruch ist.",
                "Du kannst tun was du willst: aber du kannst, in jedem gegebenen Augenblick deines Lebens, nur ein Bestimmtes wollen und schlechterdings nicht Anderes, als dieses Eine.",
                "Sind einem gegebenen Menschen, unter gegebenen Umständen, zwei Handlungen möglich, oder nur Eine?  Antwort aller Tiefdenkenden: Nur Eine.",
                "Die Ethik ist in Wahrheit die leichteste aller Wissenschaften.",
                "Die vermeinte Rechtlosigkeit der Thiere, der Wahn, daß unser Handeln gegen sie ohne moralische Bedeutung sei, oder, wie es in der Sprache jener Moral heißt, daß es gegen Thiere keine Pflichten gebe, ist geradezu eine empörende Rohheit und Barberei des Occidents, deren Quelle im Judenthum liegt.",
                "Mitleid mit den Thieren hängt mit der Güte des Charakters so genau zusammen, daß man zuversichtlich behaupten darf, wer gegen Thiere grausam ist, könne kein guter Mensch seyn.",
                "Das Leben ist eine mißliche Sache: ich habe mir vorgesetzt, es damit hinzubringen, über dasselbe nachzudenken.",
                "Der leitende Grundsatz der Stilistik sollte sein, dass der Mensch nur einen Gedanken zur Zeit deutlich denken kann; daher ihm nicht zugemutet werden darf, dass er deren mehrere auf einmal denke. Dies aber mutet ihm der zu, welcher solche, als Zwischensätze, in die Lücken einer Hauptperiode schiebt.",
                "Der Stil ist die Physiognomie des Geistes. Sie ist untrüglicher als die des Leibes. Affektation im Stil ist dem Gesichterschneiden zu vergleichen.",
                "Die, welche schwierige, dunkle, verflochtene, zweideutige Reden zusammensetzen, wissen ganz gewiss nicht recht, was sie sagen wollen, sondern haben nur ein dumpfes, nach einem Gedanken erst ringendes Bewusstsein davon; oft aber wollen sie sich selber und anderen verbergen, dass sie eigentlich nichts zu sagen haben.",
                "Die Zeichen des Tierkreises sind das Familienwappen der Menschheit.",
                "Ein Denkmal wird die Nachwelt mir errichten.",
                "Jede menschliche Vollkommenheit ist einem Fehler verwandt, in welchen überzugehn sie droht.",
                "Ihre erbärmliche Angst vor meinen Schriften ist Angst vor der Wahrheit.",
                "Wenn man merkt, daß der Gegner überlegen ist und man Unrecht behalten wird, so werde man persönlich, beleidigend, grob.",
                "Die angeborene Eitelkeit, die besonders hinsichtlich der Verstandeskräfte reizbar ist, will nicht haben, daß was wir zuerst aufgestellt sich als falsch und das des Gegners als Recht ergebe.",
            ],
            SKILL_NAME: 'Arthur Schopenhauer',
            GET_QUOTE_MESSAGE: 'Hier ist dein Zitat von Arthur Schopenhauer: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir ein Zitat von Arthur Schopenhauer“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};
