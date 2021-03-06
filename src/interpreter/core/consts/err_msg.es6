import RuntimeError from './err';

export const DESC = new Map([
    [RuntimeError.KEY_NOT_FOUND, "Attempted to access undefined key $0"],
    [RuntimeError.KEY_IS_RESERVED, "Attempted to access reserved keyword $0"],

    [RuntimeError.NO_OP_BEHAVIOR, "`$0` has no behavior for types `$1` and `$2`"],
    [RuntimeError.NO_UNARY_BEHAVIOR, "`$0` has no behavior for types `$1`"],

    [RuntimeError.UNLINKED_CLASS, "InternalError: Token `$0` has no link."]
    [RuntimeError.ABSTRACT_USED, "InternalError: Attempted to construct an abstract interface"]
]);