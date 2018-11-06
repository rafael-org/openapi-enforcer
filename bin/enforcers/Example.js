/**
 *  @license
 *    Copyright 2018 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';
const EnforcerRef  = require('../enforcer-ref');

module.exports = {
    init: function (data) {

    },

    prototype: {},

    validator: function (data) {
        return {
            type: 'object',
            properties: {
                summary: { type: 'string' },
                description: { type: 'string' },
                value: { allowed: true },
                externalValue: { type: 'string' }
            },
            errors: ({ exception, definition }) => {
                if (definition.hasOwnProperty('value') && definition.hasOwnProperty('externalValue')) {
                    exception('Cannot have both "externalValue" and "value" properties');
                }
            }
        }
    }
};
