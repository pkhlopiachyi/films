const duplicationCheck = stars => {
    const actors = stars.split(', ');

    return actors.filter((actor, index) => actors.indexOf(actor) === index).join(', ');
}

module.exports.duplicationCheck = duplicationCheck;