'use strict';

export default function({ PluginsService }) {
  const onError = (reply) => (err) => {
    reply(Boom.wrap(err));
  };

  return {
    findById(request, reply) {
      return PluginsService
        .findById(request.params.pluginId)
        .then(reply).catch(onError(reply));
    }
  };
}
